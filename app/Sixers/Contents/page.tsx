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
            url="Contents/Story"
            title="식서스 매거진"
            subtitle="Sixers Magazine"
          />

          <MainLink
            url="Contents/News"
            title="식서스 뉴스"
            subtitle="Sixers News"
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
