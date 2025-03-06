"use client";

import Card from "@/components/Button/Card";
import CardContainer from "@/components/CardContainer";

import React from "react";

const Story = () => {
  return (
    <CardContainer>
      <Card season="1" />
      <Card season="2" />
      <Card season="3" />
      <Card season="4" />
    </CardContainer>
  );
};

export default Story;
