import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div>홈페이지에요</div>
      <div>
        <Link href={"/champions"}>챔피언으로 가요</Link>
        <Link href={"/items"}>아이템으로 가요</Link>
        <Link href={"/rotation"}>로테이션으로 가요</Link>
      </div>
    </>
  );
};

export default page;
