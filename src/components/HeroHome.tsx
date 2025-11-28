import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useAnimationFrame, useMotionValueEvent, useInView } from 'framer-motion';
import { ArrowRight, Stethoscope, HardHat, Briefcase, Sparkles, ChevronUp } from 'lucide-react';
import { ContactButton } from './ContactFormModal';

// --- Assets & Data ---
const IMAGES = {
  health: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1200&auto=format&fit=crop", // Medical clinic/healthcare
  trades: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop", // Construction/Trades
  professional: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop", // Professional services/Legal
  cta: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" // Team collaboration/Strategy
};

// Individual card component with viewport detection
interface AccordionItem {
  title: string;
  content: string;
}

interface CardData {
  title: string;
  subtitle: string;
  description: string;
  img: string;
  icon: React.ReactNode;
  isCTA?: boolean;
  accordionTitle: string;
  accordionItems: AccordionItem[];
}

const CARDS_DATA: CardData[] = [
  { 
    title: "HEALTH & MEDICAL", 
    subtitle: "Get New Patients.", 
    description: "Trust is the most important thing for doctors and clinics. We help your medical small business become the top choice in North Lakes. We make sure local families find you first when they need help.",
    img: IMAGES.health, 
    icon: <Stethoscope />,
    accordionTitle: "What We Do",
    accordionItems: [
      { title: "Google Maps", content: "We fix your listing so you show up at the top of local searches." },
      { title: "Helpful Videos", content: "We create strategic media content that answers common health questions." },
      { title: "Trust", content: "We help you get more 5-star reviews from happy patients." }
    ]
  },
  { 
    title: "TRADES & CONSTRUCTION", 
    subtitle: "Qualify Better Leads.", 
    description: "Good builders want great projects, not just busy work. We use targeted digital marketing to find the best jobs for your trade business. We help you stop wasting time on people who are just \"kicking tyres\" and find clients ready to build.",
    img: IMAGES.trades, 
    icon: <HardHat />,
    accordionTitle: "What We Do",
    accordionItems: [
      { title: "Show Your Work", content: "We take photos and videos of your best builds to prove you are the expert." },
      { title: "Filter Customers", content: "We set up your website to ask the right questions before the phone rings." },
      { title: "Local Focus", content: "We target homeowners in specific suburbs near you." }
    ]
  },
  { 
    title: "PROFESSIONAL SERVICES", 
    subtitle: "Find High-Value Clients.", 
    description: "Lawyers, accountants, and brokers sell their knowledge. As your digital marketing consultant, we help you show your value online. We help you find clients who respect your time and are happy to pay for quality advice.",
    img: IMAGES.professional, 
    icon: <Briefcase />,
    accordionTitle: "What We Do",
    accordionItems: [
      { title: "Show You Are the Expert", content: "We produce strategic media content where you explain topics clearly to build trust." },
      { title: "Professional Profiles", content: "We fix your social media so you look sharp and ready for business." },
      { title: "Free Guides", content: "We create helpful files for people to download, which turns them into new clients." }
    ]
  },
  { 
    title: "YOUR INDUSTRY", 
    subtitle: "Is This You?", 
    description: "Don't see your job listed here? We work with every type of North Lakes small business. Whether you run a shop, a cafe, or a school, we can build a custom plan to help you grow.",
    img: IMAGES.cta, 
    icon: <Sparkles />,
    isCTA: true,
    accordionTitle: "What We Do",
    accordionItems: [
      { title: "The Check-Up", content: "We look at what you are doing now to see what works and what doesn't." },
      { title: "The Plan", content: "We don't guess. We build a roadmap specifically for your goals." },
      { title: "The Action", content: "We combine digital marketing and strategic media content to get you results." }
    ]
  },
];

const SliderCard = ({ 
  card, 
  index, 
  isHovered,
  isMobile,
  onHoverStart,
  onHoverEnd
}: { 
  card: CardData; 
  index: number; 
  isHovered: boolean;
  isMobile: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const isInView = useInView(cardRef, { 
    amount: 0.8, // Card must be 80% visible to trigger
    margin: "-10% 0px -10% 0px"
  });

  // Show description on mobile when in view, or on desktop when hovered, or if it's a CTA card
  // Optimized for mobile: Hide description when expanded to prevent cutoff
  const showDescription = !isExpanded && (isInView || isHovered || card.isCTA);

  return (
    <motion.div 
      ref={cardRef}
      layout
      className="min-w-[75vw] md:min-w-[40vw] relative group overflow-hidden bg-gray-200 flex-shrink-0 cursor-pointer flex flex-col justify-end"
      initial={{ height: isMobile ? "65vh" : "60vh" }}
      animate={{ height: isExpanded ? "auto" : (isMobile ? "65vh" : "60vh") }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onMouseEnter={onHoverStart}
      onMouseLeave={() => {
        onHoverEnd();
        setIsExpanded(false);
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
       <img 
        src={card.img} 
        alt={`${card.title} - Small Business Digital Marketing Services in North Lakes`}
        loading={index < 2 ? "eager" : "lazy"}
        fetchPriority={index < 2 ? "high" : "auto"}
        width="1200"
        height="1600"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 z-0 ${
          isInView ? 'grayscale-0 scale-105' : 'grayscale'
        } md:grayscale md:group-hover:grayscale-0 md:scale-100`}
       />
       <div className={`absolute inset-0 transition-colors duration-300 z-0 ${
         isInView ? 'bg-black/40' : 'bg-black/20'
       } md:bg-black/20 md:group-hover:bg-black/40`} />
       
       {/* Card Content */}
       <div className="w-full relative z-10">
          <div 
            className="p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          >
            <div className={`flex justify-between items-end border-t ${card.isCTA ? 'border-brand-red' : 'border-white/50'} pt-6`}>
                <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                       <span className="text-brand-red">{card.icon}</span> {card.subtitle}
                    </p>
                    <h3 className="text-3xl md:text-5xl font-syne font-bold text-white uppercase mb-4">{card.title}</h3>
                    
                    <AnimatePresence>
                      {showDescription && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm text-white/90 leading-relaxed max-w-md mb-4 whitespace-normal break-words">
                            {card.description}
                          </p>
                          
                          {card.isCTA && (
                             <div className="mb-4">
                                <ContactButton variant="primary">Apply Now</ContactButton>
                             </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                </div>
                <div
                  className={`w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transform transition-all duration-300 flex-shrink-0 ml-4 ${
                    (isInView || isExpanded) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0`}
                >
                    <motion.div
                      animate={{ rotate: isExpanded ? -180 : (showDescription ? 90 : 0) }}
                      transition={{ duration: 0.3 }}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </motion.div>
                </div>
            </div>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="border-t border-white/20 mt-6 pt-6"
                >
                  <h4 className="text-white font-syne font-bold uppercase text-xl mb-4">{card.accordionTitle}</h4>
                  <div className="space-y-4">
                    {card.accordionItems.map((item, idx) => (
                      <div key={idx} className="text-white/90">
                        <span className="font-bold text-brand-red block text-sm uppercase tracking-wide mb-1">{item.title}</span>
                        <p className="text-sm leading-relaxed whitespace-normal break-words">{item.content}</p>
                      </div>
                    ))}
                  </div>
                  {card.isCTA && (
                     <div className="mt-6">
                        <ContactButton variant="primary">Apply Now</ContactButton>
                     </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
       </div>
    </motion.div>
  );
};

// New Mobile Card Component
const MobileCard = ({ card }: { card: CardData }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div 
            className="min-w-[85vw] snap-center relative rounded-2xl overflow-hidden h-[65vh] bg-gray-900 border border-white/10 flex-shrink-0"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <img 
                src={card.img} 
                alt={`${card.title} - Small Business Digital Marketing Services in North Lakes`}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className={`border-t ${card.isCTA ? 'border-brand-red' : 'border-white/50'} pt-4`}>
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                            <span className="text-brand-red">{card.icon}</span> {card.subtitle}
                        </p>
                        <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                             <ChevronUp className="w-4 h-4 text-white" />
                        </div>
                    </div>
                    
                    <h3 className="text-2xl font-syne font-bold text-white uppercase mb-3 leading-tight">
                        {card.title}
                    </h3>

                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[60vh] overflow-y-auto' : 'max-h-20'}`}>
                        <p className="text-sm text-gray-200 leading-relaxed mb-4">
                            {card.description}
                        </p>

                        <div className={`space-y-4 pt-4 border-t border-white/10 ${isExpanded ? 'opacity-100' : 'opacity-0 hidden'}`}>
                             {card.accordionItems.map((item, idx) => (
                                <div key={idx} className="text-white/90">
                                    <span className="font-bold text-brand-red block text-xs uppercase tracking-wide mb-1">{item.title}</span>
                                    <p className="text-sm leading-relaxed text-gray-300">{item.content}</p>
                                </div>
                             ))}
                             {card.isCTA && (
                                <div className="pt-4">
                                    <ContactButton variant="primary">Apply Now</ContactButton>
                                </div>
                             )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MobileHeroSlider = () => {
    return (
        <div className="w-full pb-8">
             <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar touch-pan-x">
                {CARDS_DATA.map((card, index) => (
                    <MobileCard key={index} card={card} />
                ))}
            </div>
            <div className="flex justify-center gap-2 mt-2">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 animate-pulse">Swipe to explore</span>
            </div>
        </div>
    );
};

const DraggableSlider = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const x = useMotionValue(0);

  // Duplicate cards for seamless infinite scroll (3 sets)
  const allCards = [...CARDS_DATA, ...CARDS_DATA, ...CARDS_DATA];

  useEffect(() => {
    if (containerRef.current) {
      // Total width is scrollWidth. Single set is scrollWidth / 3
      setContentWidth(containerRef.current.scrollWidth / 3);
    }
  }, []);

  // Auto-scroll logic - stops when dragging or hovering
  useAnimationFrame((_, delta) => {
    if (!isDragging && !isPaused && contentWidth > 0) {
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

  const handleCardHoverStart = (index: number) => {
    setHoveredCard(index);
    setIsPaused(true);
  };

  const handleCardHoverEnd = () => {
    setHoveredCard(null);
    setIsPaused(false);
  };

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
            isHovered={hoveredCard === index}
            isMobile={false}
            onHoverStart={() => handleCardHoverStart(index)}
            onHoverEnd={handleCardHoverEnd}
          />
        ))}
      </motion.div>
      <div className="mt-4 flex items-center gap-2 px-6">
         <div className="w-full h-[1px] bg-gray-300 relative overflow-hidden">
            <motion.div 
                className="absolute top-0 left-0 h-full bg-brand-red w-1/4"
                animate={{ x: isPaused ? undefined : [0, 200, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
         </div>
         <span className="text-[10px] uppercase tracking-widest text-gray-400 whitespace-nowrap">Drag to explore</span>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section 
      className="relative pt-32 pb-12 w-full min-h-screen flex flex-col justify-between"
      aria-label="Hero section - Small Business Digital Marketing Consultant North Lakes"
    >
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
                <span itemProp="name">Digital Marketing</span> <br/>
                <span className="pl-0 md:pl-12 lg:pl-16 block text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-brand-red bg-300% animate-gradient">
                    Consultant
                </span>
                <span className="text-xl md:text-3xl lg:text-4xl block font-sans font-light normal-case tracking-normal mt-4 text-gray-500 max-w-xl ml-auto text-right" itemProp="description">
                    & Strategic Media Content
                </span>
            </motion.h1>
        </div>
        <div className="md:col-span-3 flex flex-col justify-end items-center md:items-end">
            <div className="flex flex-col gap-4 items-center md:items-end w-full md:w-auto">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-label="Available status" />
                    <span className="text-xs uppercase tracking-widest font-bold">Accepting New Clients</span>
                </div>
                <p className="text-sm text-gray-600 max-w-xs md:max-w-[200px] text-center md:text-right">
                Personalised digital solutions and content creation for North Lakes business owners
                </p>
                <ContactButton variant="dark">Apply Now</ContactButton>
            </div>
        </div>
      </div>

      {/* Desktop Slider */}
      <div className="hidden md:block" aria-label="Services showcase">
         <DraggableSlider />
      </div>
      
      {/* Mobile Slider */}
      <div className="md:hidden" aria-label="Services showcase">
        <MobileHeroSlider />
      </div>
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
