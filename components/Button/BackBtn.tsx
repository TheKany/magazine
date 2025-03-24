"use client";

import React from "react";
import Arrowsvg from "../svg/Arrow";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();
  const onClickBack = () => {
    router.back();
  };
  return (
    <BackButton onClick={onClickBack}>
      <Arrowsvg />
    </BackButton>
  );
};

export default BackBtn;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  transform: rotate(180deg);
`;
