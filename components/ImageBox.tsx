"use client";

import Image, { ImageProps } from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

const ImageBox: React.FC<ImageProps> = (props) => {
  const [loading, setLoading] = useState(true);

  return (
    <ImageWrapper $loading={loading}>
      {loading && <SkeletonImage />}
      <Image
        {...props}
        alt={props.alt}
        onLoad={() => setLoading(false)}
        style={{
          ...props.style,
          opacity: loading ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
    </ImageWrapper>
  );
};

export default ImageBox;

const ImageWrapper = styled.div<{ $loading: boolean }>`
  position: relative;
  width: 100%;
  min-height: ${(props) => (props.$loading ? "200px" : "auto")};
  aspect-ratio: ${(props) => (props.$loading ? "16 / 9" : "")};
  overflow: hidden;
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  border-radius: 8px;
  background-size: 400% 100%;
  animation: loading 1.2s infinite;

  @keyframes loading {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;
