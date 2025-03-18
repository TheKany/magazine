"use client";

import MainLink from "@/components/Button/MainLink";
import Container from "@/components/_Container";
import React from "react";
import styled from "styled-components";

// 뉴스 팀장 매거진
const HubPage = () => {
  return (
    <Container>
      <LinkList>
        <MainLink
          url="/Leaders"
          title="식서스 팀장"
          subtitle="Sixers Season Leaders"
        />

        <MainLink
          url="/Story"
          title="식서스 매거진"
          subtitle="Sixers Magazine"
        />

        <MainLink url="/News" title="식서스 뉴스" subtitle="Sixers News" />
      </LinkList>
    </Container>
  );
};

export default HubPage;

const LinkList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
`;
