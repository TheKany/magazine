"use client";

import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";
import Wrapper from "./_Wrapper";
import Calendar from "./svg/Calendar";
import Home from "./svg/Home";
import HubTopic from "./svg/HubTopic";
import Megaphone from "./svg/Megaphone";
import Whistle from "./svg/Whistle";

const Navigation = () => {
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
        {/* /Sixers/Notice */}
        <MenuBox>
          <MenuBtn onClick={() => handleNavigation("/Sixers/Notice")}>
            <Megaphone isActive={pathname.includes("/Sixers/Notice")} />
          </MenuBtn>
          <MenuText $isActive={pathname.includes("/Sixers/Notice")}>
            공지사항
          </MenuText>
        </MenuBox>

        {/* /Sixers/Rules */}
        <MenuBox>
          <MenuBtn onClick={() => handleNavigation("/Sixers/Rules")}>
            <Whistle isActive={pathname.includes("/Sixers/Rules")} />
          </MenuBtn>
          <MenuText $isActive={pathname.includes("/Sixers/Rules")}>
            회칙
          </MenuText>
        </MenuBox>

        {/* /Sixers */}
        <MenuBox>
          <MenuBtn onClick={() => handleNavigation("/")}>
            <Home />
          </MenuBtn>
        </MenuBox>

        {/* /Sixers/Contents */}
        <MenuBox>
          <MenuBtn onClick={() => handleNavigation("/Sixers/Contents")}>
            <HubTopic isActive={pathname.includes("/Sixers/Contents")} />
          </MenuBtn>
          <MenuText $isActive={pathname.includes("/Sixers/Contents")}>
            컨텐츠
          </MenuText>
        </MenuBox>

        {/* /Sixers/Calendar */}
        <MenuBox>
          <MenuBtn onClick={() => handleNavigation("/Sixers/Calendar")}>
            <Calendar isActive={pathname.includes("/Sixers/Calendar")} />
          </MenuBtn>
          <MenuText $isActive={pathname.includes("/Sixers/Calendar")}>
            일정
          </MenuText>
        </MenuBox>
      </NavContainer>
    </Wrapper>
  );
};

export default Navigation;

const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-content: center;
  place-items: center;
  background-color: #fff;

  padding: 8px;
  padding-bottom: 16px;
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuBtn = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: #fff;
  border: none;
  border-radius: 50px;
  padding: 4px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

const MenuText = styled.p<{ $isActive: boolean }>`
  font-size: 12px;
  padding-top: 2px;
  color: ${(props) => (props.$isActive ? "#8b8b8b" : "#371F4A")};
`;
