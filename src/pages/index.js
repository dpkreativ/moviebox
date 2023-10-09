import { PlayIcon } from '@/assets/icons';
import { MovieCard } from '@/components/Cards';
import { getConfig, getTopMovies } from '@/lib/api';
import Layout from '@/components/Layout';
import Link from 'next/link';
// import { formatDate } from '@/lib/utils';

export async function getStaticProps() {
  const config = await getConfig();
  const topMovies = await getTopMovies();

  const data = {
    bg_image_config: `${config.images.secure_base_url}${config.images.backdrop_sizes[2]}`,
    poster_config: `${config.images.secure_base_url}${config.images.poster_sizes[4]}`,
    top_movies: topMovies,
  };

  return { props: data };
}

export default function Home({ bg_image_config, poster_config, top_movies }) {
  return (
    <Layout>
      {/* Main content */}
      <main>
        {/* Hero section */}
        <section
          style={{
            backgroundImage: `url(${bg_image_config}${top_movies[0].poster_path})`,
          }}
          className="aspect-[9/16] md:aspect-video bg-cover bg-center text-white"
        >
          <div className="bg-black/90 w-full h-full flex items-center">
            <div className="grid gap-10 grid-cols-2 p-5 max-w-7xl mx-auto w-full">
              <div className="flex flex-col justify-center gap-10">
                <h1 className="font-bold text-5xl" data-testid="movie-title">
                  {top_movies[0].title}
                </h1>

                <div
                  data-testid="movie-overview"
                  className="font-light leading-loose"
                >
                  {top_movies[0].overview}
                </div>

                <div>
                  <Link
                    href={`/movies/${top_movies[0].id}`}
                    className="w-max flex items-center text-white bg-[#BE123C] rounded-md gap-2 px-4 py-[6px]"
                  >
                    <PlayIcon />
                    <span>Watch Trailer</span>
                  </Link>
                </div>
              </div>

              {/* Movie image */}
              <div className="h-[30rem]">
                <div
                  style={{
                    backgroundImage: `url(${bg_image_config}${top_movies[0].poster_path})`,
                  }}
                  className="aspect-[12/16] h-full bg-cover bg-center rounded-lg"
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Movies */}
        <section className="my-20">
          <div className="p-5 max-w-7xl mx-auto">
            {/* Section title and see more */}
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-bold text-2xl md:text-4xl">
                Top-Rated Movies
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
              {top_movies?.map((movie) => (
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
