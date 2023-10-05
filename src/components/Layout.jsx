import {
  FacebookIcon,
  InstagramIcon,
  SearchIcon,
  TwitterIcon,
  UserIcon,
  YouTubeIcon,
} from '@/assets/icons';
import Logo from './Logo';
import Seo from './Seo';

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      {/* Header */}
      <Header />

      {/* Content */}
      {children}

      {/* Footer */}
      <Footer />
    </>
  );
}

export function Header() {
  return (
    <header className="absolute w-full text-white">
      <div className="flex justify-between items-center p-5 max-w-7xl mx-auto">
        {/* Branding */}
        <Logo />

        {/* Auth and menu */}
        <div className="flex items-center gap-6">
          <button type="button">
            <SearchIcon />
          </button>
          <button type="button">
            <UserIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
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
          &copy; {new Date().getFullYear()}. This product uses the TMDB API but
          is not endorsed or certified by TMDB.
        </div>
      </div>
    </footer>
  );
}
