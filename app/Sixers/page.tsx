"use client";

import { EventProp } from "@/Types/types";
import Banner from "@/components/Banner";
import MainLink from "@/components/Button/MainLink";
import Container from "@/components/_Container";
import { getWeekRange } from "@/util/getWeekRange";
import { useEffect, useState } from "react";

import styled from "styled-components";

export default function Home() {
  const [weekSchedule, setWeekSchedule] =
    useState<string>("이번 주 일정이 없습니다.");
  const [schedule, setSchedule] = useState("");

  const onLoadData = async () => {
    try {
      const fetchData = await fetch("/data/season.json");
      const resData = await fetchData.json();

      const { firstDay, lastDay } = getWeekRange();
      const filteredEvent = resData.find((event: EventProp) => {
        const eventDate = new Date(event.date);
        return eventDate >= firstDay && eventDate <= lastDay;
      });

      setWeekSchedule(
        filteredEvent ? `${filteredEvent.comment}` : "이번 주 일정이 없습니다."
      );

      setSchedule(`🗓️${filteredEvent.date}🗓️`);
    } catch (error) {
      console.error("Error loading event data:", error);
    }
  };
  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <>
      <Banner />

      <Container>
        <PlanBanner>
          <PlanDate>{schedule}</PlanDate>
          <PlanText>{weekSchedule}</PlanText>
        </PlanBanner>

        <LinkList>
          {/* 공지사항 */}
          <MainLink
            url="/Notice"
            title="식서스 공지사항"
            subtitle="Sixers Notice"
          />

          {/* 식서스 룰북 */}
          <MainLink url="/Rules" title="식서스 회칙" subtitle="Sixers Rules" />

          {/* 식서스 뉴스, 매거진, 시즌 정보 */}
          <MainLink url="/Hub" title="식서스 허브" subtitle="Sixers Rules" />

          {/* 식서스 일정 */}
          <MainLink
            url="/Calendar"
            title="식서스 일정"
            subtitle="Sixers Calendar"
          />
        </LinkList>
      </Container>
    </>
  );
}

const LinkList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
`;

const PlanBanner = styled.div`
  padding: 8px 0;
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
`;

const PlanDate = styled.p`
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 4px;
`;

const PlanText = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
