import React from "react";
import styled from "styled-components";

// 승: 3점 | 무: 1점 | 패: 0점
const TotalRank = () => {
  return (
    <Table>
      <GridTable>
        <p>순위</p>
        <p>팀명</p>
        <p>승</p>
        <p>무</p>
        <p>패</p>
        <p>승점</p>
      </GridTable>
      <InfoTable>
        <GridTable className="team-white">
          <p>-위</p>
          <p>리바운드</p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
        </GridTable>
        <GridTable className="team-black">
          <p>-위</p>
          <p>청용열차</p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
        </GridTable>
        <GridTable className="team-purple">
          <p>-위</p>
          <p>常勝(상승)</p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
        </GridTable>
      </InfoTable>
      <InfoText>*팀의 퍼스트컬러입니다. 유니폼 색과 무관합니다.</InfoText>
    </Table>
  );
};

export default TotalRank;

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const GridTable = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  text-align: center;
  padding: 8px 0;
  margin: 4px 0;

  & p {
    font-size: 16px;
  }

  /* 순위 */
  & :nth-child(1) {
  }

  /* 팀명 */
  & :nth-child(2) {
    font-weight: 700;
    grid-column: span 3;
  }

  /* 화이트팀 */
  &.team-white {
    background-color: #fff;
    color: #121212;
  }

  /* 블랙팀 */
  &.team-black {
    background-color: #121212;
    color: #fff;
  }

  /* 퍼플팀 */
  &.team-purple {
    background-color: #371f4a;
    color: #fff;
  }
`;

const InfoText = styled.p`
  text-align: end;
  font-size: 12px;
  color: #464646;
`;
