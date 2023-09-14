import {
  FacebookIcon,
  InstagramIcon,
  SearchIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/assets/icons";
import Logo from "./Logo";
import Seo from "./Seo";

export function HomeLayout({ children }) {
  return (
    <>
      <Seo />
      {/* Header */}
      <header className="absolute w-full text-white">
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
