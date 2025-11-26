import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame, useMotionValueEvent } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import { Marquee } from './HeroHome';

const STATS_DATA = [
  { 
    label: "Ad Spend", 
    number: "~$0", 
    subtext: "Virtually zero reliance on paid ads while patient numbers increased." 
  },
  { 
    label: "Growth", 
    number: "Organic", 
    subtext: "Sustainable traffic flow driven by local search presence." 
  },
  { 
    label: "Dominance", 
    number: "Top 3", 
    subtext: "Consistently appearing in the 'Map Pack' for local radiology terms." 
  }
];

/**
 * SUB-COMPONENT: Result Card
 */
const ResultStat = ({ number, label, subtext, delay }: { number: string; label: string; subtext: string; delay: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border-t border-black/10 py-12 md:py-16 pr-8 transition-colors duration-500 hover:bg-neutral-50"
    >
      <div className="mb-4 text-sm font-bold tracking-[0.2em] text-[#E02020] uppercase">{label}</div>
      <h3 className="text-4xl md:text-5xl font-syne font-bold tracking-tighter text-black mb-4">
        {number}
      </h3>
      <p className="max-w-xs text-neutral-500 font-medium leading-relaxed group-hover:text-black transition-colors duration-300">
        {subtext}
      </p>
      <div className="absolute top-12 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#E02020]">
        <ArrowRight size={32} className="-rotate-45" />
      </div>
    </motion.div>
  );
};

const MobileResultSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);

  // Duplicate (3 sets)
  const allStats = [...STATS_DATA, ...STATS_DATA, ...STATS_DATA];

  useEffect(() => {
    if (sliderRef.current) {
      setContentWidth(sliderRef.current.scrollWidth / 3);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (!isDragging && contentWidth > 0) {
       const moveBy = -0.5 * (delta / 16); 
       x.set(x.get() + moveBy);
    }
  });

  useMotionValueEvent(x, "change", (latest) => {
    if (contentWidth > 0) {
        if (latest <= -contentWidth) {
            x.set(latest + contentWidth);
        } else if (latest > 0) {
            x.set(latest - contentWidth);
        }
    }
  });

  return (
    <div className="md:hidden w-full overflow-hidden pb-12 cursor-grab active:cursor-grabbing">
      <motion.div 
        ref={sliderRef}
        style={{ x }}
        drag="x" 
        dragConstraints={{ left: -10000, right: 10000 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        className="flex gap-4 pl-0"
      >
        {allStats.map((stat, index) => (
          <motion.div 
            key={index}
            className="w-[85vw] max-w-[400px] bg-neutral-50 p-8 border-t border-black/10 flex flex-col justify-between min-h-[300px] flex-shrink-0 whitespace-normal"
          >
              <div>
                <div className="mb-4 text-sm font-bold tracking-[0.2em] text-[#E02020] uppercase">{stat.label}</div>
                <h3 className="text-4xl font-syne font-bold tracking-tighter text-black mb-4">{stat.number}</h3>
                <p className="text-neutral-500 font-medium leading-relaxed">{stat.subtext}</p>
              </div>
              <div className="flex justify-end mt-8 text-[#E02020]">
                  <ArrowRight size={32} className="-rotate-45" />
              </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Progress Indicator */}
      <div className="mt-8 flex items-center gap-3">
         <div className="w-full h-[1px] bg-neutral-200 relative overflow-hidden">
            <motion.div 
                className="absolute top-0 left-0 h-full bg-[#E02020] w-1/3"
                animate={{ x: [0, 150, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
         </div>
         <span className="text-[10px] uppercase tracking-widest text-neutral-400 whitespace-nowrap">Swipe</span>
      </div>
    </div>
  );
};

const MobileClientScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start start", "end end"] 
  });
  
  // Strategy card slides in from right (100%) to center (0%)
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["110%", "0%"]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.9], [5, 0]);
  
  // Challenge card effects
  const scale = useTransform(scrollYProgress, [0.1, 0.9], [1, 0.9]);
  const brightness = useTransform(scrollYProgress, [0.1, 0.9], [1, 0.5]);
  const filter = useTransform(brightness, b => `brightness(${b})`);

  return (
    <div ref={ref} className="relative h-[140vh] md:hidden bg-neutral-50 border-t border-neutral-200"> 
       <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center px-6">
          
          {/* Card Container for perfect centering */}
          <div className="relative w-full max-w-md h-[60vh]">
            
            {/* Challenge Card (Base) */}
            <motion.div 
                style={{ scale, filter }} 
                className="absolute inset-0 bg-white border border-neutral-200 p-8 shadow-lg z-10 flex flex-col justify-between"
            >
                <div>
                    <span className="inline-block px-3 py-1 bg-neutral-200 text-xs font-bold tracking-widest uppercase mb-6">The Challenge</span>
                    <h3 className="text-3xl font-syne font-bold mb-6 leading-tight uppercase">
                        HIGH SPEND, <br/> EMPTY WAITING ROOM.
                    </h3>
                    <p className="text-base text-neutral-600 leading-relaxed">
                        Trying to break into the competitive Ultrasound and X-ray market, Modia Health had a website with zero traffic. As a Small Business Internet Marketing Consultant, I saw they were burning cash on Google Ads with <span className="font-bold text-black">no ROI</span> to show for it.
                    </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold text-neutral-400 uppercase tracking-widest line-through decoration-[#E02020] decoration-2">
                    Paid Acquisition
                </div>
                
                {/* Abstract BG Element */}
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <span className="text-8xl font-black">?</span>
                </div>
            </motion.div>

            {/* Strategy Card (Overlay - Comes from Right) */}
            <motion.div 
                style={{ x, rotate }} 
                className="absolute inset-0 bg-black text-white p-8 shadow-2xl z-20 flex flex-col justify-between"
            >
                <div className="absolute inset-0 opacity-20 pointer-events-none" 
                    style={{ 
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)', 
                    backgroundSize: '30px 30px' 
                    }}>
                </div>

                <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-[#E02020] text-white text-xs font-bold tracking-widest uppercase mb-6">THE STRATEGY</span>
                    <h3 className="text-3xl font-syne font-bold mb-6 leading-tight uppercase">
                        OWN THE MAP, <br/> OWN THE PATIENT.
                    </h3>
                    <p className="text-base text-neutral-400 leading-relaxed mb-6">
                        We stopped the bleeding on ads. We pivoted to hyper-local dominance via <span className="text-white italic">Google My Business</span>, specifically targeting the high-volume Aged Care sector.
                    </p>
                </div>

                <ul className="space-y-3 relative z-10 text-sm">
                    {['Google My Business Optimization', 'Aged Care Niche Targeting', 'Organic Traffic Focus'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold">
                        <div className="w-2 h-2 bg-[#E02020]"></div>
                        {item}
                    </li>
                    ))}
                </ul>
            </motion.div>
            
          </div>
       </div>
    </div>
  )
}

/**
 * MAIN COMPONENT: Modia Health Case Study
 */
const ClientHome = () => {
  return (
    <div className="antialiased text-black bg-white selection:bg-[#E02020] selection:text-white">
      
      {/* 1. SCROLLING MARQUEE */}
      <Marquee text="SMALL BUSINESS MARKETING CONSULTANT • DIGITAL STRATEGIST • NORTH LAKES" />

      {/* 2. HERO SECTION */}
      <section className="relative px-6 py-24 md:px-12 md:py-32 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Headline Area */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[2px] bg-[#E02020]"></div>
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-neutral-400">CASE STUDY (HEALTH)</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-6xl lg:text-7xl font-syne font-bold tracking-tighter leading-[0.9] mb-8 uppercase"
            >
              THE ORGANIC <br />
              <span className="text-[#E02020]">REMEDY</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-3xl font-light text-neutral-800 leading-tight max-w-3xl"
            >
              As a Digital Marketing Consultant, I helped Modia Health cut the ad spend and <span className="font-bold underline decoration-[#E02020] underline-offset-4 decoration-2">dominated local search.</span> They were bleeding budget—we stopped it.
            </motion.p>
          </div>

          {/* Visual/Image Area (Right Side) */}
          <div className="lg:col-span-4 relative h-full min-h-[400px]">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#E02020] mix-blend-multiply opacity-20 z-10"></div>
              {/* Updated Image: Modern Medical Tech / Abstract X-ray vibe */}
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop&grayscale" 
                alt="Medical Technology" 
                className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute bottom-6 left-6 z-20 bg-white px-4 py-2">
                <p className="text-xs font-bold tracking-widest uppercase">Radiology • Ultrasound</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CHALLENGE vs STRATEGY (Interactive Grid) */}
      <section className="bg-neutral-50 border-t border-neutral-200 hidden md:block">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left: The Challenge */}
            <motion.div 
              className="p-12 md:p-24 border-b md:border-b-0 md:border-r border-neutral-200 relative overflow-hidden group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-9xl font-black">?</span>
               </div>

              <span className="inline-block px-3 py-1 bg-neutral-200 text-xs font-bold tracking-widest uppercase mb-8">The Challenge</span>
              
              <h3 className="text-3xl md:text-4xl font-syne font-bold mb-8 leading-tight uppercase">
                HIGH SPEND, <br/> EMPTY WAITING ROOM.
              </h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Trying to break into the competitive Ultrasound and X-ray market, Modia Health had a website with zero traffic. As a Small Business Internet Marketing Consultant, I saw they were burning cash on Google Ads with 
                <span className="font-bold text-black mx-1">no ROI</span> 
                to show for it.
              </p>

              <div className="flex items-center gap-4 text-sm font-bold text-neutral-400 uppercase tracking-widest line-through decoration-[#E02020] decoration-2">
                Paid Acquisition
              </div>
            </motion.div>

            {/* Right: The Strategy */}
            <motion.div 
              className="p-12 md:p-24 bg-black text-white relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute inset-0 opacity-20" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)', 
                  backgroundSize: '40px 40px' 
                }}>
              </div>

              <span className="inline-block px-3 py-1 bg-[#E02020] text-white text-xs font-bold tracking-widest uppercase mb-8">THE STRATEGY</span>

              <h3 className="text-3xl md:text-4xl font-syne font-bold mb-8 leading-tight relative z-10 uppercase">
                OWN THE MAP, <br/> OWN THE PATIENT.
              </h3>

              <p className="text-lg text-neutral-400 leading-relaxed mb-8 relative z-10">
                We stopped the bleeding on ads. We pivoted to hyper-local dominance via 
                <span className="text-white italic mx-1">Google My Business</span>, 
                specifically targeting the high-volume Aged Care sector.
              </p>

              <ul className="space-y-4 relative z-10">
                {['Google My Business Optimization', 'Aged Care Niche Targeting', 'Organic Traffic Focus'].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-3 font-bold"
                  >
                    <div className="w-2 h-2 bg-[#E02020]"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <MobileClientScroll />

      {/* 4. RESULTS SECTION (Big Typography) */}
      <section className="px-6 py-24 md:py-40 max-w-[1600px] mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-4"
          >
            The Outcome
          </motion.h2>
          <div className="w-full h-[1px] bg-black"></div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-12 md:gap-8">
          {STATS_DATA.map((stat, i) => (
            <ResultStat 
              key={i}
              delay={0.1 * (i + 1)}
              {...stat}
            />
          ))}
        </div>

        {/* Mobile Slider */}
        <MobileResultSlider />
      </section>

      {/* 5. QUOTE / TESTIMONIAL (Editorial Style) */}
      <section className="bg-neutral-900 text-white py-32 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop&grayscale" className="w-full h-full object-cover mix-blend-overlay" alt="texture"/>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
          <motion.div 
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             className="w-20 h-20 bg-[#E02020] rounded-full flex items-center justify-center mx-auto mb-12"
          >
            <Quote size={32} className="text-white fill-current" />
          </motion.div>

          <motion.blockquote 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-12"
          >
            "No vague strategies or confusing jargon. He came up with a clear plan that made sense for us, then helped us work through it one step at a time. It felt like we were finally doing things that had a purpose, not just guessing."
          </motion.blockquote>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-2"
          >
            <div className="w-12 h-[1px] bg-white/30 mb-4"></div>
            <cite className="not-italic font-bold tracking-[0.2em] uppercase text-sm">Modia Health</cite>
            <span className="text-neutral-400 text-sm">Diagnostic Imaging Specialists</span>
          </motion.div>
        </div>
      </section>

      {/* 6. CALL TO ACTION (Swipe/Hover Interaction) */}
      <section className="py-24 bg-white border-t border-black">
        <div className="container mx-auto px-6 text-center">
             <motion.div
               whileHover={{ scale: 0.98 }}
               className="inline-block relative cursor-pointer group"
             >
                <h2 className="text-4xl md:text-5xl font-syne font-bold uppercase tracking-tighter group-hover:text-[#E02020] transition-all duration-500">
                  CUT THE <br/> AD WASTE?
                </h2>
                
                <motion.div 
                  className="absolute -right-12 bottom-4 bg-[#E02020] text-white rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ rotate: -45 }}
                  whileHover={{ rotate: 0 }}
                >
                  <ArrowRight size={24} />
                </motion.div>
             </motion.div>

             <p className="mt-8 text-neutral-500 font-medium">
               SCROLL TO EXPLORE MORE <br/> 
               <span className="text-[#E02020]">↓</span>
             </p>
        </div>
      </section>

    </div>
  );
}

export default ClientHome;
