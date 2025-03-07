"use client";

import Back from "@/components/Button/Back";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const NewsPage = () => {
  return (
    <>
      <NewsContainer>
        {Array.from({ length: 11 }).map((_, idx) => {
          return (
            <Image
              key={idx}
              src={`/img/news/news${idx}.png`}
              alt={`뉴스${idx}`}
              width={400}
              height={300}
              layout="responsive"
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcfXZ3PQAHUgLEPrhDbwAAAABJRU5ErkJggg=="
            />
          );
        })}
      </NewsContainer>

      <Back />
    </>
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
