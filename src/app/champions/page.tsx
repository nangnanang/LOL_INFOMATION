import ListCard from "@/components/ListCard";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import { Suspense } from "react";
import Loading from "../loading";

const page = async () => {
  const response = await fetchChampionList();
  if (response.error) {
    throw new Error(response.error);
  }

  return (
    <div className="w-full p-3">
      <p className="text-red-600 text-4xl font-bold mb-4">챔피언 목록</p>
      <Suspense fallback={<Loading />}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {response?.result?.map((champion: Champion) => {
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
