"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";

const StoryPage = () => {
  return (
    <>
      {/* 1문단 */}
      <Text $break={false}>
        식서스의 시즌2가 마무리 되었다. 여느때보다 뜨거웠던 여름이었던 만큼
        리그전의 열기도 후끈했다. 모두가 우승을 향해 열심히 달렸지만, 그들의
        시즌 2연속 우승을 막을 순 없었다. 다른 팀 보다 평균 연령이 젊지도
        않았고, 항상 웃고 있던 즐거운 분위기는 아니었지만, 선수 못지 않은 열정과
        뛰어난 전략으로 우승을 거머쥐지 않았을까 생각한다. 그 중에서도 이
        브레인을 담당했던 이번 시즌 <strong>MVP ‘이근우’ 선수</strong>에 대해
        알아보려고 한다.
      </Text>

      <FirstImg>
        <Image
          src={"/img/s2/s2-1.png"}
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
          영광입니다. 별로 한 것도 없는 것 같은데,, 다들 잘해줘서
          그런듯하네요.(웃음)
        </Text>
      </TextBox>

      {/* 3문단 */}
      <TextBox>
        <QText>
          Q: 두 시즌 연속으로 우승이신데, 그 원동력은 무엇이라 생각하나요?
        </QText>

        <Text $break={false}>
          팀원들 모두가 엄청난 우승 상품을 받는 것처럼 함께 열심히 뛰어준게 가장
          크다고 생각합니다. 그리고 들어가는 선수들마다 본인들이 해야할 역활을
          정확하게 알고 수행해준 덕분이라고 생각합니다.
        </Text>
      </TextBox>

      {/* 4문단 */}
      <TextBox>
        <QText>
          Q: 두 시즌 치루면서 가장 상대 하기 힘들었던 선수가 있다면 누구인가요?
        </QText>

        <SecondBox>
          <InsideImg
            $url={"/img/s2/s2-2.png"}
            $way="left"
            src={"/img/s2/s2-2.png"}
            alt="이미지2"
            width={173}
            height={289}
          />

          <Text $break={true}>
            다들 자기 실력 만큼을 해줘서 쉬웠던 선수가 한 명도 없었던 거
            같습니다. 정말 한명을 뽑아야한다면 ...(고민) 게임 중에 성장을
            계속적으로 한 선수가 아닐까 싶네요. 그 중에서도 으뜸은{" "}
            <strong>천용우</strong>
            선수이지 않을까 생각합니다. 게임 캐릭터처럼 함께 경기를 하며 성장을
            하는게 보여서 매 주 고려하던 변수였네요.
          </Text>
        </SecondBox>
      </TextBox>

      {/* 5문단 */}
      <TextBox>
        <QText>
          Q: 이근우 선수가 생각하는 숨은 MVP는 누구라고 생각하시나요?
        </QText>

        <SecondBox>
          <Text $break={true}>
            개인적으로는 두 시즌 모두 건명씨가 진짜 열심히 뛰었다고 생각합니다.
            팀내 센터가 혼자여서 진짜 힘들었을텐데, 속공 때 제일 앞에서
            달려주고, 안풀릴때면 스스로 득점도 만들어줘서 수월하게 게임을 할 수
            있었던 것 같습니다. 덕분에 저도 꽤나 편하게 슛도 던진 것 같네요.
          </Text>
          <InsideImg
            $url={"/img/s2/gun.png"}
            $way="right"
            src={"/img/s2/gun.png"}
            alt="이미지2"
            width={75}
            height={100}
          />
        </SecondBox>
      </TextBox>

      {/* 6문단 */}
      <Image
        src={"/img/s2/s2-3.png"}
        alt="이미지3"
        width={343}
        height={228}
        layout="responsive"
      />
      <TextBox>
        <QText>
          Q: 다음 시즌 팀장을 맡게 되셨습니다.혹시 구성하신 팀이 있으신가요?
        </QText>
        <Text $break={false}>
          당연히 있습니다.(웃음) 사실 두시즌 우승도 해보고, MVP도 한번 해봤으니
          이제 팀을 붕괴시킬 예정입니다. 그간 안해봤던 분들과 맞춰보고 싶은
          생각이 제일 크네요. 그래서 이상한 팀이 될수도 있겠지만, 그만큼 재밌는
          한주 한주가 되도록 만들 생각입니다. 팀장이 이런 생각을 가지고 있으니
          이 자리를 빌어 미래의 우리팀에 미리 죄송하다는 말씀 드립니다.
        </Text>
      </TextBox>

      <Image
        src={"/img/s2/s2-4.png"}
        alt="이미지3"
        width={531}
        height={304}
        layout="responsive"
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

const SecondBox = styled.div`
  display: flex;
  gap: 8px;
`;
