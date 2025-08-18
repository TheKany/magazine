"use client";

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

const Fireworks = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState<Record<
    string,
    unknown
  > | null>(null);
  const [visible, setVisible] = useState(false);

  const onLoadLottie = async () => {
    try {
      const res = await fetch("/lottie/fireworks.json");
      const json = await res.json();
      setAnimationData(json);
      setVisible(true);
    } catch (error) {
      console.error("Failed to load Lottie JSON:", error);
    }
  };

  useEffect(() => {
    onLoadLottie();

    const interval = setInterval(() => {
      onLoadLottie();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleComplete = () => {
    setVisible(false);
  };

  return (
    <LottieWrapper>
      {visible && animationData && (
        <Lottie
          animationData={animationData}
          loop={false}
          lottieRef={lottieRef}
          onComplete={handleComplete}
        />
      )}
    </LottieWrapper>
  );
};

export default Fireworks;

const LottieWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 80%;
  height: 80%;
  pointer-events: none;
  z-index: 9999;
`;
