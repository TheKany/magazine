"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <Container>
      <Link href={"/"}>
        <Image src={"/title.png"} alt="타이틀" width={222} height={132} />
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
