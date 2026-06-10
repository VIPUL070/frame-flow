import { Link } from "react-router-dom";
import { GalleryThumbnails } from "lucide-react";
import Reveal from "../ui/Reveal";
import { FOOTER_COLUMNS } from "../../data/home";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface p-4 transition-all duration-300 sm:px-4">
      <Reveal>
        <div className="mx-auto max-w-6xl">
          
          <div className="mb-8 flex justify-start">
            <Link to="/" className="group flex items-center gap-1.5 text-foreground transition-opacity duration-200 hover:opacity-85">
              <span className="flex h-4 w-4 items-center justify-center">
                <GalleryThumbnails className="h-4.5 w-4.5 drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />
              </span>
              <span className="text-[10px] font-semibold tracking-tight text-foreground">
                Frame Flow
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-b border-border pb-6 transition-all duration-300 md:grid-cols-3 lg:grid-cols-6 lg:pb-4">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-1 lg:gap-0.5">
                <h3 className="text-[9px] uppercase tracking-normal text-foreground">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-1.5 lg:gap-px">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="group relative inline-flex items-center pb-0.5 text-[8px] font-medium tracking-tight text-muted-foreground transition-colors duration-200 hover:text-blue lg:text-[9px]"
                      >
                        {link.label}
                        <div className="absolute bottom-0 left-0 h-px w-0 origin-left rounded-sm bg-foreground opacity-0 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:w-full group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 lg:mt-4">
            <p className="text-center text-[11px] font-medium tracking-tight text-muted-foreground sm:text-left">
              © 2027 Frame Flow. All rights reserved.
            </p>
          </div>

        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
