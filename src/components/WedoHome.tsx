import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// --- Types ---
interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
  imageFallback: string; // JPG fallback
  linkPrimary: string;
  linkSecondary: string;
}

// --- Data ---
const SLIDES: SlideData[] = [
  {
    id: 0,
    title: "WEB DESIGN & DEV",
    description: "We build high-performance websites that convert visitors into customers. Fast, mobile-first, and designed to grow with your business.",
    image: "/images/slider/slider-web-design.webp", // ModiahealthHD
    imageFallback: "/images/slider/slider-web-design.jpg",
    linkPrimary: "/web-design-north-lakes",
    linkSecondary: "/contact"
  },
  {
    id: 1,
    title: "SEO DOMINANCE",
    description: "Get found by local customers when they need you most. We specialize in ranking businesses in Dakabin, North Lakes, Mango Hill, and surrounding areas at the top of Google.",
    image: "/images/slider/slider-seo-dominance.webp", // SEOWEBHD
    imageFallback: "/images/slider/slider-seo-dominance.jpg",
    linkPrimary: "/tradies-seo-north-lakes",
    linkSecondary: "/contact"
  },
  {
    id: 2,
    title: "FACEBOOK ADS",
    description: "Stop wasting money on boosted posts. We create targeted ad campaigns that put your offer in front of the right people at the right time.",
    image: "/images/slider/slider-facebook-ads.webp", // FACEBOOKHD
    imageFallback: "/images/slider/slider-facebook-ads.jpg",
    linkPrimary: "/facebook-ads-north-lakes",
    linkSecondary: "/contact"
  },
  {
    id: 3,
    title: "STRATEGIC MEDIA",
    description: "Content that builds trust. We produce professional photography and video that showcases your expertise and separates you from competitors.",
    image: "/images/slider/slider-strategic-media.webp", // MEDIAHD
    imageFallback: "/images/slider/slider-strategic-media.jpg",
    linkPrimary: "/services",
    linkSecondary: "/contact"
  },
  {
    id: 4,
    title: "GOOGLE REVIEWS",
    description: "Automate your reputation. We help you collect authentic 5-star reviews to build authority and trust in the local market.",
    image: "/images/slider/slider-google-reviews.webp", // ReviewHD
    imageFallback: "/images/slider/slider-google-reviews.jpg",
    linkPrimary: "/google-review-request-email-template",
    linkSecondary: "/contact"
  }
];

// --- Helpers & Variants ---

const NavButton = ({ onClick, direction }: { onClick: () => void, direction: 'left' | 'right' }) => (
  <button 
    onClick={onClick}
    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 group z-50 pointer-events-auto"
  >
    {direction === 'left' ? (
      <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
    ) : (
      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
    )}
  </button>
);

function getSlidePosition(index: number, current: number, length: number): 'active' | 'prev' | 'next' | 'hidden' {
  if (index === current) return 'active';
  const prevIndex = (current - 1 + length) % length;
  const nextIndex = (current + 1) % length;
  
  if (index === prevIndex) return 'prev';
  if (index === nextIndex) return 'next';
  return 'hidden';
}

const bgImageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 1.1,
  }),
  center: {
    x: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-20%' : '20%',
    opacity: 0,
  }),
};

const titleVariants = {
  active: {
    x: '-50%',
    y: '-50%',
    scale: 1,
    opacity: 1,
    left: '50%',
    top: '50%',
    filter: 'blur(0px)',
    zIndex: 20,
    display: 'flex',
  },
  prev: {
    x: '-50%',
    y: '-50%',
    scale: 0.5, 
    opacity: 0, 
    left: '50%',
    top: '50%',
    filter: 'blur(10px)',
    zIndex: 10,
    display: 'flex',
  },
  next: {
    x: '-50%',
    y: '-50%',
    scale: 1.5, 
    opacity: 0, 
    left: '50%',
    top: '50%',
    filter: 'blur(10px)',
    zIndex: 30,
    display: 'flex',
  },
  hidden: {
    opacity: 0,
    scale: 0,
    display: 'none',
  }
};

export default function WedoHome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); 

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const getInitialVariant = (position: string) => {
    if (direction === 0) return position; 
    if (position === 'active') return direction > 0 ? 'next' : 'prev';
    if (position === 'prev') return 'active'; 
    if (position === 'next') return 'active'; 
    return 'hidden';
  }

  return (
    <div className="relative w-full min-h-screen bg-gray-900 text-white font-sans selection:bg-brand-red selection:text-white">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <motion.img
            key={currentIndex}
            src={SLIDES[currentIndex].image}
            alt={SLIDES[currentIndex].title + " - " + SLIDES[currentIndex].description}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            onError={(e) => {
              // Fallback to JPG if WebP fails
              const target = e.target as HTMLImageElement;
              if (target.src !== SLIDES[currentIndex].imageFallback) {
                target.src = SLIDES[currentIndex].imageFallback;
              }
            }}
            custom={direction}
            variants={bgImageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>
        
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
        
        {/* Top & Center Area */}
        <div className="flex-1 flex flex-col p-5 md:p-10 lg:p-12 pb-0">
            <div className="w-full h-16"></div>

            {/* Center Title Area */}
            <div className="flex-1 flex items-center justify-center relative w-full perspective-1000">
            {SLIDES.map((slide, index) => {
                const position = getSlidePosition(index, currentIndex, SLIDES.length);
                if (position === 'hidden') return null;

                return (
                <motion.div
                    key={slide.id}
                    className="absolute flex items-center justify-center w-full pointer-events-none"
                    animate={position}
                    variants={titleVariants}
                    initial={getInitialVariant(position)}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="font-syne font-bold tracking-tighter uppercase text-center text-3xl md:text-5xl lg:text-7xl text-white max-w-[90vw] leading-none drop-shadow-2xl">
                    {slide.title}
                    </h2>
                </motion.div>
                );
            })}
            </div>

            {/* Text Content (Right) */}
            <div className="w-full flex justify-end min-h-[120px] pb-10">
                <div className="w-full md:max-w-xl lg:max-w-2xl text-right flex flex-col items-end pointer-events-none z-20">
                    <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-end"
                    >
                        <p className="text-sm md:text-base text-gray-200 font-light leading-relaxed mb-5 md:w-[90%] ml-auto drop-shadow-md">
                        {SLIDES[currentIndex].description}
                        </p>
                        
                        <div className="flex flex-wrap justify-end gap-3 pointer-events-auto">
                        <a 
                            href={SLIDES[currentIndex].linkPrimary} 
                            className="px-5 py-2.5 bg-white text-black font-medium hover:bg-brand-red hover:text-white transition-colors duration-300 rounded-sm text-sm"
                        >
                            View Service
                        </a>
                        <a 
                            href={SLIDES[currentIndex].linkSecondary}
                            className="px-5 py-2.5 border border-white text-white font-medium hover:bg-white/10 transition-colors duration-300 rounded-sm text-sm"
                        >
                            Book a Strategy Call
                        </a>
                        </div>
                    </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>

        {/* Sticky Pill Container - Bottom Left */}
        <div className="sticky bottom-6 z-50 pointer-events-none flex justify-start px-5 md:px-10 lg:px-12 pb-6">
            <div className="pointer-events-auto flex items-center gap-2 bg-white/10 backdrop-blur-xl p-1.5 rounded-full border border-white/20 shadow-2xl">
                <NavButton onClick={handlePrev} direction="left" />
                <NavButton onClick={handleNext} direction="right" />
            </div>
        </div>

      </div>
      
      {/* Loading Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
         <motion.div 
            key={currentIndex}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 8, ease: "linear" }}
            className="h-full bg-brand-red"
         />
      </div>
    </div>
  );
}
