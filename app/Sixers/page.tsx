"use client";

import Banner from "@/components/Banner";
import PlanBanner from "@/components/Banner/PlanBanner";
import MainLink from "@/components/_common/Button/MainLink";
import SeasonLinkBtn from "@/components/_common/Button/SeasonLinkBtn";
import Container from "@/components/_common/Element/_Container";

import styled from "styled-components";

export default function Sixers() {
  return (
    <>
      <Banner />

      <Container>
        {/* <PlanBanner>
          <PlanDate>{schedule}</PlanDate>
          <PlanText>{weekSchedule}</PlanText>
        </PlanBanner> */}

        {/* <AlarmBanner>
          기존 시즌 정보는 [식서스 컨텐츠] 메뉴에 있습니다.
        </AlarmBanner> */}
        <PlanBanner />

        {/* <SeasonLinkBtn season={6} /> */}

        <LinkList>
          {/* 공지사항 */}
          {/* <MainLink
            url="/Notice"
            title="식서스 공지사항"
            subtitle="Sixers Notice"
          /> */}

          {/* 식서스 룰북 */}
          {/* <MainLink url="/Rules" title="식서스 회칙" subtitle="Sixers Rules" /> */}

          {/* 식서스 뉴스, 매거진, 시즌 정보 */}
          {/* <MainLink
            url="/Contents"
            title="식서스 컨텐츠"
            subtitle="Sixers Contents"
          /> */}

          {/* 식서스 일정 */}
          {/* <MainLink
            url="/Calendar"
            title="식서스 일정"
            subtitle="Sixers Calendar"
          /> */}
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
