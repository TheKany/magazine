"use client";

import styled from "styled-components";

type Props = {
  url: string;
  title: string;
  subtitle: string;
};

const MainLink = ({ url, title, subtitle }: Props) => {
  const isSeason = url.includes("PlayNow");
  return (
    <>
      {isSeason ? (
        <ButtonOutline href={`/Sixers/Contents/${url}`}>
          <LinkBtnForSeason>
            <TextBoxForSeason>
              <TextForSeason>{title}</TextForSeason>
              <SubText>{subtitle}</SubText>
            </TextBoxForSeason>
          </LinkBtnForSeason>
        </ButtonOutline>
      ) : (
        <LinkBtn href={`/Sixers/${url}`}>
          <TextBox>
            <Text>{title}</Text>
            <SubText>{subtitle}</SubText>
          </TextBox>
        </LinkBtn>
      )}
    </>
  );
};

export default MainLink;

const LinkBtn = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;

  font-family: "Jua";
  color: #121212;
  font-size: 18px;

  position: relative;
  padding: 16px;
  border-radius: 8px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  background-color: #fff;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const Text = styled.span`
  font-size: 16px;
  padding-top: 4px;
`;

const SubText = styled.span`
  font-size: 12px;
  color: #c1c2c1;
`;

const ButtonOutline = styled.a`
  display: block;
  padding: 8px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 4px 4px inset;
`;

const LinkBtnForSeason = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;

  font-family: "Jua";
  color: #121212;
  font-size: 18px;

  position: relative;
  padding: 16px;
  border-radius: 8px;

  background-color: #fff;
`;

const TextBoxForSeason = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const TextForSeason = styled.span`
  font-size: 20px;
  padding-top: 4px;
`;
