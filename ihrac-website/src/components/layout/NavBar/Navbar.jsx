import { useEffect, useState } from "react";

import TopBar from "./TopBar";
import DesktopMenu from "./DesktopMenu";
import MobileNav from "./MobileNav";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 70);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <TopBar />

            {/* Desktop Navbar */}
            <header
                className={`hidden lg:block sticky top-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b border-slate-200/50"
                        : "bg-white border-b border-transparent"
                    }`}
            >
                <DesktopMenu isScrolled={isScrolled} />
            </header>

            {/* Mobile Navbar */}
            <MobileNav />
        </>
    );
};

export default Navbar;