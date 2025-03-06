"use client";

import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const LeaderPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
  };

  const data = [
    {
      season: 1,
      leader: ["이 승", "기세면", "강동구"],
      winner: "워시 페이서스",
    },
    {
      season: 2,
      leader: ["신지호", "동건명", "강동구"],
      winner: "어게인 워시 페이서스",
    },
    {
      season: 3,
      leader: ["김진우", "이근우", "조형준"],
      winner: "워시 페이서스",
    },
    {
      season: 4,
      leader: ["정재훈", "심상민", "이민재"],
      winner: "워시 페이서스",
    },
    {
      season: 5,
      leader: ["", "", ""],
      winner: "",
    },
  ];

  return (
    <>
      <Title>식서스 역대 팀장</Title>
      <Slider {...settings}>
        {data.map((el) => (
          <Slide key={el.season}>
            <SeasonTitle>시즌 {el.season}</SeasonTitle>
            <ImageWithSkeleton season={`${el.season}`} />
          </Slide>
        ))}
      </Slider>
    </>
  );
};

const ImageWithSkeleton = ({ season }: { season: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <ImageWrapper>
      {!imageLoaded && <Skeleton />}
      <StyledImage
        src={`/img/s${season}/leader.png`}
        alt={`시즌${season} 팀장`}
        width={300}
        height={220}
        onLoad={() => setImageLoaded(true)}
        $loaded={imageLoaded}
      />
    </ImageWrapper>
  );
};

export default LeaderPage;

const Title = styled.p`
  font-size: 25px;
  font-weight: 700;
  padding: 16px 0;
  margin-bottom: 24px;
`;

const SeasonTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: "Jua";
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Skeleton = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #e0e0e0 25%, #f8f8f8 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;

  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const StyledImage = styled(Image)<{ $loaded: boolean }>`
  display: ${({ $loaded }) => ($loaded ? "block" : "none")};
  transition: opacity 0.3s ease-in-out;
`;
