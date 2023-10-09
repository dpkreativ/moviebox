import Link from 'next/link';

export function MovieCard({
  title = 'Movie title',
  imageUrl = '',
  id = '',
  genres = ['larry', 'moe', 'curly'],
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
          className="aspect-[7/10] w-full max-w-xs bg-cover bg-center rounded-xl shadow-lg"
        ></div>
      </Link>

      {/* Movie details */}

      <h3 className="font-bold text-lg" data-testid="movie-title">
        {title}
      </h3>

      <div className="text-xs flex gap-3">{genres.join(', ')}</div>
    </div>
  );
}
