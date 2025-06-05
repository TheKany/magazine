"use client";

import PlanBanner from "@/components/Banner/PlanBanner";
import Container from "@/components/_Container";
import { evaluateMatches } from "@/util/handlePlayData";
import styled from "styled-components";
import PlanList from "./_components/PlanList";
import TotalRank from "./_components/TotalRank";
import PrevHistory from "./_components/PrevHistory";

const SeasonPage = () => {
  const result = evaluateMatches([
    { team1: "A", team2: "B", score1: [0, 0, 0, 0], score2: [0, 0, 0, 0] },
    { team1: "B", team2: "C", score1: [0, 0, 0, 0], score2: [0, 0, 0, 0] },
    { team1: "C", team2: "A", score1: [0, 0, 0, 0], score2: [0, 0, 0, 0] },
  ]);

  console.log(result);

  return (
    <Container>
      {/* 진행율 */}
      {/* <ProgressBar
        progress={progress}
        remainDate={remainDate}
        totalDate={totalDate}
      /> */}

      {/* 순위 */}
      {/* <TotalRank /> */}

      {/* <DivideLine /> */}

      {/* 팀간 순위 정보 */}
      {/* <PrevHistory /> */}

      {/* 일정 */}
      <PlanBanner />

      <PlanList />

      <DivideLine />
      {/* 순위 */}
      <TotalRank />

      <DivideLine />
      {/* 히스토리 */}
      <PrevHistory />
    </Container>
  );
};

export default SeasonPage;

const DivideLine = styled.div`
  width: 50%;
  height: 1px;
  border: 1px solid #646464;
  margin: 36px auto;
`;
