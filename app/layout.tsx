import "./globals.css";

import type { Metadata } from 'next';
import { Silkscreen } from "next/font/google";


import LogoBlack from "./_assets/logo/icons8-pixel-heart-100 (black).png";
import LogoWhite from "./_assets/logo/icons8-pixel-heart-100.png";

import Bottom from "./_components/Bottom";
import DynamicNavbar from './_components/DynamicNavbar';
import { SocialList } from "./_data/Social";
const silkScreen = Silkscreen({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Gate Hacks',
  description: 'Hackathon ',
  keywords: 'Hackathon, Colgate, Computer Science',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={silkScreen.className}>
        <DynamicNavbar Logo={LogoBlack.src} />
        <div>{children}</div>
        <Bottom Logo={LogoWhite.src} SocialList={SocialList} />
      </body>
    </html>
  );
}
