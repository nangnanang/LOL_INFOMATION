"use client";
import Link from "next/link";
import BWMode from "./BWMode";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-slate-200 dark:bg-slate-800 dark:text-white py-4">
      <div className="flex flex-row mx-auto w-full justify-around items-center">
        <Link href={"/"}>홈</Link>
        <Link href={"/champions"}>챔피언 목록</Link>
        <Link href={"/items"}>아이템 목록</Link>
        <Link href={"/rotation"}>챔피언 로테이션</Link>
        <BWMode />
      </div>
    </div>
  );
};

export default Header;
