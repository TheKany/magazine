"use client";

import ChevronLeft from "@/components/svg/ChevronLeft";
import ChevronRight from "@/components/svg/ChevronRight";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

type EventProp = {
  date: string;
  type: string;
  comment: string;
};

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
    try {
      const fetchData = await fetch("/data/season.json");
      const resData = await fetchData.json();
      setEventDate(resData);
    } catch (error) {
      console.error("Error loading event data:", error);
    }
  };

  const onClickEventDate = (data: EventProp) => {
    console.log(data);
    setSelectedEvent(data);
  };

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <>
      <EventDisplay>
        <EventDate>{selectedEvent?.date}</EventDate>
        <EventComment>{selectedEvent?.comment}</EventComment>
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
  margin-bottom: 24px;
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
    $eventType === "비시즌"
      ? "#f0e68c"
      : $eventType === "프리시즌"
      ? "#87cefa"
      : $eventType === "시즌"
      ? "#ffcccb"
      : $eventType === "이벤트"
      ? "#98fb98"
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
