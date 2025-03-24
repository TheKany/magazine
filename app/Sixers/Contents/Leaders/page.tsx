"use client";

import { BASE_IMG_URL } from "@/app/config";
import ImageBox from "@/components/ImageBox";
import Container from "@/components/_Container";
import styled from "styled-components";

const LeaderPage = () => {
  const data = [
    {
      season: 1,
      leader: ["이 승", "기세면", "강동구"],
      winner: "워시 페이서스",
    },
    {
      season: 2,
      leader: ["신지호", "동건명", "강동구"],
      winner: "어게인 워시 페이서스",
    },
    {
      season: 3,
      leader: ["김진우", "이근우", "조형준"],
      winner: "워시 페이서스",
    },
    {
      season: 4,
      leader: ["정재훈", "심상민", "이민재"],
      winner: "워시 페이서스",
    },
    {
      season: 5,
      leader: ["", "", ""],
      winner: "",
    },
  ];

  return (
    <Container>
      <Box>
        {data.map((el) => (
          <div key={el.season}>
            <SeasonTitle>시즌 {el.season}</SeasonTitle>
            <ImageBox
              src={`${BASE_IMG_URL}/season/s${el.season}/leader.png`}
              alt={`시즌${el.season} 팀장`}
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

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SeasonTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: "Jua";
  text-align: center;
  margin-top: 16px;
`;
