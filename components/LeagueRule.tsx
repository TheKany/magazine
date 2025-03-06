"use client";

import React from "react";
import { RuleList, RuleListItem, RuleSection, RuleText } from "./RuleUi";

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
          <RuleListItem>심판 콜은 번복없이 진행한다.</RuleListItem>
          <RuleListItem>
            유파울(속공 저지 파울, 비신사적인 파울)시 상대편에게 자유투 1구와
            공격권을 부여한다.
          </RuleListItem>
          <RuleListItem>
            선수들의 부상 방지를 위해 의도와 상관없이 과격한 파울을 할 경우 삼심
            합의하에 유파울 부여와 함께 경고 1회, 누전 2회시 퇴장조치를 한다.
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
            아래 이유로 인해 리그전을 정상적으로 진행하지 못할 경우 해당
            팀(들)은 몰수표 처리를 한다.
          </RuleListItem>
          <RuleListItem>- 해당 주차의 투표 인원이 5인 미만인 팀</RuleListItem>
          <RuleListItem>
            - 경기 시작 시간이 된 이후, 본인 팀 경기 차례까지 인원이 준비되지
            않은 팀
          </RuleListItem>
          <RuleListItem>
            인원이 준비된 팀은 그렇지 않은 팀 수 만큼 승점을 가져간다.
          </RuleListItem>
          <RuleListItem>
            리그전 진행이 불가능한 주차는 밸런스에 맞춰 팀을 짜고, 이벤트전을
            진행한다.
          </RuleListItem>
          <RuleListItem>
            리그전 진행시 당일 참석자에 한하여 동등한 출전시간을 보장하도록
            한다.
          </RuleListItem>
        </RuleList>
      </RuleSection>

      <RuleSection title="[신설 / 개정안 기록]">
        <RuleText>2024.06.29</RuleText>
        <RuleList>
          <RuleListItem>
            [개정] 제 4조 2항) 팀 파울이 5개 이상이 되면 자유투를 실행한다. ➡️
            팀 파울이 4개 이상이 되면 자유투(1구 2득점 인정)를 실행한다.
          </RuleListItem>
          <RuleListItem>
            [신설] 제 4조 4항) 유파울(속공 저지 파울, 비신사적인 파울)시
            상대편에게 자유투 1구와 공격권을 부여한다.
          </RuleListItem>
        </RuleList>
        <RuleText>2024.07.25</RuleText>
        <RuleList>
          <RuleListItem>
            [신설] 제 2조 1항) 경기 시작 시간은 항상 오전 6시 진행을 기준으로
            한다.
          </RuleListItem>
          <RuleListItem>[신설] 제 5조) 리그전 진행 조항</RuleListItem>
        </RuleList>
        <RuleText>2024.09.28</RuleText>
        <RuleList>
          <RuleListItem>
            [신설] 제 4조 5항) 과격한 파울에 대한 경고, 퇴장조치 항목
          </RuleListItem>
          <RuleListItem>
            [신설] 제 5조 6항) 당일 참석자에 대한 동일 출전 시간 보장 항목
          </RuleListItem>
        </RuleList>
      </RuleSection>
    </>
  );
};

export default LeagueRule;
