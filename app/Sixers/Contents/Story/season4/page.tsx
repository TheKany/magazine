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
        2025년 첫 시즌이자 식서스의 네번째 시즌이 마무리 되었다. 6주간의
        접전끝에 우승은 {"'"}감마핑{"'"}에게 돌아갔다. 감마핑이 승리할 수 있었던
        요인은 어떤 것이었을까? 그 이유는 이번 MVP를 거머쥔{" "}
        <strong>
          식서스의 요정 이자 형준바라기(?), 귀여움 그 자체 {"'"}심상민{"'"} 선수
        </strong>
        에게 들을 수 있을 것 같다.
      </Text>

      <FirstImg>
        <ImageBox
          src={`${BASE_IMG_URL}/season/s4/s4-1.png`}
          alt="이미지1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          unoptimized
        />
      </FirstImg>

      <TextBox>
        <QText>
          Q: 투표단원들에 과반수 이상으로 MVP에 선정되셨는데 소감 한말씀
          부탁드립니다.
        </QText>

        <GridBox>
          <div>
            <Text $break={true}>
              엠비피 받아야 할사람이 많은데 왜 제가 뽑혔는지 이해는 안가지만
              감사드립니다. 팀원형님들이 모두 한발짝 더 뛰어주셔서
              우승할수있었던것같습니다.
            </Text>
            <InsideImg
              $url={`${BASE_IMG_URL}/season/s4/s4-2.png`}
              $way="right"
              src={`${BASE_IMG_URL}/season/s4/s4-2.png`}
              alt="이미지2"
              width={160}
              height={130}
            />
          </div>
          <ListText>
            <StyleText className="neon">4점슛의 사나이 병규형</StyleText>
            <StyleText className="neon">우승토템 형진이형</StyleText>
            <StyleText className="neon">최강수비방벽 문영이형</StyleText>
            <StyleText className="neon">아프지마요 동현이형</StyleText>
            <StyleText className="neon">미친활동량 한식이형</StyleText>
            <StyleText className="neon">바쁜데도 잘나와준 성민이형</StyleText>
            <StyleText className="neon">멱살잡고 캐리해준 준철이형</StyleText>
            <span>그냥 형준이</span>
            모든 영광을 우리 형님들께 돌리겠습니다♥
          </ListText>
        </GridBox>
      </TextBox>

      {/* 문단 */}
      <TextBox>
        <QText>
          Q: 4시즌만에 첫 우승이십니다. 이번시즌 팀장으로 팀을 이끌면서 전
          시즌들 보다 각오가 남달라 보이셨는데 이번 시즌 어떻게 준비하셨나요?
        </QText>

        <Text $break={true}>
          멤버를 제가 구상한대로 드래프트 다 성공해서 다치지말자 싸우지말자 이
          두개만 지키면 우승할수있을거라고 생각했습니다. 또한 형준이를 채찍질
          하려고 열심히 트래쉬토킹 연습했습니다
        </Text>
      </TextBox>

      {/* 문단 */}
      <TextBox>
        <QText>
          Q: 감마핑 팀장으로써 한시즌 동안 팀을 이끌면서 가장 좋았던 점과
          힘들었던 점을 한가지씩 꼽으라면 무엇일까요?
        </QText>

        <FlexBox>
          <InsideImg
            $url={`${BASE_IMG_URL}/season/s4/s4-5.png`}
            $way="right"
            src={`${BASE_IMG_URL}/season/s4/s4-5.png`}
            alt="이미지2"
            width={200}
            height={180}
          />
          <Text $break={true}>
            우승하려고 다들 열심히 뛰는거 자체가 재밌고 좋았습니다. 막내인데도
            팀장의견을 적극 수렴해주시는것도 너무 감사했습니다. 이번시즌동안
            득녀도 하고 일도 많고 당직도 많아서 힘들었는데 다들 도와주셔서 매주
            즐겁게 농구할 수 있었습니다 힘들었던점은 크게없는데 형준이가 농구를
            혼자하는게 쪼금 힘들었네요. 심지어 패스도못해서..
            <InsideImg
              $url={`${BASE_IMG_URL}/season/s4/s4-4.png`}
              $way="right"
              src={`${BASE_IMG_URL}/season/s4/s4-4.png`}
              alt="이미지2"
              width={140}
              height={80}
              style={{ padding: "4px 0" }}
            />
          </Text>
        </FlexBox>
      </TextBox>

      {/* 문단 */}
      <TextBox>
        <QText>
          Q: MVP로 선정되신 심상민 선수가 생각하는 숨은MVP는 누구라
          생각하시나요?
        </QText>

        <InsideImg
          $url={`${BASE_IMG_URL}/season/s4/s4-7.png`}
          $way="left"
          src={`${BASE_IMG_URL}/season/s4/s4-7.png`}
          alt="이미지2"
          width={120}
          height={200}
        />
        <Text $break={true}>
          저도 mvp 투표때 고민 많이 해봤는데 다들 너무 잘해줘서 우리팀 전체가
          mvp라고 생각합니다. 사실 저 mvp받은거는 득녀축하기념이라고
          생각하구요ㅋㅋ 실질적으로 수비기둥 문영이형, 감마핑의 서태웅 형준이,
          정대만 준철이형, 클러치 형진이형 등등 받을사람이 너무많은데, 많은
          웃음과 행복을 주셨던 <strong>병규형님</strong>이 숨은 mvp이지
          않을까요?
        </Text>
      </TextBox>

      <TextBox>
        <FlexBox>
          <Text $break={true}>
            아, 시즌전에 mip 상품걸었는데, 그얘기를 잠깐하겠습니다. 감마핑mip는
            3점에 속공에 수비까지 열심히 하며, 놀라운 활약을 해준{" "}
            <strong>한식이형</strong>을 뽑고싶습니다. 개업으로 바쁘셨는데도
            열심히 나와주셔서 감사합니다♥
          </Text>
          <InsideImg
            $url={`${BASE_IMG_URL}/season/s4/s4-6.png`}
            $way="right"
            src={`${BASE_IMG_URL}/season/s4/s4-6.png`}
            alt="이미지2"
            width={200}
            height={180}
          />
        </FlexBox>
      </TextBox>

      {/* 문단 */}
      <ImageBox
        src={`${BASE_IMG_URL}/season/s4/s4-8.jpg`}
        alt="이미지3"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        unoptimized
      />
      <TextBox>
        <QText>
          Q: 4시즌 치루면서 가장 상대 하기 힘들었던 선수가 있다면 누구인가요?
        </QText>
        <Text $break={false}>
          요즘에 건명이형님이 제일 힘들었던것같습니다 요새 위치를 가리지않고
          슛을 마구마구 넣으시는데, 막기가 너무힘드네요. 아참!,
          <strong> 상엽이가 막기 제일 쉬웠습니다.</strong> easy.
        </Text>
      </TextBox>

      <TextBox>
        <QText>Q: 다음 시즌에 대한 각오 한마디 해주세요.</QText>
        <InsideImg
          $url={`${BASE_IMG_URL}/season/s4/s4-9.png`}
          $way="left"
          src={`${BASE_IMG_URL}/season/s4/s4-9.png`}
          alt="이미지2"
          width={100}
          height={230}
        />
        <Text $break={false}>팀에 필요한 조각으로 열심히 뛰어보겠습니다.</Text>
      </TextBox>

      <TextBox>
        <QText>
          Q: 마지막으로 Am Sixers팀원들에게 하고싶은 말 부탁드립니다.
        </QText>
        <Text $break={false}>
          당연하게도! 감마핑의 우승으로 즐거웠던 시즌4가 끝났습니다ㅋㅋㅋㅋㅋㅋ
          하지만 우리팀은 감마핑이 아니라 식서스이며, 우리는 결국 한팀임을
          잊지말고 서로 즐겁게 다치지않고 농구했으면 좋겠습니다♥
        </Text>
      </TextBox>

      <ImageBox
        src={`${BASE_IMG_URL}/season/s4/s4-10.jpg`}
        alt="이미지3"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto", margin: "24px 0" }}
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

const ListText = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
`;

const QText = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin: 4px 0;
`;

const StyleText = styled.span`
  color: #121212;
  font-size: 14px;
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

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;
