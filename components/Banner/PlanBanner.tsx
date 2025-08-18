"use client";

import { seasonThisWeekData } from "@/lib/query/seasonInfo";
import { EventProp } from "@/Types/types";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const PlanBanner = () => {
  const setting = {
    centerPadding: "60px",
    slidesToShow: 1,
  };

  const [planList, setPlanList] = useState<EventProp[]>([]);
  const onLoadData = async () => {
    try {
      const resData = await seasonThisWeekData();

      setPlanList(resData);
    } catch (error) {
      console.error("Error loading event data:", error);
    }
  };

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <Slider {...setting}>
      {planList.map((event: EventProp, index: number) => (
        <PlanContainer key={index} $eventType={event.type}>
          <p>이번주 경기 정보</p>
          <PlanInfoBox>
            <PlanDate>{event.date.replace(/-/g, "/")}</PlanDate>
            <PlanText>🏀{event.type}🏀</PlanText>
          </PlanInfoBox>
        </PlanContainer>
      ))}
    </Slider>
  );
};

export default PlanBanner;

const PlanContainer = styled.div<{ $eventType?: string }>`
  background-color: #ecd2d2;
  padding: 24px;
  border-radius: 4px;

  & p {
    font-size: 14px;
  }
`;

const PlanInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const PlanText = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const PlanDate = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
