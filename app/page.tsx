"use client";

import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Arrowsvg from "@/components/svg/Arrow";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Title />

      <LinkList>
        <LinkBtn href="/Story">
          <TextBox>
            <Text>식서스 히스토리</Text>
          </TextBox>
          <Arrowsvg />
        </LinkBtn>
        <LinkBtn href="/Leaders">
          <Text>식서스 시즌안내</Text>
          <Arrowsvg />
        </LinkBtn>
        <LinkBtn href="/Calendar">
          <Text>식서스 일정</Text>
          <Arrowsvg />
        </LinkBtn>
        <LinkBtn href="/Rules">
          <Text>식서스 회칙</Text>
          <Arrowsvg />
        </LinkBtn>
        <LinkBtn href="/News">
          <Text>식서스 뉴스</Text>
          <Arrowsvg />
        </LinkBtn>
      </LinkList>
    </Wrapper>
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

const LinkBtn = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;

  font-family: "Jua";
  color: #121212;
  font-size: 18px;

  position: relative;
  padding: 16px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Text = styled.span`
  padding-top: 4px;
`;
