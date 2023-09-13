import { HeartIcon } from "@/assets/icons";
import Image from "next/image";

export function MovieCard({
  type = "Type",
  year = "Year",
  title = "Movie title",
  imageUrl = "",
}) {
  return (
    <div className="w-full max-w-sm grid gap-3">
      {/* Movie Image, type, and favorite */}
      <div className={`relative h-[370px] bg-gray-900 p-5`}>
        <div className="flex justify-between items-center">
          <div className="bg-[#F3F4F680] w-max px-2 py-1 rounded-xl font-bold text-xs uppercase">
            {type}
          </div>
          <div className="bg-[#F3F4F680] text-[#D1D5DB] w-[30px] h-[30px] flex items-center justify-center rounded-full">
            <HeartIcon />
          </div>
        </div>
        <Image alt={title} src={imageUrl} fill className="object-cover" />
      </div>

      {/* Movie details */}
      <p className="text-xs">
        <span>{year}</span>
      </p>

      <h3 className="font-bold text-lg">{title}</h3>
    </div>
  );
}
