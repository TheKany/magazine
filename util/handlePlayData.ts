type Team = 'A' | 'B' | 'C';

type MatchInput = {
  team1: Team;
  team2: Team;
  score1: number[];
  score2: number[];
};

type TeamStats = {
  team: Team;
  win: number;
  draw: number;
  loss: number;
  points: number;
  goalFor: number;
  goalAgainst: number;
  quarterPoints: number[];
};

export function evaluateMatches(matches: MatchInput[]) {
  const teams: Record<Team, TeamStats> = {
    A: { team: 'A', win: 0, draw: 0, loss: 0, points: 0, goalFor: 0, goalAgainst: 0, quarterPoints: [0, 0, 0, 0] },
    B: { team: 'B', win: 0, draw: 0, loss: 0, points: 0, goalFor: 0, goalAgainst: 0, quarterPoints: [0, 0, 0, 0] },
    C: { team: 'C', win: 0, draw: 0, loss: 0, points: 0, goalFor: 0, goalAgainst: 0, quarterPoints: [0, 0, 0, 0] },
  };

  for (const { team1, team2, score1, score2 } of matches) {
    // 누적 점수 → 쿼터 점수 변환
    const qScore1 = [score1[0], score1[1] - score1[0], score1[2] - score1[1], score1[3] - score1[2]];
    const qScore2 = [score2[0], score2[1] - score2[0], score2[2] - score2[1], score2[3] - score2[2]];

    for (let i = 0; i < 4; i++) {
      teams[team1].quarterPoints[i] += qScore1[i];
      teams[team2].quarterPoints[i] += qScore2[i];
    }

    const final1 = score1[3];
    const final2 = score2[3];

    teams[team1].goalFor += final1;
    teams[team1].goalAgainst += final2;
    teams[team2].goalFor += final2;
    teams[team2].goalAgainst += final1;

    if (final1 > final2) {
      teams[team1].win++;
      teams[team2].loss++;
      teams[team1].points += 3;
    } else if (final1 < final2) {
      teams[team2].win++;
      teams[team1].loss++;
      teams[team2].points += 3;
    } else {
      teams[team1].draw++;
      teams[team2].draw++;
      teams[team1].points += 1;
      teams[team2].points += 1;
    }
  }

  // 순위 정렬
  const ranking = Object.values(teams).sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    const diffA = a.goalFor - a.goalAgainst;
    const diffB = b.goalFor - b.goalAgainst;
    return diffB - diffA;
  });

  return {
    teamStats: Object.values(teams),
    ranking: ranking.map((team, idx) => ({
      rank: idx + 1,
      team: team.team,
      points: team.points,
    })),
  };
}
