"use client";

import Container from "@/components/_common/Element/_Container";
import styled from "styled-components";
import TotalRank from "../_components/TotalRank";
import PrevHistory from "../_components/PrevHistory";
import { useParams } from "next/navigation";

const SeasonPage = () => {
  const param = useParams();

  return (
    <Container>
      <Box>
        <SeasonTitle>시즌 {param?.season}</SeasonTitle>
        {/* 순위 */}
        <TotalRank season={Number(param?.season)} />

        <DivideLine />

        {/* 팀간 순위 정보 */}
        <PrevHistory season={Number(param?.season)} />
      </Box>
    </Container>
  );
};

export default SeasonPage;

const Box = styled.div`
  padding: 0 16px;
`;

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
