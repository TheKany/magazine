import React from "react";

type PlanTypes = {
  id: number;
  date: string;
  trade: boolean;
  type: string;
};

const Schedule = (weekPlan: PlanTypes) => {
  console.log("weekPlan", weekPlan);

  return (
    <div>
      <div>
        <p>날짜</p>
        <p>계획</p>
      </div>
      <button>play season 8</button>
    </div>
  );
};

export default Schedule;
