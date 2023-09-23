import { HeartIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

export function MovieCard({
  type = "Type",
  year = "Year",
  title = "Movie title",
  imageUrl = "",
  id = "",
  genres = ["larry", "moe", "curly"],
}) {
  return (
    <div
      className="w-full max-w-sm grid gap-3 bg-white rounded-xl"
      data-testid="movie-card"
    >
      {/* Movie Image, type, and favorite */}
      <Link href={`/movies/${id}`}>
        <div
          data-testid="movie-poster"
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
      <p
        className="text-xs font-bold text-gray-600/50"
        data-testid="movie-release-date"
      >
        USA, {year}
      </p>

      <h3 className="font-bold text-lg" data-testid="movie-title">
        {title}
      </h3>

      <div className="text-xs flex gap-3">{genres.join(", ")}</div>
    </div>
  );
}
