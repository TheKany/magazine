"use client";

import { EventProp } from "@/Types/types";
import Banner from "@/components/Banner";
import MainLink from "@/components/Button/MainLink";
import Container from "@/components/_Container";
// import { getWeekRange } from "@/util/getWeekRange";
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

      const today = new Date();

      // 오늘 이후의 일정 중 가장 가까운 일정 찾기
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
    <>
      <Banner />

      <Container>
        <PlanBanner>
          <PlanDate>{schedule}</PlanDate>
          <PlanText>{weekSchedule}</PlanText>
        </PlanBanner>

        <AlarmBanner>
          기존 시즌 정보는 [식서스 컨텐츠] 메뉴에 있습니다.
        </AlarmBanner>

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
          <MainLink
            url="/Contents"
            title="식서스 컨텐츠"
            subtitle="Sixers Contents"
          />

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

const AlarmBanner = styled.p`
  width: 100%;
  text-align: center;
  font-size: 14px;
  background-color: #121212;
  color: #fff;
  padding: 4px 0;
`;

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
