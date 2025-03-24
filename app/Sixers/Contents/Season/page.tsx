"use client";

import Container from "@/components/_Container";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TotalRank from "./_components/TotalRank";
import { getWeekRange } from "@/util/getWeekRange";
import { EventProp } from "@/Types/types";
import ProgressBar from "./_components/ProgressBar";

const SeasonPage = () => {
  const [totalDate, setTotalDate] = useState<number>(0);
  const [remainDate, setRemainDate] = useState<number>(0);

  const onLoadData = async () => {
    try {
      const fetchData = await fetch("/data/season.json");
      const resData = await fetchData.json();

      const onlyLeagueDate = resData.filter(
        (el: EventProp) => el.type === "시즌"
      );
      setTotalDate(onlyLeagueDate.length);

      const { firstDay } = getWeekRange();
      const filterDate = onlyLeagueDate.filter(
        (el: EventProp) => new Date(el.date) > firstDay
      );
      setRemainDate(filterDate.length);
    } catch (error) {
      console.error("Error loading event data:", error);
    }
  };

  useEffect(() => {
    onLoadData();
  }, []);

  const doneDate = totalDate - remainDate;
  const progress = totalDate > 0 ? Math.round((doneDate / totalDate) * 100) : 0;

  return (
    <Container>
      {/* 진행율 */}
      <ProgressBar
        progress={progress}
        remainDate={remainDate}
        totalDate={totalDate}
      />

      {/* 순위 */}
      <TotalRank />

      <DivideLine />

      {/* 팀간 순위 정보 */}
      {/* <MatchInfoBox>
        <div>
          <p>리바 vs 청용</p>
        </div>

        <div>
          <p>청용 vs 상승</p>
        </div>

        <div>
          <p>상승 vs 리바</p>
        </div>
      </MatchInfoBox> */}
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

// const MatchInfoBox = styled.div`
//   margin-bottom: 40px;
// `;
