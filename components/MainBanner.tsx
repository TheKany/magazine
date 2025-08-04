"use client";

import Wrapper from "./_common/Element/_Wrapper";
import WinnerBanner from "./Banner/WinnerBanner";

const MainBanner = () => {
  return (
    <Wrapper>
      {/* 시즌 중 */}
      {/* <SliderBanner /> */}

      {/* 시즌 종료 후 */}
      <WinnerBanner />
    </Wrapper>
  );
};

export default MainBanner;
