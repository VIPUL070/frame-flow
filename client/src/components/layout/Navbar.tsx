import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../../data/home";
import { ChevronDown, GalleryThumbnails, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../ui/Button";
import { useTheme } from "../../hooks/useTheme";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const ThemeIcon = isDark ? Sun : Moon;

  return (
    <header className="fixed top-5 z-50 w-[94%] rounded-4xl border border-border bg-surface/80 px-4 backdrop-blur-md transition-all duration-300 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between py-1.5">
        <div className="flex items-center gap-7">
          <Link
            to="/"
            className="flex items-center justify-center gap-1.5 text-foreground transition-opacity duration-200 hover:opacity-80"
          >
            <span className="flex h-4 w-4 items-center justify-center">
              <GalleryThumbnails className="h-4.5 w-45 drop-shadow-sm" />
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
                  className="group relative flex items-center justify-center gap-0.5 pb-1 text-[9px] text-foreground transition-colors hover:text-blue"
                >
                  {item.label}
                  <div className="absolute left-0 top-3.5 h-px w-0 origin-left rounded-sm bg-foreground opacity-0 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:w-full group-hover:opacity-100" />
                  {item.hasDropdown && (
                    <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:translate-y-0.5" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.94 }}
            className="relative flex h-7 w-7 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-muted"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ y: 14, opacity: 0, rotate: -35 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -14, opacity: 0, rotate: 35 }}
                transition={{ duration: 0.22 }}
              >
                <ThemeIcon className="h-3.5 w-3.5" />
              </motion.span>
            </AnimatePresence>
          </motion.button>
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

        <div className="flex items-center gap-2 sm:hidden">
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileTap={{ scale: 0.94 }}
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-foreground"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <ThemeIcon className="h-3.5 w-3.5" />
          </motion.button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-7 w-7 cursor-pointer flex-col items-center justify-center gap-1 text-foreground focus:outline-none"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span 
              className={`h-[1.5px] rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isOpen ? "w-5 rotate-45 translate-y-[5.5px]" : "w-4 origin-right ml-auto"
              }`} 
            />
            <span 
              className={`h-[1.5px] w-5 rounded-full bg-current transition-all duration-200 ease-out ${
                isOpen ? "opacity-0 scale-0" : "opacity-100"
              }`} 
            />
            <span 
              className={`h-[1.5px] rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isOpen ? "w-5 -rotate-45 translate-y-[-5.5px]" : "w-4 origin-right ml-auto"
              }`} 
            />
          </button>
        </div>
      </nav>

      <div 
        className={`sm:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isOpen ? "max-h-87.5 opacity-100 border-t border-border py-6" : "max-h-0 opacity-0 pointer-events-none"
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
                  className="group inline-flex items-center justify-center gap-1 py-1 text-[9px] font-medium tracking-wide text-foreground transition-colors hover:text-blue"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="h-3 w-3 text-muted-foreground transition-transform duration-200 group-hover:translate-y-0.5" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          
          <div 
            className={`flex w-full max-w-60 transform flex-col gap-2 border-t border-border pt-4 transition-all delay-200 duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <Button
              size="sm"
              variant="secondary"
              type="button"
              fullWidth
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
              fullWidth
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
