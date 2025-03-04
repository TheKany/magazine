import Back from "@/components/Back";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Title />
      {children}
      <Back />
    </Wrapper>
  );
};

export default layout;
