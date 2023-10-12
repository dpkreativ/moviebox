import { star } from '@/assets/images';
import Layout from '@/components/Layout';
import { getConfig, getMovieById } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';

export async function getServerSideProps({ query }) {
  const { id } = query;
  const config = await getConfig();
  const movie = await getMovieById(id);

  const data = {
    bg_image_config: `${config.images.secure_base_url}${config.images.backdrop_sizes[2]}`,
    movie,
  };

  return {
    props: data,
  };
}

export default function MovieById({ bg_image_config, movie }) {
  return (
    <Layout>
      <main>
        {/* Movie trailer */}
        <section
          style={{
            backgroundImage: `url(${bg_image_config}${movie.poster_path})`,
          }}
          className="md:aspect-video bg-cover bg-gray-800/90 bg-blend-multiply text-white"
        >
          <div className="w-full h-full flex items-center">
            <div className="grid gap-10 md:grid-cols-12 px-5 py-24 max-w-7xl mx-auto mt-24">
              {/* Trailer */}
              <div
                style={{
                  backgroundImage: `url(${bg_image_config}${movie.poster_path})`,
                }}
                className="aspect-video bg-gray-800 bg-blend-multiply bg-center rounded-[20px] overflow-clip bg-cover md:col-span-8"
              >
                <iframe
                  className="w-full h-full"
                  src={movie.trailer}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Movie details */}
              <div className="md:col-span-4 h-max">
                <h1 data-testid="movie-title" className="text-3xl font-bold">
                  {movie.title}
                </h1>
                <p
                  data-testid="movie-overview"
                  className="leading-loose text-xs"
                >
                  {movie.overview}
                </p>
                <p>
                  <span data-testid="movie-release-date">
                    {formatDate(movie.release_date)}
                  </span>
                  <span>&bull;</span>
                  <span date-testid="movie-runtime">{movie.runtime} mins</span>
                </p>
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
                <div className="flex gap-2">
                  <div>
                    <Image alt="rating" src={star} width={20} height={20} />
                  </div>
                  <p>{movie.vote_average}</p>
                  <div className="border-l-2 border-[#666666] text-[#666666] pl-2">
                    {movie.vote_count}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Title and rating */}
        <section className="grid gap-5 md:flex justify-between items-center p-5 max-w-7xl mx-auto">
          {/* More details */}
          <div className="md:col-span-4 grid h-max gap-5">
            <p>
              <div className="text-xs font-bold">Stars</div>
              <div className="text-xl">{movie.credits.cast?.join(', ')}</div>
            </p>

            <p>
              <div className="text-xs font-bold">Director</div>
              <div className="text-xl">{movie.credits.director}</div>
            </p>

            <p className={movie.credits.writers.length <= 0 ? 'hidden' : ''}>
              <div className="text-xs font-bold">Writers</div>
              <div className="text-xl">{movie.credits.writers?.join(', ')}</div>
            </p>

            {/* <div className="flex gap-3">
                  <div>Top rated movie #00</div>
                  <div>Awards 0 nominations</div>
                </div> */}
          </div>
        </section>
      </main>
    </Layout>
  );
}
