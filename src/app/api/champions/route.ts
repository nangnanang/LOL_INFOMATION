import { Champion } from "@/types/Champion";
import { NextResponse } from "next/server";

export const GET = async () => {
  // console.log(request);
  console.log("get함수 실행");
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json",
    { next: { revalidate: 86400 } }
  );
  const { data } = await response.json();
  return NextResponse.json(data);
  // const champions: Champion[] = Object.values(data);
  // console.log(champions);
  // return NextResponse.json(champions);
  // return "hello";
};
