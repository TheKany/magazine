import Image from "next/image";
import { useState } from "react";
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
    date: "05.17",
    history: [
      {
        team1: {
          name: "리바운드",
          logo: "/img/season5/reba.png",
          total: 37,
          quarters: [9, 15, 23, 37],
          isWinner: false,
        },
        team2: {
          name: "청용열차",
          logo: "/img/season5/dragon.png",
          total: 65,
          quarters: [16, 37, 53, 65],
          isWinner: true,
        },
      },
      {
        team1: {
          name: "상승",
          logo: "/img/season5/up.png",
          total: 55,
          quarters: [14, 30, 42, 55],
          isWinner: true,
        },
        team2: {
          name: "리바운드",
          logo: "/img/season5/reba.png",
          total: 38,
          quarters: [5, 14, 26, 38],
          isWinner: false,
        },
      },
      {
        team1: {
          name: "청용열차",
          logo: "/img/season5/dragon.png",
          total: 43,
          quarters: [9, 23, 27, 38],
          isWinner: false,
        },
        team2: {
          name: "상승",
          logo: "/img/season5/up.png",
          total: 43,
          quarters: [8, 21, 32, 43],
          isWinner: true,
        },
      },
    ],
  },
  {
    date: "05.10",
    history: [
      {
        team1: {
          name: "리바운드",
          logo: "/img/season5/reba.png",
          total: 40,
          quarters: [10, 7, 12, 11],
          isWinner: false,
        },
        team2: {
          name: "상승",
          logo: "/img/season5/up.png",
          total: 52,
          quarters: [13, 13, 6, 20],
          isWinner: true,
        },
      },
      {
        team1: {
          name: "상승",
          logo: "/img/season5/up.png",
          total: 35,
          quarters: [7, 9, 11, 8],
          isWinner: false,
        },
        team2: {
          name: "청용열차",
          logo: "/img/season5/dragon.png",
          total: 36,
          quarters: [6, 13, 9, 8],
          isWinner: true,
        },
      },
      {
        team1: {
          name: "청용열차",
          logo: "/img/season5/dragon.png",
          total: 45,
          quarters: [9, 11, 13, 12],
          isWinner: true,
        },
        team2: {
          name: "리바운드",
          logo: "/img/season5/reba.png",
          total: 40,
          quarters: [12, 9, 6, 13],
          isWinner: false,
        },
      },
    ],
  },
  {
    date: "04.26",
    history: [
      {
        team1: {
          name: "상승",
          logo: "/img/season5/up.png",
          total: 30,
          quarters: [10, 6, 11, 3],
          isWinner: false,
        },
        team2: {
          name: "청용열차",
          logo: "/img/season5/dragon.png",
          total: 37,
          quarters: [14, 16, 12, 7],
          isWinner: true,
        },
      },
      {
        team1: {
          name: "리바운드",
          logo: "/img/season5/reba.png",
          total: 33,
          quarters: [6, 9, 13, 5],
          isWinner: false,
        },
        team2: {
          name: "청용열차",
          logo: "/img/season5/dragon.png",
          total: 39,
          quarters: [6, 11, 13, 9],
          isWinner: true,
        },
      },
      {
        team1: {
          name: "상승",
          logo: "/img/season5/up.png",
          total: 63,
          quarters: [18, 21, 8, 16],
          isWinner: true,
        },
        team2: {
          name: "리바운드",
          logo: "/img/season5/reba.png",
          total: 38,
          quarters: [6, 6, 11, 15],
          isWinner: false,
        },
      },
    ],
  },
  {
    date: "04.19",
    history: [
      {
        team1: {
          name: "리바운드",
          logo: "/img/season5/reba.png",
          total: 30,
          quarters: [15, 5, 6, 4],
          isWinner: false,
        },
        team2: {
          name: "청용열차",
          logo: "/img/season5/dragon.png",
          total: 41,
          quarters: [7, 14, 9, 11],
          isWinner: true,
        },
      },
      {
        team1: {
          name: "상승",
          logo: "/img/season5/up.png",
          total: 38,
          quarters: [4, 8, 14, 12],
          isWinner: false,
        },
        team2: {
          name: "리바운드",
          logo: "/img/season5/reba.png",
          total: 43,
          quarters: [7, 17, 8, 11],
          isWinner: true,
        },
      },
      {
        team1: {
          name: "청용열차",
          logo: "/img/season5/dragon.png",
          total: 39,
          quarters: [14, 8, 14, 3],
          isWinner: true,
        },
        team2: {
          name: "상승",
          logo: "/img/season5/up.png",
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
          logo: "/img/season5/up.png",
          total: 40,
          quarters: [9, 12, 10, 9],
          isWinner: false,
        },
        team2: {
          name: "리바운드",
          logo: "/img/season5/reba.png",
          total: 54,
          quarters: [12, 16, 20, 6],
          isWinner: true,
        },
      },
      {
        team1: {
          name: "리바운드",
          logo: "/img/season5/reba.png",
          total: 34,
          quarters: [15, 4, 6, 9],
          isWinner: false,
        },
        team2: {
          name: "청용열차",
          logo: "/img/season5/dragon.png",
          total: 45,
          quarters: [13, 8, 14, 10],
          isWinner: true,
        },
      },
      {
        team1: {
          name: "청용열차",
          logo: "/img/season5/dragon.png",
          total: 38,
          quarters: [11, 4, 8, 15],
          isWinner: false,
        },
        team2: {
          name: "상승",
          logo: "/img/season5/up.png",
          total: 50,
          quarters: [10, 9, 10, 21],
          isWinner: true,
        },
      },
    ],
  },
];

const PrevHistory = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const onClickToggleScoreBoard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PrevHistoryBox>
      <PreviousTitle>지난 기록</PreviousTitle>

      {matchList.map(({ date, history }, i) => (
        <History key={i}>
          <DateText onClick={() => onClickToggleScoreBoard(i)}>{date}</DateText>
          <Accordion $isOpen={openIndex === i}>
            <AccordionInner>
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
            </AccordionInner>
          </Accordion>
        </History>
      ))}
    </PrevHistoryBox>
  );
};

export default PrevHistory;

const Accordion = styled.div<{ $isOpen: boolean }>`
  overflow: hidden;
  transition: height 0.3s ease;
  height: ${({ $isOpen }) => ($isOpen ? "300px" : "0px")};
`;

const AccordionInner = styled.div`
  padding: 16px 0;
`;

const DateText = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 16px 0;
  text-decoration: underline;
  width: 100%;
  height: 50px;
  text-align: start;
`;

const PrevHistoryBox = styled.div`
  margin-bottom: 40px;
`;

const PreviousTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const History = styled.div`
  border-bottom: 1px solid #ccc;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
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
