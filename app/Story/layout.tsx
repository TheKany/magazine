import Back from "@/components/Button/Back";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <>
      {children}
      <Back />
    </>
  );
};

export default layout;
