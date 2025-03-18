"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";
import { BASE_IMG_URL } from "@/app/config";

const Banner = () => {
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
    <Container>
      <Slider {...settings}>
        {Array.from({ length: 6 }).map((_, idx) => {
          return (
            <div key={idx}>
              <Image
                src={`${BASE_IMG_URL}/banner/banner${idx}.png`}
                alt={`광고${idx}`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                unoptimized
                priority
              />
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default Banner;

const Container = styled.div``;
