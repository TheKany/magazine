/**
 * TODO : 로그인 구현시 사용해야함
 */
// "use client";

// import Container from "@/components/_Container";
// import Image from "next/image";
// import React from "react";
// import styled from "styled-components";

// const Home = () => {
//   return (
//     <Container>
//       <Box>
//         <Image src={"/sixers.png"} alt="식서스 로고" width={300} height={200} />
//         <input type="number" name="" id="" />
//         <LoginBtn>로그인</LoginBtn>
//       </Box>
//     </Container>
//   );
// };

// export default Home;

// const Box = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   padding-top: 40px;
// `;

// const LoginBtn = styled.button`
//   width: 90%;
//   height: 40px;

//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/Sixers");
  }, [router]);

  return null;
};

export default Home;
