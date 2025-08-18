import Image from "next/image";
import styled from "styled-components";

type FloatImgProps = {
  src: string;
  alt: string;
  way: "left" | "right";
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
};

const FloatImg = ({
  src,
  alt,
  way,
  width,
  height,
  priority,
  sizes,
}: FloatImgProps) => {
  return (
    <FloatWrap $way={way} $w={width} $h={height}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? `${width}px`}
        priority={priority}
      />
    </FloatWrap>
  );
};

const FloatWrap = styled.span<{
  $way: "left" | "right";
  $w: number;
  $h: number;
}>`
  display: block;
  float: ${(p) => p.$way};
  width: ${(p) => p.$w}px;
  min-width: ${(p) => p.$w}px;
  height: ${(p) => p.$h}px;
  min-height: ${(p) => p.$h}px;
  shape-outside: inset(0 round 12px);
  shape-margin: 10px;
  margin-right: ${(p) => (p.$way === "left" ? "16px" : "0")};
  margin-left: ${(p) => (p.$way === "right" ? "16px" : "0")};
  position: relative;
`;

export default FloatImg;
