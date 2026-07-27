import { Phone, Mail, Clock3 } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="hidden lg:block bg-[#0B1F3A] text-white">
      <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-sm">

        <div className="flex items-center gap-6">

          <div className="flex items-center gap-2">
            <Phone size={15} />
            <span>+91 XXXXX XXXXX</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={15} />
            <span>info@ihrac.org</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={15} />
            <span>Mon - Sat : 9AM - 6PM</span>
          </div>

        </div>

        <div className="flex gap-4">

          <FaFacebookF size={17} />

          <FaInstagram size={17} />

          <FaLinkedinIn size={17} />

          <FaYoutube size={17}/>

        </div>

      </div>
    </div>
  );
};

export default TopBar;