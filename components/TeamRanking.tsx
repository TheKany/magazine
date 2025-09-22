"use client";

import { seasonTeam } from "@/lib/query/seasonTeam";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

type TeamType = {
  id: number;
  season_id: number;
  color: "black" | "purplr" | "white";
  name: string;
  win: number;
  draw: number;
  lose: number;
};

const TeamRanking = () => {
  const [teams, setTeams] = useState<TeamType[]>([]);
  const [sorted, setSorted] = useState(false);

  const getScore = (win: number, draw: number) => win * 3 + draw;

  const onLoadData = async () => {
    const resData = await seasonTeam();
    setTeams(resData);
  };

  console.log("teams", teams);

  useEffect(() => {
    const timer = setTimeout(() => {
      const sortedTeams = [...teams].sort(
        (a, b) => getScore(b.win, b.draw) - getScore(a.win, a.draw)
      );
      setTeams(sortedTeams);
      setSorted(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [teams]);

  useEffect(() => {
    onLoadData();
  }, []);

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

export default TeamRanking;

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
    background-color: #492a8d;
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
