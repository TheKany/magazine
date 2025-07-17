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
    date: "06.21",
    history: [
      {
        team1: {
          name: "승부사",
          logo: "/img/season6/teamWhite.png",
          total: 45,
          quarters: [6, 12, 20, 7],
          isWinner: true,
        },
        team2: {
          name: "뀨♥️키즈",
          logo: "/img/season6/teamBlack.png",
          total: 33,
          quarters: [9, 14, 4, 6],
          isWinner: false,
        },
      },
      {
        team1: {
          name: "뀨♥️키즈",
          logo: "/img/season6/teamBlack.png",
          total: 35,
          quarters: [7, 13, 7, 8],
          isWinner: false,
        },
        team2: {
          name: "籠口",
          logo: "/img/season6/teamPurple.png",
          total: 37,
          quarters: [5, 11, 10, 11],
          isWinner: true,
        },
      },
      {
        team1: {
          name: "籠口",
          logo: "/img/season6/teamPurple.png",
          total: 43,
          quarters: [8, 12, 12, 11],
          isWinner: false,
        },
        team2: {
          name: "승부사",
          logo: "/img/season6/teamWhite.png",
          total: 46,
          quarters: [4, 9, 13, 20],
          isWinner: true,
        },
      },
    ],
  },
  {
    date: "07.05",
    history: [
      {
        team1: {
          name: "승부사",
          logo: "/img/season6/teamWhite.png",
          total: 44,
          quarters: [13, 14, 13, 4],
          isWinner: true,
        },
        team2: {
          name: "뀨♥️키즈",
          logo: "/img/season6/teamBlack.png",
          total: 43,
          quarters: [10, 10, 16, 7],
          isWinner: false,
        },
      },
      {
        team1: {
          name: "뀨♥️키즈",
          logo: "/img/season6/teamBlack.png",
          total: 26,
          quarters: [8, 8, 2, 8],
          isWinner: false,
        },
        team2: {
          name: "籠口",
          logo: "/img/season6/teamPurple.png",
          total: 49,
          quarters: [11, 14, 8, 16],
          isWinner: true,
        },
      },
      {
        team1: {
          name: "籠口",
          logo: "/img/season6/teamPurple.png",
          total: 45,
          quarters: [13, 10, 11, 11],
          isWinner: false,
        },
        team2: {
          name: "승부사",
          logo: "/img/season6/teamWhite.png",
          total: 47,
          quarters: [2, 14, 12, 19],
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
