"use client";

import MainLink from "@/components/Button/MainLink";
import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";

export default function Home() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <>
      <Banner>
        <Slider {...settings}>
          {Array.from({ length: 5 }).map((_, idx) => {
            return (
              <div key={idx}>
                <Image
                  src={`/img/news/ad${idx}.png`}
                  alt={`광고${idx}`}
                  width={400}
                  height={300}
                  layout="responsive"
                />
              </div>
            );
          })}
        </Slider>
      </Banner>

      <LinkList>
        <MainLink
          url="/Notice"
          title="식서스 공지사항"
          subtitle="Sixers Notice"
        />
        <MainLink url="/Rules" title="식서스 회칙" subtitle="Sixers Rules" />
        <MainLink url="/News" title="식서스 뉴스" subtitle="Sixers News" />
      </LinkList>

      <LinkListGrid>
        <MainLink
          url="/Leaders"
          title="식서스 팀장"
          subtitle="Sixers Season Leaders"
        />
        <MainLink
          url="/Calendar"
          title="식서스 일정"
          subtitle="Sixers Schedule"
        />
      </LinkListGrid>

      <LinkList>
        <MainLink
          url="/Story"
          title="식서스 매거진"
          subtitle="Sixers Magazine"
        />
      </LinkList>
    </>
  );
}

const Banner = styled.div``;

const LinkList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
`;

const LinkListGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
