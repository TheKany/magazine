"use client";

import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  tp: number;
  lp: number;
  bp: number;
  rp: number;
};

const PaddingBox = ({ children, tp, lp, bp, rp }: Props) => {
  return (
    <Box $tp={tp} $lp={lp} $bp={bp} $rp={rp}>
      {children}
    </Box>
  );
};

export default PaddingBox;

const Box = styled.div<{
  $tp: number;
  $lp: number;
  $bp: number;
  $rp: number;
}>`
  padding: $tp $lp $bp $rp;
`;
