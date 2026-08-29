// ImageGalleryPage.jsx
import ImageGalleryHero from "../components/gallery/ImageGalleryHero";
import DomeShowcase from "../components/gallery/DomeShowcase";

const ImageGalleryPage = () => {
  return (
    <main className="bg-[#0B1F3A] min-h-screen">
      <ImageGalleryHero />
      <DomeShowcase />
    </main>
  );
};

export default ImageGalleryPage;