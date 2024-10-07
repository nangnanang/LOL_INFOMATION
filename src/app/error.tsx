"use client";

import { useRouter } from "next/navigation";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-5 items-center">
      <p className="text-xl text-red-500">{error.message}</p>
      <p className="text-xl text-red-500">예상치 못한 오류가 발생했습니다</p>
      <button
        className="p-3 text-xl border-solid border-2 rounded-xl  bg-red-500 dark:text-white border-black dark:border-white"
        onClick={() => reset()}
      >
        새로고침
      </button>
      <button
        className="p-3 text-xl border-solid border-2 rounded-xl  bg-red-500 dark:text-white border-black dark:border-white"
        onClick={() => router.back()}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Error;
