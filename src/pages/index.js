import Image from "next/image";
import logo from "@/assets/tv.png";
import Seo from "@/components/Seo";
import { MenuIcon } from "@/assets/Icons";

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      {/* Header section */}
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
      <main></main>

      {/* Footer section */}
      <footer></footer>
    </>
  );
}
