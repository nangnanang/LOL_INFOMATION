import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  href: string;
  src: string;
  name: string;
  title: string;
};

const ListCard = ({ id, href, src, name, title }: Props) => {
  return (
    <Link className="w-full p-4 border-solid border-2 rounded-lg" href={href}>
      <Image
        className="mx-auto mb-4"
        width={100}
        height={100}
        src={src}
        alt={id}
      />
      <p className="text-red-600">{name}</p>
      <p className="text-black dark:text-gray-300">{title}</p>
    </Link>
  );
};

export default ListCard;
