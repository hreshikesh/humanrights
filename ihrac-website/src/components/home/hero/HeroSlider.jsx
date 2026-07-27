import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { heroSlides } from "./heroSlides";

const HeroSlider = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".hero-swiper-button-prev",
          nextEl: ".hero-swiper-button-next",
        }}
        className="w-full h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full h-full relative overflow-hidden">
            {slide.type === "video" ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={slide.src}
                alt="IHRAC Activities Slide"
                className="w-full h-full object-cover object-center animate-ken-burns"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Desktop Navigation Arrows (Hidden on mobile to avoid blocking content) */}
      <div className="hidden lg:flex items-center justify-between absolute inset-x-6 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
        <button className="hero-swiper-button-prev pointer-events-auto w-12 h-12 rounded-full bg-[#0B1F3A]/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B1F3A] hover:border-[#D4AF37] transition-all duration-300 shadow-lg">
          <ChevronLeft size={24} />
        </button>
        <button className="hero-swiper-button-next pointer-events-auto w-12 h-12 rounded-full bg-[#0B1F3A]/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B1F3A] hover:border-[#D4AF37] transition-all duration-300 shadow-lg">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;