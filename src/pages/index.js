import Image from "next/image";
import Seo from "@/components/Seo";
import {
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  PlayIcon,
  SearchIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/assets/icons";
import { MovieCard } from "@/components/Cards";
import { getConfig, getMovies } from "@/lib/utils";
import { logo } from "@/assets/images";

export async function getStaticProps() {
  const config = await getConfig();
  const movies = await getMovies();

  return { props: { config, movies } };
}

export default function Home({ config, movies }) {
  const topTen = movies.slice(0, 10);

  return (
    <>
      <Seo />
      {/* Header */}
      <header className="absolute w-full text-white">
        <div className="flex justify-between items-center p-5 max-w-7xl mx-auto">
          {/* Branding */}
          <div className="flex gap-6 items-center">
            <Image src={logo} alt="Movie Box logo" />
            <div className="text-2xl font-bold">MovieBox</div>
          </div>

          {/* Search */}
          <div className="hidden md:block">
            <form className="border-2 border-[#D1D5DB] rounded-md px-3 py-1 w-[525px] flex justify-between items-center">
              <input
                type="text"
                className="bg-transparent placeholder:text-white outline-none"
                placeholder="What do you want to watch?"
                id="search"
              />
              <label htmlFor="search" className="text-white">
                <SearchIcon />
              </label>
            </form>
          </div>

          {/* Auth and menu */}
          <div className="flex items-center gap-6">
            <button type="button">Sign in</button>
            <button
              type="button"
              className="bg-[#BE123C] text-white rounded-full w-9 h-9 flex items-center justify-center"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        {/* Hero section */}
        <section
          style={{
            backgroundImage: `url(${config.images.secure_base_url}${config.images.secure_base_url}${config.images.backdrop_sizes[2]}${topTen[0].poster_path})`,
          }}
          className="h-[600px] bg-gray-800 text-white"
        >
          <div className="flex justify-between items-center p-5 max-w-7xl mx-auto h-full">
            <div className="w-full max-w-md grid gap-4">
              <h1 className="font-bold text-5xl">{topTen[0].title}</h1>

              <div>{topTen[0].overview}</div>

              <div>
                <button className="flex items-center text-white bg-[#BE123C] rounded-md gap-2 px-4 py-[6px]">
                  <PlayIcon />
                  <span>Watch Trailer</span>
                </button>
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
                  key={movie.id}
                  title={movie.title}
                  year={movie.release_date}
                  imageUrl={`${config.images.secure_base_url}${config.images.secure_base_url}${config.images.poster_sizes[4]}${movie.poster_path}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center">
        <div className="p-5 max-w-7xl mx-auto grid gap-9">
          {/* Socials */}
          <div className="grid grid-cols-2 md:flex items-center gap-12 w-max mx-auto">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <YouTubeIcon />
          </div>

          {/* Sitelinks */}
          <div className="grid md:flex items-center gap-12 w-max mx-auto">
            <span>Conditions of Use</span>
            <span>Privacy &amp; Policy</span>
            <span>Press Room</span>
          </div>

          {/* Copyright */}
          <div>
            &copy; {new Date().getFullYear()}. This product uses the TMDB API
            but is not endorsed or certified by TMDB.
          </div>
        </div>
      </footer>
    </>
  );
}
