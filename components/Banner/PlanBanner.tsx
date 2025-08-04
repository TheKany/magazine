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
      <PlanDate>{schedule}</PlanDate>
      <PlanInfoBox>
        <p>이번주 경기 정보</p>
        <PlanText>🏀{gameType}🏀</PlanText>
      </PlanInfoBox>
    </PlanContainer>
  );
};

export default PlanBanner;

const PlanContainer = styled.div<{ $eventType?: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 4px;

  padding: 8px 0;
  border-radius: 8px;

  background-color: ${({ $eventType }) =>
    $eventType === "비시즌"
      ? "#ebd6b1"
      : $eventType === "프리시즌"
      ? "#58B4F1"
      : $eventType === "시즌"
      ? "#F18F88"
      : $eventType === "이벤트"
      ? "#88D199"
      : "transparent"};
`;

const PlanDate = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

const PlanInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  & :nth-child(1) {
    font-size: 14px;
    font-weight: 500;
  }
`;

const PlanText = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
