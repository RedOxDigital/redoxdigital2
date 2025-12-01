import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useMotionValueEvent } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const STEPS_DATA = [
  {
    number: "01",
    title: "The Strategic Audit",
    description: "We sit down (in North Lakes or via Zoom) and look at your past numbers. We find exactly where you are losing money and where your biggest chances for growth are hiding."
  },
  {
    number: "02",
    title: "Creative Production",
    description: "The Facebook algorithm now favours fresh, engaging content over complex settings. As your Facebook Ad Creative Agency, we write, design, and edit the ads for you. We handle the Strategic Media work in-house."
  },
  {
    number: "03",
    title: "Launch & Improve",
    description: "We launch your ads using our modern system. We check them every day. We change bids and swap out pictures to make sure you keep getting results."
  },
  {
    number: "04",
    title: "Clear Reporting",
    description: "You get a live dashboard and monthly video updates. You will never have to ask, \"Is this working?\" You will see the money clearly."
  }
];

const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => {
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

const ProcessFacebookAds = () => {
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
                A Simple Path <br/> to Growth
              </h2>
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

export default ProcessFacebookAds;

