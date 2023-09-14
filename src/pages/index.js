import { PlayIcon } from "@/assets/icons";
import { MovieCard } from "@/components/Cards";
import { getConfig, getTopMovies } from "@/lib/api";
import { HomeLayout } from "@/components/Layouts";
import Link from "next/link";
import { convertToUTC } from "@/lib/utils";

export async function getStaticProps() {
  const config = await getConfig();
  const movies = await getTopMovies();

  return { props: { config, movies } };
}

export default function Home({ config, movies }) {
  const topTen = movies.slice(0, 10);

  return (
    <HomeLayout config={config}>
      {/* Main content */}
      <main>
        {/* Hero section */}
        <section
          style={{
            backgroundImage: `url(${config.images.secure_base_url}${config.images.backdrop_sizes[2]}${topTen[0].poster_path})`,
          }}
          className="h-[600px] bg-cover text-white"
        >
          <div className="bg-gray-800/40 w-full h-full">
            <div className="flex justify-between items-center p-5 max-w-7xl mx-auto h-full w-full">
              <div className="w-full max-w-md grid gap-4">
                <h1 className="font-bold text-5xl">{topTen[0].title}</h1>

                <div>{topTen[0].overview}</div>

                <div>
                  <Link
                    href={`/movies/${topTen[0].id}`}
                    className="w-max flex items-center text-white bg-[#BE123C] rounded-md gap-2 px-4 py-[6px]"
                  >
                    <PlayIcon />
                    <span>Details</span>
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
              <h2 className="font-bold text-4xl">Featured Movie</h2>
              <button type="button" className="text-[#BE123C] text-lg">
                See more &#12297;
              </button>
            </div>

            {/* Movie cards */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {topTen.map((movie) => (
                <MovieCard
                  id={movie.id}
                  key={movie.id}
                  title={movie.title}
                  year={convertToUTC(movie.release_date)}
                  imageUrl={`${config.images.secure_base_url}${config.images.poster_sizes[4]}${movie.poster_path}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </HomeLayout>
  );
}
