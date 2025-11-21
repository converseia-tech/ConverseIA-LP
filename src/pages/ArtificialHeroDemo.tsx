import { ArtificialHero } from "@/components/ui/artificial-hero";

const ArtificialHeroDemo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <ArtificialHero />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-100 px-8 py-6 flex justify-between items-center bg-black/20 backdrop-blur-sm">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-black" />
        </div>
        
        <div className="flex gap-8 text-[11px] font-medium tracking-widest uppercase">
          <a href="#" className="text-white/90 hover:text-white transition-opacity">
            Creative Journey
          </a>
          <a href="#" className="text-white/90 hover:text-white transition-opacity">
            About
          </a>
          <a href="#" className="text-white/90 hover:text-white transition-opacity">
            Sound
          </a>
        </div>
        
        <div className="text-[11px] font-medium text-white/90 tracking-widest uppercase cursor-pointer hover:text-white transition-opacity">
          + Connect
        </div>
      </nav>

      {/* Large text */}
      <div 
        className="fixed bottom-[15%] left-0 right-0 z-50 pointer-events-none"
      >
        <div 
          className="text-center font-black tracking-tight leading-[0.8] text-white text-[clamp(4rem,15vw,12rem)]"
          style={{
            fontFamily: 'Arial Black, Arial, sans-serif',
            textShadow: '0 0 50px rgba(255, 255, 255, 0.3)',
            filter: 'contrast(1.2)',
            letterSpacing: '-0.02em'
          }}
        >
          ARTIFICIAL
        </div>
      </div>

      {/* Left side text */}
      <div className="fixed left-8 top-[40%] z-50 max-w-[150px]">
        <div className="text-[11px] text-white leading-relaxed tracking-wide uppercase opacity-80">
          In the dark<br />
          is where<br />
          light takes form<br />
        </div>
      </div>

      {/* Right side text */}
      <div className="fixed right-8 top-[40%] z-50 max-w-[150px] text-right">
        <div className="text-[11px] text-white leading-relaxed tracking-wide uppercase opacity-80">
          In emptiness<br/>
          we find<br/>
          true happiness
        </div>
      </div>

      {/* Bottom text */}
      <div className="fixed bottom-[8%] left-8 z-50">
        <div className="text-[10px] text-white tracking-widest uppercase opacity-70">
          Art & Design by @scottclayton
        </div>
      </div>
    </div>
  );
};

export default ArtificialHeroDemo;
