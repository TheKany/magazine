"use client";

import { BASE_IMG_URL } from "@/app/config";
import BackBtn from "@/components/_common/Button/BackBtn";
import ImageBox from "@/components/_common/Element/ImageBox";
import Container from "@/components/_common/Element/_Container";
import { seasonLeader } from "@/lib/query/seasonLeader";
import { useEffect, useState } from "react";
import styled from "styled-components";

type LeaderProps = {
  id: number;
  state: number;
};

const LeaderPage = () => {
  const [leaderList, setLeaderList] = useState<LeaderProps[]>([]);
  const onLoadData = async () => {
    const resData = await seasonLeader();
    console.log(resData);

    setLeaderList(resData);
  };

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <Container>
      <BackBox>
        <BackBtn />
      </BackBox>
      <Box>
        {leaderList?.map((el) => (
          <div key={el.id}>
            <SeasonTitle>시즌 {el.id}</SeasonTitle>
            <ImageBox
              src={
                el.state === 0
                  ? `${BASE_IMG_URL}/history/leader/leaderDefault.png`
                  : `${BASE_IMG_URL}/history/leader/s${el.id}.png`
              }
              alt={`시즌${el.id} 팀장`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
          </div>
        ))}
      </Box>
    </Container>
  );
};

export default LeaderPage;

const BackBox = styled.div`
  padding: 0 16px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin: 16px 0;
`;

const SeasonTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: "Jua";
  text-align: center;
  margin-top: 16px;
`;
