"use client";

import Image from "next/image";
// import Slider from "react-slick";
import styled from "styled-components";
import { BASE_IMG_URL } from "@/app/config";
import dynamic from "next/dynamic";
import Wrapper from "./_Wrapper";

const Fireworks = dynamic(() => import("./Lottie/Fireworks"), {
  ssr: false,
});

const Banner = () => {
  // const settings = {
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 3000,
  //   cssEase: "linear",
  // };

  return (
    <Wrapper>
      {/* <Slider {...settings}>
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
      </Slider> */}

      <Fireworks />

      <Image
        src={`${BASE_IMG_URL}/banner/season5_winner.png`}
        alt="season5 우승팀"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        unoptimized
        priority
      />

      <Text>식서스 여러분, 시즌 5 고생하셨습니다!</Text>
    </Wrapper>
  );
};

export default Banner;

const Text = styled.p`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`;
