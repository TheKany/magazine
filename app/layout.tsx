import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navigation from "@/components/Navigation";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "Sixers",
  description: "Sixers 멤버를 위한...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansKR.variable}`}>
        <Wrapper>
          <Title />
          {children}
        </Wrapper>

        <Navigation />
      </body>
    </html>
  );
}
