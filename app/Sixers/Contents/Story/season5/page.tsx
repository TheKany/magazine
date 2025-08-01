"use client";

import { BASE_IMG_URL } from "@/app/config";
import ImageBox from "@/components/_common/Element/ImageBox";
import React from "react";
import styled from "styled-components";

const StoryPage = () => {
  return (
    <>
      {/* 문단 */}
      <Text $break={false}>
        압도적인 우승을 거둔 청용열차의 시즌 5였다. <br />
        팀원들 모두가 스마일 농구를 지향한 결과 8승 2패로 시즌을 조기에 마무리
        지어버렸다. <br />이 팀에서 돋보이는 선수를 꼽자면 <br />
        <strong>이상엽</strong> 선수와 <strong>조형준</strong> 선수가 있었지만,{" "}
        <br />이 둘은 취향차이라고 했던가... <br />
        mvp는 조형준 선수의 진땀승으로 마무리 지어졌다.
      </Text>

      <FirstImg>
        <ImageBox
          src={`${BASE_IMG_URL}/season/s5/s5-1.png`}
          alt="이미지1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "80%", height: "auto" }}
          unoptimized
        />
      </FirstImg>

      <TextBox>
        <QText>
          Q: 투표단원들에 과반수 이상으로 MVP에 선정되셨는데 소감 한말씀
          부탁드립니다.
        </QText>

        <Text $break={true}>
          이번 시즌 즐겁게 플레이할 수 있게 해준 청용열차 팀원들에게
          감사드립니다 ㅎㅎ
        </Text>
      </TextBox>

      {/* 문단 */}
      <TextBox>
        <QText>
          Q: 2시즌 연속 3위 후 우승입니다. 이번 시즌 8승 2패 압도적인 승률로
          우승하셨는데 비결이 따로 있다면 말씀해주세요.
        </QText>

        <Text $break={true}>
          팀원을 정말 잘 만났다고 생각합니다. 모두가 ‘우승하자’는 확실한
          동기부여가 되어 있어서, 좋은 성적을 낼 수 있었던 것 같습니다.
        </Text>
      </TextBox>

      {/* 문단 */}
      <TextBox>
        <QText>
          Q: 청용열차팀으로 한시즌 치루면서 가장 좋았던 점과 힘들었던 점을
          한가지씩 꼽으라면 무엇일까요?
        </QText>

        <Text $break={true}>
          모두가 팀의 궃은 일을 마다하지 않아 수비나 리바운드에서 큰 구멍이
          없었던 점이 가장 좋았습니다. 다만, 전체적으로 슛감이 좋지 않고
          지나치게 이타적인 경향이 있어서, 하프코트 오펜스가 다소 답답할 때도
          있었지만, 간간이 나오는 속공과 에이스 상엽 씨의 존재감 덕분에 경기가
          잘 풀렸습니다.
        </Text>
      </TextBox>

      {/* 문단 */}
      <TextBox>
        <QText>
          Q: MVP로 선정되신 조형준 선수가 생각하는 숨은MVP는 누구라
          생각하시나요?
        </QText>

        <Text $break={true}>
          <InsideImg
            $url={`${BASE_IMG_URL}/season/s5/s5-2.png`}
            $way="right"
            src={`${BASE_IMG_URL}/season/s5/s5-2.png`}
            alt="이미지2"
            width={92}
            height={203}
          />
          MVP 투표권이 있었으면 <strong>상엽씨</strong>를 뽑았을 것 같습니다.
          숨은 MVP라고 하면 세면씨랑 민성 형님이 골밑에서 열심히 싸워주어서,
          상대적으로 높이가 낮은 팀의 단점이 가려졌다고 생각해요. 물론 다른
          팀원들도 제 몫 이상을 해줬다고 생각합니다.
        </Text>
      </TextBox>

      {/* 문단 */}

      <TextBox>
        <QText>
          Q: 이번 시즌을 치루면서 가장 상대 하기 힘들었던 선수가 있다면
          누구인가요?
        </QText>
        <Text $break={false}>
          <InsideImg
            $url={`${BASE_IMG_URL}/season/s5/s5-4.png`}
            $way="left"
            src={`${BASE_IMG_URL}/season/s5/s5-4.png`}
            alt="이미지2"
            width={100}
            height={150}
            style={{ marginRight: 16 }}
          />
          문영이 형이랑 상대하면 항상 심리전에서 지는 느낌이라 힘들었습니다.
        </Text>
      </TextBox>

      <TextBox>
        <QText>
          Q: 마지막으로 Am Sixers팀원들에게 하고싶은 말 부탁드립니다.
        </QText>
        <Text $break={false}>
          팀원들 덕분에 매 주말 시작을 즐겁게 할 수 있어서 늘 감사드립니다.
          그리고 저도 무릎이 계속 안좋았는데, 이제 거의 괜찮아 진 것 같습니다.
          앞으로도 다치지말고 즐겁게 농구해요! 저도 더 열심히 뛰어보겠습니다!!
        </Text>
      </TextBox>
      <div>
        <ImageBox
          src={`${BASE_IMG_URL}/season/s5/s5-5.png`}
          alt="이미지5"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          unoptimized
        />
      </div>
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
  font-size: 15px;
`;

const QText = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin: 4px 0;
`;

const InsideImg = styled.img<{ $url: string; $way: string }>`
  float: ${(props) => props.$way};
  shape-outside: url(${(props) => props.$url});
  shape-margin: 10px;
`;
