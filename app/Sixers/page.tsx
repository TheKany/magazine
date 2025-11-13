"use client";

import Container from "@/components/_common/Element/_Container";
import { DivideLine } from "@/components/_common/Element/_DivideLine";
import Wrapper from "@/components/_common/Element/_Wrapper";
// import ImageBox from "@/components/_common/Element/ImageBox";
// import MainImgBanner from "@/components/Banner/MainImgBanner";
import { seasonThisWeekData } from "@/lib/query/seasonInfo";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

type PlanTypes = {
  id: number;
  date: string;
  trade: boolean;
  type: string;
};

export default function Home() {
  const router = useRouter();
  const [weekPlan, setWeekPlan] = useState<PlanTypes | null>(null);
  const onLoadData = async () => {
    const resData = (await seasonThisWeekData()) as PlanTypes;

    // 날짜 포멧 바꾸기
    const y = new Date().getFullYear();
    const newDate = resData.date.replace(`${y}-`, "").replace("-", "/");
    const changeData = { ...resData, date: newDate };

    setWeekPlan(changeData);
  };

  const onClickIngameSeason = () => {
    // router.push("Sixers/InGameSeason");
    alert("시즌 준비 중..");
  };

  useEffect(() => {
    onLoadData();
  }, []);

  // 식서스 리더 와 지난 경기 기록은 빼는 걸로 합시다.
  // 추후에 통합해서 정리한 정보를 제공하는게 관리차원에서 좋을 듯

  return (
    <Container>
      <Wrapper>
        <Box>
          {/* <ImageBox
            src={"/img/common/bg/bg-main.webp"}
            alt="메인페이지 배경"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", position: "absolute" }}
            priority
            unoptimized
          /> */}
          {/* <MainImgBanner /> */}
        </Box>

        {/* 일정  */}
        <Title>이번주 일정?</Title>
        <PlanBox>
          <span>{weekPlan?.date}</span>
          <span>{weekPlan?.type}</span>
        </PlanBox>

        <DivideLine />

        <BtnBox>
          <SeasonButton onClick={onClickIngameSeason}>
            Play Season 8
          </SeasonButton>
        </BtnBox>

        {/* 메뉴들 */}
        {/* 이거 메뉴버튼 컴포넌트화 시켜야함 */}
        <MenuBox>
          <MenuBtn onClick={() => router.push("/Sixers/Information/Notice")}>
            공지사항
          </MenuBtn>
          <MenuBtn onClick={() => router.push("/Sixers/Information/Rules")}>
            식서스 규칙
          </MenuBtn>
          <MenuBtn onClick={() => router.push("/Sixers/Contents/News")}>
            식서스 뉴스
          </MenuBtn>
          <MenuBtn onClick={() => router.push("/Sixers/Contents/Story")}>
            식서스 매거진
          </MenuBtn>
        </MenuBox>
      </Wrapper>
    </Container>
  );
}

const Box = styled.div`
  position: relative;
`;

const Title = styled.p`
  font-size: 16px;
  font-family: "jua";
  margin: 16px;
`;

const PlanBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  & span {
    font-size: 24px;
    font-family: "SeoulAlrimTTF";
    font-weight: 900;
  }
`;

const BtnBox = styled.section`
  width: 100%;
  height: 80px;
  max-width: 320px;
  margin: 0 auto;
  margin-bottom: 32px;
`;

const SeasonButton = styled.button`
  font-size: 24px;
  font-family: "FingerPaint";
  color: #fff;
  background-color: #492a8d;
  border-radius: 25px;
  width: 100%;
  height: 100%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MenuBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 8px;
  padding: 16px;
`;

const MenuBtn = styled.button`
  border-radius: 8px;
  background-color: #282a2e;
  color: #fff;
  width: 100%;
  max-width: 60px;
  height: 60px;
  word-break: keep-all;
`;
