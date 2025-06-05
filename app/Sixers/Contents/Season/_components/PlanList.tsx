"use client";

import BallStamp from "@/components/svg/BallStamp";
import { handleSeasonData } from "@/util/handleSeasonData";
import React from "react";
import styled from "styled-components";

const PlanList = () => {
  const nowDate = new Date();
  const yyyy = nowDate.getFullYear();
  const planData = handleSeasonData();

  return (
    <PlanListContainer>
      {planData.map((item, idx) => {
        return (
          <PlanIcon $nowGame={item.isNowGame} key={idx}>
            {item.isFinish ? (
              <CancleIcon>
                <BallStamp />
              </CancleIcon>
            ) : null}
            <DateText $nowGame={item.isNowGame}>
              {item.date.replace(`${yyyy}-`, "").replace("-", "/")}
            </DateText>
            <NameText $nowGame={item.isNowGame}>{item.name}</NameText>
          </PlanIcon>
        );
      })}
    </PlanListContainer>
  );
};

export default PlanList;

const PlanListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

const PlanIcon = styled.div<{ $nowGame: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  box-shadow: ${(props) =>
    props.$nowGame
      ? "rgba(171, 60, 223, 0.2) 0px 1px 10px 8px"
      : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CancleIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DateText = styled.p<{ $nowGame: boolean }>`
  font-size: 14px;
  color: ${(props) => (props.$nowGame ? "#121212" : "#ccc")};
`;

const NameText = styled.p<{ $nowGame: boolean }>`
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => (props.$nowGame ? "#121212" : "#ccc")};
`;
