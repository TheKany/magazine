"use client";

import { usePathname, useRouter } from "next/navigation";
import Wrapper from "../_common/Element/_Wrapper";
import Image from "next/image";
import styled from "styled-components";

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
        <MenuBox>
          <MenuBtn onClick={() => router.back()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#121212"
            >
              <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>
          </MenuBtn>
        </MenuBox>
        {/*
         * url: /Sixers/Information/*
         * info: 공지사항, 회칙, 경기 규칙
         */}
        {/* <MenuBox>
          <MenuBtn onClick={() => handleNavigation("/Sixers/Information")}>
            <Image
              src={"/img/common/nav/nav-notice.webp"}
              alt="공지사항"
              width={25}
              height={25}
            />
            <MenuText $isActive={pathname.includes("/Sixers/Information")}>
              식서스 안내
            </MenuText>
          </MenuBtn>
        </MenuBox> */}

        {/*
         * url: /Sixers/InGameSeason
         * info: 현 시즌 정보
         */}
        {/* <MenuBox>
          <MenuBtn onClick={() => handleNavigation("/Sixers/InGameSeason")}>
            <Image
              src={"/img/common/nav/nav-season.webp"}
              alt="현 시즌 정보"
              width={52}
              height={15}
              style={{ marginTop: 5 }}
            />
            <MenuText $isActive={pathname.includes("/Sixers/InGameSeason")}>
              시즌정보
            </MenuText>
          </MenuBtn>
        </MenuBox> */}

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
         * info: 식서스 즐길거리
         */}
        {/* <MenuBox>
          <MenuBtn onClick={() => handleNavigation("/Sixers/Contents")}>
            <Image
              src={"/img/common/nav/nav-contents.webp"}
              alt="설정"
              width={25}
              height={25}
            />
            <MenuText $isActive={pathname.includes("/Sixers/Contents")}>
              컨텐츠
            </MenuText>
          </MenuBtn>
        </MenuBox> */}

        {/*
         * url: /Sixers/History
         * info: 식서스 여러 기록 자료
         */}
        {/* <MenuBox>
          <MenuBtn onClick={() => handleNavigation("/Sixers/History")}>
            <Image
              src={"/img/common/nav/nav-history.webp"}
              alt="기록실"
              width={30}
              height={25}
            />
            <MenuText $isActive={pathname.includes("/Sixers/History")}>
              기록실
            </MenuText>
          </MenuBtn>
        </MenuBox> */}

        <MenuBox>
          <MenuBtn onClick={() => router.forward()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#121212"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
          </MenuBtn>
        </MenuBox>
      </NavContainer>
    </Wrapper>
  );
};

export default BottomNav;

const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: grid;
  /* grid-template-columns: repeat(5, 1fr); */
  grid-template-columns: repeat(3, 1fr);
  place-content: center;
  place-items: center;
  background-color: #f4f5f7;

  padding: 8px;
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuBtn = styled.button`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuText = styled.p<{ $isActive: boolean }>`
  font-size: 11px;
  padding-top: 2px;
  color: ${(props) => (props.$isActive ? "#fff" : "#091015")};
  background-color: ${(props) => (props.$isActive ? "#492A8D" : "transparent")};
  padding: 2px 4px;
  border-radius: 4px;
`;
