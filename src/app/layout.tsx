import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-0 left-0 w-full h-24 bg-slate-500">
          <div className="flex flex-row gap-8 justify-center items-center">
            <Link href={"/"}>홈</Link>
            <Link href={"/champions"}>챔피언</Link>
            <Link href={"/items"}>아이템</Link>
            <Link href={"/rotation"}>로테이션</Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-full py-24">
          {children}
        </div>
      </body>
    </html>
  );
}
