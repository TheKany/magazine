"use client";

import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";
import Home from "./svg/Home";
import Wrapper from "./_Wrapper";

const Navigation = () => {
  const router = useRouter();
  const onClickHome = () => {
    router.push("/Sixers");
  };

  return (
    <Wrapper>
      <NavContainer>
        <MenuBtn onClick={onClickHome}>
          <Home />
        </MenuBtn>
      </NavContainer>
    </Wrapper>
  );
};

export default Navigation;

const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
`;

const MenuBtn = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 50px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;
