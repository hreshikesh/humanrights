// TiltedScroll.jsx
import { useRef, useEffect } from "react";

export default function TiltedScroll({ children, className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const progress = centerOffset / (viewportHeight / 2);
      
      const rotateX = Math.max(-8, Math.min(8, progress * 6));
      const rotateY = Math.max(-6, Math.min(6, progress * -4));
      const translateZ = Math.max(-30, Math.min(10, -Math.abs(progress) * 20));

      container.style.transform = `
        perspective(1400px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        translateZ(${translateZ}px)
      `;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}