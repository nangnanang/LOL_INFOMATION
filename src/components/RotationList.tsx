"use client";

import { Champion } from "@/types/Champion";
import { Suspense, useEffect, useState } from "react";
import ListCard from "./ListCard";
import Loading from "@/app/loading";

const RotationList = () => {
  const [rotation, setRotation] = useState<Champion[]>([]);
  const getRotation = async () => {
    const { data }: { data: Champion[] } = await fetch("/api/lolAPI").then(
      (res) => res.json()
    );
    setRotation(data);
  };
  useEffect(() => {
    getRotation();
  }, []);

  return (
    <div className="w-full p-3">
      <p className="text-red-600 text-4xl font-bold mb-4">
        챔피언 로테이션 목록
      </p>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-4 gap-4">
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
    </div>
  );
};

export default RotationList;
