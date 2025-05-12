"use client";

import { EventProp } from "@/Types/types";
import Banner from "@/components/Banner";
import MainLink from "@/components/Button/MainLink";
import Container from "@/components/_Container";
import Arrowsvg from "@/components/svg/Arrow";
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
        <PlanBanner>
          <PlanDate>{schedule}</PlanDate>
          <PlanText>{weekSchedule}</PlanText>
        </PlanBanner>

        <SeasonButtonContainer>
          <SeasonButtonInnerContainer>
            <MainLink
              url="Contents/Season"
              title="시즌 5 리그 정보"
              subtitle="Sixers Season 5"
            />
            <ImgBox>
              <Image
                src={"/img/sixers-lakers.png"}
                alt="new"
                fill
                unoptimized
                priority
              />
            </ImgBox>

            <ArrowImgBox>
              <Arrowsvg />
            </ArrowImgBox>
          </SeasonButtonInnerContainer>
        </SeasonButtonContainer>

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

const ArrowImgBox = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0px, -50%);
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

const SeasonButtonContainer = styled.div`
  padding: 8px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 4px 4px inset;
`;

const SeasonButtonInnerContainer = styled.div`
  position: relative;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const ImgBox = styled.div`
  width: 64px;
  height: 40px;
  display: block;
  position: absolute;
  top: 10px;
  left: 8%;
`;
