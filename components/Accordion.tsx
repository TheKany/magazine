"use client";

import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  children: React.ReactNode;
};

const AccordionBox = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Header onClick={() => setIsOpen(!isOpen)}>
        {title}
        <ToggleIcon>{isOpen ? "▲" : "▼"}</ToggleIcon>
      </Header>
      <ContentWrapper $isOpen={isOpen}>
        <Content>{children}</Content>
      </ContentWrapper>
    </Container>
  );
};

export default AccordionBox;

const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  padding: 10px;
  background-color: #f8f8f8;
`;

const ToggleIcon = styled.span`
  font-size: 14px;
`;

const ContentWrapper = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const Content = styled.div`
  padding: 10px;
`;
