import DitherShaderMain from "./DitherShaderMain";

const Dither = () => {
  return (
    <div className="bg-canvas relative hidden md:block h-full w-[55%] rounded-md overflow-hidden">
      <DitherShaderMain />

      <div className="absolute inset-x-0 top-0 z-5 h-24 bg-linear-to-b from-black/30 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 z-5 h-[55%] bg-linear-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

      <div className="absolute inset-0 z-10 flex flex-col justify-between py-2 px-5">
        <span className="flex items-center gap-1.5 justify-center rounded-xs text-center align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
          <span className="text-sm font-semibold tracking-widest text-black uppercase drop-shadow-sm">
            Frame Flow
          </span>
        </span>

        <div className="absolute top-20 left-8 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-md backdrop-blur-md ring-1 ring-white/20">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1" y="5" width="1.8" height="6" rx="0.9" fill="black" />
              <rect x="4.2" y="3.5" width="1.8" height="9" rx="0.9" fill="black" />
              <rect x="7.4" y="1.5" width="1.8" height="13" rx="0.9" fill="black" />
              <rect x="10.6" y="3.5" width="1.8" height="9" rx="0.9" fill="black" />
              <rect x="13.8" y="5" width="1.8" height="6" rx="0.9" fill="black" />
            </svg>
          </div>
          <div className="h-0.75 w-8 rounded-full bg-[#3B82F6] shadow-[0_0_6px_rgba(59,130,246,0.5)]" />
        </div>

        <div className="flex items-end justify-between">
          <h2 className="text-xl lg:text-[28px] font-medium leading-tight tracking-tight text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
            One Click Away from
            <br />
            Studio-Grade Thumbnail
          </h2>
          <div className="flex items-center gap-2 mb-2">
            <div className="h-0.75 w-6 rounded-full bg-[#3B82F6] shadow-[0_0_6px_rgba(59,130,246,0.5)]" />
            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/30 bg-white/95 text-sm font-semibold text-black shadow-md backdrop-blur-md">
              A
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dither;