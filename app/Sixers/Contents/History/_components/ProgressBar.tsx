import React from "react";
import styled from "styled-components";

type Props = {
  progress: number;
  totalDate: number;
  remainDate: number;
};

const ProgressBar = ({ progress, remainDate, totalDate }: Props) => {
  return (
    <ProgressWrapper>
      <ProgressLabel>
        시즌 진행률: {progress}% ({totalDate - remainDate} / {totalDate})
      </ProgressLabel>
      <BarBackground>
        <BarFill percent={progress} />
      </BarBackground>
    </ProgressWrapper>
  );
};

export default ProgressBar;

const ProgressWrapper = styled.div`
  margin: 20px 0;
`;

const ProgressLabel = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
`;

const BarBackground = styled.div`
  background-color: #eee;
  border-radius: 10px;
  height: 14px;
  width: 100%;
`;

const BarFill = styled.div<{ percent: number }>`
  background-color: #4caf50;
  height: 100%;
  border-radius: 10px;
  width: ${({ percent }) => percent}%;
  transition: width 0.3s ease-in-out;
`;
