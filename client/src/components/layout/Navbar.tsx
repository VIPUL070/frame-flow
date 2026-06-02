import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../../data/home";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border border-stone-300 bg-surface/80 backdrop-blur-md rounded-4xl px-4 sm:px-6 transition-all duration-300">
      <nav className="mx-auto flex max-w-6xl items-center justify-between py-1.5">
        <div className="flex items-center gap-7">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 justify-center hover:opacity-80 transition-opacity duration-200">
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

          <ul className="hidden sm:flex items-center gap-3 pt-1.5">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="group relative flex items-center justify-center gap-0.5 text-[10px] text-black transition-colors hover:text-stone-700 pb-1"
                >
                  {item.label}
                  <div className="absolute top-3.5 left-0 h-px w-0 bg-stone-700 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:w-full group-hover:opacity-100 origin-left rounded-sm" />
                  {item.hasDropdown && <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:translate-y-0.5" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <Button
            size="sm"
            variant="secondary"
            type="button"
            onClick={() => navigate("/login")}
          >
            Sign in
          </Button>
          <Button 
            size="sm" 
            type="button" 
            onClick={() => navigate("/register")}
          >
            Get started
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex sm:hidden cursor-pointer flex-col justify-center items-center w-7 h-7 gap-1 relative z-50 text-black focus:outline-none"
          type="button"
        >
          <span 
            className={`h-[1.5px] bg-black rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isOpen ? "w-5 rotate-45 translate-y-[5.5px]" : "w-4 origin-right ml-auto"
            }`} 
          />
          <span 
            className={`h-[1.5px] bg-black rounded-full transition-all duration-200 ease-out w-5 ${
              isOpen ? "opacity-0 scale-0" : "opacity-100"
            }`} 
          />
          <span 
            className={`h-[1.5px] bg-black rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isOpen ? "w-5 -rotate-45 translate-y-[-5.5px]" : "w-4 origin-right ml-auto"
            }`} 
          />
        </button>
      </nav>

      <div 
        className={`sm:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isOpen ? "max-h-87.5 opacity-100 border-t border-stone-200/60 py-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center text-center px-4">
          <ul className="flex flex-col gap-5 w-full items-center mb-6">
            {NAV_LINKS.map((item, index) => (
              <li 
                key={item.label}
                className={`w-full transition-all duration-300 transform ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group inline-flex items-center justify-center gap-1 text-[11px] font-medium tracking-wide text-stone-800 hover:text-black py-1 transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="h-3 w-3 text-stone-400 transition-transform duration-200 group-hover:translate-y-0.5" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          
          <div 
            className={`flex flex-col gap-2 w-full max-w-60 pt-4 border-t border-stone-100/80 transition-all duration-500 delay-200 transform ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <Button
              size="sm"
              variant="secondary"
              type="button"
              onClick={() => {
                setIsOpen(false);
                navigate("/login");
              }}
            >
              Sign in
            </Button>
            <Button 
              size="sm" 
              type="button" 
              onClick={() => {
                setIsOpen(false);
                navigate("/register");
              }}
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;