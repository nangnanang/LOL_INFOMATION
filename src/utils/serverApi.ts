"use server";
export const getRotation = async () => {
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
  console.log(response);
  // const res = await response.json();
  // const freeChampionIds: Promise<number[]> = res.freeChampionIds;
  // return freeChampionIds;
};
