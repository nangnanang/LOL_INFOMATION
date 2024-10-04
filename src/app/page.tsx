import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex flex-col mx-auto mt-10 gap-20 text-center">
      <div>
        <p className="text-red-500 text-3xl mb-2">리그 오브 레전드 정보 앱</p>
        <p className="text-black dark:text-gray-200">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>
      </div>
      <Link
        href={"/champions"}
        className="flex flex-col justify-center items-center gap-6"
      >
        <Image
          className="relative justify-center items-center"
          width={400}
          height={300}
          src={
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"
          }
          alt="챔피언 목록 보기"
        />
        <p className="text-red-500 dark:text-yellow-500">챔피언 목록 보기</p>
      </Link>
      <Link
        href={"/items"}
        className="flex flex-col justify-center items-center gap-6"
      >
        <Image
          className="relative justify-center items-center"
          width={400}
          height={300}
          src={
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg"
          }
          alt="아이템 목록 보기"
        />
        <p className="text-red-500 dark:text-yellow-500">아이템 목록 보기</p>
      </Link>
      <Link
        href={"/rotation"}
        className="flex flex-col justify-center items-center gap-6"
      >
        {" "}
        <Image
          className="relative justify-center items-center"
          width={400}
          height={300}
          src={
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg"
          }
          alt="금주 로테이션 확인"
        />
        <p className="text-red-500 dark:text-yellow-500">금주 로테이션 확인</p>
      </Link>
    </main>
  );
};

export default page;
