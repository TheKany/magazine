"use client";

import { EventProp } from "@/Types/types";
import Banner from "@/components/Banner";
import MainLink from "@/components/Button/MainLink";
import Container from "@/components/_Container";
import { getWeekRange } from "@/util/getWeekRange";
import Image from "next/image";
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

      setSchedule(`🗓️${filteredEvent.date}`);
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
        <div style={{ position: "relative" }}>
          <MainLink
            url="Contents/Season"
            title="식서스 시즌 5"
            subtitle="Sixers Season 5"
          />
          <ImgBox>
            <Image src={"/img/new.png"} alt="new" fill unoptimized priority />
          </ImgBox>
        </div>

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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 8px 0;
  background-color: #fff;
  border-radius: 8px;
  border-top: 1px dotted #646464;
`;

const PlanDate = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

const PlanText = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const ImgBox = styled.div`
  width: 40px;
  height: 40px;
  display: block;
  position: absolute;
  top: 10px;
  left: 20%;
`;
