import { Children } from "@/Types/types";
import ContentsNav from "@/components/ContentsNav";
import React from "react";

const layout = ({ children }: Children) => {
  return (
    <>
      <ContentsNav />
      {children}
    </>
  );
};

export default layout;
