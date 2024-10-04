import ListCard from "@/components/ListCard";
import { itemGet } from "@/utils/serverApi";
import { Suspense } from "react";
import Loading from "../loading";

const page = async () => {
  const data = await itemGet();
  return (
    <div className="w-full p-3">
      <p className="text-red-600 text-4xl font-bold mb-4">아이템 목록</p>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-6 gap-4">
          {data?.map((item) => {
            return (
              <ListCard
                key={item[0]}
                id={item[0]}
                href={`/items/${item[0]}`}
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item[0]}.png`}
                name={item[1].name.replaceAll(/(<([^>]+)>)/gi, "")}
                title={item[1].plaintext.replaceAll(/(<([^>]+)>)/gi, "")}
              />
            );
          })}
        </div>
      </Suspense>
    </div>
  );
};

export default page;
