"use client";

import { cookieAction, getCookie } from "@/utils/cookieAction";
import { useEffect, useState } from "react";

const BWMode = () => {
  const [mode, setMode] = useState<string>("");

  const getMode = async () => {
    const cookie = await getCookie();
    if (cookie === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    if (cookie) {
      setMode(cookie);
    }
  };

  useEffect(() => {
    getMode();
  }, []);

  return (
    <button
      onClick={() => {
        cookieAction();
        getMode();
      }}
    >
      {mode === "light" ? "다크 모드" : "라이트 모드"}
    </button>
  );
};

export default BWMode;
