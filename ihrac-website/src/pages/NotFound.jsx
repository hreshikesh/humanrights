import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, ShieldAlert } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-[85vh] flex items-center justify-center bg-[#0B1F3A] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] mb-6 shadow-xl">
            <ShieldAlert className="w-10 h-10" />
          </div>

          {/* 404 Headline */}
          <h1 className="text-7xl sm:text-8xl font-black text-[#D4AF37] tracking-wider mb-2">
            404
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Record Not Found
          </h2>

          <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed">
            The operational reel, media broadcast, or archive page you are looking for has been moved or does not exist.
          </p>

          {/* Navigation Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>

            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#b8972e] text-slate-950 font-bold text-sm transition-all shadow-lg transform hover:scale-105"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;