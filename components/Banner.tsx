"use client";

// import dynamic from "next/dynamic";
import Image from "next/image";
import Slider from "react-slick";
import { BASE_IMG_URL } from "@/app/config";
import Wrapper from "./_Wrapper";
import styled from "styled-components";

// const Fireworks = dynamic(() => import("./Lottie/Fireworks"), {
//   ssr: false,
// });

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
    <Wrapper>
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

      {/* <Fireworks /> */}

      {/* <Image
        src={`${BASE_IMG_URL}/banner/season5_winner.png`}
        alt="season5 우승팀"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        unoptimized
        priority
      /> */}
    </Wrapper>
  );
};

export default Banner;

const BannerContainer = styled.div`
  background-color: #121212;
  width: 100%;
  height: 100%;
`;
