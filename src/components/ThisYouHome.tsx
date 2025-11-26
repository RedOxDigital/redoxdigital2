import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Plus } from 'lucide-react';

const QUALIFIERS_DATA = [
  {
    id: "01",
    title: "Ambitious",
    desc: "You don't just want to survive; you want to dominate your local market. You are ready to grow your revenue, not just keep the lights on."
  },
  {
    id: "02",
    title: "No Guesswork",
    desc: "You are tired of throwing money at ads without knowing if they work. You want clear data and a system that proves its worth."
  },
  {
    id: "03",
    title: "Ownership",
    desc: "You want to own your leads and your brand. You don't want to rent customers from a directory or rely on luck."
  }
];

const MobileCard = ({ 
    qualifier, 
    index, 
    total, 
    progress 
}: { 
    qualifier: any, 
    index: number, 
    total: number, 
    progress: MotionValue<number> 
}) => {
    // Calculate ranges for this card
    const rangeStep = 1 / (total - 1);
    const start = (index - 1) * rangeStep;
    const end = index * rangeStep;
    
    const nextStart = index * rangeStep;
    const nextEnd = (index + 1) * rangeStep;
    
    const isFirst = index === 0;
    const isLast = index === total - 1;
    
    // Entrance animation (Y position)
    const y = useTransform(
        progress,
        [start, end],
        ['110vh', '0vh']
    );

    // Exit/Background animation (Scale & Brightness)
    const scale = useTransform(
        progress,
        [nextStart, nextEnd],
        [1, 0.9]
    );

    const brightness = useTransform(
        progress,
        [nextStart, nextEnd],
        [1, 0.5]
    );
    
    // Convert brightness value to filter string - must be called at top level
    const brightnessFilter = useTransform(brightness, b => `brightness(${b})`);

    // Color Animations (Highlight -> Dimmed)
    const highlightTrigger = end - (rangeStep * 0.3);
    const colorInputRange = [start, highlightTrigger, end, nextEnd];
    
    // Text Colors
    const accentColor = useTransform(progress, colorInputRange, ["#ffffff", "#ffffff", "#E02020", "#ffffff"]); 
    
    return (
        <motion.div
            style={{
                y: isFirst ? 0 : y,
                scale: isLast ? 1 : scale,
                filter: isLast ? 'none' : brightnessFilter,
                zIndex: index,
                transformOrigin: "top center"
            }}
            className="absolute top-[15vh] left-0 right-0 mx-auto w-[90%] max-w-md h-[60vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-between border border-white/10 bg-[#1a1a1a]"
        >
             {/* Background Number */}
             <span className="absolute top-0 left-4 text-[8rem] font-syne font-bold text-white/5 select-none z-10 pointer-events-none">
                {qualifier.id}
             </span>

             <div className="relative z-20 p-8 h-full flex flex-col justify-between">
                 <div className="flex justify-end">
                    <motion.div 
                        style={{ 
                            borderColor: isLast ? "#E02020" : accentColor, 
                            backgroundColor: isLast ? "#E02020" : "transparent" 
                        }}
                        className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300"
                    >
                        <Plus className="w-5 h-5 text-white" />
                    </motion.div>
                 </div>

                 <div>
                    <motion.h4 
                        style={{ color: isLast ? "#E02020" : accentColor }}
                        className="text-4xl font-syne font-bold uppercase mb-4"
                    >
                        {qualifier.title}
                    </motion.h4>
                    <div className="w-full h-[1px] bg-white/10 mb-6" />
                    <p className="text-gray-300 text-lg leading-relaxed font-medium">
                        {qualifier.desc}
                    </p>
                 </div>
             </div>
        </motion.div>
    );
};

const MobileQualifiers = ({ qualifiers }: { qualifiers: any[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <div ref={containerRef} className="relative h-[300vh] md:hidden">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center bg-white">
                {qualifiers.map((q, i) => (
                    <MobileCard 
                        key={q.id} 
                        qualifier={q} 
                        index={i} 
                        total={qualifiers.length} 
                        progress={scrollYProgress} 
                    />
                ))}
            </div>
        </div>
    );
};

const ThisYouHome = () => {
  return (
    <section className="py-12 md:py-32 border-t border-black/10 bg-white text-black">
      <div className="px-6 md:px-12 flex flex-col md:flex-row gap-8 md:gap-12 mb-16 md:mb-20">
         <h3 className="text-6xl md:text-5xl lg:text-6xl font-syne font-bold uppercase leading-[1] md:leading-[0.8] tracking-tight pb-2 md:pb-0">
           IS THIS <br/> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% animate-gradient inline-block">YOU?</span>
         </h3>
         <div className="flex items-end pb-4">
            <p className="max-w-md text-gray-500 text-xs uppercase tracking-widest border-l-2 border-[#E02020] pl-4">
                The qualification criteria. <br/> As a Small Business Internet Marketing Consultant, I only partner with businesses ready for velocity.
            </p>
         </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 border-t border-black px-6 md:px-0">
        {QUALIFIERS_DATA.map((q, i) => (
           <div key={i} className="group border-b md:border-b-0 md:border-r border-black p-8 md:p-12 relative min-h-[350px] md:min-h-[450px] flex flex-col justify-between hover:bg-[#1a1a1a] hover:text-[#f2f2f2] transition-colors duration-500">
              {/* Giant Background Number */}
              <span className="text-[8rem] md:text-[12rem] font-syne font-bold opacity-[0.03] group-hover:opacity-[0.15] transition-opacity duration-500 leading-none absolute top-0 left-0 -translate-x-4 -translate-y-8 select-none pointer-events-none">
                {q.id}
              </span>
              
              <div className="relative z-10 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-[#E02020] group-hover:border-[#E02020] transition-all duration-300">
                     <Plus className={`w-5 h-5 transition-transform duration-500 group-hover:rotate-45`} />
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h4 className="text-2xl md:text-3xl font-syne font-bold uppercase mb-4 md:mb-6 group-hover:translate-x-2 group-hover:text-[#E02020] transition-all duration-300">{q.title}</h4>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100 hidden md:block">
                    <p className="text-sm md:text-base leading-relaxed text-gray-400 group-hover:text-gray-300">
                    {q.desc}
                    </p>
                </div>
                {/* Visible Mobile Description */}
                <p className="md:hidden text-sm leading-relaxed text-gray-600 group-hover:text-gray-300 mt-2">
                    {q.desc}
                </p>
              </div>
           </div>
        ))}
      </div>

      {/* Mobile Stacked Cards */}
      <MobileQualifiers qualifiers={QUALIFIERS_DATA} />
    </section>
  )
}

export default ThisYouHome;
