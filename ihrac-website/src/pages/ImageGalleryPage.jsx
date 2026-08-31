// ImageGalleryPage.jsx
import ImageGalleryHero from "../components/gallery/ImageGalleryHero";
import DomeShowcase from "../components/gallery/DomeShowcase";
import IndependenceDayGallery from "../components/gallery/independence/IndependenceDayGallery";

const ImageGalleryPage = () => {
  return (
    <main className="bg-[#0B1F3A] min-h-screen">
      <ImageGalleryHero />
      <IndependenceDayGallery/>
      <DomeShowcase />
    </main>
  );
};

export default ImageGalleryPage;