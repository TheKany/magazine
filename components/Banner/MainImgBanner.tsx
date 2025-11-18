// 메인 페이지 중앙 배너
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import styled from "styled-components";
import ImageBox from "../_common/Element/ImageBox";
import { BASE_IMG_URL } from "@/app/config";
import Link from "next/link";

// import dynamic from "next/dynamic";
// const Fireworks = dynamic(() => import("../_common/Lottie/Fireworks"), {
//   ssr: false,
// });

const MainImgBanner = () => {
  const imgList = [
    `${BASE_IMG_URL}/banner/season7-start.png`,
  ];

  return (
    <>
      <Box>
        {/* <Fireworks /> */}

        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
        >
          {imgList.map((src) => {
            const isMvp = src.includes("season6_mvp");

            const slide = (
              <ImgWrapper>
                <ImageBox
                  src={src}
                  alt="메인 배너"
                  fill
                  priority
                  unoptimized
                  style={{ objectFit: "contain" }}
                />
              </ImgWrapper>
            );

            return (
              <SwiperSlide key={src}>
                {isMvp ? (
                  <FullLink
                    href="/Sixers/Contents/Story/season6"
                    aria-label="시즌6 MVP 스토리로 이동"
                  >
                    {slide}
                  </FullLink>
                ) : (
                  slide
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <MvpBtn /> */}
      </Box>
    </>
  );
};

export default MainImgBanner;

const Box = styled.section`
  width: 100%;
  height: 280px;
  border-radius: 8px;
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
`;

const FullLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`;
