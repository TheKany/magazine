"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <Container>
      <Link href={"/"}>
        <Image src={"/title.svg"} alt="타이틀" width={200} height={110} />
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
`;
