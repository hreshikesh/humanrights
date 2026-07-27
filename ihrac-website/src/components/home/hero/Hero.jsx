import HeroSlider from "./HeroSlider";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section className="relative isolate min-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-950 pb-12 lg:pb-16">
      {/* Background Slider */}
      <HeroSlider />

      {/* Dark Government-Grade Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B1F3A]/90 via-black/70 to-black/50 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 flex-grow flex items-center pt-32 lg:pt-24 pb-12">
        <HeroContent />
      </div>

      {/* Bottom Statistics Section */}
      <div className="relative z-30 w-full mt-auto">
        <HeroStats />
      </div>
    </section>
  );
};

export default Hero;