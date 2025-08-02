"use client";

import GroupRule from "@/components/GroupRule";
import LeagueRule from "@/components/LeagueRule";
import Container from "@/components/_common/Element/_Container";
import React, { useState } from "react";
import styled from "styled-components";

const RulePage = () => {
  const [menu, setMenu] = useState(1);
  const onClickMenu = (id: number) => {
    setMenu(id);
  };
  return (
    <Container>
      <ButtonContainer>
        <MenuButton onClick={() => onClickMenu(1)} $active={menu === 1}>
          회칙
        </MenuButton>
        <MenuButton onClick={() => onClickMenu(2)} $active={menu === 2}>
          리그 규칙
        </MenuButton>
      </ButtonContainer>

      {menu === 1 ? <GroupRule /> : <LeagueRule />}
    </Container>
  );
};

export default RulePage;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const MenuButton = styled.button<{ $active: boolean }>`
  padding: 8px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.$active
      ? "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
      : "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"};
  background-color: ${(props) => (props.$active ? "#f0f0f0" : "white")};
  transition: all 0.2s ease-in-out;
`;
