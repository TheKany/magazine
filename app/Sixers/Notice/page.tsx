"use client";

import AccordionBox from "@/components/Accordion";
import Container from "@/components/_common/Element/_Container";
import React from "react";
import styled from "styled-components";

const NoticePage = () => {
  return (
    <Container>
      <Title>공지사항</Title>

      <AccordionBox title="회비 안내">
        <Text>매월 5일은 회비 내는 날입니다.</Text>
        <Text>월 회비 : 40,000원</Text>
        <Text>운영진의 안내에 따라 10일까지 입금 부탁드립니다.</Text>
        <Text>개인사정이 있으실 경우, 따로 연락 부탁드립니다.</Text>
      </AccordionBox>
    </Container>
  );
};

export default NoticePage;

const Title = styled.p`
  font-size: 25px;
  font-weight: 700;
  padding: 16px 0;
`;

const Text = styled.p`
  font-size: 14px;
`;
