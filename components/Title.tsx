"use client";

import { BASE_IMG_URL } from "@/app/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
const Title = () => {
  return (
    <Container>
      <Link href={"/"} style={{ position: "relative" }}>
        <Image
          src={`${BASE_IMG_URL}/logo/logo_03.png`}
          alt="타이틀"
          width={222}
          height={132}
          priority
        />
      </Link>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;
