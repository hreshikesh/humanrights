import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import ScrollToTop from "../components/common/ScrollToTop";

// Page Imports with Lazy Loading for optimal performance
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Fallback loader while route chunks are fetching
const PageLoader = () => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
    <div className="w-10 h-10 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
  </div>
);

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            {/* Catch-all route for unhandled paths */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;