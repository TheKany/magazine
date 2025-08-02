"use client";

import Card from "@/components/_common/Button/Card";
import CardContainer from "@/components/CardContainer";
import Container from "@/components/_common/Element/_Container";

import React from "react";

const Story = () => {
  return (
    <Container>
      <CardContainer>
        <Card season="1" />
        <Card season="2" />
        <Card season="3" />
        <Card season="4" />
        <Card season="5" />
      </CardContainer>
    </Container>
  );
};

export default Story;
