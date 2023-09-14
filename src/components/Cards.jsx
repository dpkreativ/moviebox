import { HeartIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

export function MovieCard({
  type = "Type",
  year = "Year",
  title = "Movie title",
  imageUrl = "",
  id = "",
}) {
  return (
    <div className="w-full max-w-sm grid gap-3">
      {/* Movie Image, type, and favorite */}
      <Link href={`/movies/${id}`}>
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className={`relative h-[370px] bg-cover rounded-xl overflow-clip`}
        >
          <div className="p-5 flex justify-between bg-gray-900/30 h-full w-full">
            <div className="bg-[#F3F4F680] text-[#D1D5DB] w-[30px] h-[30px] flex items-center justify-center rounded-full">
              <HeartIcon />
            </div>
          </div>
        </div>
      </Link>

      {/* Movie details */}
      <h3 className="font-bold text-lg">{title}</h3>

      <p className="text-xs">
        <span>Release date: </span>
        <span>{year}</span>
      </p>
    </div>
  );
}
