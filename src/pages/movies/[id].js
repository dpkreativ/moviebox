import { star } from '@/assets/images';
import Layout from '@/components/Layout';
import { getConfig, getMovieById } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';

export async function getServerSideProps({ query }) {
  const { id } = query;
  const config = await getConfig();
  const movie = await getMovieById(id);

  return {
    props: {
      config,
      movie,
    },
  };
}

export default function MovieById({ config, movie }) {
  return (
    <Layout>
      <main>
        {/* Movie trailer */}
        <section
          style={{
            backgroundImage: `url(${config.images.secure_base_url}${config.images.backdrop_sizes[2]}${movie.poster_path})`,
          }}
          className="aspect-[9/16] md:aspect-video bg-cover text-white"
        >
          <div className="bg-gray-800/90 w-full h-full flex items-center">
            <div className="grid gap-10 md:grid-cols-12 p-5 max-w-7xl mx-auto">
              {/* Trailer */}
              <div
                style={{
                  backgroundImage: `url(${config.images.secure_base_url}${config.images.backdrop_sizes[2]}${movie.poster_path})`,
                }}
                className="aspect-video bg-gray-800 bg-center rounded-[20px] overflow-clip bg-cover col-span-8"
              >
                <iframe
                  className="w-full h-full"
                  src={movie.trailer}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>

              {/* More details */}
              <div className="col-span-4">
                <p>
                  <span>Director: </span>
                  <span>John Doe</span>
                </p>
                <p>
                  <span>Writers: </span>
                  <span>John Doe, Jane Doe, Susan Doe</span>
                </p>
                <p>
                  <span>Stars: </span>
                  <span>John Doe, Susan Doe, Chris Doe, Ella Doe</span>
                </p>

                <div className="flex gap-3">
                  <div>Top rated movie #00</div>
                  <div>Awards 0 nominations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Title and rating */}
        <section className="grid gap-5 md:flex justify-between items-center p-5 max-w-7xl mx-auto">
          <div className="grid md:flex gap-3 items-center">
            <h1 className="font-bold text-2xl flex gap-3 flex-wrap">
              <span data-testid="movie-title">{movie.title}</span>
              <span>&bull;</span>
              <span data-testid="movie-release-date">
                {formatDate(movie.release_date)}
              </span>
              <span>&bull;</span>
              <span date-testid="movie-runtime">{movie.runtime} mins</span>
            </h1>
            <div className="flex gap-2 flex-wrap">
              {movie.genres.map((genre, idx) => (
                <span
                  key={idx}
                  className="text-sm border border-[#F8E7EB] rounded-full p-1 text-[#B91C1C]"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <div>
              <Image alt="rating" src={star} width={20} height={20} />
            </div>
            <p>{movie.vote_average}</p>
            <div className="border-l-2 border-[#666666] text-[#666666] pl-2">
              {movie.vote_count}
            </div>
          </div>
        </section>

        {/* Movie details and showtime */}
        <section className="grid md:grid-cols-12 p-5 max-w-7xl mx-auto">
          <div className="md:col-span-9 grid gap-3">
            <p data-testid="movie-overview" className="leading-loose">
              {movie.overview}
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
