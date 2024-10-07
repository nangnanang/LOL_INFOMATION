"use client";

import { Champion } from "@/types/Champion";
import { Suspense, useEffect, useState } from "react";
import ListCard from "./ListCard";
import Loading from "@/app/loading";

const RotationList = () => {
  const [rotation, setRotation] = useState<Champion[]>([]);
  const getRotation = async () => {
    try {
      const { data }: { data: Champion[] } = await fetch("/api/lolAPI").then(
        (res) => res.json()
      );
      setRotation(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRotation();
  }, []);

  return (
    <div className="w-full p-3">
      <p className="text-red-600 text-4xl font-bold mb-4">
        챔피언 로테이션 목록
      </p>
      {rotation ? (
        <Suspense fallback={<Loading />}>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {rotation.map((champion) => {
              return (
                <ListCard
                  key={champion.key}
                  id={champion.id}
                  href={`/rotation/${champion.id}`}
                  src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.id}.png`}
                  name={champion.name}
                  title={champion.title}
                />
              );
            })}
          </div>
        </Suspense>
      ) : (
        <p className="text-red-600 text-xl font-bold mb-4">데이터가 없습니다</p>
      )}
    </div>
  );
};

export default RotationList;
