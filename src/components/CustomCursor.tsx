import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Add initial listener immediately to catch if mouse is already present
    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
        window.removeEventListener("mousemove", moveCursor);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
        document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="hidden md:flex fixed top-0 left-0 w-8 h-8 rounded-full border border-red-600 bg-red-600/20 z-[9999] pointer-events-none items-center justify-center mix-blend-difference"
      animate={{ 
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16,
          opacity: isVisible ? 1 : 0,
          scale: 1
      }}
      transition={{ 
        type: "spring", 
        damping: 30, 
        stiffness: 200, 
        mass: 0.5,
        opacity: { duration: 0.2 } 
      }}
    >
      <div className="w-1 h-1 bg-red-600 rounded-full" />
    </motion.div>
  );
};

export default CustomCursor;
