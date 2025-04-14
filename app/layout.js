
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavMenu from "./component/navMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MS공동구매",
  description: "공동구매 페이지",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width, target-densityDpi=medium-dpi" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`} >
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
