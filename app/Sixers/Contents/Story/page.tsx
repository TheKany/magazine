"use client";

import CardContainer from "@/components/CardContainer";
import Card from "@/components/_common/Button/Card";
import Container from "@/components/_common/Element/_Container";
import styled from "styled-components";

const Story = () => {
  return (
    <Container>
      <Box>
        <CardContainer>
          <Card season="7" />
          <Card season="6" />
          <Card season="5" />
          <Card season="4" />
          <Card season="3" />
          <Card season="2" />
          <Card season="1" />
        </CardContainer>
      </Box>
    </Container>
  );
};

export default Story;

const Box = styled.div`
  padding: 8px;
`;
