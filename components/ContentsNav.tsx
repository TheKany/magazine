"use client";

import { usePathname } from "next/navigation";
import React from "react";
import styled from "styled-components";
import BackBtn from "./_common/Button/BackBtn";

const ContentsNav = () => {
  const pathname = usePathname();

  switch (pathname) {
    case "/Sixers/Contents/News":
      return (
        <Container>
          <BackBtn />
          <Title>식서스 뉴스</Title>
          <div></div>
        </Container>
      );
    case "/Sixers/Contents/Story":
      return (
        <Container>
          <BackBtn />
          <Title>식서스 매거진</Title>
          <div></div>
        </Container>
      );
    case "/Sixers/Contents/Season":
      return (
        <Container>
          <BackBtn />
          <Title>식서스 시즌</Title>
          <div></div>
        </Container>
      );
    case "/Sixers/Contents/Leaders":
      return (
        <Container>
          <BackBtn />
          <Title>식서스 역대 팀장</Title>
          <div></div>
        </Container>
      );
    default:
      break;
  }
};

export default ContentsNav;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Title = styled.p`
  font-size: 24px;
  font-family: "Jua";
  text-align: center;
  padding-top: 4px;
  grid-column: span 2;
`;
