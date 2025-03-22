"use client";

import Container from "@/components/_Container";
import React from "react";
import styled from "styled-components";

const page = () => {
  return (
    <Container>
      <Title>식서스 시즌 5 리그 정보</Title>

      <p>팀정보</p>

      <TeamContainer>
        <p>리바운드</p>
      </TeamContainer>
    </Container>
  );
};

export default page;

const Title = styled.p`
  font-size: 24px;
  font-family: "Jua";
  text-align: center;
`;

const TeamContainer = styled.div`
  background-color: #fff;
`;
