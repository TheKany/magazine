"use client";

import { BASE_IMG_URL } from "@/app/config";
import ImageBox from "@/components/_common/Element/ImageBox";
import React from "react";
import styled from "styled-components";

const StoryPage = () => {
  return (
    <>
      {/* 1문단 */}
      <Text $break={false}>
        식서스의 시즌 3가 마무리되었다. 유난히 더위가 길었던 가을이었는데, 아마
        식서스의 리그전 열기가 한몫한 게 아닐까 싶다. 이번 시즌의 우승 팀은{" "}
        <strong>“농구사관학교”</strong> 이다. 이들이 우승할 수 있었던 이유는
        ‘팀원들 간의 소통’ 이 큰 역할을 하지 않았을까 생각된다. 물론 모든 팀이
        소통을 한다. 하지만, 농구사관학교의 소통은 달랐다. ‘팀원의 성장을 위한
        소통’을 했다고 생각한다. 그만큼 서로를 신뢰했고, 따라줬기 때문에
        ‘농구사관학교’라는 이름에 걸맞은 훌륭한 농구사관생도가 나올 수 있었던 게
        아닐까 싶다. 그중에서도 우린 이번 시즌 MVP를 차지한{" "}
        <strong>‘정재훈’ 선수</strong>에 대해 알아보려 한다.
      </Text>

      <FirstImg>
        <ImageBox
          src={`${BASE_IMG_URL}/season/s3/s3-1.png`}
          alt="이미지1"
          width={221}
          height={266}
        />
      </FirstImg>

      {/* 2문단 */}
      <TextBox>
        <QText>
          Q: 투표단원들의 과반수 이상으로 이번 시즌 MVP로 선정되셨는데, 소감
          한말씀 부탁드립니다.
        </QText>

        <Text $break={false}>
          먼저 함께 고생하시고 MVP가 될 기회를 만들어주신 저희 농사분들께
          감사드리며, 이번 시즌도 정말 잘하시고 고군분투하신 분들이 많으신데,
          그중에서 뽑히게 되어 정말로 영광스럽고 감사합니다.
        </Text>
      </TextBox>

      {/* 3문단 */}
      <TextBox>
        <QText>
          Q: 2시즌 연속 3위 후 우승입니다. 전 시즌 대비 눈에 띄는 활약을 하신 거
          같은데 비결이 뭔가요?
        </QText>

        <InsideImg
          $url={`${BASE_IMG_URL}/season/s3/s3-2.png`}
          $way="right"
          src={`${BASE_IMG_URL}/season/s3/s3-2.png`}
          alt="이미지2"
          width={90}
          height={140}
        />
        <Text $break={true}>
          사실 이전 시즌 동안 코트 위에서 포지션이나 플레이 스타일 등 농구에서의
          정체성 확립이 잘 안되서 고민도 많았고, 슬럼프도 여러 번 왔었습니다.
          하지만 이번 팀이 결성되고, 팀장님께서 저에 대한 분석과 알맞은 플레이
          스타일을 알려주셨습니다. 또한 빅맨 선배로서 많은 팁과 조언을 주신{" "}
          <strong>문영 형님</strong>과 그에 맞는 훈련과 전술을 함께 행동으로
          옮겨준 팀원들 덕분에 한 시즌 동안 많은 깨달음과 성장을 얻을 수
          있었습니다.
        </Text>
      </TextBox>

      {/* 4문단 */}
      <TextBox>
        <QText>
          Q: MVP로 선정되신 정재훈 선수가 생각하는 숨은 MVP는 누구라
          생각하시나요?
        </QText>

        <FlexBox>
          <Text $break={true}>
            정말 각자의 자리에서 빛내주신 분들이 많았지만, 제게 있어{" "}
            <strong>‘김동현’ 형님</strong>이 또 다른 MVP라고 생각합니다. 저희
            농사가 게임 중에 플레이가 안풀려서 점수차가 벌어지는 상황이 생겼을
            때, 형님도 힘드셨겠지만 꾸준하게 속공 득점을 통해 점수차를 좁히며
            팀원들의 사기를 올려주셨습니다.{" "}
            <InsideImg
              $url={`${BASE_IMG_URL}/season/s3/s3-3.png`}
              $way="right"
              src={`${BASE_IMG_URL}/season/s3/s3-3.png`}
              alt="이미지2"
              width={100}
              height={180}
            />
            또한, 플레이 중간중간 소통을 통해 팁과 전술 알려주셔서 팀의 방향이
            틀어지지 않게 해주셨고, 개인적인 도움과 팀 내에서의 좋은 영향이 있던
            기억이 인상깊어 선정하게 되었습니다. 이 자리를 빌어 다시 한 번 동현
            형님께 감사의 인사를 드립니다.
          </Text>
        </FlexBox>
      </TextBox>

      {/* 5문단 */}
      <TextBox>
        <QText>
          Q: 시즌 3를 보내면서 가장 상대하기 힘들었던 선수를 뽑자면?
        </QText>

        <FlexBox>
          <Text $break={true}>
            제가 가장 상대하기 힘들었던 선수는 단연 ‘박진우’선수였습니다. 코트
            안에서 계실 땐 패스와 드리블로 공간 창출 후 꾸준한 득점을 하는
            스코어러이시고, 코트 밖에서는 상대팀의 강점과 약점을 고려하여 전략을
            구상하는 팀장으로서 항상 저희 농사와 초접전을 펼쳤습니다. 선수로서
            경기를 뛰는 것 뿐만 아니라 팀장으로서 전술 지휘 및 팀 케어하시며 그
            누구보다 진심으로 리그에 참여하시고 즐기시는 모습을 보며 많은 자극을
            얻게 되었습니다. 언젠가 꼭 함께 팀으로 뛰고싶습니다!
          </Text>

          <InsideImg
            $url={`${BASE_IMG_URL}/season/s3/s3-4.png`}
            $way="right"
            src={`${BASE_IMG_URL}/season/s3/s3-4.png`}
            alt="이미지2"
            width={120}
            height={180}
          />
        </FlexBox>
      </TextBox>

      {/* 6문단 */}
      <ImageBox
        src={`${BASE_IMG_URL}/season/s3/s3-5.png`}
        alt="이미지3"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        unoptimized
      />
      <TextBox>
        <QText>
          Q: 다음 시즌 팀장을 맡게 되셨습니다. 혹시 구상하신 팀이 있나요?
        </QText>
        <Text $break={false}>
          MVP에 이어 팀장까지 생각치도 못한 자리에 서게되어 깜짝 놀랐습니다.
          <br />
          팀장의 순간이 지금 올거라 생각치도 못해 사실 팀 전체로 구상해본 적은
          없습니다. 하지만 욕심을 내보자하면 각자의 장점을 최대한 살 릴 수 있는
          팀을 만들어보고 싶습니다. 팀장인 저도 아직은 많이 부족한 선수라
          팀원들의 도움이 많이 필요하기에 서로 각자의 자리 에서 최선을 다해 팀을
          돕는 팀이면 좋겠다고 생각합니다. 미래의 팀원들에게 미리 말씀 드리자면
          최대한 궃은 일은 제가 맡을 테니 다같이 즐겁게 플레이를 만들어가는 팀이
          되길 바랍니다!
        </Text>
      </TextBox>

      <TextBox>
        <QText>Q: 마지막으로 Am Sixers 팀원들에게 하고 싶은말이 있다면?</QText>
        <Text $break={false}>
          AM Sixers를 통해 여러분과 같은 코트 위에서 농구할 수 있어서 정말
          영광입니다. 또한 각자 어떤 상황 속에서도 새벽처럼 아침 일찍 모여 함께
          즐기는 여러분이 있어서 매주 토요일이 기다려지고 행복하네요 ㅎㅎ
          매니악한(?) 농구라는 공통점이 있어 만나게 된 소중한 인연인만큼 코트
          위에서나 밖에서나 오래오래 즐겁고 행복한 AM Sixers가 되었으면
          좋겠습니다♡
        </Text>
      </TextBox>

      <ImageBox
        src={`${BASE_IMG_URL}/season/s3/s3-6.png`}
        alt="이미지3"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        unoptimized
      />
    </>
  );
};

export default StoryPage;

const FirstImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 16px 0;
`;

const TextBox = styled.div`
  margin: 24px 0;
`;

const Text = styled.p<{ $break: boolean }>`
  word-break: ${(props) => (props.$break ? "break-all" : "keep-all")};
  font-size: 14px;
`;

const QText = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin: 4px 0;
`;

const InsideImg = styled.img<{ $url: string; $way: string }>`
  float: ${(props) => props.$way};
  shape-outside: url(${(props) => props.$url});
  shape-margin: 10px;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 8px;
`;
