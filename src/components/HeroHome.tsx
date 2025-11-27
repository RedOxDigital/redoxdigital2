import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useAnimationFrame, useMotionValueEvent, useInView } from 'framer-motion';
import { ArrowRight, ArrowDown, Stethoscope, HardHat, Briefcase, Sparkles } from 'lucide-react';

// --- Assets & Data ---
const IMAGES = {
  health: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1200&auto=format&fit=crop", // Medical clinic/healthcare
  trades: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop", // Construction/Trades
  professional: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop", // Professional services/Legal
  cta: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" // Team collaboration/Strategy
};

// --- Components ---

// Individual card component with viewport detection
interface CardData {
  title: string;
  subtitle: string;
  description: string;
  img: string;
  icon: React.ReactNode;
  isCTA?: boolean;
}

const SliderCard = ({ 
  card, 
  index, 
  expandedCard, 
  setExpandedCard 
}: { 
  card: CardData; 
  index: number; 
  expandedCard: number | null; 
  setExpandedCard: (index: number | null) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { 
    amount: 0.8, // Card must be 80% visible to trigger
    margin: "-10% 0px -10% 0px"
  });

  return (
    <motion.div 
      ref={cardRef}
      className="min-w-[85vw] md:min-w-[40vw] h-[50vh] md:h-[60vh] relative group overflow-hidden bg-gray-200 flex-shrink-0"
    >
       <img 
        src={card.img} 
        alt={card.title}
        loading={index < 2 ? "eager" : "lazy"}
        fetchPriority={index < 2 ? "high" : "auto"}
        width="1200"
        height="1600"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
          isInView ? 'grayscale-0 scale-105' : 'grayscale'
        } md:grayscale md:group-hover:grayscale-0 md:scale-100`}
       />
       <div className={`absolute inset-0 transition-colors duration-300 ${
         isInView ? 'bg-black/40' : 'bg-black/20'
       } md:bg-black/20 md:group-hover:bg-black/40`} />
       
       {/* Card Content */}
       <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
          <div className={`flex justify-between items-end border-t ${card.isCTA ? 'border-brand-red' : 'border-white/50'} pt-6`}>
              <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                     <span className="text-brand-red">{card.icon}</span> {card.subtitle}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-syne font-bold text-white uppercase mb-4">{card.title}</h3>
                  
                  {/* CTA Card - Always show description and Apply button */}
                  {card.isCTA ? (
                    <div className="space-y-4">
                      <p className="text-sm text-white/90 leading-relaxed max-w-md">
                        {card.description}
                      </p>
                      <button className="bg-brand-red text-white px-6 py-3 flex items-center gap-3 group/btn hover:bg-white hover:text-black transition-colors duration-300">
                        <span className="uppercase text-xs font-bold tracking-widest">Apply Now</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  ) : (
                    /* Hidden Description - shown when expanded */
                    <AnimatePresence>
                      {expandedCard === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-white/90 leading-relaxed max-w-md"
                        >
                          {card.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  )}
              </div>
              {!card.isCTA && (
                <button
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                  className={`w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transform transition-all duration-300 flex-shrink-0 ml-4 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0`}
                >
                    <motion.div
                      animate={{ rotate: expandedCard === index ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                </button>
              )}
          </div>
       </div>
    </motion.div>
  );
};

const DraggableSlider = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const x = useMotionValue(0);
  
  const cards: CardData[] = [
    { 
      title: "HEALTH & MEDICAL", 
      subtitle: "Get New Patients.", 
      description: "Digital Marketing to get new patients for Clinics, Specialists, and Allied Health.",
      img: IMAGES.health, 
      icon: <Stethoscope /> 
    },
    { 
      title: "TRADES & CONSTRUCTION", 
      subtitle: "Qualify Better Leads.", 
      description: "Internet Marketing to qualify leads for Builders, Contractors, and Trades wanting better projects.",
      img: IMAGES.trades, 
      icon: <HardHat /> 
    },
    { 
      title: "PROFESSIONAL SERVICES", 
      subtitle: "Find High-Value Clients.", 
      description: "Marketing Consulting to find high-value clients for Finance, Legal, and Consulting firms.",
      img: IMAGES.professional, 
      icon: <Briefcase /> 
    },
    { 
      title: "YOUR INDUSTRY", 
      subtitle: "Is This You?", 
      description: "Don't see your industry? We work with businesses across all sectors. Let's discuss how we can grow your business.",
      img: IMAGES.cta, 
      icon: <Sparkles />,
      isCTA: true
    },
  ];

  // Duplicate cards for seamless infinite scroll (3 sets)
  const allCards = [...cards, ...cards, ...cards];

  useEffect(() => {
    if (containerRef.current) {
      // Total width is scrollWidth. Single set is scrollWidth / 3
      setContentWidth(containerRef.current.scrollWidth / 3);
    }
  }, []);

  // Auto-scroll logic
  useAnimationFrame((_, delta) => {
    if (!isDragging && contentWidth > 0) {
       // Move left. 
       // delta is time in ms since last frame (approx 16.6ms).
       // 0.5px per frame is decent speed.
       const moveBy = -0.5 * (delta / 16); 
       x.set(x.get() + moveBy);
    }
  });

  // Infinite Loop Logic (Teleportation)
  useMotionValueEvent(x, "change", (latest) => {
    if (contentWidth > 0) {
        // If we've scrolled past the first set (moved left by width), reset to 0
        if (latest <= -contentWidth) {
            x.set(latest + contentWidth);
        } 
        // If we've dragged past the start (moved right > 0), jump to end of first set
        else if (latest > 0) {
            x.set(latest - contentWidth);
        }
    }
  });

  return (
    <div className="w-full overflow-hidden py-12 cursor-grab active:cursor-grabbing">
      <motion.div 
        ref={containerRef}
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -10000, right: 10000 }} // Effectively infinite constraints
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        className="flex gap-4 md:gap-8"
      >
        {allCards.map((card, index) => (
          <SliderCard
            key={index}
            card={card}
            index={index}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          />
        ))}
      </motion.div>
      <div className="mt-4 flex items-center gap-2 px-6">
         <div className="w-full h-[1px] bg-gray-300 relative overflow-hidden">
            <motion.div 
                className="absolute top-0 left-0 h-full bg-brand-red w-1/4"
                animate={{ x: [0, 200, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
         </div>
         <span className="text-[10px] uppercase tracking-widest text-gray-400 whitespace-nowrap">Swipe to explore</span>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-12 w-full min-h-screen flex flex-col justify-between">
      <div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-9">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className="text-xs md:text-sm uppercase tracking-widest text-gray-500 mb-4 font-bold"
            >
                North Lakes • Small Business
            </motion.p>
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-[2.75rem] md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-syne font-bold uppercase tracking-tight text-[#1a1a1a]"
            >
                Digital Marketing <br/>
                <span className="pl-0 md:pl-12 lg:pl-16 block text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-brand-red bg-300% animate-gradient">
                    Consultant
                </span>
                <span className="text-xl md:text-3xl lg:text-4xl block font-sans font-light normal-case tracking-normal mt-4 text-gray-500 max-w-xl ml-auto text-right">
                    & Strategy for Growth
                </span>
            </motion.h1>
        </div>
        <div className="md:col-span-3 flex flex-col justify-end items-center md:items-end">
            <div className="flex flex-col gap-4 items-center md:items-end">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs uppercase tracking-widest font-bold">Accepting New Clients</span>
                </div>
                <p className="text-sm text-gray-600 max-w-[200px] text-center md:text-right">
                    We know every business is different, with unique challenges in the client journey. We work with your business to build a custom Digital Strategy and execute it.
                </p>
                <button className="bg-[#1a1a1a] text-white px-6 py-3 rounded-none flex items-center gap-3 group hover:bg-brand-red transition-colors duration-300">
                    <span className="uppercase text-xs font-bold tracking-widest">Apply Now</span>
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
            </div>
        </div>
      </div>

      <DraggableSlider />
    </section>
  );
};

export const Marquee = ({ text }: { text: string }) => (
    <div className="w-full py-8 bg-brand-red overflow-hidden flex items-center relative z-10 -rotate-1 origin-left scale-105">
        <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: "-50%" }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
            {[...Array(6)].map((_, i) => (
                <span key={i} className="text-4xl md:text-6xl font-syne font-bold uppercase text-white px-8 flex items-center gap-8">
                    {text} <span className="w-3 h-3 bg-black rounded-full" />
                </span>
            ))}
        </motion.div>
    </div>
);

// --- Main App ---

const HeroHome = () => {
  return (
    <>
        <Hero />
        <Marquee text="Digital Strategy • Growth • Consulting •" />
    </>
  );
};

export default HeroHome;
