import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "./navLinks";
import useScrollTo from "../../../hooks/useScrollTo";

const DesktopMenu = ({ isScrolled }) => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const scrollTo = useScrollTo();

  const dropdownVariants = {
    hidden: { opacity: 0, y: 8, transition: { duration: 0.15 } },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    exit: { opacity: 0, y: 4, transition: { duration: 0.1 } },
  };

  return (
    <nav className="hidden lg:flex items-center justify-between max-w-7xl mx-auto h-20 px-6">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 relative z-10 group">
        <div className="w-12 h-12 bg-[#0B1F3A] flex items-center justify-center text-[#D4AF37] font-bold text-2xl shadow-md transition-transform duration-300 group-hover:scale-105">
          I
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-lg leading-tight text-[#0B1F3A] tracking-wide uppercase">
            International Human Rights
          </h1>
          <p className="text-xs text-slate-500 font-semibold tracking-widest uppercase">
            Action Council
          </p>
        </div>
      </Link>

      {/* Nav Links */}
      <ul className="flex items-center gap-8 h-full">
        {navLinks.map((item) => {
          const hasChildren = item.dropdown || item.megaMenu;

          return (
            <li
              key={item.title}
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredMenu(item.title)}
              onMouseLeave={() => setHoveredMenu(null)}
            >

              {/* Standard anchor link */}
              {!hasChildren && (
                <a
                  href={item.path}
                  onClick={(e) => scrollTo(e, item.path)}
                  className="relative py-2 text-[15px] font-semibold text-slate-600 hover:text-[#0B1F3A] transition-colors duration-200 group"
                >
                  {item.title}
                  <span className="absolute left-0 -bottom-1 h-[2px] bg-[#D4AF37] w-0 group-hover:w-full transition-all duration-300" />
                </a>
              )}

              {/* Dropdown / Mega Menu trigger button */}
              {hasChildren && (
                <button
                  className={`flex items-center gap-1.5 text-[15px] font-semibold transition-colors duration-200 py-2 ${
                    hoveredMenu === item.title ? "text-[#0B1F3A]" : "text-slate-600"
                  }`}
                >
                  {item.title}
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${
                      hoveredMenu === item.title ? "rotate-180 text-[#D4AF37]" : "text-slate-400"
                    }`}
                  />
                </button>
              )}

              {/* Standard Dropdown (Media) */}
              {item.dropdown && (
                <AnimatePresence>
                  {hoveredMenu === item.title && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-0 top-full w-56 bg-white shadow-[0_20px_60px_-15px_rgba(11,31,58,0.15)] py-2 border-t-[3px] border-[#D4AF37] z-50 rounded-b-md"
                    >
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.title}
                          href={sub.path}
                          onClick={(e) => scrollTo(e, sub.path)}
                          className="block px-6 py-3 text-[14px] text-slate-600 hover:bg-slate-50 hover:text-[#0B1F3A] hover:pl-7 font-medium transition-all duration-200"
                        >
                          {sub.title}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Mega Menu (Working Sectors) */}
              {item.megaMenu && (
                <AnimatePresence>
                  {hoveredMenu === item.title && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[750px] bg-white shadow-[0_20px_60px_-15px_rgba(11,31,58,0.15)] p-8 border-t-[3px] border-[#D4AF37] z-50 rounded-b-md"
                    >
                      <div className="grid grid-cols-2 gap-x-10 gap-y-5 mb-6">
                        {item.megaMenu.map((sector) => (
                          <a
                            key={sector.title}
                            href={sector.path}
                            onClick={(e) => scrollTo(e, sector.path)}
                            className="group/card flex flex-col p-3 rounded-md border-l-2 border-transparent hover:border-[#D4AF37] hover:bg-slate-50 transition-all duration-300"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[15px] text-slate-800 group-hover/card:text-[#0B1F3A] transition-colors">
                                {sector.title}
                              </span>
                              <ArrowRight
                                size={16}
                                className="text-[#D4AF37] opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300"
                              />
                            </div>
                            <span className="text-[13px] text-slate-500 mt-1 line-clamp-1">
                              {sector.desc}
                            </span>
                          </a>
                        ))}
                      </div>

                      {/* Explore All CTA */}
                      <div className="border-t border-slate-100 pt-5 flex justify-center">
                        <a
                          href={item.path}
                          onClick={(e) => scrollTo(e, item.path)}
                          className="inline-flex items-center gap-2 text-[14px] text-[#0B1F3A] font-bold uppercase tracking-wider hover:text-[#D4AF37] transition-colors group/cta"
                        >
                          Explore All 48 Working Sectors
                          <ArrowRight size={16} className="group-hover/cta:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopMenu;