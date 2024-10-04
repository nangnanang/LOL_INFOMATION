import ListCard from "@/components/ListCard";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import { Suspense } from "react";
import Loading from "../loading";

const page = async () => {
  const data = await fetchChampionList();

  return (
    <div className="w-full p-3">
      <p className="text-red-600 text-4xl font-bold mb-4">챔피언 목록</p>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-4 gap-4">
          {data?.map((champion: Champion) => {
            return (
              <ListCard
                key={champion.key}
                id={champion.id}
                href={`/champions/${champion.id}`}
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.id}.png`}
                name={champion.name}
                title={champion.title}
              />
            );
          })}
        </div>
      </Suspense>
    </div>
  );
};

export default page;
