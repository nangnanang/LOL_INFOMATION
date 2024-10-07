import { itemDetailGet } from "@/utils/serverApi";
import Image from "next/image";

type Props = { params: { id: string } };

export const generateMetadata = ({ params }: Props) => {
  return { title: `No. ${params.id}` };
};

const page = async ({ params }: Props) => {
  const id = params.id;
  const response = await itemDetailGet(id);
  if (response.error) {
    throw new Error(response.error);
  }
  const data = response.result;
  return (
    <div className="flex flex-col gap-10">
      {data ? (
        <>
          <p className="text-4xl text-red-500 mb-2 font-bold">No. {id}</p>
          <p className="text-xl text-black dark:text-gray-200">
            {data[1].name}
          </p>
          <Image
            width={300}
            height={300}
            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${id}.png`}
            alt={id}
          />
          <p className="text-xl text-red-500">{data[1].plaintext}</p>
        </>
      ) : (
        <p className="text-4xl text-red-500 mb-2 font-bold">
          데이터가 없습니다
        </p>
      )}
    </div>
  );
};

export default page;
