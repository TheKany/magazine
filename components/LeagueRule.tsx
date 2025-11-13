"use client";

import React from "react";
import { RuleList, RuleListItem, RuleSection, RuleText } from "./RuleUi";
import styled from "styled-components";

const LeagueRule = () => {
  return (
    <>
      <RuleSection title="제 1조 (기본)">
        <RuleText>
          본 회에서 진행하는 농구 경기의 기본 규칙은 공식적으로 제정되어있는
          경기 규칙서를 따른다.
        </RuleText>
      </RuleSection>

      <RuleSection title="제 2조 (경기 시간)">
        <RuleList>
          <RuleListItem>
            경기 시작 시간은 항상 오전 6시 진행을 기준으로 한다.
          </RuleListItem>
          <RuleListItem>
            경기 시간은 쿼터 당 7분이며, 총 4쿼터를 진행하는 것을 목표로 한다.
          </RuleListItem>
          <RuleListItem>
            경기가 진행되는 시간동안은 특별한 사유가 존재하지 않는 한 시간을
            계속 보낸다.
          </RuleListItem>
          <RuleListItem>다만, 마지막 1분은 데드타임으로 진행한다.</RuleListItem>
          <RuleListItem>
            빠른 경기 진행을 위해 경기가 끝난 후, 쉬는 시간은 1분으로 지정한다.
          </RuleListItem>
        </RuleList>
      </RuleSection>

      <RuleSection title="제 3조 (경기 외 인원)">
        <RuleList>
          <RuleListItem>
            경기 외 인원은 심판(2명), 카메라(1명), 점수판 조작(1명)을 기본으로
            한다.
          </RuleListItem>
          <RuleListItem>
            심판(2명)은 현재 경기를 뛰지 않는 팀에서 진행해준다.
          </RuleListItem>
          <RuleListItem>나머지 인원은 자유롭게 역할을 맡아준다.</RuleListItem>
        </RuleList>
      </RuleSection>

      <RuleSection title="제 4조 (파울)">
        <RuleList>
          <RuleListItem>
            경기 내 행해지는 파울 콜은 공식적인 농구 룰을 따른다.
          </RuleListItem>
          <RuleListItem>
            팀 파울이 4개 이상이 되면 자유투(1구 2득점 인정)를 실행한다.
          </RuleListItem>
          <RuleListItem>
            유파울(속공 저지 파울, 비신사적인 파울)시 상대편에게 자유투 1구와
            공격권을 부여한다.
          </RuleListItem>
          <RuleListItem>
            선수들의 부상 방지를 위해 의도와 상관없이 과격한 파울을 할 경우 삼심
            합의하에 유파울 부여와 함께 경고 1회, 누전 2회시 퇴장조치를 한다.
          </RuleListItem>
          <RuleListItem>심판 콜은 번복없이 진행한다.</RuleListItem>
          <RuleListItem>
            경기 중 심판 콜에 대해 과도한 항의 및 상대 팀원에게 불필요한
            언쟁으로 경기 전체 분위기를 해할 시 테크니컬 파울 부여한다.
          </RuleListItem>
          <RuleListItem>
            위와 같은 사항이 지속적으로 반복될 경우 이유를 불문하고 퇴장 조치를
            한다.
          </RuleListItem>
        </RuleList>
      </RuleSection>

      <RuleSection title="제 5조 (리그전 진행)">
        <RuleList>
          <RuleListItem>
            해당 주차의 리그전 정상 진행 여부는 해당 주 투표 인원을 기준으로
            한다.
          </RuleListItem>
          <RuleListItem>
            해당 주차의 각 팀 투표 인원이 5명 이상이면 정상적으로 리그전을
            진행한다.
          </RuleListItem>
          <RuleListItem>
            아래 각 호의 이유로 인해 리그전을 정상적으로 진행하지 못할 경우 해당
            팀(들)은 몰수표 처리를 한다.
          </RuleListItem>
          <p style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.5 }}>
            1. 해당 주차의 투표 인원이 5인 미만인 팀
          </p>
          <p style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.5 }}>
            2. 경기 시작 시간이 된 이후, 본인 팀 경기 차례까지 인원이 준비되지
            않은 팀
          </p>
          <RuleListItem>
            인원이 준비된 팀 2팀 이상일 경우 남은 팀의 리그전 경기 진행 후 남은
            시간은 이벤트전 경기로 전환한다.
          </RuleListItem>
          <RuleListItem>
            인원이 준비된 팀이 1팀이라 리그전 진행이 불가능한 주차는 밸런스에
            맞춰 팀을 짜고, 이벤트전을 진행한다.
          </RuleListItem>
          <RuleListItem>
            리그전 진행시 당일 참석자에 한하여 동등한 출전시간을 보장하도록
            한다.
          </RuleListItem>
          <RuleListItem>
            시즌 승률이 동률일 경우 동률일 경우 두팀간의 승자전 원칙으로 순위를
            정한다.
          </RuleListItem>
        </RuleList>
      </RuleSection>

      <RuleSection title="제 6조 (출석 및 참여 의무)">
        <RuleList>
          <RuleListItem>
            시즌 경기 출석률이 50퍼센트(%) 미만인 회원은 해당 시즌의 뱃지 획득
            자격을 상실하며, 차기 시즌 팀장으로 선임될 수 없다.
          </RuleListItem>
          <RuleListItem>
            시즌 중 실시되는 공식 투표에 2회 이상 참여하지 않은 회원은 차기 시즌
            참가가 제한된다.
          </RuleListItem>
          <RuleListItem>
            사전 통보 없이 경기 또는 공식 행사에 2회 이상 무단 불참한 회원은
            차기 시즌 참가가 제한된다.
          </RuleListItem>
          <RuleListItem>
            아래 각 호에 해당하는 경우, 운영진의 승인을 통해 예외로 인정할 수
            있다.
          </RuleListItem>
          <p style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.5 }}>
            1. 개인의 부상, 질병 등 건강상의 사유
          </p>
          <p style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.5 }}>
            2. 직장 근무, 출장, 시험, 군사훈련 등 불가피한 사정
          </p>
          <p style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.5 }}>
            3. 천재지변, 가족의 경조사 등 불가항력적 사유
          </p>
          <p style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.5 }}>
            4. 그 밖에 운영진이 타당하다고 인정하는 사유
          </p>
        </RuleList>
      </RuleSection>

      <RuleSection title="[신설 / 개정안 기록]">
        <RuleText>2024.06.29</RuleText>
        <RuleList>
          <RuleListItem>
            <Change>[개정]</Change> 제 4조 2항) 팀 파울이 5개 이상이 되면
            자유투를 실행한다. ➡️
            <span style={{ fontWeight: 600 }}>
              팀 파울이 4개 이상이 되면 자유투(1구 2득점 인정)를 실행한다.
            </span>
          </RuleListItem>
          <RuleListItem>
            <New>[신설]</New> 제 4조 4항) 유파울(속공 저지 파울, 비신사적인
            파울)시 상대편에게 자유투 1구와 공격권을 부여한다.
          </RuleListItem>
        </RuleList>
        <RuleText>2024.07.25</RuleText>
        <RuleList>
          <RuleListItem>
            <New>[신설]</New> 제 2조 1항) 경기 시작 시간은 항상 오전 6시 진행을
            기준으로 한다.
          </RuleListItem>
          <RuleListItem>
            <New>[신설]</New> 제 5조) 리그전 진행 조항
          </RuleListItem>
        </RuleList>
        <RuleText>2024.09.28</RuleText>
        <RuleList>
          <RuleListItem>
            <New>[신설]</New> 제 4조 5항) 과격한 파울에 대한 경고, 퇴장조치 항목
          </RuleListItem>
          <RuleListItem>
            <New>[신설]</New> 제 5조 6항) 당일 참석자에 대한 동일 출전 시간 보장
            항목
          </RuleListItem>
        </RuleList>
        <RuleText>2025.03.06</RuleText>
        <RuleList>
          <RuleListItem>
            <New>[신설]</New> 제 4조 6항) 경기내 과도한 항의에 대한 조치
          </RuleListItem>
          <RuleListItem>
            <New>[신설]</New> 제 4조 7항) 반복적인 사항에 대한 조치
          </RuleListItem>
        </RuleList>
        <RuleText>2025.11.13</RuleText>
        <RuleList>
          <RuleListItem>
            <New>[신설]</New> 제 6조) 출석 및 참여 의무
          </RuleListItem>
          <RuleListItem>
            <Change>[개정]</Change> 제 5조 4항)
            <span style={{ textDecoration: "line-through" }}>
              인원이 준비된 팀은 그렇지 않은 팀 수 만큼 승점을 가져간다.
            </span>
            ➡️
            <span style={{ fontWeight: 600 }}>
              인원이 준비된 팀 2팀 이상일 경우 남은 팀의 리그전 경기 진행 후
              남은 시간은 이벤트전 경기로 전환한다.
            </span>
          </RuleListItem>
          <RuleListItem>
            <Change>[개정]</Change> 제 5조 5항) 리그전 진행이 불가능한 주차는
            밸런스에 맞춰 팀을 짜고, 이벤트전을 진행한다. ➡️{" "}
            <span style={{ fontWeight: 600 }}>
              인원이 준비된 팀이 1팀이라 리그전 진행이 불가능한 주차는 밸런스에
              맞춰 팀을 짜고, 이벤트전을 진행한다.
            </span>
          </RuleListItem>
          <RuleListItem>
            <New>[신설]</New> 제 5조 7항) 시즌 승률이 동률일 경우 동률일 경우
            두팀간의 승자전 원칙으로 순위를 정한다.
          </RuleListItem>
        </RuleList>
      </RuleSection>
    </>
  );
};

export default LeagueRule;

const New = styled.span`
  font-weight: 600;
  background-color: #dbd056;
  color: #121212;
`;

const Change = styled.span`
  font-weight: 600;
  background-color: #d56767;
  color: #121212;
`;
