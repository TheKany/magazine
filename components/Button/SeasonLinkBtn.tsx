import React from "react";
import styled from "styled-components";
import MainLink from "./MainLink";
import Image from "next/image";
import Arrowsvg from "../svg/Arrow";

type Props = {
  season: number;
};

const SeasonLinkBtn = ({ season }: Props) => {
  return (
    <SeasonButtonContainer>
      <SeasonButtonInnerContainer>
        <MainLink
          url="Contents/Season"
          title={`시즌 ${season} 리그 정보`}
          subtitle={`Sixers Season ${season}`}
        />
        <ImgBox>
          <Image
            src={"/img/sixers-lakers.png"}
            alt="new"
            fill
            unoptimized
            priority
          />
        </ImgBox>

        <ArrowImgBox>
          <Arrowsvg />
        </ArrowImgBox>
      </SeasonButtonInnerContainer>
    </SeasonButtonContainer>
  );
};

export default SeasonLinkBtn;

const SeasonButtonContainer = styled.div`
  padding: 8px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 4px 4px inset;
  margin: 16px 0;
`;

const SeasonButtonInnerContainer = styled.div`
  position: relative;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const ImgBox = styled.div`
  width: 64px;
  height: 40px;
  display: block;
  position: absolute;
  top: 10px;
  left: 8%;
`;

const ArrowImgBox = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0px, -50%);
`;
