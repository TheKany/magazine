import { Children } from "@/Types/types";
import Container from "@/components/_common/Element/_Container";
import React from "react";

const layout = ({ children }: Children) => {
  return <Container>{children}</Container>;
};

export default layout;
