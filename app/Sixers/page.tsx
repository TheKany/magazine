"use client";

import MvpBanner from "@/components/Banner/MvpBanner";
import PlanBanner from "@/components/Banner/PlanBanner";
import MainBanner from "@/components/MainBanner";
import Container from "@/components/_common/Element/_Container";

export default function Sixers() {
  return (
    <>
      <MainBanner />

      <PlanBanner />

      <Container>
        {/* <SeasonLinkBtn season={6} /> */}

        <MvpBanner />
      </Container>
    </>
  );
}
