import {
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  SearchIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/assets/icons";
import Logo from "./Logo";
import Seo from "./Seo";
import Modal, { useModal } from "./Modal";
import { useEffect, useState } from "react";
import { searchMovies } from "@/lib/api";
import { MovieCard } from "./Cards";
import { formatDate } from "@/lib/utils";

export function HomeLayout({ config, children }) {
  // Search
  const [searchQuery, setSearchQuery] = useState("");
  const [{ results }, setSearchResults] = useState({ results: [] });

  const { ref, onOpen, onClose } = useModal();

  useEffect(() => {
    if (!searchQuery) return;

    async function search() {
      const data = await searchMovies(searchQuery);
      return data;
    }
    search().then((res) => setSearchResults(res));
  }, [searchQuery]);

  return (
    <>
      <Seo />
      {/* Header */}
      <header className="absolute w-full text-white">
        <div className="flex justify-between items-center p-5 max-w-7xl mx-auto">
          {/* Branding */}
          <Logo />

          {/* Auth and menu */}
          <div className="flex items-center gap-6">
            <button type="button">Sign in</button>

            <button
              type="button"
              onClick={onOpen}
              className="bg-[#BE123C] text-white rounded-full w-9 h-9 flex items-center justify-center"
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Search */}
      <Modal ref={ref} onClose={onClose}>
        <div className="sticky top-0 z-50 bg-gray-800/75 rounded-b-xl flex">
          <form
            method="dialog"
            className="border-2 border-[#D1D5DB] bg-gray-800/75 rounded-md px-3 py-1 w-full max-w-[525px] mx-auto flex justify-between items-center"
          >
            <input
              type="text"
              name="query"
              className="bg-transparent placeholder:text-white/80 placeholder:text-xs outline-none w-full text-white"
              placeholder="What do you want to watch?"
              id="search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <label htmlFor="search" className="text-white">
              <SearchIcon />
            </label>
          </form>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="text-white rounded-full w-max text-xs p-2"
          >
            <span>close search</span>
          </button>
        </div>

        <section className="my-10">
          <div className="grid gap-10 md:grid-cols-2">
            {results?.map((movie) => (
              <MovieCard
                id={movie.id}
                key={movie.id}
                title={movie.title}
                year={formatDate(movie.release_date)}
                imageUrl={`${config.images.secure_base_url}${config.images.poster_sizes[4]}${movie.poster_path}`}
              />
            ))}
          </div>
        </section>
      </Modal>

      {/* Main */}
      {children}

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

export function MovieLayout({ children }) {
  return (
    <>
      <Seo />
      {/* Header */}
      <header className="text-white bg-gray-800">
        <div className="flex justify-between items-center p-5 max-w-7xl mx-auto">
          {/* Branding */}
          <Logo />

          {/* Search */}
          {/* <div className="hidden md:block">
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
          </div> */}

          {/* Auth and menu */}
          <div className="flex items-center gap-6">
            <button type="button">Sign in</button>
            <button
              type="button"
              className="bg-[#BE123C] text-white rounded-full w-9 h-9 flex items-center justify-center"
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      {children}

      {/* Footer */}
      <footer className="text-center bg-gray-800 text-white">
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
