import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";

import ImageGalleryPage from "../pages/ImageGalleryPage";
import VideoGalleryPage from "../pages/VideoGalleryPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
  
        <Route path="/media-images" element={<ImageGalleryPage/>}/>
        <Route path="/media-videos" element={<VideoGalleryPage/>}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;