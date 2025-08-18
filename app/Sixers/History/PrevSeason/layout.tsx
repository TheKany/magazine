import { Children } from "@/Types/types";
import BackBtn from "@/components/_common/Button/BackBtn";
import Container from "@/components/_common/Element/_Container";
import React from "react";

const layout = ({ children }: Children) => {
  return (
    <Container>
      <BackBtn />
      {children}
    </Container>
  );
};

export default layout;
