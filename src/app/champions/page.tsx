// import { Champion } from "@/types/Champion";

import { headers } from "next/headers";

const page = async () => {
  const host = headers().get("host");
  console.log(host, "host");

  // const response = await fetch(
  //   "https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json"
  // );
  // const { data } = await response.json();
  // const chams: Champion[] = Object.values(data);
  const response = await fetch("http://localhost:3000/api/champions.route.ts");
  // const data = response.json();

  return (
    <>
      챔피언페이지입니다
      {/* {champions.map((champion: Champion) => {
        return (
          <div key={champion.key}>
            <p>{champion.name}</p>
          </div>
        );
      })} */}
    </>
  );
};

export default page;
