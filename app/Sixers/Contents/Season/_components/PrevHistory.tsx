import Image from "next/image";
import React from "react";
import styled from "styled-components";

type TeamData = {
  name: string;
  logo: string;
  total: number;
  quarters: number[];
  isWinner: boolean;
};

const matchList: {
  date: string;
  history: { team1: TeamData; team2: TeamData }[];
}[] = [
  {
    date: "04.19",
    history: [
      {
        team1: {
          name: "리바운드",
          logo: "/img/reba.png",
          total: 30,
          quarters: [15, 5, 6, 4],
          isWinner: false,
        },
        team2: {
          name: "청용열차",
          logo: "/img/dragon.png",
          total: 41,
          quarters: [7, 14, 9, 11],
          isWinner: true,
        },
      },
      {
        team1: {
          name: "상승",
          logo: "/img/up.png",
          total: 38,
          quarters: [4, 8, 14, 12],
          isWinner: false,
        },
        team2: {
          name: "리바운드",
          logo: "/img/reba.png",
          total: 43,
          quarters: [7, 17, 8, 11],
          isWinner: true,
        },
      },
      {
        team1: {
          name: "청용열차",
          logo: "/img/dragon.png",
          total: 39,
          quarters: [14, 8, 14, 3],
          isWinner: true,
        },
        team2: {
          name: "상승",
          logo: "/img/up.png",
          total: 27,
          quarters: [2, 9, 9, 7],
          isWinner: false,
        },
      },
    ],
  },
  {
    date: "04.12",
    history: [
      {
        team1: {
          name: "상승",
          logo: "/img/up.png",
          total: 40,
          quarters: [9, 12, 10, 9],
          isWinner: false,
        },
        team2: {
          name: "리바운드",
          logo: "/img/reba.png",
          total: 54,
          quarters: [12, 16, 20, 6],
          isWinner: true,
        },
      },
      {
        team1: {
          name: "리바운드",
          logo: "/img/reba.png",
          total: 34,
          quarters: [15, 4, 6, 9],
          isWinner: false,
        },
        team2: {
          name: "청용열차",
          logo: "/img/dragon.png",
          total: 45,
          quarters: [13, 8, 14, 10],
          isWinner: true,
        },
      },
      {
        team1: {
          name: "청용열차",
          logo: "/img/dragon.png",
          total: 38,
          quarters: [11, 4, 8, 15],
          isWinner: false,
        },
        team2: {
          name: "상승",
          logo: "/img/up.png",
          total: 50,
          quarters: [10, 9, 10, 21],
          isWinner: true,
        },
      },
    ],
  },
];

const PrevHistory = () => {
  return (
    <PrevHistoryBox>
      <PreviousTitle>지난 기록</PreviousTitle>

      {matchList.map(({ date, history }, i) => (
        <div key={i}>
          <DateText>{date}</DateText>
          {history.map(({ team1, team2 }, j) => (
            <Table key={j}>
              {[team1, team2].map((team, idx) => (
                <Team key={idx}>
                  <ImageBox $width="25px" $height="25px">
                    <Image
                      src={team.logo}
                      alt={`${team.name} 팀로고`}
                      fill
                      unoptimized
                    />
                  </ImageBox>

                  <TeamName $winner={team.isWinner}>{team.name}</TeamName>

                  <ScoreBoard>
                    <TScore $winner={team.isWinner}>{team.total}</TScore>
                    {team.quarters.map((q, k) => (
                      <QScore key={k}>{q}</QScore>
                    ))}
                  </ScoreBoard>

                  {team.isWinner && (
                    <ImageBox $width="50px" $height="15px">
                      <Image
                        src="/img/winner.png"
                        alt="승리팀"
                        fill
                        unoptimized
                      />
                    </ImageBox>
                  )}
                </Team>
              ))}
            </Table>
          ))}
        </div>
      ))}
    </PrevHistoryBox>
  );
};

export default PrevHistory;

const DateText = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-top: 24px;
  text-decoration: underline;
`;

const PrevHistoryBox = styled.div`
  margin-bottom: 40px;
`;

const PreviousTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 24px 0;
`;

const Team = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ImageBox = styled.div<{ $width: string; $height: string }>`
  position: relative;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  overflow: hidden;
`;

const TeamName = styled.p<{ $winner: boolean }>`
  width: 100px;
  text-align: center;
  font-weight: ${({ $winner }) => ($winner ? 700 : 400)};
  font-size: ${({ $winner }) => ($winner ? "18px" : "15px")};
  color: ${({ $winner }) => ($winner ? "#121212" : "#525252")};
`;

const ScoreBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  width: 130px;
  gap: 8px;
`;

const TScore = styled.p<{ $winner: boolean }>`
  font-weight: 700;
  font-size: 18px;
  color: #121212;
  padding-right: 8px;
  padding: 2px;
  border: ${({ $winner }) => ($winner ? "1px solid #F4B30F" : "")};
`;

const QScore = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #b1b0ac;
  text-align: center;
`;
