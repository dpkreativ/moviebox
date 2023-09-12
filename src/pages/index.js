import Image from "next/image";
import Seo from "@/components/Seo";
import { MenuIcon, PlayIcon, SearchIcon } from "@/assets/icons";
import { imdb, logo, rotten_tomatoes } from "@/assets/images";
import { MovieCard } from "@/components/Cards";

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      {/* Header */}
      <header className="p-5 absolute w-full text-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Branding */}
          <div className="flex gap-6 items-center">
            <Image src={logo} alt="Movie Box logo" />
            <div className="text-2xl font-bold">MovieBox</div>
          </div>

          {/* Search */}
          <div>
            <form className="border-2 border-[#D1D5DB] rounded-md px-3 py-1 w-[525px] flex justify-between items-center">
              <input
                type="text"
                className="bg-transparent placeholder:text-white"
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
        <section className="h-[600px] bg-gray-800 text-white">
          <div className="flex justify-between items-center max-w-7xl mx-auto h-full">
            <div className="w-full max-w-md grid gap-4">
              <h1 className="font-bold text-5xl">Movie title</h1>

              <div className="flex items-center gap-10 text-xs">
                <div className="flex items-center gap-3">
                  <Image alt="imdb" src={imdb} />
                  <span>00/00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Image alt="rotten tomatoes" src={rotten_tomatoes} />
                  <span>00%</span>
                </div>
              </div>

              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                eu dui sit amet justo ullamcorper laoreet at sed nulla. Quisque
                eget rutrum felis. Etiam sed mauris mi. In nec tortor nibh.
                Mauris nec dui est.
              </div>

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
          <div className="max-w-7xl mx-auto">
            {/* Section title and see more */}
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-bold text-4xl">Featured Movie</h2>
              <button type="button" className="text-[#BE123C] text-lg">
                See more &#12297;
              </button>
            </div>

            {/* Movie cards */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer></footer>
    </>
  );
}
