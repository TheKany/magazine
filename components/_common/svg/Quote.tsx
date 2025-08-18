import React from "react";
import styled from "styled-components";

const Quote = ({ isRotate }: { isRotate: boolean }) => {
  return (
    <Box $isRotate={isRotate}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#121212"
      >
        <path d="m228-240 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T458-480L320-240h-92Zm360 0 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T818-480L680-240h-92ZM320-500q25 0 42.5-17.5T380-560q0-25-17.5-42.5T320-620q-25 0-42.5 17.5T260-560q0 25 17.5 42.5T320-500Zm360 0q25 0 42.5-17.5T740-560q0-25-17.5-42.5T680-620q-25 0-42.5 17.5T620-560q0 25 17.5 42.5T680-500Zm0-60Zm-360 0Z" />
      </svg>
    </Box>
  );
};

export default Quote;

const Box = styled.div<{ $isRotate: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;

  transform: ${({ $isRotate }) =>
    $isRotate ? "rotate(180deg)" : "rotate(0deg)"};
`;
