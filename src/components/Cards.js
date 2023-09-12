import { HeartIcon } from "@/assets/icons";
import { imdb, rotten_tomatoes } from "@/assets/images";
import Image from "next/image";

export function MovieCard() {
  return (
    <div className="w-full max-w-sm grid gap-3">
      {/* Movie Image, type, and favorite */}
      <div className="relative h-[370px] bg-gray-900 p-5">
        <div className="flex justify-between items-center">
          <div className="bg-[#F3F4F680] w-max px-2 py-1 rounded-xl font-bold text-xs uppercase">
            Type
          </div>
          <div className="bg-[#F3F4F680] text-[#D1D5DB] w-[30px] h-[30px] flex items-center justify-center rounded-full">
            <HeartIcon />
          </div>
        </div>
      </div>

      {/* Movie details */}
      <p className="text-xs">
        <span>Country, </span>
        <span>Year</span>
        <span> - Status</span>
      </p>

      <h3 className="font-bold text-lg">Movie title</h3>

      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <Image alt="imdb" src={imdb} />
          <span>00/00</span>
        </div>
        <div className="flex items-center gap-3">
          <Image alt="rotten tomatoes" src={rotten_tomatoes} />
          <span>00%</span>
        </div>
      </div>

      <p className="text-xs">
        <span>Tag, </span>
        <span>Tag, </span>
        <span>Tag, </span>
      </p>
    </div>
  );
}
