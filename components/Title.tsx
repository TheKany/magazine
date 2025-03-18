"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <Container>
      <Link href={"/"} style={{ position: "relative" }}>
        <Image
          src={
            "https://drive.google.com/uc?export=view&id=1FWPtzXVJV830Ec76Jhx2U3rA80OL175O"
          }
          alt="타이틀"
          width={222}
          height={132}
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
