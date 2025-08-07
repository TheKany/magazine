"use client";

import { Children } from "@/Types/types";
import React from "react";
import styled from "styled-components";

const Container = ({ children }: Children) => {
  return <ContainerEl>{children}</ContainerEl>;
};

export default Container;

const ContainerEl = styled.section`
  margin: 0 auto;
  margin-bottom: 40px;
  padding-top: 16px;
  padding-bottom: 32px;
`;
