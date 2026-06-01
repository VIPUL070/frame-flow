import { Link, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../../data/home";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border border-stone-300 bg-surface/80 backdrop-blur-md rounded-4xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between sm:px-6 py-1.5">
        <div className="flex items-center gap-7">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 justify-center">
            <span className="h-4 w-4 text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-gallery-thumbnails-icon lucide-gallery-thumbnails drop-shadow-smrounded-xs"
              >
                <rect width="18" height="14" x="3" y="3" rx="2" />
                <path d="M4 21h1" />
                <path d="M9 21h1" />
                <path d="M14 21h1" />
                <path d="M19 21h1" />
              </svg>
            </span>
            <span className="text-[11px] font-semibold tracking-tight text-foreground">
              Frame Flow
            </span>
          </Link>

          {/* Nav links */}
          <ul className="flex items-center gap-3">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="group relative flex items-center justify-center gap-0.5 text-[10px] text-black transition-colors hover:text-stone-700 pb-1"
                >
                  {item.label}
                  <div className="absolute top-3.5 left-0 h-px w-0 bg-stone-700 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:w-full group-hover:opacity-100 origin-left rounded-sm" />
                  {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Nav buttons  */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="secondary"
            type="button"
            onClick={() => navigate("/login")}
          >
            Sign in
          </Button>
          <Button size="sm" type="button" onClick={() => navigate("/register")}>
            Get started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;