import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <div className="flex h-16 border">
            <Link className="mr-4" href="/">첫화면</Link>
            <a>레이어팝업<i>아이콘</i></a>
            <div className="ml-auto">신청조회</div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
