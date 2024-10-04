import { fetchChampionList } from "@/utils/serverApi";
import { NextResponse } from "next/server";

export const GET = async () => {
  const API_KEY = process.env.RIOT_API_KEY;
  const response = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": `${API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    return NextResponse.json(
      { error: "로테이션 데이터 오류" },
      { status: 500 }
    );
  }
  const res = await response.json();
  const championData = await fetchChampionList();

  const freeChampionIds: number[] = res.freeChampionIds;

  const rotationChampions = championData?.result?.filter((champion) => {
    return freeChampionIds.some((id) => String(id) === champion.key);
  });
  return NextResponse.json({ data: rotationChampions });
};
