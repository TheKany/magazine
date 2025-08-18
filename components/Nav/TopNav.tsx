"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { styled } from "styled-components";

const TopNav = () => {
  const pathname = usePathname();
  const hiddenTopNav = ["Information", "InGameSeason"];
  const isHiddenNav = hiddenTopNav.some((path) => pathname.includes(path));

  if (isHiddenNav) return null;

  return (
    <Container>
      <Link href={"/"} style={{ position: "relative" }}>
        <Image
          src={"/sixers.svg"}
          alt="타이틀"
          width={120}
          height={36}
          priority
        />
      </Link>

      <div>
        <Link href={"/Sixers/Calendar"} style={{ position: "relative" }}>
          <Image
            src={"/img/common/nav/nav-calander.webp"}
            alt="시즌 일정"
            width={25}
            height={25}
          />
        </Link>
      </div>
    </Container>
  );
};
export default TopNav;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px 16px 16px;
`;
