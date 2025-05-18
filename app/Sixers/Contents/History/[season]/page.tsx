"use client";

import Container from "@/components/_Container";
import styled from "styled-components";
import TotalRank from "../_components/TotalRank";
import PrevHistory from "../_components/PrevHistory";
import { useParams } from "next/navigation";

const SeasonPage = () => {
  const param = useParams();

  return (
    <Container>
      <SeasonTitle>시즌 {param?.season}</SeasonTitle>
      {/* 순위 */}
      <TotalRank />

      <DivideLine />

      {/* 팀간 순위 정보 */}
      <PrevHistory />
    </Container>
  );
};

export default SeasonPage;

const SeasonTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const DivideLine = styled.div`
  width: 50%;
  height: 1px;
  border: 1px solid #646464;
  margin: 36px auto;
`;
