import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white border-t-4 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Organization Profile */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#D4AF37] text-[#0B1F3A] flex items-center justify-center font-bold text-xl">
              I
            </div>
            <h2 className="text-lg font-bold tracking-wide uppercase leading-tight">
              IHRAC
            </h2>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            International Human Rights Action Council is dedicated to safeguarding fundamental human rights, fostering sustainable community development, and enforcing equality across diverse operational sectors.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider mt-1">
            <ShieldCheck size={16} /> Official Non-Profit Entity
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-[15px] font-bold uppercase tracking-wider mb-5 text-[#D4AF37] border-b border-slate-800 pb-2">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link to="/" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                Home Portal
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                About the Council
              </Link>
            </li>
            <li>
              <Link to="/leadership" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                Leadership & Governance
              </Link>
            </li>
            <li>
              <Link to="/working-sectors" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                Working Sectors
              </Link>
            </li>
            <li>
              <Link to="/activities" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                Council Activities
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Focus Areas */}
        <div>
          <h3 className="text-[15px] font-bold uppercase tracking-wider mb-5 text-[#D4AF37] border-b border-slate-800 pb-2">
            Core Initiatives
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link to="/working-sectors/human-rights" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                Human Rights Advocacy
              </Link>
            </li>
            <li>
              <Link to="/working-sectors/women-empowerment" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                Women Empowerment
              </Link>
            </li>
            <li>
              <Link to="/working-sectors/child-welfare" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                Child Welfare & Safety
              </Link>
            </li>
            <li>
              <Link to="/working-sectors/environment" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                Environment & Forests
              </Link>
            </li>
            <li>
              <Link to="/working-sectors" className="text-xs text-[#D4AF37] font-semibold mt-1 inline-flex items-center gap-1 hover:underline">
                View All 48 Sectors <ArrowRight size={12} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Official Contact */}
        <div>
          <h3 className="text-[15px] font-bold uppercase tracking-wider mb-5 text-[#D4AF37] border-b border-slate-800 pb-2">
            Headquarters
          </h3>
          <div className="flex flex-col gap-3.5 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
              <span>New Delhi, India (National Capital Region)</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#D4AF37] shrink-0" />
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#D4AF37] shrink-0" />
              <span>info@ihrac.org</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-[#071529]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} International Human Rights Action Council (IHRAC). All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Help Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;