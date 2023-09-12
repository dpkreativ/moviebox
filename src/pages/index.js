import Image from "next/image";
import Seo from "@/components/Seo";
import { MenuIcon, PlayIcon } from "@/assets/icons";
import { imdb, logo, rotten_tomatoes } from "@/assets/images";

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      {/* Header */}
      <header className="p-5">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Branding */}
          <div className="flex gap-6 items-center">
            <Image src={logo} alt="Movie Box logo" />
            <div>MovieBox</div>
          </div>

          {/* Search */}
          <div>
            <form>
              <input type="text" placeholder="What do you want to watch?" />
            </form>
          </div>

          {/* Auth and menu */}
          <div className="flex items-center gap-6">
            <button>Sign in</button>
            <div className="bg-[#BE123C] text-white rounded-full w-9 h-9 flex items-center justify-center">
              <MenuIcon />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        {/* Hero section */}
        <section>
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="w-full max-w-md grid gap-4">
              <h1 className="font-bold text-5xl">Movie title</h1>

              <div className="flex items-center gap-10">
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
      </main>

      {/* Footer */}
      <footer></footer>
    </>
  );
}
