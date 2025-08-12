import { BASE_IMG_URL } from "@/app/config";
import dynamic from "next/dynamic";
import styled from "styled-components";
import ImageBox from "../_common/Element/ImageBox";
const Fireworks = dynamic(() => import("../_common/Lottie/Fireworks"), {
  ssr: false,
});

const WinnerBanner = () => {
  return (
    <>
      <Fireworks />
      <WinnerText>🎇 籠口 팀 우승을 축하드립니다! 🎇</WinnerText>

      <ImgWrapper>
        <ImageBox
          src={`${BASE_IMG_URL}/banner/season6_winner.png`}
          alt="season6 우승팀"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          unoptimized
          priority
        />
      </ImgWrapper>
    </>
  );
};

export default WinnerBanner;

const WinnerText = styled.div`
  background-color: #492a8d;
  text-align: center;
  color: #fff;
  padding: 8px 0;
`;

const ImgWrapper = styled.div`
  width: 80%;
  margin: 8px auto;
  overflow: hidden;
`;
