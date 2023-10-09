import { PlayIcon } from '@/assets/icons';
import { MovieCard } from '@/components/Cards';
import { getConfig, getMovies } from '@/lib/api';
import Layout from '@/components/Layout';
import Link from 'next/link';

export async function getStaticProps() {
  const config = await getConfig();
  const topRatedMovies = await getMovies('top_rated');

  const data = {
    bg_image_config: `${config.images.secure_base_url}${config.images.backdrop_sizes[2]}`,
    poster_config: `${config.images.secure_base_url}${config.images.poster_sizes[4]}`,
    top_rated_movies: topRatedMovies,
  };

  return { props: data };
}

export default function Home({
  bg_image_config,
  poster_config,
  top_rated_movies,
}) {
  // Movie for the Hero section
  const banner = top_rated_movies[6];

  return (
    <Layout>
      {/* Main content */}
      <main>
        {/* Hero section */}
        <section
          style={{
            backgroundImage: `url(${bg_image_config}${banner.poster_path})`,
          }}
          className="aspect-video px-5 py-24 flex items-center bg-cover bg-center bg-gray-900/95 bg-blend-multiply text-white"
        >
          <div className="grid gap-10 md:flex md:gap-20 items-center w-full max-w-7xl mx-auto">
            {/* Movie image */}
            <div
              style={{
                backgroundImage: `url(${bg_image_config}${banner.poster_path})`,
              }}
              className="aspect-[7/10] w-full max-w-xs bg-cover bg-center rounded-xl shadow-lg"
            ></div>

            {/* Movie details */}
            <div className="grid gap-10 max-w-xl">
              <h1
                className="font-bold text-4xl md:text-5xl"
                data-testid="movie-title"
              >
                {banner.title}
              </h1>

              <div
                data-testid="movie-overview"
                className="font-light leading-loose"
              >
                {banner.overview}
              </div>

              <div>
                <Link
                  href={`/movies/${banner.id}`}
                  className="w-max flex items-center text-white bg-[#BE123C] rounded-md gap-2 px-4 py-[6px]"
                >
                  <PlayIcon />
                  <span>Watch Trailer</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Movies */}
        <section className="my-20 p-5">
          <div className="max-w-7xl mx-auto">
            {/* Section title and see more */}
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-bold text-2xl md:text-4xl">
                Top Rated Movies
              </h2>
              <button
                type="button"
                className="text-[#BE123C] text-sm md:text-base"
              >
                See more &#12297;
              </button>
            </div>

            {/* Movie cards */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {top_rated_movies?.map((movie) => (
                <MovieCard
                  id={movie.id}
                  key={movie.id}
                  title={movie.title}
                  genres={movie.genre_names}
                  imageUrl={`${poster_config}${movie.poster_path}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
