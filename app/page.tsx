"use client";

import Card from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Title />

      <CardContainer>
        <Card season="1" />
        <Card season="2" />
        <Card season="3" />
        <Card season="4" />
      </CardContainer>
    </Wrapper>
  );
}
