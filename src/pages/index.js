import { PlayIcon } from '@/assets/icons';
import { MovieCard } from '@/components/Cards';
import { getConfig, getTopMovies } from '@/lib/api';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

export async function getStaticProps() {
  const config = await getConfig();
  const topMovies = await getTopMovies();

  return { props: { config, topMovies } };
}

export default function Home({ config, topMovies }) {
  return (
    <Layout>
      {/* Main content */}
      <main>
        {/* Hero section */}
        <section
          style={{
            backgroundImage: `url(${config.images.secure_base_url}${config.images.backdrop_sizes[2]}${topMovies[0].poster_path})`,
          }}
          className="aspect-[9/16] md:aspect-video bg-cover bg-center text-white"
        >
          <div className="bg-gray-800/40 w-full h-full">
            <div className="flex justify-between items-center p-5 max-w-7xl mx-auto h-full w-full">
              <div className="w-full max-w-md grid gap-5">
                <h1 className="font-bold text-5xl" data-testid="movie-title">
                  {topMovies[0].title}
                </h1>

                <div
                  data-testid="movie-overview"
                  className="font-light leading-loose"
                >
                  {topMovies[0].overview}
                </div>

                <div>
                  <Link
                    href={`/movies/${topMovies[0].id}`}
                    className="w-max flex items-center text-white bg-[#BE123C] rounded-md gap-2 px-4 py-[6px]"
                  >
                    <PlayIcon />
                    <span>Watch Trailer</span>
                  </Link>
                </div>
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
              {topMovies.map((movie) => (
                <MovieCard
                  id={movie.id}
                  key={movie.id}
                  title={movie.title}
                  year={formatDate(movie.release_date)}
                  genres={movie.genre_names}
                  imageUrl={`${config.images.secure_base_url}${config.images.poster_sizes[4]}${movie.poster_path}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
