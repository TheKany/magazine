"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const LeaderPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 10000,
    cssEase: "linear",
  };

  return (
    <>
      <Title>식서스 역대 팀장</Title>
      <Slider {...settings}>
        <div>
          <SeasonTitle>시즌 1</SeasonTitle>
          <Image
            src={"/img/s1/leader.png"}
            alt="시즌1 팀장"
            width={300}
            height={220}
          />
        </div>

        <div>
          <SeasonTitle>시즌 2</SeasonTitle>
          <Image
            src={"/img/s2/leader.png"}
            alt="시즌2 팀장"
            width={300}
            height={220}
          />
        </div>

        <div>
          <SeasonTitle>시즌3</SeasonTitle>
          <Image
            src={"/img/s3/leader.png"}
            alt="시즌3 팀장"
            width={300}
            height={220}
          />
        </div>

        <div>
          <SeasonTitle>시즌 4</SeasonTitle>
          <Image
            src={"/img/s4/leader.png"}
            alt="시즌4 팀장"
            width={300}
            height={220}
          />
        </div>

        <div>
          <SeasonTitle>시즌 5</SeasonTitle>
          <Image
            src={"/img/s5/leader.png"}
            alt="시즌5 팀장"
            width={300}
            height={220}
          />
        </div>
      </Slider>
    </>
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
