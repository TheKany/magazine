import { seasonTeamScore } from "@/lib/query/seasonScroe";
import { useEffect, useState } from "react";
import styled from "styled-components";

type TeamData = {
  name: string;
  win: number;
  draw: number;
  lose: number;
  color: string;
};

// 승: 3점 | 무: 1점 | 패: 0점
const TotalRank = ({ season }: { season: number }) => {
  // const [teams, setTeams] = useState([
  //   { color: "white", name: "리바운드", win: 2, draw: 0, lose: 8 },
  //   { color: "black", name: "청용열차", win: 8, draw: 0, lose: 2 },
  //   { color: "purple", name: "常勝(상승)", win: 5, draw: 0, lose: 5 },
  // ]);

  const [teams, setTeams] = useState<TeamData[]>([]);
  const [sorted, setSorted] = useState(false);
  const onLoadData = async (season: number) => {
    const resData = await seasonTeamScore({ season });

    console.log(resData);

    const sortedTeams = resData.sort(
      (a, b) => getScore(b.win, b.draw) - getScore(a.win, a.draw)
    );
    setTeams(sortedTeams);
    setSorted(true);
  };

  const getScore = (win: number, draw: number) => win * 3 + draw;

  useEffect(() => {
    onLoadData(season);
  }, [season]);

  return (
    <Table>
      <GridTable>
        <p>순위</p>
        <p>팀명</p>
        <p>승</p>
        <p>무</p>
        <p>패</p>
        <p>승점</p>
      </GridTable>
      <InfoTable>
        {teams.map((team, index) => (
          <AnimatedRow key={team.name} className={`team-${team.color}`}>
            <p>{sorted ? `${index + 1}위` : "-위"}</p>
            <p>{team.name}</p>
            <p>{sorted ? team.win : "-"}</p>
            <p>{sorted ? team.draw : "-"}</p>
            <p>{sorted ? team.lose : "-"}</p>
            <p>{sorted ? getScore(team.win, team.draw) : "-"}</p>
          </AnimatedRow>
        ))}
      </InfoTable>
      <InfoText>*팀의 퍼스트컬러입니다. 유니폼 색과 무관합니다.</InfoText>
    </Table>
  );
};

export default TotalRank;

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const GridTable = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  text-align: center;
  padding: 8px 0;
  margin: 4px 0;

  & p {
    font-size: 16px;
  }

  /* 순위 */
  & :nth-child(1) {
  }

  /* 팀명 */
  & :nth-child(2) {
    font-weight: 700;
    grid-column: span 3;
  }

  /* 화이트팀 */
  &.team-white {
    background-color: #fff;
    color: #121212;
  }

  /* 블랙팀 */
  &.team-black {
    background-color: #121212;
    color: #fff;
  }

  /* 퍼플팀 */
  &.team-purple {
    background-color: #371f4a;
    color: #fff;
  }
`;
const AnimatedRow = styled(GridTable)`
  transition: all 1s ease;
`;

const InfoText = styled.p`
  text-align: end;
  font-size: 12px;
  color: #464646;
`;
