import { BASE_IMG_URL } from "@/app/config";
import { seasonGameScore } from "@/lib/query/seasonScroe";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

type ScoreProps = {
  game_date: string;
  id: number;
  season_id: number;
  team1_iswinner: boolean;
  team1_logo: string;
  team1_name: string;
  team1_q1: number;
  team1_q2: number;
  team1_q3: number;
  team1_q4: number;
  team1_total: 37;
  team2_iswinner: boolean;
  team2_logo: string;
  team2_name: string;
  team2_q1: number;
  team2_q2: number;
  team2_q3: number;
  team2_q4: number;
  team2_total: number;
};

type GroupedScore = {
  date: string;
  history: ScoreProps[];
};

// type TeamData = {
//   name: string;
//   logo: string;
//   total: number;
//   quarters: number[];
//   isWinner: boolean;
// };

// // 시즌 5
// const matchList5: {
//   date: string;
//   history: { team1: TeamData; team2: TeamData }[];
// }[] = [
//   {
//     date: "05.17",
//     history: [
//       {
//         team1: {
//           name: "리바운드",
//           logo: "/img/season5/reba.png",
//           total: 37,
//           quarters: [9, 15, 23, 37],
//           isWinner: false,
//         },
//         team2: {
//           name: "청용열차",
//           logo: "/img/season5/dragon.png",
//           total: 65,
//           quarters: [16, 37, 53, 65],
//           isWinner: true,
//         },
//       },
//       {
//         team1: {
//           name: "상승",
//           logo: "/img/season5/up.png",
//           total: 55,
//           quarters: [14, 30, 42, 55],
//           isWinner: true,
//         },
//         team2: {
//           name: "리바운드",
//           logo: "/img/season5/reba.png",
//           total: 38,
//           quarters: [5, 14, 26, 38],
//           isWinner: false,
//         },
//       },
//       {
//         team1: {
//           name: "청용열차",
//           logo: "/img/season5/dragon.png",
//           total: 43,
//           quarters: [9, 23, 27, 38],
//           isWinner: false,
//         },
//         team2: {
//           name: "상승",
//           logo: "/img/season5/up.png",
//           total: 43,
//           quarters: [8, 21, 32, 43],
//           isWinner: true,
//         },
//       },
//     ],
//   },
//   {
//     date: "05.10",
//     history: [
//       {
//         team1: {
//           name: "리바운드",
//           logo: "/img/season5/reba.png",
//           total: 40,
//           quarters: [10, 7, 12, 11],
//           isWinner: false,
//         },
//         team2: {
//           name: "상승",
//           logo: "/img/season5/up.png",
//           total: 52,
//           quarters: [13, 13, 6, 20],
//           isWinner: true,
//         },
//       },
//       {
//         team1: {
//           name: "상승",
//           logo: "/img/season5/up.png",
//           total: 35,
//           quarters: [7, 9, 11, 8],
//           isWinner: false,
//         },
//         team2: {
//           name: "청용열차",
//           logo: "/img/season5/dragon.png",
//           total: 36,
//           quarters: [6, 13, 9, 8],
//           isWinner: true,
//         },
//       },
//       {
//         team1: {
//           name: "청용열차",
//           logo: "/img/season5/dragon.png",
//           total: 45,
//           quarters: [9, 11, 13, 12],
//           isWinner: true,
//         },
//         team2: {
//           name: "리바운드",
//           logo: "/img/season5/reba.png",
//           total: 40,
//           quarters: [12, 9, 6, 13],
//           isWinner: false,
//         },
//       },
//     ],
//   },
//   {
//     date: "04.26",
//     history: [
//       {
//         team1: {
//           name: "상승",
//           logo: "/img/season5/up.png",
//           total: 30,
//           quarters: [10, 6, 11, 3],
//           isWinner: false,
//         },
//         team2: {
//           name: "청용열차",
//           logo: "/img/season5/dragon.png",
//           total: 37,
//           quarters: [14, 16, 12, 7],
//           isWinner: true,
//         },
//       },
//       {
//         team1: {
//           name: "리바운드",
//           logo: "/img/season5/reba.png",
//           total: 33,
//           quarters: [6, 9, 13, 5],
//           isWinner: false,
//         },
//         team2: {
//           name: "청용열차",
//           logo: "/img/season5/dragon.png",
//           total: 39,
//           quarters: [6, 11, 13, 9],
//           isWinner: true,
//         },
//       },
//       {
//         team1: {
//           name: "상승",
//           logo: "/img/season5/up.png",
//           total: 63,
//           quarters: [18, 21, 8, 16],
//           isWinner: true,
//         },
//         team2: {
//           name: "리바운드",
//           logo: "/img/season5/reba.png",
//           total: 38,
//           quarters: [6, 6, 11, 15],
//           isWinner: false,
//         },
//       },
//     ],
//   },
//   {
//     date: "04.19",
//     history: [
//       {
//         team1: {
//           name: "리바운드",
//           logo: "/img/season5/reba.png",
//           total: 30,
//           quarters: [15, 5, 6, 4],
//           isWinner: false,
//         },
//         team2: {
//           name: "청용열차",
//           logo: "/img/season5/dragon.png",
//           total: 41,
//           quarters: [7, 14, 9, 11],
//           isWinner: true,
//         },
//       },
//       {
//         team1: {
//           name: "상승",
//           logo: "/img/season5/up.png",
//           total: 38,
//           quarters: [4, 8, 14, 12],
//           isWinner: false,
//         },
//         team2: {
//           name: "리바운드",
//           logo: "/img/season5/reba.png",
//           total: 43,
//           quarters: [7, 17, 8, 11],
//           isWinner: true,
//         },
//       },
//       {
//         team1: {
//           name: "청용열차",
//           logo: "/img/season5/dragon.png",
//           total: 39,
//           quarters: [14, 8, 14, 3],
//           isWinner: true,
//         },
//         team2: {
//           name: "상승",
//           logo: "/img/season5/up.png",
//           total: 27,
//           quarters: [2, 9, 9, 7],
//           isWinner: false,
//         },
//       },
//     ],
//   },
//   {
//     date: "04.12",
//     history: [
//       {
//         team1: {
//           name: "상승",
//           logo: "/img/season5/up.png",
//           total: 40,
//           quarters: [9, 12, 10, 9],
//           isWinner: false,
//         },
//         team2: {
//           name: "리바운드",
//           logo: "/img/season5/reba.png",
//           total: 54,
//           quarters: [12, 16, 20, 6],
//           isWinner: true,
//         },
//       },
//       {
//         team1: {
//           name: "리바운드",
//           logo: "/img/season5/reba.png",
//           total: 34,
//           quarters: [15, 4, 6, 9],
//           isWinner: false,
//         },
//         team2: {
//           name: "청용열차",
//           logo: "/img/season5/dragon.png",
//           total: 45,
//           quarters: [13, 8, 14, 10],
//           isWinner: true,
//         },
//       },
//       {
//         team1: {
//           name: "청용열차",
//           logo: "/img/season5/dragon.png",
//           total: 38,
//           quarters: [11, 4, 8, 15],
//           isWinner: false,
//         },
//         team2: {
//           name: "상승",
//           logo: "/img/season5/up.png",
//           total: 50,
//           quarters: [10, 9, 10, 21],
//           isWinner: true,
//         },
//       },
//     ],
//   },
// ];

// // 시즌 6
// const matchList: {
//   date: string;
//   history: { team1: TeamData; team2: TeamData }[];
// }[] = [
//   {
//     date: "06.21",
//     history: [
//       {
//         team1: {
//           name: "승부사",
//           logo: "/img/season6/reba.png",
//           total: 45,
//           quarters: [6, 12, 20, 7],
//           isWinner: true,
//         },
//         team2: {
//           name: "뀨♥️키즈",
//           logo: "/img/season6/dragon.png",
//           total: 33,
//           quarters: [9, 14, 4, 6],
//           isWinner: false,
//         },
//       },
//       {
//         team1: {
//           name: "뀨♥️키즈",
//           logo: "/img/season6/up.png",
//           total: 35,
//           quarters: [7, 13, 7, 8],
//           isWinner: false,
//         },
//         team2: {
//           name: "籠口",
//           logo: "/img/season6/reba.png",
//           total: 37,
//           quarters: [5, 11, 10, 11],
//           isWinner: true,
//         },
//       },
//       {
//         team1: {
//           name: "籠口",
//           logo: "/img/season6/dragon.png",
//           total: 43,
//           quarters: [8, 12, 12, 11],
//           isWinner: false,
//         },
//         team2: {
//           name: "승부사",
//           logo: "/img/season6/up.png",
//           total: 46,
//           quarters: [4, 9, 13, 20],
//           isWinner: true,
//         },
//       },
//     ],
//   },
//   {
//     date: "07.05",
//     history: [
//       {
//         team1: {
//           name: "승부사",
//           logo: "/img/season6/reba.png",
//           total: 44,
//           quarters: [13, 14, 13, 4],
//           isWinner: true,
//         },
//         team2: {
//           name: "뀨♥️키즈",
//           logo: "/img/season6/dragon.png",
//           total: 43,
//           quarters: [10, 10, 16, 7],
//           isWinner: false,
//         },
//       },
//       {
//         team1: {
//           name: "뀨♥️키즈",
//           logo: "/img/season6/up.png",
//           total: 26,
//           quarters: [8, 8, 2, 8],
//           isWinner: false,
//         },
//         team2: {
//           name: "籠口",
//           logo: "/img/season6/reba.png",
//           total: 49,
//           quarters: [11, 14, 8, 16],
//           isWinner: true,
//         },
//       },
//       {
//         team1: {
//           name: "籠口",
//           logo: "/img/season6/dragon.png",
//           total: 45,
//           quarters: [13, 10, 11, 11],
//           isWinner: false,
//         },
//         team2: {
//           name: "승부사",
//           logo: "/img/season6/up.png",
//           total: 47,
//           quarters: [2, 14, 12, 19],
//           isWinner: true,
//         },
//       },
//     ],
//   },
//   {
//     date: "07.19",
//     history: [
//       {
//         team1: {
//           name: "승부사",
//           logo: "/img/season6/reba.png",
//           total: 45,
//           quarters: [6, 17, 6, 16],
//           isWinner: true,
//         },
//         team2: {
//           name: "뀨♥️키즈",
//           logo: "/img/season6/dragon.png",
//           total: 40,
//           quarters: [12, 8, 11, 9],
//           isWinner: false,
//         },
//       },
//       {
//         team1: {
//           name: "뀨♥️키즈",
//           logo: "/img/season6/up.png",
//           total: 57,
//           quarters: [8, 12, 17, 20],
//           isWinner: true,
//         },
//         team2: {
//           name: "籠口",
//           logo: "/img/season6/reba.png",
//           total: 45,
//           quarters: [11, 15, 8, 11],
//           isWinner: false,
//         },
//       },
//       {
//         team1: {
//           name: "籠口",
//           logo: "/img/season6/dragon.png",
//           total: 53,
//           quarters: [16, 12, 12, 13],
//           isWinner: true,
//         },
//         team2: {
//           name: "승부사",
//           logo: "/img/season6/up.png",
//           total: 29,
//           quarters: [6, 7, 12, 4],
//           isWinner: false,
//         },
//       },
//     ],
//   },
//   {
//     date: "07.26",
//     history: [
//       {
//         team1: {
//           name: "승부사",
//           logo: "/img/season6/reba.png",
//           total: 29,
//           quarters: [10, 9, 6, 4],
//           isWinner: false,
//         },
//         team2: {
//           name: "뀨♥️키즈",
//           logo: "/img/season6/dragon.png",
//           total: 38,
//           quarters: [5, 4, 15, 14],
//           isWinner: true,
//         },
//       },
//       {
//         team1: {
//           name: "뀨♥️키즈",
//           logo: "/img/season6/up.png",
//           total: 41,
//           quarters: [12, 7, 12, 10],
//           isWinner: true,
//         },
//         team2: {
//           name: "籠口",
//           logo: "/img/season6/reba.png",
//           total: 29,
//           quarters: [4, 10, 13, 2],
//           isWinner: false,
//         },
//       },
//       {
//         team1: {
//           name: "籠口",
//           logo: "/img/season6/dragon.png",
//           total: 34,
//           quarters: [9, 2, 8, 15],
//           isWinner: true,
//         },
//         team2: {
//           name: "승부사",
//           logo: "/img/season6/up.png",
//           total: 19,
//           quarters: [8, 6, 0, 5],
//           isWinner: false,
//         },
//       },
//     ],
//   },
//   {
//     date: "08.02",
//     history: [
//       {
//         team1: {
//           name: "승부사",
//           logo: "/img/season6/reba.png",
//           total: 51,
//           quarters: [12, 13, 16, 10],
//           isWinner: true,
//         },
//         team2: {
//           name: "뀨♥️키즈",
//           logo: "/img/season6/dragon.png",
//           total: 56,
//           quarters: [17, 9, 11, 19],
//           isWinner: false,
//         },
//       },
//       {
//         team1: {
//           name: "뀨♥️키즈",
//           logo: "/img/season6/up.png",
//           total: 38,
//           quarters: [10, 9, 9, 10],
//           isWinner: true,
//         },
//         team2: {
//           name: "籠口",
//           logo: "/img/season6/reba.png",
//           total: 34,
//           quarters: [9, 8, 8, 9],
//           isWinner: false,
//         },
//       },
//       {
//         team1: {
//           name: "籠口",
//           logo: "/img/season6/dragon.png",
//           total: 41,
//           quarters: [5, 7, 13, 16],
//           isWinner: true,
//         },
//         team2: {
//           name: "승부사",
//           logo: "/img/season6/up.png",
//           total: 34,
//           quarters: [5, 7, 8, 14],
//           isWinner: false,
//         },
//       },
//     ],
//   },
// ];

const PrevHistory = ({ season }: { season: number }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [scoreData, setScoreData] = useState<GroupedScore[]>([]);

  const onClickToggleScoreBoard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const onLoadData = async (season: number) => {
    const resData = await seasonGameScore({ season });

    // 날짜별로 묶기
    const grouped = resData.reduce((acc: GroupedScore[], row) => {
      let target = acc.find((g) => g.date === row.game_date);
      if (!target) {
        target = { date: row.game_date, history: [] };
        acc.push(target);
      }
      target.history.push(row);
      return acc;
    }, []);

    setScoreData(grouped);
  };

  useEffect(() => {
    onLoadData(season);
  }, [season]);

  return (
    <PrevHistoryBox>
      <PreviousTitle>지난 기록</PreviousTitle>

      {scoreData.map(({ date, history }, i) => (
        <History key={i}>
          <DateText onClick={() => onClickToggleScoreBoard(i)}>{date}</DateText>
          <Accordion $isOpen={openIndex === i}>
            <AccordionInner>
              {history.map((r, j) => (
                <Table key={j}>
                  {/* team1 */}
                  <Team>
                    <ImageBox $width="25px" $height="25px">
                      <Image
                        src={`${BASE_IMG_URL}/${r.team1_logo}`}
                        alt={`${r.team1_name} 팀로고`}
                        fill
                        unoptimized
                      />
                    </ImageBox>
                    <TeamName $winner={r.team1_iswinner}>
                      {r.team1_name}
                    </TeamName>
                    <ScoreBoard>
                      <TScore $winner={r.team1_iswinner}>
                        {r.team1_total}
                      </TScore>
                      <QScore>{r.team1_q1}</QScore>
                      <QScore>{r.team1_q2}</QScore>
                      <QScore>{r.team1_q3}</QScore>
                      <QScore>{r.team1_q4}</QScore>
                    </ScoreBoard>
                    {r.team1_iswinner && (
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

                  {/* team2 */}
                  <Team>
                    <ImageBox $width="25px" $height="25px">
                      <Image
                        src={`${BASE_IMG_URL}/${r.team2_logo}`}
                        alt={`${r.team2_name} 팀로고`}
                        fill
                        unoptimized
                      />
                    </ImageBox>
                    <TeamName $winner={r.team2_iswinner}>
                      {r.team2_name}
                    </TeamName>
                    <ScoreBoard>
                      <TScore $winner={r.team2_iswinner}>
                        {r.team2_total}
                      </TScore>
                      <QScore>{r.team2_q1}</QScore>
                      <QScore>{r.team2_q2}</QScore>
                      <QScore>{r.team2_q3}</QScore>
                      <QScore>{r.team2_q4}</QScore>
                    </ScoreBoard>
                    {r.team2_iswinner && (
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
