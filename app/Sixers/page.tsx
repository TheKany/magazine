"use client";

import Container from "@/components/_common/Element/_Container";
import { DivideLine } from "@/components/_common/Element/_DivideLine";
import Wrapper from "@/components/_common/Element/_Wrapper";
import ImageBox from "@/components/_common/Element/ImageBox";
import MainImgBanner from "@/components/Banner/MainImgBanner";
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
    router.push("Sixers/InGameSeason");
  };

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Box>
          <ImageBox
            src={"/img/common/bg/bg-main.webp"}
            alt="메인페이지 배경"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            priority
            unoptimized
          />
          <MainImgBanner />
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
            Play Season 7
          </SeasonButton>
        </BtnBox>
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
