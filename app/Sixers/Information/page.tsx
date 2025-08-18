"use client";

import { BASE_IMG_URL } from "@/app/config";
import MainLink from "@/components/_common/Button/MainLink";
import Wrapper from "@/components/_common/Element/_Wrapper";
import ImageBox from "@/components/_common/Element/ImageBox";
import React from "react";
import styled from "styled-components";

const Information = () => {
  return (
    <Wrapper>
      <Box>
        <ImageBox
          src={`${BASE_IMG_URL}/title/info-main.webp`}
          alt="안내 사항"
          width={1920}
          height={1080}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          unoptimized
          priority
        />

        <MenuBox>
          <MainLink
            url="Information/Notice"
            title="식서스 공지사항"
            subtitle="SIXERS NOTICE"
          />

          <MainLink
            url="Information/Rules"
            title="식서스 규칙"
            subtitle="SIXERS RULES"
          />
        </MenuBox>
      </Box>
    </Wrapper>
  );
};

export default Information;

const Box = styled.div`
  padding: 24px 16px;
`;

const MenuBox = styled.div`
  margin: 40px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
