import { BASE_IMG_URL } from "@/app/config";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

type Props = {
  season: string;
};

const Card = ({ season }: Props) => {
  switch (season) {
    case "1":
      return (
        <DivContainer>
          <Image
            src={`${BASE_IMG_URL}/season/s${season}/mvp.png`}
            alt={`${season}시즌 mvp`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />

          <Title>식서스 시즌 {season} 호</Title>
        </DivContainer>
      );

    default:
      return (
        <Container href={`Story/season${season}`}>
          <Image
            src={`${BASE_IMG_URL}/season/s${season}/mvp.png`}
            alt={`${season}시즌 mvp`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />

          <Title>식서스 시즌 {season} 호</Title>
        </Container>
      );
  }
};

export default Card;

const Container = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const DivContainer = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;
