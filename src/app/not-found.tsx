"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-5 items-center">
      <p className="text-xl text-red-500">존재하지 않는 페이지입니다</p>
      <button
        className="p-3 text-xl border-solid border-2 rounded-xl  bg-red-500 dark:text-white border-black dark:border-white"
        onClick={() => router.replace("/")}
      >
        홈으로
      </button>
    </div>
  );
};

export default NotFound;
