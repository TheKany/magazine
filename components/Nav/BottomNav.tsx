"use client";

import { usePathname, useRouter } from "next/navigation";
import Wrapper from "../_common/Element/_Wrapper";
import Image from "next/image";
import { MenuBox, MenuBtn, MenuText, NavContainer } from "./BottomNavStyle";

const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    if (path === "/") {
      router.push("/Sixers");
    } else if (!pathname.includes(path)) {
      router.push(path);
    }
  };

  return (
    <Wrapper>
      <NavContainer>
        {/*
         * url: /Sixers/Information/*
         * info: 공지사항, 회칙, 경기 규칙
         */}
        <MenuBox>
          <MenuBtn onClick={() => handleNavigation("Sixers/Information")}>
            <Image
              src={"/img/common/nav/nav-notice.webp"}
              alt="공지사항"
              width={25}
              height={25}
            />
            <MenuText $isActive={pathname.includes("Sixers/Information")}>
              식서스 안내
            </MenuText>
          </MenuBtn>
        </MenuBox>

        {/*
         * url: /Sixers/Rules
         * info: 현 시즌 정보
         */}
        <MenuBox>
          <MenuBtn onClick={() => handleNavigation("/Sixers/Rules")}>
            <Image
              src={"/img/common/nav/nav-season.webp"}
              alt="현 시즌 정보"
              width={52}
              height={15}
              style={{ marginTop: 5 }}
            />
            <MenuText $isActive={pathname.includes("/Sixers/Rules")}>
              시즌정보
            </MenuText>
          </MenuBtn>
        </MenuBox>

        {/* /Sixers */}
        <MenuBox>
          <MenuBtn onClick={() => handleNavigation("/")}>
            <Image
              src={"/img/common/nav/nav-home.webp"}
              alt="홈으로"
              width={30}
              height={30}
            />
            <MenuText $isActive={false}>메인</MenuText>
          </MenuBtn>
        </MenuBox>

        {/*
         * url: /Sixers/Contents
         * info: 식서스 여러 기록 자료
         */}
        <MenuBox>
          <MenuBtn onClick={() => handleNavigation("/Sixers/Contents")}>
            <Image
              src={"/img/common/nav/nav-history.webp"}
              alt="기록실"
              width={30}
              height={25}
            />
            <MenuText $isActive={pathname.includes("/Sixers/Contents")}>
              기록실
            </MenuText>
          </MenuBtn>
        </MenuBox>

        {/*
         * url: /Sixers/Settings
         * info: 어플 세팅
         */}
        <MenuBox>
          <MenuBtn onClick={() => handleNavigation("/Sixers/Settings")}>
            <Image
              src={"/img/common/nav/nav-setting.webp"}
              alt="설정"
              width={25}
              height={25}
            />
            <MenuText $isActive={pathname.includes("/Sixers/Settings")}>
              설정
            </MenuText>
          </MenuBtn>
        </MenuBox>
      </NavContainer>
    </Wrapper>
  );
};

export default BottomNav;
