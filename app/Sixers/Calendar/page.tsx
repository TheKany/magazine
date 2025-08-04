"use client";

import { EventProp } from "@/Types/types";
import ChevronLeft from "@/components/_common/svg/ChevronLeft";
import ChevronRight from "@/components/_common/svg/ChevronRight";
import seasonWeekData from "@/lib/query/seasonInfo";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [eventDate, setEventDate] = useState<EventProp[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventProp | null>(null);

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const daysInMonth = endOfMonth.date();
  const startDay = startOfMonth.day();

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: startDay }, () => null);

  const onLoadData = async () => {
    const resData = await seasonWeekData();
    setEventDate(resData);
  };

  const onClickEventDate = (data: EventProp) => {
    setSelectedEvent(data);
  };

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <>
      <EventDisplay>
        <EventDate>{selectedEvent?.date}</EventDate>
        <p>
          {selectedEvent?.season_id !== 0 ? selectedEvent?.season_id : null}
        </p>
        <EventComment>{selectedEvent?.type}</EventComment>
      </EventDisplay>

      <CalendarContainer>
        <Header>
          <NavButton onClick={prevMonth}>
            <ChevronLeft />
          </NavButton>
          <Title>{currentDate.format("YYYY년 MM월")}</Title>
          <NavButton onClick={nextMonth}>
            <ChevronRight />
          </NavButton>
        </Header>
        <DaysRow>
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <DayHeader key={day}>{day}</DayHeader>
          ))}
        </DaysRow>
        <DaysGrid>
          {emptyDays.map((_, index) => (
            <div key={index}></div>
          ))}
          {days.map((day) => {
            const dateKey =
              currentDate.format("YYYY-MM-") + String(day).padStart(2, "0");
            const event = eventDate.find((e) => e.date === dateKey);
            const eventType = event ? event.type : undefined;

            return (
              <Day
                key={day}
                $eventType={eventType}
                onClick={() => onClickEventDate(event as EventProp)}
              >
                {day}
              </Day>
            );
          })}
        </DaysGrid>
      </CalendarContainer>

      {/* 월 컨테이너 */}
      <div>
        <p></p>
      </div>
    </>
  );
};
export default CalendarPage;

const CalendarContainer = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 80px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DaysRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-size: 14px;
  color: #666;
  font-weight: bold;
  margin-bottom: 8px;
`;

const DayHeader = styled.div`
  padding: 8px 0;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

const Day = styled.div<{ $eventType?: string }>`
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ $eventType }) =>
    $eventType === "시즌 전반기"
      ? "#f0e68c"
      : $eventType === "시즌 후반기"
      ? "#87cefa"
      : $eventType === "이벤트"
      ? "#ffcccb"
      : $eventType === "프리시즌"
      ? "#98fb98"
      : $eventType === "비시즌"
      ? "#e5c9ee"
      : "transparent"};
  &:hover {
    background-color: #f1f1f1;
  }
`;

const EventDisplay = styled.div`
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  background-color: #fff;
  padding: 4px;
`;

const EventDate = styled.p`
  font-size: 14px;
`;

const EventComment = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
