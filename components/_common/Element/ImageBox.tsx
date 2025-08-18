"use client";

import Image, { ImageProps } from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

type Props = ImageProps & {
  ratio?: `${number} / ${number}` | string;
};

const ImageBox: React.FC<Props> = ({ ratio = "16 / 9", fill, ...props }) => {
  const [loading, setLoading] = useState(true);

  return (
    <ImageWrapper $loading={loading} $isFill={!!fill} $ratio={ratio}>
      {loading && <SkeletonImage />}
      <Image
        {...props}
        fill={fill}
        alt={props.alt}
        onLoadingComplete={() => setLoading(false)}
        style={{
          ...props.style,
          objectFit: props.style?.objectFit ?? "cover",
          opacity: loading ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
    </ImageWrapper>
  );
};

export default ImageBox;

const ImageWrapper = styled.div<{
  $loading: boolean;
  $isFill: boolean;
  $ratio: string;
}>`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $isFill }) => $isFill && `height: 100%;`}

  ${({ $loading, $isFill, $ratio }) =>
    $loading && !$isFill
      ? `
    min-height: 200px;
    aspect-ratio: ${$ratio};
  `
      : ""}
`;

const SkeletonImage = styled.div`
  position: absolute;
  inset: 0;
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
