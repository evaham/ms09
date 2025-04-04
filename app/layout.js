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
    <html lang="ko" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <div className="flex h-14 items-center border bg-white dark:bg-slate-800">
            <Link className="h-full border" href="/" >첫화면</Link>
            <a>매장명<i>아이콘</i></a>
            <div className="h-full ml-auto border">신청조회</div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
