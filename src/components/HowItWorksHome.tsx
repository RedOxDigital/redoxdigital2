import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useMotionValueEvent } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const STEPS_DATA = [
  {
    number: "01",
    title: "The Strategy Session",
    timeframe: "Day 1",
    description: "You book a time. As your Marketing Strategy Consultant, I meet with you. We don't sell; we audit. I look at your current marketing, find the leaks, and see if we're a good fit."
  },
  {
    number: "02",
    title: "The Asset Build",
    timeframe: "Days 2-14",
    description: "As your Digital Marketing Consultant, I get to work. I hire the team and we build your 'Profit Ecosystem'—the ads, the pages, and the follow-up emails. You don't lift a finger."
  },
  {
    number: "03",
    title: "The Growth Phase",
    timeframe: "Day 15+",
    description: "We flip the switch. Your system goes live. We watch the data daily, tweaking and optimizing to ensure your profit grows month over month."
  }
];

const StepCard = ({ number, title, timeframe, description }: { number: string; title: string; timeframe: string; description: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group relative flex flex-col md:flex-row md:items-start gap-8 md:gap-12 border-t border-black/10 py-16 md:py-20 hover:bg-neutral-50 transition-colors duration-500"
    >
        {/* Number */}
        <div className="w-24 md:w-32 shrink-0">
            <span className="text-5xl md:text-6xl font-syne font-bold text-transparent bg-clip-text bg-gradient-to-b from-black/20 to-black/5 group-hover:from-[#E02020]/20 group-hover:to-[#E02020]/5 transition-all duration-500">
                {number}
            </span>
        </div>

        {/* Content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
                <span className="inline-block px-3 py-1 bg-[#E02020] text-white text-xs font-bold tracking-widest uppercase mb-4 rounded-full">
                    {timeframe}
                </span>
                <h3 className="text-2xl md:text-3xl font-syne font-bold uppercase leading-tight group-hover:text-[#E02020] transition-colors duration-300">
                    {title}
                </h3>
            </div>
            
            <div className="md:col-span-6 md:col-start-7">
                 <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed group-hover:text-black transition-colors duration-300">
                    {description}
                 </p>
            </div>
        </div>

        {/* Arrow Interaction */}
        <div className="absolute top-12 right-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-[#E02020] hidden md:block">
            <ArrowRight size={32} className="-rotate-45" />
        </div>
    </motion.div>
  );
};

const MobileStepSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);

  // Duplicate for infinite loop (3 sets)
  const allSteps = [...STEPS_DATA, ...STEPS_DATA, ...STEPS_DATA];

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
        {allSteps.map((step, index) => (
          <motion.div 
            key={index}
            className="w-[85vw] max-w-[400px] bg-neutral-50 p-8 border-t border-black/10 flex flex-col justify-between min-h-[400px] relative flex-shrink-0 whitespace-normal"
          >
              <div>
                <div className="mb-6">
                   <span className="text-5xl font-syne font-bold text-black/10">
                        {step.number}
                    </span>
                </div>
                <span className="inline-block px-3 py-1 bg-[#E02020] text-white text-xs font-bold tracking-widest uppercase mb-4 rounded-full">
                    {step.timeframe}
                </span>
                <h3 className="text-4xl font-syne font-bold uppercase leading-tight text-black mb-6">
                    {step.title}
                </h3>
                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                    {step.description}
                </p>
              </div>
              
              <div className="absolute top-8 right-8 text-[#E02020]/20">
                  <ArrowRight size={32} className="-rotate-45" />
              </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Progress Indicator */}
      <div className="mt-8 flex items-center gap-3 px-2">
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

const HowItWorksHome = () => {
  return (
      <section className="bg-white text-black py-24 md:py-32 border-t border-black">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <div className="mb-24 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-[#E02020]"></div>
                <span className="text-[#E02020] text-sm font-bold tracking-widest uppercase">The Process</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-syne font-bold tracking-tight uppercase leading-[0.95]">
                WE MOVE<br/>
                STRANGERS TO<br/>
                CUSTOMERS.
              </h2>
              <p className="text-sm text-gray-600 mt-4">
                As a Small Business Internet Marketing Consultant, I specialize in turning your digital presence into a profit engine.
              </p>
            </motion.div>
          </div>

          <div className="hidden md:flex flex-col">
            {STEPS_DATA.map((step, i) => (
                <StepCard 
                    key={i}
                    {...step}
                />
            ))}
          </div>

          <MobileStepSlider />

        </div>
      </section>
  );
};

export default HowItWorksHome;
