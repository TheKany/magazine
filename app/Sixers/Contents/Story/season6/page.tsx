"use client";

import { BASE_IMG_URL } from "@/app/config";
import BackBtn from "@/components/_common/Button/BackBtn";
import { DivideLine } from "@/components/_common/Element/_DivideLine";
import FloatImg from "@/components/_common/Element/FloatImg";
import ImageBox from "@/components/_common/Element/ImageBox";
import Quote from "@/components/_common/svg/Quote";
import Image from "next/image";
import styled from "styled-components";

const StoryPage = () => {
  return (
    <Box>
      <BackBtn />
      <ImageBox
        src={`${BASE_IMG_URL}/season/s6/mvp1.png`}
        alt="이미지1"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "80%", height: "auto" }}
      />
      {/* 문단 */}
      <Text $break={false} $align="center">
        여느 때보다 치열했던 시즌 6가 막을 내렸다.
        <br />
        마지막 경기까지 긴장의 끈을 놓지 못했던
        <br /> 올해 여름처럼 아주 뜨거운 시즌이었다. <br />
        그리고 그 열기 속에서 탄생한 이번 시즌의 MVP <br />
        시즌 최초로 만장일치의 영예를 안은 주인공은
        <br /> King is Back
        <br /> <strong>이상엽</strong> 선수다.
      </Text>

      <FirstImg>
        <ImageBox
          src={`${BASE_IMG_URL}/season/s6/s6-1.png`}
          alt="이미지1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "80%", height: "auto" }}
        />
      </FirstImg>

      <TextBox>
        <QText>
          Q: 시즌 최초 투표 단원들의 만장일치 MVP에 선정되셨는데, 소감 한 말씀
          부탁드립니다.
        </QText>
        <Quote isRotate={false} />

        <Text $break={true} $align="center">
          시즌 막바지까지 어떻게 될지 모르는 상황에서 팀원분들 모두 엄청 열심히
          뛰어주어서 우승까지 할 수 있었는데 얼떨결에 만장일치 MVP까지 받아서
          너무 행복하고 감사합니다. 와이프한테 바로 자랑했어요. <br />
          나중에 아들한테도 자랑할게요. <br />
        </Text>
        <ImageBox
          src={`${BASE_IMG_URL}/season/s6/s6-bg1.png`}
          alt="배경 이미지"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "80%",
            height: "auto",
          }}
        />
        <Text $break={true} $align="center">
          <NameList>
            <span className="neon">&quot;취권 용우&quot;</span>
            <span className="neon">&quot;스마일농구 성은이&quot;</span>
            <span className="neon">&quot;원조 스코어러 승이&quot;</span>
            <span className="neon">&quot;상남자농구 상민이형&quot;</span>
            <span className="neon">&quot;MIP 남권이&quot;</span>
            <span className="neon">&quot;아프지마 재훈이&quot;</span>
            <span className="neon">&quot;농구는 입으로 명환팀장님&quot;</span>
          </NameList>
          모두 고생많으셨습니다!!
        </Text>
        <Quote isRotate={true} />

        <ImgBox>
          <Image
            src={`${BASE_IMG_URL}/season/s6/s6-2.png`}
            alt="이미지1"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "60%", height: "auto" }}
          />
        </ImgBox>
      </TextBox>

      <DivideLine />

      {/* 문단 */}
      <TextBox>
        <QText>
          Q: 지금 2연속 우승이십니다. 그동안 우승과 연이 없다가 최근들어 우승을
          연속으로 하고 계신데 비결이나 남다른 각오가 있나요?
        </QText>
        <Quote isRotate={false} />
        <Text $break={true} $align="center">
          팀원분들을 너무 잘 만났다고 생각합니다. 다들 웃으며 즐겁게 뛰기도
          했지만, 우승을 위한 갈망들이 다들 보일정도로 열정적으로 뛰고 열심히
          출석해줘서 가능하지 않았나 싶습니다. 또 영상 돌려볼때마다 열심히 뛰는
          팀원들을 보면서 가끔..? 걸어다니던 제 모습을 보며 반성하게 되었습니다.
          마지막 경기날 늦잠잘뻔했는데.. <br />
          촉이 어떻게 발동했는지 깨워준 <br />
          <strong>성은이에게 고맙다는 말을 전하고 싶습니다.</strong>
        </Text>
        <Quote isRotate={true} />
        <ImgBox>
          <ImageBox
            src={`${BASE_IMG_URL}/season/s6/s6-3.png`}
            alt="이미지1"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "60%", height: "auto" }}
          />
        </ImgBox>
      </TextBox>

      <DivideLine />

      {/* 문단 */}
      <TextBox>
        <QText>
          Q: 입농구 팀으로 한 시즌 치루면서 가장 좋았던 점과 힘들었던 점은?
        </QText>
        <Quote isRotate={false} />
        <Text $break={true}>
          가장 좋았던 점은 경기 중간중간 상대에 맞게 다들 이야기하며 수비전략과
          공격전략을 변경하였는데, 그게 쿼터마무리까지 성공적으로 흘러갔을 때
          기분이 좋았습니다.
          <FloatImg
            src={`${BASE_IMG_URL}/season/s6/s6-4.png`}
            alt="르브론"
            way="right"
            width={120}
            height={115}
            style={{ padding: "4px 0" }}
          />
          힘들었던 점은 팀원분들이 슛찬스를 많이 만들어주는데도 슛감이 떨어져서
          다 튕겨나올 때 불안감이 계속 생겨서힘들었습니다.. <br />
          그래서 그런가 더욱 <strong>우당탕탕 농구를 하게 되었고, </strong>
          상대한 타 팀원분들에게 죄송한 마음이 들었습니다.🙏🏻
        </Text>
        <Quote isRotate={true} />
      </TextBox>

      <DivideLine />

      {/* 문단 */}
      <TextBox>
        <QText>
          Q: MVP로 선정되신 이상엽 선수가 생각하는 숨은 MVP는 누구라고
          생각하시나요?
        </QText>
        <Quote isRotate={false} />
        <Text $break={true}>
          <FloatImg
            src={`${BASE_IMG_URL}/season/s6/s6-5.png`}
            alt="김남권"
            way="right"
            width={126}
            height={206}
            style={{ padding: "4px 0" }}
          />
          저희 팀원분들 모두 훌룡했지만.. 남권이!! 장난이 아니고 정말{" "}
          <strong>김남권 선수</strong>가 숨은 MVP라고 생각합니다.. 영상을
          돌려보면서 남권이가 수비할 때 제일 열심히 하더라고요. 이리 뛰고 저리
          뛰는 모습을 보면서 ‘ 난 왜 이렇게 수비를 쉽게 포기하지 ’ 하면서
          반성했습니다.. 실제로 덕분에 수비 에너지도 높아졌던 거 같아요. 그리고
          공격력이 막강한건.. 아니지만..! 매번 스크린걸고 저희 팀원들을 위해
          궃은일을 많이 했기에 저희 팀이 우승까지 할 수 있었던 것 같습니다.
        </Text>
        <Quote isRotate={true} />
      </TextBox>

      <DivideLine />

      {/* 문단 */}
      <TextBox>
        <QText>
          Q: 시즌 6를 치루면서 가장 상대하기 힘들었던 선수가 있다면 누구인가요?
        </QText>
        <Text $break={false}>
          <FloatImg
            src={`${BASE_IMG_URL}/season/s6/s6-6.png`}
            alt="권문영"
            way="left"
            width={129}
            height={159}
            style={{ padding: "4px 0" }}
          />
          문영이형이 제일 상대하기 힘들었습니다. 밖에서 공 잡는 걸 보고 수비하러
          좀만 나가면 골밑이 비어버리고, 레이업 돌파하실때 붙으면 팀원한테
          킬패스 하고, 떨어지면 레이업 올라가고.. 상대방 반응을 보면서 하는
          농구다보니 막기가 까다로웠습니다. 나름 농구를 같이 오래 했는데, 아직도
          모르겠어요 ㅋㅋ
        </Text>
      </TextBox>

      <DivideLine />

      <TextBox>
        <QText>
          Q: 상엽 주니어 출산을 앞두고 있다고 들었습니다. 향후 식서스 계획과
          각오가 있나요?
        </QText>
        <Text $break={false}>
          잠시 육아로 언제 돌아올지는 미정이지만... 정말 빨리 다시 농구하고 싶을
          것 같아요,,,,,,,,, 선배님들의 팁이 필요합니다!! 상민이형이랑 민호는
          어떻게 그렇게 빨리 돌아올 수 있었는지 궁금하네요.. 저도 다다음 시즌
          복귀를 노려보겠습니다!! 와이프한테 다들 이때쯤이면 농구 시작하더라~
          계속 이야기해줘야겠어요 :)
        </Text>
        <ImageBox
          src={`${BASE_IMG_URL}/season/s6/s6-7.png`}
          alt="이미지1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "80%", height: "auto" }}
        />
      </TextBox>

      <DivideLine />

      <TextBox>
        <QText>Q: 마지막으로 Am Sixers 팀원들에게 하고 싶은 말이 있다면?</QText>
        <Text $break={false}>
          21살때부터 동호회 농구를 하면서 이팀 저팀 다녀봤지만, 식서스만큼
          애정가는 팀이 없는 것 같습니다. 형님들, 동생들과 같이 농구할 때, 놀때
          너무 행복하고 재밌고.. 어떻게 이런 좋은 사람들만 모아놨을까 싶을
          정도로 애정이 가네요..ㅎㅎ 운영진분들도 매 시즌 너무 재밌고, 열심히
          운영해줘서 더욱 농구할 맛이 나는 거 같아요. 아 복귀하는 분들, 새로
          들어올 진곤이형도 너무 환영합니다!! 저는 잠시 육아하러 가지만...
          ㅜㅡㅜ 금방 돌아오도록 해볼께요! 모두 다치지 마시고, 항상 스마일☺️농구
          가즈아~
        </Text>
      </TextBox>

      <div>
        <ImageBox
          src={`${BASE_IMG_URL}/season/s6/s6-9.png`}
          alt="이미지5"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          unoptimized
        />
      </div>
    </Box>
  );
};

export default StoryPage;

const Box = styled.div`
  padding: 16px;
`;

const FirstImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
`;

const TextBox = styled.div`
  margin: 24px 0;
  position: relative;
`;

const Text = styled.p<{
  $break: boolean;
  $align?: "left" | "center" | "right";
}>`
  word-break: ${(props) => (props.$break ? "break-all" : "keep-all")};
  font-size: 15px;
  text-align: ${(props) => props.$align ?? "left"};
`;

const QText = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin: 4px 0;
`;

const NameList = styled.span`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

const ImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
