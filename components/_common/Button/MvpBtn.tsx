import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

const MvpBtn = () => {
  const router = useRouter();

  const onClickLinkMvp = () => {
    router.push("Sixers/Contents/Story/season6");
  };
  return (
    <MVPLink>
      <button onClick={onClickLinkMvp}>🏀 MVP 인터뷰 바로가기 🏀</button>
    </MVPLink>
  );
};

export default MvpBtn;

const MVPLink = styled.div`
  width: 100%;
  border-radius: 16px;

  position: absolute;
  bottom: -60px;
  left: 0;
  background-color: #fff;
  padding: 8px 16px;

  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  & button {
    width: 100%;
  }
`;
