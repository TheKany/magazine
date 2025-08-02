"use client";

import { BASE_IMG_URL } from "@/app/config";
import ImageBox from "@/components/_common/Element/ImageBox";
import Container from "@/components/_common/Element/_Container";
import React from "react";
import styled from "styled-components";

const NewsPage = () => {
  return (
    <Container>
      <NewsContainer>
        {Array.from({ length: 11 }).map((_, idx) => {
          return (
            <ImageBox
              key={idx}
              src={`${BASE_IMG_URL}/news/news${idx}.png`}
              alt={`뉴스${idx}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
          );
        })}
      </NewsContainer>
    </Container>
  );
};

export default NewsPage;

const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  gap: 16px;
`;
