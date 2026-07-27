import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Leadership from "../pages/Leadership";
import WorkingSector from "../pages/WorkingSector";
import Events from "../pages/Events";
import Gallery from "../pages/Gallery";
import Videos from "../pages/Videos";
import Activities from "../pages/Activities";
import Achievements from "../pages/Achievements";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/working-sectors" element={<WorkingSector />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;