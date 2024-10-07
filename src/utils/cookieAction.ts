"use server";
import { cookies } from "next/headers";

export const getCookie = () => {
  const cookieStore = cookies();
  const mode = cookieStore.get("mode")?.value;
  return mode || "light";
};

export const cookieAction = () => {
  const cookieStore = cookies();
  const cookie = cookieStore.get("mode")?.value;
  if (cookie === "light") {
    cookieStore.set("mode", "dark");
  } else {
    cookieStore.set("mode", "light");
  }
};
