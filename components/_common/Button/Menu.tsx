"use client";

import React from "react";
import Hamberger from "../svg/Hamberger";
import styled from "styled-components";

const Menu = () => {
  const onClickOpenMenu = () => {};

  return (
    <MebuButton onClick={onClickOpenMenu}>
      <Hamberger />
    </MebuButton>
  );
};

export default Menu;

const MebuButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;
