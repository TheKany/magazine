"use client";

import MainBanner from "@/components/MainBanner";
import PlanBanner from "@/components/Banner/PlanBanner";
import Container from "@/components/_common/Element/_Container";

import styled from "styled-components";

export default function Sixers() {
  return (
    <>
      <MainBanner />

      <Container>
        <PlanBanner />

        {/* <SeasonLinkBtn season={6} /> */}

        <LinkList></LinkList>
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
