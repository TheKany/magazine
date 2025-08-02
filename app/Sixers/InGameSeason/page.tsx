"use client";

import { BASE_IMG_URL } from "@/app/config";
import ImageBox from "@/components/_common/Element/ImageBox";
import React from "react";
import styled from "styled-components";
import TeamRanking from "@/components/TeamRanking";
import { DivideLine } from "@/components/_common/Element/_DivideLine";

const InGameSeason = () => {
  return (
    <Box>
      <ImageBox
        src={`${BASE_IMG_URL}/title/inseason-main.webp`}
        alt="인게임 정보 타이틀"
        width={1920}
        height={1080}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        unoptimized
        priority
      />

      <DivideLine />

      <TeamRanking />
    </Box>
  );
};

export default InGameSeason;

const Box = styled.div`
  padding: 24px 16px;
`;
