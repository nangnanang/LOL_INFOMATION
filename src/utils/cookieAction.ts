"use server";
import { cookies } from "next/headers";

// export type Theme = "lignt" | "dark";

export const getCookie = () => {
  const cookieStore = cookies();
  return cookieStore.get("mode")?.value;
};

export const cookieAction = () => {
  const cookieStore = cookies();
  if (!cookieStore.has("mode")) {
    cookieStore.set("mode", "light");
  }

  const cookie = cookieStore.get("mode")?.value;
  if (cookie === "light") {
    cookieStore.set("mode", "dark");
  } else {
    cookieStore.set("mode", "light");
  }
};
