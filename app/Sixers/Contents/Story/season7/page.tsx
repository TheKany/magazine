"use client";

import { BASE_IMG_URL } from "@/app/config";
import { DivideLine } from "@/components/_common/Element/_DivideLine";
import FloatImg from "@/components/_common/Element/FloatImg";
import ImageBox from "@/components/_common/Element/ImageBox";
import Quote from "@/components/_common/svg/Quote";
import Image from "next/image";
import styled from "styled-components";

const StoryPage = () => {
  return (
    <Box>
      <ImageBox
        src={`${BASE_IMG_URL}/season/s7/mvp.png`}
        alt="이미지1"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "80%", height: "auto" }}
      />
      {/* 문단 */}
      <Text $break={false} $align="center">
        이번 시즌을 보내며
        <br />
        출석이 얼마나 중요한가에 대해
        <br /> 다시 한 번 깨달을 수 있었다. <br />
        그리고 마지막 치열한 접전을 끝으로
        <br /> 우승을 한 <strong>뀨월드!</strong>
        <br />
        그리고 이 시즌의 왕은
        <br />
        식서스에서 가장 출석이 좋은
        <br /> <strong>권문영</strong> 선수로 결정되었다.
      </Text>

      <FirstImg>
        <ImageBox
          src={`${BASE_IMG_URL}/season/s7/s7-1.png`}
          alt="이미지1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "80%", height: "auto" }}
        />
      </FirstImg>

      <TextBox>
        <QText>
          Q: 권문영선수!! 드디어 투표단원들의 선택으로 시즌 7의 MVP가
          되셨습니다. 소감 한 말씀 부탁드립니다.
        </QText>
        <Quote isRotate={false} />

        <Text $break={true} $align="center">
          특별히 뛰어난 모습을 보여드리지 못했는데,
          <br />
          MVP를 주셔서 조금은 당황스럽네요..
          <br />
          하지만, MVP가 되니까 기분은 매우 좋습니다.
          <br />
          시즌이 치뤄지면서 손발이 맞아간 우리 팀원들 덕분에 우승할 수
          있었습니다.
          <br />
          감사합니다! 뀨월드 여러분~
        </Text>

        <Quote isRotate={true} />

        <ImgBox>
          <Image
            src={`${BASE_IMG_URL}/season/s7/s7-2.png`}
            alt="이미지1"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </ImgBox>
      </TextBox>

      <DivideLine />

      {/* 문단 */}
      <TextBox>
        <QText>
          Q: 항상 드래프트에서 높은 순위에 지명되고 있습니다. 매 시즌 팀장님들의
          사랑을 받는 비결이 무엇인가요?
        </QText>
        <Quote isRotate={false} />
        <Text $break={true} $align="center">
          우리 식서스는 센터가 부족한 팀이라 키가 큰 사람은 무조건 상위 픽인걸로
          알고 있는데, 저도 식서스내에서는 큰 키에 속하기에 상위픽에 거론이 되는
          거 같아요. 거기에 농구는 칭찬과 격려가 아닌 비난과 욕설이 필요하다는
          저의 마인드를 이해해주는 몇몇 변태같은 팀장님들이 존재하기에 내쳐지지
          않고 상위픽에 살아남는 거 같습니다.
        </Text>
        <Quote isRotate={true} />
      </TextBox>

      <DivideLine />

      {/* 문단 */}
      <TextBox>
        <QText>
          Q: 뀨월드팀으로 한 시즌 치루면서 가장 좋았던 점과 힘들었던 점은?
        </QText>
        <Quote isRotate={false} />
        <Text $break={true}>
          시즌을 치룰 땐 다치지 않고 좋은 성적을 내는 게 중요하다고 생각하는데,
          우리 뀨월드가 다친 사람 하나없이 우승을 해서 너무 좋습니다. 그리고
          병규형이 언제인지는 모르겠지만, 30점을 넣었을 때가 가장 좋았습니다.
          <br />
          <FloatImg
            src={`${BASE_IMG_URL}/season/s7/s7-3.png`}
            alt="르브론"
            way="right"
            width={118}
            height={134}
            style={{ padding: "4px 0" }}
          />
          힘들었던 점은 뀨월드의 전신인 뀨키즈에서 연패를 했던 때인데, 그때는 좀
          많이 힘들어서 농구하러 가기 싫더라구요...ㅋㅋ
        </Text>
        <span style={{ fontSize: 12, color: "#474747" }}>
          뀨월드에서는 힘든 점이 없었다고 한다...
        </span>
        <Quote isRotate={true} />
      </TextBox>

      <DivideLine />

      {/* 문단 */}
      <TextBox>
        <QText>
          Q: MVP로 선정되신 권문영 선수가 생각하는 숨은 MVP는 누구라고
          생각하시나요?
        </QText>
        <Text $break={false}>
          제 생각에 MVP는 <strong>병규형</strong>인 것 같습니다. 병규형이 득점을
          많이 해줘서 이긴 경기도 있고, 많은 파울로 수비에 도움을 줘 이긴 경기도
          있거든요.
          <br />
          이처럼 공수 양면에서 많은 기여를 해주셨으니 당연히 MVP 라고
          생각했는데,,,
          <br />전 항상 조력자 느낌인데 말이죠. 저에게 있어 병규형은 숨은 MVP가
          아니라 진정한 MVP 입니다.
        </Text>
      </TextBox>

      <ImgBox>
        <Image
          src={`${BASE_IMG_URL}/season/s7/s7-4.png`}
          alt="이미지1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </ImgBox>

      <DivideLine />

      {/* 문단 */}
      <TextBox>
        <QText>
          Q: 시즌 7을 치루면서 가장 상대하기 힘들었던 선수가 있다면 누구인가요?
        </QText>
        <Quote isRotate={false} />
        <Text $break={true}>
          <p style={{ textAlign: "center" }}>
            키, 탄력, 순발력 전부 저보다 훨씬 좋기 때문에
            <br /> 멘탈을 건드리는 거 말곤 상대할 방법이 없는 <br />
            <strong>상엽이...</strong>
          </p>
          <br />
          <p style={{ textAlign: "center" }}>
            그런데 멘탈까지 좋아서 짜증이 나는 <br />
            <strong>상엽이...</strong>
          </p>
          <br />
          <p
            style={{
              fontSize: 13,
              color: "#474747",
              textDecoration: "line-through",
            }}
          >
            시즌 7에는 참가 하지 않았지만, 상대하기 힘들었던 상엽이...
          </p>
          <FloatImg
            src={`${BASE_IMG_URL}/season/s7/s7-5.png`}
            alt="상엽&문영"
            way="right"
            width={121}
            height={203}
            style={{ padding: "4px 0" }}
          />
          <br />
          이번에 식서스에 젊은 친구들이 참가한 대회를 감독의 입장에서 보니
          더더욱 상엽이의 위력을 알 수 있었습니다.
          <br />
          마르스.. 그놈 상엽이 앞에서는 먼지같은 존재였는데...ㅜ
          <br />
          <strong>상엽아 아들난거 축하하고! 빨리 복귀하자~</strong>
        </Text>

        <Quote isRotate={true} />

        <ImgBox>
          <Image
            src={`${BASE_IMG_URL}/season/s7/s7-6.png`}
            alt="이미지1"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </ImgBox>
      </TextBox>

      <DivideLine />

      <TextBox>
        <QText>
          Q: 아직까지 팀장을 안해보셨는데, 혹시 팀장이 되신다면 꾸리고 싶은 팀에
          대해 살짝 힌트..?
        </QText>
        <Quote isRotate={false} />
        <p style={{ textAlign: "center", fontWeight: "bold" }}>친하잖아~</p>
        <Quote isRotate={true} />

        <ImgBox>
          <Image
            src={`${BASE_IMG_URL}/season/s7/s7-7.png`}
            alt="이미지1"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </ImgBox>
      </TextBox>

      <DivideLine />

      <TextBox>
        <QText>Q: 마지막으로 Am Sixers 팀원들에게 하고 싶은 말이 있다면?</QText>
        <Text $break={false}>
          식서스에 들어온지 이제 겨우 일년 정도 되었네요. 10년은 알고 지낸 것
          처럼 다들 너무 편하게 대해주셔서 감사합니다. 이런 좋은 분위기
          유지하면서 다치지 말고, 늙지도 말고.. 오래오래 같이했으면 좋겠습니다.
        </Text>
      </TextBox>

      <ImgBox>
        <Image
          src={`${BASE_IMG_URL}/season/s7/s7-8.png`}
          alt="이미지1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </ImgBox>
      <ImgBox>
        <Image
          src={`${BASE_IMG_URL}/season/s7/s7-9.jpg`}
          alt="이미지1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", marginTop: 16 }}
        />
      </ImgBox>
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

const ImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
