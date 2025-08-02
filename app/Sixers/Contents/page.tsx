"use client";

import MainLink from "@/components/_common/Button/MainLink";
import Container from "@/components/_common/Element/_Container";
import React from "react";
import styled from "styled-components";

const ContentsPage = () => {
  return (
    <Container>
      <LinkList>
        <MainLink
          url="Contents/Leaders"
          title="식서스 팀장"
          subtitle="Sixers Season Leaders"
        />

        <MainLink
          url="Contents/Story"
          title="식서스 매거진"
          subtitle="Sixers Magazine"
        />

        <MainLink
          url="Contents/News"
          title="식서스 뉴스"
          subtitle="Sixers News"
        />

        <MainLink
          url="Contents/History"
          title="식서스 시즌 정보"
          subtitle="Sixers Season History"
        />
      </LinkList>
    </Container>
  );
};

export default ContentsPage;

const LinkList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
`;
