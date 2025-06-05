"use client";

import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
};

const AlarmBanner = ({ text }: Props) => {
  return <AlarmText>{text}</AlarmText>;
};

export default AlarmBanner;

const AlarmText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 14px;
  background-color: #121212;
  color: #fff;
  padding: 4px 0;
`;
