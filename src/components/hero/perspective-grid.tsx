export function PerspectiveGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* 3D Wireframe Perspective Grid */}
      <div 
        className="absolute inset-0 opacity-40 [perspective:1000px]"
      >
        <div 
          className="absolute inset-0 bg-grid-perspective [transform:rotateX(38deg)_scale(1.2)] origin-top [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"
        />
      </div>

      {/* Warm Orange Radial Glow Centered Behind Right HUD Panel */}
      <div 
        className="absolute top-1/4 right-[5%] sm:right-[15%] w-[420px] sm:w-[600px] h-[350px] sm:h-[450px] rounded-full bg-[#FF4600]/12 blur-[120px] pointer-events-none"
      />

      {/* Subtle Secondary Left Glow */}
      <div 
        className="absolute top-1/3 left-[5%] w-[280px] h-[280px] rounded-full bg-[#FF4600]/5 blur-[100px] pointer-events-none"
      />

      {/* Bottom Fade to Solid Canvas */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
}
