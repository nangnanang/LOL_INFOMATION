import Image from "next/image";

type DetailType = {
  data: {
    name: string | undefined;
    title: string | undefined;
    blurb: string | undefined;
    info: {
      attack: number | undefined;
      defense: number | undefined;
      magic: number | undefined;
      difficulty: number | undefined;
    };
  };
  id: string;
};

const DetailCard = ({ data, id }: DetailType) => {
  return (
    <div className="flex flex-col gap-10 m-10 ">
      <div>
        <p className="text-4xl text-red-500 mb-2 font-bold">{data?.name}</p>
        <p className="text-xl text-black dark:text-gray-200">{data?.title}</p>
      </div>
      <Image
        className="mx-auto"
        width={200}
        height={200}
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`}
        alt={id}
      />
      <p className="text-xl text-red-500">{data?.blurb}</p>
      <div>
        <p className="text-xl text-red-500 mb-2 font-bold">스탯</p>
        <li className="text-base text-red-500">공격력: {data?.info.attack}</li>
        <li className="text-base text-red-500">방어력: {data?.info.defense}</li>
        <li className="text-base text-red-500">마법력: {data?.info.magic}</li>
        <li className="text-base text-red-500">
          난이도: {data?.info.difficulty}
        </li>
      </div>
    </div>
  );
};

export default DetailCard;
