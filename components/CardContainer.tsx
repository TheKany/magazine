import { Children } from "@/Types/types";
import React from "react";
import styled from "styled-components";

const CardContainer = ({ children }: Children) => {
  return <Container>{children}</Container>;
};

export default CardContainer;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 8px;

  margin: 24px 0;
  position: relative;
`;
