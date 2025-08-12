"use client";

import { BASE_IMG_URL } from "@/app/config";
import styled from "styled-components";
import ImageBox from "../_common/Element/ImageBox";

const MvpBanner = () => {
  return (
    <Box>
      <ImageBox
        src={`${BASE_IMG_URL}/banner/season6_mvp.png`}
        alt="season6 mvp"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        unoptimized
        priority
      />
    </Box>
  );
};

export default MvpBanner;

const Box = styled.div`
  width: 100%;
`;
