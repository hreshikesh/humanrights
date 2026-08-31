import AboutPreview from "../components/home/aboutPreview/AboutPreview";
import LatestEvents from "../components/home/events/LatestEvents";
import FeaturedInitiatives from "../components/home/FeaturedInitiatives/FeaturedInitiatives";
import Hero from "../components/home/hero/Hero";
import Impact from "../components/home/impact/Impact";
import Leadership from "../components/home/leadership/Leadership";
import PhotoGallery from "../components/home/photogallery/PhotoGallery";
import Contact from "../components/home/contact/Contact";
import VideoGallery from "../components/home/videogallery/VideoGallery";
import WorkingSectors from "../components/home/WorkingSectors/WorkingSectors";
import TeamSection from "../components/home/team/TeamSection";
import Human3DSection from "../components/home/human3D/Human3DSection";
import Certificate from "../components/home/certificate/Certificate";
import MemberSection from "../components/home/members/MemberSection";
const Home = () => {
    return (
        <>
        <Hero/>
        <AboutPreview/>
        <Impact/>
        <Leadership/>
        <TeamSection/>
        <MemberSection/>
        <Certificate/>
        <Human3DSection/>
        <WorkingSectors/>
        <FeaturedInitiatives/>
        <PhotoGallery/>
        <VideoGallery/>
        <Contact/>
      {/* <LatestEvents/> */}
        </>
    );
};

export default Home;