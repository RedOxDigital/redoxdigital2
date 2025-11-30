import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Eye, MousePointer, DollarSign, Users } from 'lucide-react';

const MobileCard = ({ 
    step, 
    index, 
    total, 
    progress 
}: { 
    step: any, 
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
    
    // Grayscale for Image
    const grayscale = useTransform(progress, colorInputRange, ["100%", "100%", "0%", "100%"]);
    
    // Convert grayscale value to filter string - must be called at top level
    const grayscaleFilter = useTransform(grayscale, g => `grayscale(${g})`);
    
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
            className="absolute top-[15vh] left-0 right-0 mx-auto w-[90%] max-w-md h-[70vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-between border border-white/20 bg-gray-900"
        >
            {/* Background Image */}
            <motion.div 
                className="absolute inset-0 z-0"
                style={{ filter: grayscaleFilter }}
            >
                <img 
                    src={step.img} 
                    alt={step.title} 
                    loading="lazy"
                    width="800"
                    height="1200"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </motion.div>

             {/* Background Number */}
             <span className="absolute top-4 right-4 text-8xl font-syne font-bold text-white/10 select-none z-10">
                {step.id}
             </span>

             <div className="relative z-20 p-8 h-full flex flex-col justify-between">
                 <div>
                    <motion.div 
                        style={{ color: isLast ? "#E02020" : accentColor }}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6"
                    >
                        {step.icon}
                    </motion.div>
                    <motion.h4 
                        style={{ color: isLast ? "#E02020" : accentColor }}
                        className="text-3xl font-syne font-bold uppercase mb-2"
                    >
                        {step.title}
                    </motion.h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-6">{step.sub}</p>
                 </div>

                 <div>
                    <div className="w-full h-[1px] bg-white/20 mb-6" />
                    <p className="text-gray-200 text-2xl leading-relaxed font-medium">
                        {step.desc}
                    </p>
                 </div>
             </div>
        </motion.div>
    );
};

const MobileProcess = ({ steps }: { steps: any[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <div ref={containerRef} className="relative h-[400vh]">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center bg-[#F2F2F2]">
                {steps.map((step, i) => (
                    <MobileCard 
                        key={step.id} 
                        step={step} 
                        index={i} 
                        total={steps.length} 
                        progress={scrollYProgress} 
                    />
                ))}
            </div>
        </div>
    );
};

const ServicesHome = () => {
  const steps = [
    {
      id: "01",
      title: "VIEWS",
      sub: "I need more traffic.",
      icon: <Eye className="w-6 h-6" />,
      desc: "You have a great offer, but nobody knows you exist. As your digital marketing consultant, I help you get found. We stop chasing \"likes\" and use strategic media content to target locals in North Lakes who are ready to buy.",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "LEADS",
      sub: "I have traffic, but no leads.",
      icon: <MousePointer className="w-6 h-6" />,
      desc: "People visit your website, but they aren't calling. We fix this common small business problem. We build specific pages designed to capture contact details, turning curious visitors into real enquiries for your business.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "SALES",
      sub: "I have leads, but no sales.",
      icon: <DollarSign className="w-6 h-6" />,
      desc: "You are chasing leads who stop replying. We help you close the deal. We use strategic media content, like video and email, to follow up automatically. This warms up your prospects until they are ready to pay.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "ADVOCATES",
      sub: "I have sales, but no reviews.",
      icon: <Users className="w-6 h-6" />,
      desc: "You do great work, but your Google profile looks empty. We help your North Lakes business build trust. We automate the \"ask\" to get you the 5-star reviews that bring in your next customer.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <>
      {/* Desktop Grid Layout */}
      <section id="services" className="hidden md:block py-24 px-12 bg-[#F2F2F2] text-[#1a1a1a]">
        <div className="mb-20 max-w-4xl">
           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
           >
              <div className="w-12 h-[2px] bg-[#E02020]"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#E02020]">THE PROCESS</span>
           </motion.div>
           <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase leading-tight"
           >
              WE MOVE STRANGERS TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% animate-gradient">CUSTOMERS.</span>
           </motion.h3>
           <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-gray-600 mt-4 max-w-2xl"
           >
              We don't force you into a pre-set package. We diagnose exactly where your growth is stuck. Read the list below: where is your bottleneck? We prioritise the fix that drives immediate profit.
           </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative min-h-[500px] flex flex-col justify-between overflow-hidden rounded-2xl"
            >
               {/* Image Background */}
               <div className="absolute inset-0 z-0">
                   <img 
                       src={step.img} 
                       alt={step.title} 
                       loading="lazy"
                       width="800"
                       height="1200"
                       className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition-colors duration-500" />
               </div>

               <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                   {/* Background Number */}
                   <span className="absolute top-4 right-4 text-8xl font-syne font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500 select-none">
                      {step.id}
                   </span>

                   <div className="relative z-10">
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-8 group-hover:bg-[#E02020] transition-colors duration-300">
                          {step.icon}
                      </div>
                      <h4 className="text-2xl font-syne font-bold uppercase mb-2 text-white group-hover:text-[#E02020] transition-colors">{step.title}</h4>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">{step.sub}</p>
                   </div>

                   <div className="relative z-10">
                      <div className="w-full h-[1px] bg-white/20 mb-6 group-hover:bg-[#E02020]/50 transition-colors" />
                      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                          {step.desc}
                      </p>
                   </div>
               </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mobile Stack Layout */}
      <div id="services-mobile" className="md:hidden bg-[#F2F2F2] text-[#1a1a1a]">
        <div className="pt-24 px-6 pb-12">
           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
           >
              <div className="w-12 h-[2px] bg-[#E02020]"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#E02020]">THE PROCESS</span>
           </motion.div>
           <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-4xl font-syne font-bold uppercase leading-[0.9]"
           >
              WE MOVE STRANGERS TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% animate-gradient">CUSTOMERS.</span>
           </motion.h3>
           <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-gray-600 mt-4"
           >
              We don't force you into a pre-set package. We diagnose exactly where your growth is stuck. Read the list below: where is your bottleneck? We prioritise the fix that drives immediate profit.
           </motion.p>
        </div>
        
        <MobileProcess steps={steps} />
      </div>
    </>
  );
};

export default ServicesHome;

