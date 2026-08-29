import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight, ShieldCheck } from "lucide-react";

const quickLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Leadership", href: "#leadership" },
  { title: "Working Sectors", href: "#workingSectors" },
  { title: "Initiatives", href: "#initiatives" },
  { title: "Impact", href: "#impact" },
];

const mediaLinks = [

  { title: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white border-t-4 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-14 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Organization */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#D4AF37] text-[#0B1F3A] flex items-center justify-center font-bold text-xl shadow-sm">
              I
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-wide uppercase leading-tight">
                IHRAC
              </h2>
              <p className="text-[11px] text-slate-400 uppercase tracking-[0.22em] font-semibold">
                Human Rights Council
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
            International Human Rights Action Council is committed to protecting
            dignity, justice, equality, and sustainable development through
            rights-based action across key sectors.
          </p>

          {/* <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider mt-1">
            <ShieldCheck size={16} /> Official Non-Profit Entity
          </div> */}
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-[15px] font-bold uppercase tracking-wider mb-5 text-[#D4AF37] border-b border-slate-800 pb-2">
            Navigation
          </h3>

          <ul className="grid grid-cols-1 gap-2.5 text-sm">
            {quickLinks.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Media / Sections */}
        <div>
          <h3 className="text-[15px] font-bold uppercase tracking-wider mb-5 text-[#D4AF37] border-b border-slate-800 pb-2">
            Media & Sections
          </h3>

          <ul className="flex flex-col gap-2.5 text-sm">
            {mediaLinks.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  {item.title}
                </a>
              </li>
            ))}

          </ul>
        </div>

        {/* Column 4: Contact Section */}
        <div>
          <h3 className="text-[15px] font-bold uppercase tracking-wider mb-5 text-[#D4AF37] border-b border-slate-800 pb-2">
            Contact Desk
          </h3>

          <div className="rounded-2xl border border-slate-800 bg-[#071529] p-5 flex flex-col gap-4 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]">
            <a
              href="tel:+91 8957422101"
              className="flex items-center gap-3 rounded-xl border border-slate-800 bg-[#0B1F3A] px-4 py-3 text-slate-300 hover:border-[#D4AF37]/50 hover:text-white transition-colors"
            >
              <Phone size={18} className="text-[#D4AF37] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                  Mobile
                </span>
                <span className="text-sm font-medium">+91 8957422101</span>
              </div>
            </a>

            <a
              href="mailto:+91 8957422101"
              className="flex items-center gap-3 rounded-xl border border-slate-800 bg-[#0B1F3A] px-4 py-3 text-slate-300 hover:border-[#D4AF37]/50 hover:text-white transition-colors"
            >
              <Mail size={18} className="text-[#D4AF37] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                  Email
                </span>
                <span className="text-sm font-medium break-all">contactihrac@gmail.com</span>
              </div>
            </a>

            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-[#071529]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} International Human Rights Action Council (IHRAC). All Rights Reserved.
          </p>

          {/* <div className="flex flex-wrap items-center justify-center gap-5">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;