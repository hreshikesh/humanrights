import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import Quote from "./Quote";

const AboutPreview = () => {
  return (
    <section id="about" className="py-24 lg:py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle World Map / Pattern Background with 5% opacity */}
      <div className="absolute inset-0 bg-[radial-gradient(#0B1F3A_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      {/* Gradient Blob for atmospheric depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#D4AF37]/10 to-[#0B1F3A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <AboutImage />
          <AboutContent />
        </div>
      </div>
      <Quote/>
    </section>
  );
};

export default AboutPreview;