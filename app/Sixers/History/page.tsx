"use client";

import MainLink from "@/components/_common/Button/MainLink";
import Container from "@/components/_common/Element/_Container";
import React from "react";
import styled from "styled-components";

const ContentsPage = () => {
  return (
    <Container>
      <Wrapper>
        <LinkList>
          <MainLink
            url="History/Leaders"
            title="식서스 팀장"
            subtitle="Sixers Season Leaders"
          />

          <MainLink
            url="History/PrevSeason"
            title="식서스 시즌 정보"
            subtitle="Sixers Season History"
          />
        </LinkList>
      </Wrapper>
    </Container>
  );
};

export default ContentsPage;

const Wrapper = styled.div`
  padding: 0 8px;
`;

const LinkList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
  padding: 0 8px;
`;
