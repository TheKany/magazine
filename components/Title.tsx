"use client";

import { BASE_IMG_URL } from "@/app/config";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
const Title = () => {
  return (
    <Container>
      <Link href={"/"} style={{ position: "relative" }}>
        <Image
          src={`${BASE_IMG_URL}/logo/logo_04.svg`}
          alt="타이틀"
          width={120}
          height={36}
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
  justify-content: start;
  align-items: center;
  padding: 24px 16px 16px 16px;
`;
