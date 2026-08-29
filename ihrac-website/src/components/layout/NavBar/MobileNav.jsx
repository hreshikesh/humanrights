import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { navLinks } from "./navLinks";
import useScrollTo from "../../../hooks/useScrollTo";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const scrollTo = useScrollTo();

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  // Close drawer AND scroll to section
  const handleLinkClick = (e, path) => {
    scrollTo(e, path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden h-20 px-5 flex items-center justify-between bg-white shadow-sm sticky top-0 z-40 border-b border-slate-100">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm bg-[#0B1F3A] text-[#D4AF37] flex items-center justify-center font-bold text-lg shadow-sm">
            I
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-bold text-sm leading-tight text-[#0B1F3A] uppercase tracking-wide">
              IHRAC
            </h2>
            <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest">
              Action Council
            </p>
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="text-[#0B1F3A] p-2 hover:bg-slate-50 rounded-md transition-colors"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 w-[85%] max-w-sm h-screen bg-white z-50 shadow-2xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-5 border-b border-slate-100 bg-slate-50">
                <h2 className="font-bold text-[15px] tracking-widest uppercase text-[#0B1F3A]">
                  IHRAC
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white p-2 rounded-sm border border-slate-200 text-slate-500 hover:text-red-600 hover:border-red-200 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Links */}
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map((item) => {
                  const hasChildren = item.dropdown || item.megaMenu;
                  const childrenArray = item.dropdown || item.megaMenu;

                  return (
                    <div key={item.title} className="border-b border-slate-50 last:border-none">

                      {/* Simple link */}
                      {!hasChildren && (
                        <a
                          href={item.path}
                          onClick={(e) => handleLinkClick(e, item.path)}
                          className="block py-3.5 px-4 rounded-md font-semibold text-[15px] text-slate-700 hover:bg-slate-50 hover:text-[#0B1F3A] transition-colors"
                        >
                          {item.title}
                        </a>
                      )}

                      {/* Dropdown toggle */}
                      {hasChildren && (
                        <>
                          <button
                            onClick={() => toggleDropdown(item.title)}
                            className="w-full flex justify-between items-center py-3.5 px-4 rounded-md font-semibold text-[15px] text-slate-700 hover:bg-slate-50 hover:text-[#0B1F3A] transition-colors"
                          >
                            {item.title}
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-300 ${
                                openDropdown === item.title
                                  ? "rotate-180 text-[#D4AF37]"
                                  : "text-slate-400"
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {openDropdown === item.title && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pr-2 py-2 mb-2 flex flex-col gap-1 border-l-2 border-slate-200 ml-6">
                                  {childrenArray.map((sub) => (
                                    <a
                                      key={sub.title}
                                      href={sub.path}
                                      onClick={(e) => handleLinkClick(e, sub.path)}
                                      className="py-2.5 px-4 rounded-md text-[14px] text-slate-600 font-medium hover:text-[#0B1F3A] hover:bg-slate-50 flex flex-col transition-colors"
                                    >
                                      <span className="font-semibold">{sub.title}</span>
                                      {sub.desc && (
                                        <span className="text-[12px] text-slate-400 mt-0.5">
                                          {sub.desc}
                                        </span>
                                      )}
                                    </a>
                                  ))}

                                  {/* Explore All CTA for mega menu */}
                                  {item.megaMenu && (
                                    <a
                                      href={item.path}
                                      onClick={(e) => handleLinkClick(e, item.path)}
                                      className="py-3 px-4 mt-2 rounded-md text-[13px] text-[#0B1F3A] font-bold uppercase tracking-wide bg-slate-50 border border-slate-100 flex items-center gap-2 hover:border-[#D4AF37] transition-colors"
                                    >
                                      Explore All 48 Sectors <ArrowRight size={14} />
                                    </a>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}

                    </div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;