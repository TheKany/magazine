"use client";

import MainLink from "@/components/Button/MainLink";
import Copy from "@/components/svg/Copy";
import styled from "styled-components";

export default function Home() {
  const accountInfo = "3333143447108 카카오뱅크 강동구";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountInfo).then(() => {
      alert("계좌번호가 복사되었습니다.");
    });
  };

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
        <CopyableText onClick={handleCopy}>
          {accountInfo} <Copy />
        </CopyableText>
        <Text>늦어도 10일까지는 입금 부탁드립니다.</Text>
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

const CopyableText = styled(Text)`
  font-weight: 700;
  color: #121212;
  padding: 2px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
