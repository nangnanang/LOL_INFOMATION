import DetailCard from "@/components/DetailCard";
import { fetchChampionDetail } from "@/utils/serverApi";

type Props = { params: { id: string } };
export const generateMetadata = async ({ params }: Props) => {
  const data = await fetchChampionDetail(params.id);
  return { title: `${data ? data.result?.name : "없음"}` };
};

const page = async ({ params }: Props) => {
  const id = params.id;
  const response = await fetchChampionDetail(id);
  if (response.error) {
    throw new Error(response.error);
  }
  const data = response.result;
  const propData = {
    name: data?.name,
    title: data?.title,
    blurb: data?.blurb,
    info: {
      attack: data?.info.attack,
      defense: data?.info.defense,
      magic: data?.info.magic,
      difficulty: data?.info.difficulty,
    },
  };
  return <DetailCard data={propData} id={id} />;
};

export default page;
