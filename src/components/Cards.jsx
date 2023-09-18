import { HeartIcon } from '@/assets/icons';
import Image from 'next/image';
import Link from 'next/link';

export function MovieCard({
  type = 'Type',
  year = 'Year',
  title = 'Movie title',
  imageUrl = '',
  id = '',
  genres = ['larry', 'moe', 'curly'],
}) {
  return (
    <div
      className="w-full max-w-sm grid gap-3 bg-white p-5 rounded-xl"
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
      <h3 className="font-bold text-lg" data-testid="movie-title">
        {title}
      </h3>

      <p className="text-xs" data-testid="movie-release-date">
        <span>Release date: </span>
        <span>{year}</span>
      </p>

      <div className="text-xs flex gap-3">
        {genres.map((genre, idx) => (
          <span key={idx}>{genre}</span>
        ))}
      </div>
    </div>
  );
}
