"use client";

import { EventProp } from "@/Types/types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PlanBanner = () => {
  const [weekSchedule, setWeekSchedule] =
    useState<string>("이번 주 일정이 없습니다.");
  const [schedule, setSchedule] = useState("");

  const onLoadData = async () => {
    try {
      const fetchData = await fetch("/data/season.json");
      const resData = await fetchData.json();

      const today = new Date();

      const nextEvent = resData.find((event: EventProp) => {
        const eventDate = new Date(event.date);
        return eventDate >= today;
      });

      setWeekSchedule(
        nextEvent ? `${nextEvent.comment}` : "예정된 일정이 없습니다."
      );

      setSchedule(nextEvent ? `🗓️${nextEvent.date}` : "");
    } catch (error) {
      console.error("Error loading event data:", error);
    }
  };

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <PlanContainer>
      <PlanDate>{schedule}</PlanDate>
      <PlanText>{weekSchedule}</PlanText>
    </PlanContainer>
  );
};

export default PlanBanner;

const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 8px 0;
  border-radius: 8px;
`;

const PlanDate = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

const PlanText = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
