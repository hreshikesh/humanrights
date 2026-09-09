import SectionHeader from "./SectionHeader";
import ImageGalleryHero from "../../gallery/ImageGalleryHero";
import IndependenceDayGallery from "../../gallery/independence/IndependenceDayGallery";
import DomeShowcase from "../../gallery/DomeShowcase";

const PhotoGallery = () => {
  return (
    <section
      id="photoGallery"
      className="relative overflow-hidden bg-slate-50"
    >
      {/* Section Heading */}
      <div className="relative z-20 pt-24 lg:pt-32">
        <SectionHeader />
      </div>

      {/* Full Image Gallery Experience */}
      <div className="mt-10">
        <ImageGalleryHero />
        <IndependenceDayGallery />
        <DomeShowcase />
      </div>
    </section>
  );
};

export default PhotoGallery;