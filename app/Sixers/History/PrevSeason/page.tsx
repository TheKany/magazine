"use client";

import MainLink from "@/components/_common/Button/MainLink";
import React from "react";
import styled from "styled-components";

const History = () => {
  return (
    <LinkList>
      <MainLink
        url="History/PrevSeason/5"
        title="식서스 시즌 5"
        subtitle="2025.03 - 2025.05"
      />

      <MainLink
        url="History/PrevSeason/6"
        title="식서스 시즌 6"
        subtitle="2025.06 - 2025.08"
      />
    </LinkList>
  );
};

export default History;

const LinkList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
`;
