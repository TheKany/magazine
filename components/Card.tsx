import Image from "next/image";
import React from "react";
import styled from "styled-components";

type Props = {
  season: string;
};

const Card = ({ season }: Props) => {
  return (
    <Container href={`/Story/season${season}`}>
      <Image
        src={`/img/s${season}/mvp.png`}
        alt={`${season}시즌 mvp`}
        width={400}
        height={530}
        layout="responsive"
      />

      <Title>식서스 시즌 {season} 호</Title>
    </Container>
  );
};

export default Card;

const Container = styled.a`
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
