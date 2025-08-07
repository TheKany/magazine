"use client";

import seasonWeekData from "@/lib/query/seasonInfo";
import { EventProp } from "@/Types/types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PlanBanner = () => {
  const [schedule, setSchedule] = useState("");
  const [gameType, setGameType] = useState("");
  const onLoadData = async () => {
    try {
      const resData = await seasonWeekData();
      const today = new Date();

      const nextEvent = resData.find((event: EventProp) => {
        const eventDate = new Date(event.date);
        return eventDate >= today;
      });

      const yyyy = today.getFullYear();
      const nextEventDate = nextEvent.date.replace(`${yyyy}-`, "");
      const nextEventDateChangeFormat = nextEventDate.replace("-", "/");

      setSchedule(nextEvent ? `${nextEventDateChangeFormat}` : "");
      setGameType(nextEvent.type);
    } catch (error) {
      console.error("Error loading event data:", error);
    }
  };

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <PlanContainer $eventType={gameType}>
      <p>이번주 경기 정보</p>
      <PlanInfoBox>
        <PlanDate>{schedule}</PlanDate>
        <PlanText>🏀{gameType}🏀</PlanText>
      </PlanInfoBox>
    </PlanContainer>
  );
};

export default PlanBanner;

const PlanContainer = styled.div<{ $eventType?: string }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 4px;

  padding: 8px 0;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 16px;

  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.25);
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
