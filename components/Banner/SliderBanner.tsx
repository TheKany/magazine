"use client";

import { BASE_IMG_URL } from "@/app/config";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const SliderBanner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <BannerContainer>
      <Slider {...settings}>
        {Array.from({ length: 4 }).map((_, idx) => {
          return (
            <BannerContainer key={idx}>
              <Image
                src={`${BASE_IMG_URL}/banner/banner2-${idx + 1}.png`}
                alt={`광고${idx}`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                unoptimized
                priority
              />
            </BannerContainer>
          );
        })}
      </Slider>
    </BannerContainer>
  );
};

export default SliderBanner;

const BannerContainer = styled.div`
  background-color: #121212;
  width: 100%;
  height: 100%;
`;
