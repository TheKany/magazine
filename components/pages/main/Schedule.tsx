import React from "react";
import styled from "styled-components";

type PlanTypes = {
  id: number;
  date: string;
  trade: boolean;
  type: string;
};

const Schedule = (weekPlan: PlanTypes) => {
  console.log("weekPlan", weekPlan);

    const onClickIngameSeason = () => {
    // router.push("Sixers/InGameSeason");
    alert("시즌 준비 중..");
  };

  return (
    <ScheduleBox>
      <ScheduleTextBox>
        <p>날짜</p>
        <p>계획</p>
      </ScheduleTextBox>
      
        <BtnBox>
          <SeasonButton onClick={onClickIngameSeason}>
            Play Season 8
          </SeasonButton>
        </BtnBox>
    </ScheduleBox>
  );
};

export default Schedule;

const ScheduleTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ScheduleBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`

const BtnBox = styled.section`
  grid-column: span 3;
  width: 100%;
  height: 80px;
  margin: 0 auto;
`;

const SeasonButton = styled.button`
  font-size: 24px;
  font-family: "FingerPaint";
  color: #fff;
  background-color: #492a8d;
  border-radius: 25px;
  width: 100%;
  height: 100%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;