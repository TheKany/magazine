"use client";

import MainLink from "@/components/Button/MainLink";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <LinkList>
        <MainLink url="/Rules" title="식서스 회칙" subtitle="Sixers Rules" />
        <MainLink url="/News" title="식서스 뉴스" subtitle="Sixers News" />
      </LinkList>

      <LinkListGrid>
        <MainLink
          url="/Leaders"
          title="식서스 팀장"
          subtitle="Sixers Season Leaders"
        />
        <MainLink
          url="/Calendar"
          title="식서스 일정"
          subtitle="Sixers Schedule"
        />
      </LinkListGrid>

      <LinkList>
        <MainLink
          url="/Story"
          title="식서스 매거진"
          subtitle="Sixers Magazine"
        />
      </LinkList>

      <TextContainer>
        <Text>매월 5일은 회비 내는 날입니다.</Text>
        <Text>월 회비 : 40,000원</Text>
        <Text>운영진의 안내에 따라 10일까지 입금 부탁드립니다.</Text>
        <Text>개인사정이 있으실 경우, 따로 연락 부탁드립니다.</Text>
      </TextContainer>
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

const LinkListGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 14px;
`;
