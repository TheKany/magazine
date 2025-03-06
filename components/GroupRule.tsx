"use client";

import React from "react";
import { RuleList, RuleListItem, RuleSection, RuleText } from "./RuleUi";

const GroupRule = () => {
  return (
    <>
      <RuleSection title="제 1조 (명칭)">
        <RuleText>
          본 회의 명칭은 &quot;식서스&quot;라고 정한다. (이하 동호회, 본 회 라고
          칭한다.)
        </RuleText>
      </RuleSection>

      <RuleSection title="제 2조 (목적)">
        <RuleText>
          본 회의 목적은 농구를 통한 회원 상호간에 건강과 친목을 도모함에 있다.
        </RuleText>
      </RuleSection>

      <RuleSection title="제 3조 (회원 자격)">
        <RuleText>본 회의 회원은 다음과 같다.</RuleText>
        <RuleList>
          <RuleListItem>농구를 즐겨하는 신체적 결함이 없는 자</RuleListItem>
          <RuleListItem>
            회비 납부 등의 회원으로서 의무를 성실히 수행할 수 있는 자
          </RuleListItem>
          <RuleListItem>
            범죄 행위 등의 반사회적 결격 사유가 없는 자
          </RuleListItem>
        </RuleList>
      </RuleSection>

      <RuleSection title="제 4조 (조직)">
        <RuleText>본 회의 조직은 다음과 같다.</RuleText>
        <RuleList>
          <RuleListItem>회 장 : 1인 (본 회를 대표)</RuleListItem>
          <RuleListItem>
            총 무 : 1인 (본 회의 재정, 문서관리, 비품관리 등의 업무를 총괄)
          </RuleListItem>
          <RuleListItem>
            운영위원 : 2인 (회원의 가입, 연락, 제명, 상벌 등 본 회의 운영사항 중
            총회 의결사항 외의 것을 도맡아함)
          </RuleListItem>
          <RuleListItem>
            고 문 : 1인 (동호회를 운영함에 있어 회장, 총무, 운영위원에게 조언 및
            의견 제시)
          </RuleListItem>
        </RuleList>
      </RuleSection>

      <RuleSection title="제 5조 (재정)">
        <RuleText>본 회의 재정은 다음과 같다.</RuleText>
        <RuleList>
          <RuleListItem>
            회비 : 회비는 주 1회 참석자는 월 40,000원으로 정하며, 매월 5일
            지정된 계좌로 입금하며, 회비는 1개월분 선납을 원칙으로 한다.
          </RuleListItem>
          <RuleListItem>
            재정관리 : 본 회의 재정은 금융기관에 예치함을 원칙으로 하며, 총무가
            관리토록 한다.
          </RuleListItem>
        </RuleList>
      </RuleSection>

      <RuleSection title="제 6조 (연락 고지의 의무)">
        <RuleText>본 회의 연락 고지의 의무는 다음과 같다.</RuleText>
        <RuleList>
          <RuleListItem>
            모임의 참석자는 매주 실행하는 메신저(카카오톡)을 통한 참석 투표를
            통해 참석 여부를 알린다.
          </RuleListItem>
          <RuleListItem>
            연락 고지 의무 불이행시 참석이 불가능하다. (단, 운영위원에게 별도
            연락 시 참석 가능)
          </RuleListItem>
          <RuleListItem>
            월 3회 이상 연락 고지 의무 불이행시 참석이 불가능하다. (단,
            운영위원에게 별도 연락 시 참석 가능)
          </RuleListItem>
        </RuleList>
      </RuleSection>

      <RuleSection title="제 7조 (활동 제지 사유)">
        <RuleText>
          아래 사항에 해당하는 행위를 하였을 시에는 본 회의 활동 대기자 명단으로
          이동한다.
        </RuleText>
        <RuleList>
          <RuleListItem>
            회원간의 예를 져버리고 회원의 화합을 해치는 자
          </RuleListItem>
          <RuleListItem>
            고의적으로 회칙을 준수하지 않고 본 회의 명예를 훼손하는 자
          </RuleListItem>
          <RuleListItem>
            회원의 의무인 회비를 특별한 사유없이 3개월 이상 납부하지 않은 자
          </RuleListItem>
          <RuleListItem>
            특별한 사정이나 부상, 사전통보 없이 연속 3개월 이상 모임에 불참한 자
          </RuleListItem>
        </RuleList>
      </RuleSection>

      <RuleSection title="제 8조 (활동 대기자 처리)">
        <RuleText>
          본 회의 활동 대기자 명단에 있는 인원에 대해 운영위는 아래와 같이
          처리한다.
        </RuleText>
        <RuleList>
          <RuleListItem>
            제 7조의 1~3항에 해당하는 인원은 동호회 탈퇴 처리를 한다.
          </RuleListItem>
          <RuleListItem>
            제 7조 4항에 해당하는 인원은 재연락 후 동호회 대기자 명단 등록 혹은
            탈퇴 처리를 한다.
          </RuleListItem>
        </RuleList>
      </RuleSection>

      <RuleSection title="제 9조 (탈퇴 및 재가입)">
        <RuleList>
          <RuleListItem>
            회원이 본 회를 탈퇴하고자 할 때에는 납입한 회비를 반납하지 않으며
            일체의 권리가 사라진다. (단, 부득이한 상황으로 탈퇴하는 경우
            언제든지 재가입 가능)
          </RuleListItem>
          <RuleListItem>
            회원의 탈퇴와 재가입은 운영위원회에서 심의하고, 회원의 동의로
            결정한다.
          </RuleListItem>
          <RuleListItem>
            제명 사유로 인한 탈퇴는 재가입을 허용하지 않는다.
          </RuleListItem>
        </RuleList>
      </RuleSection>

      <RuleSection title="제 10조 (신규 가입)">
        <RuleList>
          <RuleListItem>본 회는 최대 인원을 30명으로 제한한다.</RuleListItem>
          <RuleListItem>
            신규 가입의 경우 대기자 인원을 최우선으로 하며, 가입 가능 여부는
            최종적으로 운영진의 회의를 통해 결정한다.
          </RuleListItem>
        </RuleList>
      </RuleSection>

      <RuleSection title="[부칙]">
        <RuleList>
          <RuleListItem>
            본 회칙의 수정은 누구나 언제든지 가능하며, 운영위원회의 검토 후
            회원의 80% 이상 찬성일 경우 변경 가능하다.
          </RuleListItem>
          <RuleListItem>
            회원간의 길, 흉사를 알리는 것은 회원 자율에 맡긴다.
          </RuleListItem>
          <RuleListItem>
            본 회칙에 준하지 않는 사항은 일반적인 관례에 준한다.
          </RuleListItem>
          <RuleListItem>본 회칙은 통과 즉시 효력을 발생한다.</RuleListItem>
          <RuleListItem>
            본 회칙에 없는 규칙에 대한 판단은 도덕적 원칙, 법에 어긋나지 않는
            선에서 보편적이고 타당한 이유를 따라간다.
          </RuleListItem>
          <RuleListItem>
            본 회는 회장, 총무, 운영위원, 고문 이하 본 동호회 활동을 정상적으로
            진행하는 인원으로 구성되어 있다.
          </RuleListItem>
          <RuleListItem>
            본 회의 운영 인원에 대한 결격 사유 혹은 부득이한 사정으로 인한
            탈퇴가 발생했을 경우 재선발한다.
          </RuleListItem>
        </RuleList>
      </RuleSection>
    </>
  );
};

export default GroupRule;
