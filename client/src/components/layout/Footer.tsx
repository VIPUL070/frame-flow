import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal";
import { FOOTER_COLUMNS } from "../../data/home";

const Footer = () => {
  return (
    <footer className="border-t border-border px-4 py-10 sm:px-6">
      <Reveal>
        <div className="mx-auto max-w-5xl">
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

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="mb-3 text-[9px] font-semibold uppercase tracking-wider text-subtle">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-[11px] text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


            <p className="text-[10px] text-muted-foreground">
              © 2077 Untitled UI. All rights reserved.
            </p>

        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
