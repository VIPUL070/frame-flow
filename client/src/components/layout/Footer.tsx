import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal";
import { FOOTER_COLUMNS } from "../../data/home";

const Footer = () => {
  return (
    <footer className="border-t border-stone-200 bg-white px-4 sm:px-6 p-8 transition-all duration-300">
      <Reveal>
        <div className="mx-auto max-w-6xl">
          
          <div className="mb-8 flex justify-start">
            <Link to="/" className="flex items-center gap-1.5 hover:opacity-85 transition-opacity duration-200 group">
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
                  className="lucide lucide-gallery-thumbnails-icon lucide-gallery-thumbnails drop-shadow-sm rounded-xs transition-transform duration-300 group-hover:scale-105"
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
          </div>

          {/* Clean breakpoint scaling: 2 cols on mobile, 3 cols on tablet (md), 6 cols on laptop (lg) */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-6 border-b border-stone-100 pb-6 lg:pb-4 transition-all duration-300">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-1 lg:gap-0.5">
                <h3 className="text-[9px] uppercase tracking-normal text-black">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-1.5 lg:gap-px">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="group relative inline-flex items-center text-[10px] lg:text-[9px] text-stone-700 font-medium tracking-tight transition-colors duration-200 pb-0.5"
                      >
                        {link.label}
                        <div className="absolute bottom-0 left-0 h-px w-0 bg-stone-800 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:w-full group-hover:opacity-100 origin-left rounded-sm" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 lg:mt-4">
            <p className="text-[11px] font-medium tracking-tight text-stone-700 text-center sm:text-left">
              © 2027 Frame Flow. All rights reserved.
            </p>
          </div>

        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;