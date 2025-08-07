"use client";

import MainBanner from "@/components/MainBanner";
import PlanBanner from "@/components/Banner/PlanBanner";
import Container from "@/components/_common/Element/_Container";
import MvpBanner from "@/components/Banner/MvpBanner";

export default function Sixers() {
  return (
    <>
      <PlanBanner />

      <MainBanner />

      <Container>
        {/* <SeasonLinkBtn season={6} /> */}

        <MvpBanner />
      </Container>
    </>
  );
}
