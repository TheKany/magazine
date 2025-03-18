"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";

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
                src={`/img/news/ad${idx}.png`}
                alt={`광고${idx}`}
                width={400}
                height={300}
                layout="responsive"
                placeholder="blur"
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcfXZ3PQAHUgLEPrhDbwAAAABJRU5ErkJggg=="
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
