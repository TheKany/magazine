"use client";

import React from "react";
import styled from "styled-components";

const Back = () => {
  return (
    <Container>
      <BackBtn href="/">목록으로</BackBtn>
    </Container>
  );
};

export default Back;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 16px 0;
`;

const BackBtn = styled.a`
  width: 100px;
  margin: 0 auto;
  padding: 4px;

  text-align: center;
  font-size: 14px;

  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

  :active {
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
`;
