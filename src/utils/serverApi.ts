"use server";

import { Champion, ChampionDetailData } from "@/types/Champion";
import { Item } from "@/types/Item";

// 버전 가져오기
export const getVersion = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  if (!response.ok) {
    return { error: "버전 데이터 오류", result: null };
  }
  const data: string[] = await response.json();
  return { error: null, result: data[0] };
};

// 챔피언 가져오기
export const fetchChampionList = async () => {
  const version = await getVersion();
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version.result}/data/ko_KR/champion.json`,
    {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 86400 },
    }
  );
  if (!response.ok) {
    return { error: "챔피언 데이터 오류", result: null };
  }
  const { data } = await response.json();
  const championsData: Champion[] = Object.values(data);

  return { error: null, result: championsData };
};

// 아이템 가져오기
export const itemGet = async () => {
  const version = await getVersion();
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version.result}/data/ko_KR/item.json`,
    { cache: "force-cache" }
  );

  if (!response.ok) {
    return { error: "아이템 데이터 오류", result: null };
  }

  const { data } = await response.json();
  const items: [string, Item][] = Object.entries(data);
  return { error: null, result: items };
};

// 특정 챔피언 가져오기
export const fetchChampionDetail = async (id: string) => {
  const version = await getVersion();

  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version.result}/data/ko_KR/champion/${id}.json`,
    {
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    }
  );
  if (!response.ok) {
    return { error: "챔피언 디테일 데이터 오류", result: null };
  }
  const { data }: { data: ChampionDetailData } = await response.json();

  return { error: null, result: Object.values(data)[0] };
};

// 특정 아이템 가져오기
export const itemDetailGet = async (id: string) => {
  const version = await getVersion();
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version.result}/data/ko_KR/item.json`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    return { error: "아이템 데이터 오류", result: null };
  }
  const { data } = await response.json();
  const items: [string, Item][] = Object.entries(data);
  const detailData = items.filter((item) => item[0] === id)[0];
  return { error: null, result: detailData };
};
