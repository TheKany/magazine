"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Image from "next/image";

const BackBtn = () => {
  const router = useRouter();
  const onClickBack = () => {
    router.back();
  };
  return (
    <BackButton onClick={onClickBack}>
      <Image src={"/back.svg"} alt="뒤로가기" width={100} height={30} />
    </BackButton>
  );
};

export default BackBtn;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 8px 0;
`;
