import AboutPreview from "../components/home/aboutPreview/AboutPreview";
import LatestEvents from "../components/home/events/LatestEvents";
import FeaturedInitiatives from "../components/home/FeaturedInitiatives/FeaturedInitiatives";
import Hero from "../components/home/hero/Hero";
import Impact from "../components/home/impact/Impact";
import Leadership from "../components/home/leadership/Leadership";
import PhotoGallery from "../components/home/photogallery/PhotoGallery";
import VideoCard from "../components/home/videogallery/VideoCard";
import VideoGallery from "../components/home/videogallery/VideoGallery";
import WorkingSectors from "../components/home/WorkingSectors/WorkingSectors";
import Videos from "./Videos";

const Home = () => {
    return (
        <>
        <Hero/>
        <AboutPreview/>
        <Impact/>
        <Leadership/>
        <WorkingSectors/>
        <FeaturedInitiatives/>
        <PhotoGallery/>
        <VideoGallery/>
      {/* <LatestEvents/> */}
        </>
    );
};

export default Home;