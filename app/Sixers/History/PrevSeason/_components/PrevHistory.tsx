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
