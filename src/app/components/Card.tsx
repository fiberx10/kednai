import { FaExternalLinkSquareAlt } from "react-icons/fa";
import Link from "next/link";

interface CardProps {
  name: string;
  image: string;
  color: string;
  link?: string;
}

export default function Card({ name, image, color, link }: CardProps) {
  return (
    <div
      className={
        "w-[130px] h-[160px] relative  bg-white shadow-lg m-3 rounded-lg  "
      }
    >
      <div className="w-full p-3">
        <img className="w-[120px] h-[100px] " src={image} alt="topic picture" />
      </div>
      {name.length > 10 ? (
        <h1 className="w-full px-3 font-bold ">{name.slice(0, 10) + "..."}</h1>
      ) : (
        <h1 className="w-full px-3 font-bold ">{name}</h1>
      )}

      {link && (
        <div className="w-4 h-4 absolute right-3 bottom-4 text-slate-500 ">
          <Link href={"/topic/" + link}>
            <FaExternalLinkSquareAlt className="text-1xl" />
          </Link>
        </div>
      )}
    </div>
  );
}
