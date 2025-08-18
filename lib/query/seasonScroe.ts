import { supabase } from "../supabase";

export const seasonGameScore = async ({ season }: { season: number }) => {
  const { data, error } = await supabase
    .from("season_gamescore")
    .select("*")
    .eq("season_id", season)
    .order("game_date", { ascending: true });
  if (error) throw new Error(error.message);

  return data;
};

type TeamScore = {
  name: string;
  color: string;
  win: number;
  draw: number;
  lose: number;
  points: number;
};

type ScoreRow = {
  team1_name: string;
  team1_total: number;
  team1_iswinner: boolean;
  team2_name: string;
  team2_total: number;
  team2_iswinner: boolean;
};

type TeamRow = { name: string; color: string };

export const seasonTeamScore = async ({
  season,
}: {
  season: number;
}): Promise<TeamScore[]> => {
  const [{ data: scores, error: e1 }, { data: teams, error: e2 }] =
    await Promise.all([
      supabase
        .from("season_gamescore")
        .select(
          "team1_name,team1_total,team1_iswinner,team2_name,team2_total,team2_iswinner"
        )
        .eq("season_id", season),
      supabase
        .from("season_teams")
        .select("name,color")
        .eq("season_id", season),
    ]);

  if (e1) throw e1;
  if (e2) throw e2;

  const scoreRows: ScoreRow[] = scores ?? [];
  const teamRows: TeamRow[] = teams ?? [];

  // 팀별 집계 테이블 초기화
  const table: Record<string, TeamScore> = {};
  for (const t of teamRows) {
    table[t.name] = {
      name: t.name,
      color: t.color,
      win: 0,
      draw: 0,
      lose: 0,
      points: 0,
    };
  }

  // 머리맞대기(상대전) 득점 기록: h2hScored[A][B] = A가 B 상대로 넣은 득점 합
  const h2hScored: Record<string, Record<string, number>> = {};
  // 전체 득점(타이 최종 보조 지표로 사용 가능)
  const totalScored: Record<string, number> = {};

  const ensureMaps = (name: string) => {
    if (!h2hScored[name]) h2hScored[name] = {};
    if (totalScored[name] == null) totalScored[name] = 0;
  };

  // 경기 반영
  for (const g of scoreRows) {
    const t1 = table[g.team1_name];
    const t2 = table[g.team2_name];
    if (!t1 || !t2) continue;

    ensureMaps(g.team1_name);
    ensureMaps(g.team2_name);

    // h2h / total 득점 누적
    h2hScored[g.team1_name][g.team2_name] =
      (h2hScored[g.team1_name][g.team2_name] ?? 0) + g.team1_total;
    h2hScored[g.team2_name][g.team1_name] =
      (h2hScored[g.team2_name][g.team1_name] ?? 0) + g.team2_total;

    totalScored[g.team1_name] += g.team1_total;
    totalScored[g.team2_name] += g.team2_total;

    // 승/무/패 판정
    // 1) iswinner 플래그가 상충 없이 존재하면 그것을 우선 적용
    // 2) 아니면 스코어로 판정
    const t1Win = g.team1_iswinner && !g.team2_iswinner;
    const t2Win = g.team2_iswinner && !g.team1_iswinner;

    if (t1Win) {
      t1.win += 1;
      t1.points += 3;
      t2.lose += 1;
      continue;
    }
    if (t2Win) {
      t2.win += 1;
      t2.points += 3;
      t1.lose += 1;
      continue;
    }

    if (g.team1_total === g.team2_total) {
      // 동시 true/동시 false/둘다 없음 → 무승부 처리
      t1.draw += 1;
      t2.draw += 1;
      t1.points += 1;
      t2.points += 1;
    } else if (g.team1_total > g.team2_total) {
      t1.win += 1;
      t1.points += 3;
      t2.lose += 1;
    } else {
      t2.win += 1;
      t2.points += 3;
      t1.lose += 1;
    }
  }

  // 포인트별 그룹화 → 그룹 내에서는 맞대결 총득점으로 재정렬
  const byPoints = new Map<number, TeamScore[]>();
  for (const row of Object.values(table)) {
    if (!byPoints.has(row.points)) byPoints.set(row.points, []);
    byPoints.get(row.points)!.push(row);
  }

  // 포인트 키 내림차순으로 정렬
  const sortedPointKeys = Array.from(byPoints.keys()).sort((a, b) => b - a);

  const result: TeamScore[] = [];
  for (const pts of sortedPointKeys) {
    const group = byPoints.get(pts)!;

    if (group.length === 1) {
      result.push(group[0]);
      continue;
    }

    // 동률 그룹의 팀 이름 집합
    const namesInGroup = new Set(group.map((g) => g.name));

    // 그룹 내 팀별 "맞대결 총득점" 계산
    const headToHeadSum: Record<string, number> = {};
    for (const name of namesInGroup) {
      const vs = h2hScored[name] ?? {};
      let sum = 0;
      for (const opp of namesInGroup) {
        if (opp === name) continue;
        sum += vs[opp] ?? 0;
      }
      headToHeadSum[name] = sum;
    }

    // 그룹 내 정렬:
    // 1) 맞대결 총득점 desc
    // 2) 그래도 동률이면 전체 득점 desc (보조 지표)
    // 3) 최종 타이브레이커: 이름 asc (안정성)
    group.sort((a, b) => {
      const h2hDiff =
        (headToHeadSum[b.name] ?? 0) - (headToHeadSum[a.name] ?? 0);
      if (h2hDiff !== 0) return h2hDiff;

      const totalDiff = (totalScored[b.name] ?? 0) - (totalScored[a.name] ?? 0);
      if (totalDiff !== 0) return totalDiff;

      return a.name.localeCompare(b.name, "ko");
    });

    result.push(...group);
  }

  return result;
};
