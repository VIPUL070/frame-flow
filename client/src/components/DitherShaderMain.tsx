"use client";
import DitherShader from "./dither-shader";

function DitherShaderMain() {
  return (
    <div className="h-full w-full">
      <div className="relative h-full w-full overflow-hidden rounded-md">
        <DitherShader
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2670&auto=format&fit=crop"
          gridSize={2}
          ditherMode="bayer"
          colorMode="grayscale"
          invert={false}
          animated={false}
          animationSpeed={0.02}
          primaryColor="#000000"
          secondaryColor="#f5f5f5"
          threshold={0.5}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}

export default DitherShaderMain
