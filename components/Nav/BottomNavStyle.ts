import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-content: center;
  place-items: center;
  background-color: #f4f5f7;

  padding: 8px;
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuBtn = styled.button`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const MenuText = styled.p<{ $isActive: boolean }>`
  font-size: 11px;
  padding-top: 2px;
  color: ${(props) => (props.$isActive ? "#fff" : "#091015")};
  background-color: ${(props) => (props.$isActive ? "#492A8D" : "transparent")};
  padding: 2px 4px;
  border-radius: 4px;
`;

// #492A8D
// #e84255
