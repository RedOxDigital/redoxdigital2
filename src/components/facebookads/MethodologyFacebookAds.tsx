import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Target, BarChart2, Image, ChevronRight, X, Check } from 'lucide-react';

const SERVICES = [
  {
    id: "01",
    icon: <Rocket className="w-6 h-6" />,
    title: "Creative Velocity",
    subtitle: "We Build Ads, Not Just Run Them",
    description: "We don't just run ads; we build them. We make lots of Facebook ad creative, images, videos, and headlines, to keep your brand looking fresh.",
    before: {
      label: "Old Way",
      example: "Using the same image for 6 months",
      status: "bad"
    },
    after: {
      label: "Our Way",
      example: "Weekly fresh creative testing",
      status: "good"
    },
    benefit: "Stop ad fatigue before it kills your results."
  },
  {
    id: "02",
    icon: <Target className="w-6 h-6" />,
    title: "Broad Signal Targeting",
    subtitle: "AI Finds Your Customer",
    description: "We use smart AI tools to find your perfect customers based on what they actually want, not just their age or location.",
    before: {
      label: "Guessing",
      example: "Manually picking 'interests'",
      status: "bad"
    },
    after: {
      label: "Data-Led",
      example: "AI finds buyers based on behaviour",
      status: "good"
    },
    benefit: "Reach people ready to buy, not just browse."
  },
  {
    id: "03",
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Honest Data",
    subtitle: "One Source of Truth",
    description: "We believe in being open. We connect your ad data straight to Google Analytics 4. This gives you one honest place to see your profit.",
    before: {
      label: "Confusing",
      example: "Trusting Facebook's inflated numbers",
      status: "bad"
    },
    after: {
      label: "Clear",
      example: "Verifying sales in Google Analytics",
      status: "good"
    },
    benefit: "Know exactly how much money you make."
  },
];

const ServiceCard = ({ service, index, isExpanded, onToggle }: { 
  service: typeof SERVICES[0], 
  index: number,
  isExpanded: boolean,
  onToggle: () => void
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`border-b border-black/10 last:border-b-0 ${isExpanded ? 'bg-[#F2F2F2]' : 'bg-white hover:bg-[#F2F2F2]'} transition-colors duration-300`}
    >
      <button
        onClick={onToggle}
        className="w-full py-6 md:py-8 px-4 md:px-8 flex items-center gap-4 md:gap-8 text-left group"
      >
        {/* Number */}
        <span className="text-3xl md:text-4xl font-syne font-bold text-[#E02020]/20 group-hover:text-[#E02020]/40 transition-colors">
          {service.id}
        </span>
        
        {/* Icon */}
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
          isExpanded ? 'bg-[#E02020] text-white' : 'bg-[#F2F2F2] text-[#1a1a1a] group-hover:bg-[#E02020]/10 group-hover:text-[#E02020]'
        }`}>
          {service.icon}
        </div>
        
        {/* Title & Subtitle */}
        <div className="flex-1 min-w-0">
          <h3 className={`text-xl md:text-2xl font-syne font-bold uppercase transition-colors ${
            isExpanded ? 'text-[#E02020]' : 'text-[#1a1a1a]'
          }`}>
            {service.title}
          </h3>
          <p className="text-sm text-gray-500 font-medium mt-1">
            {service.subtitle}
          </p>
        </div>
        
        {/* Toggle Icon */}
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isExpanded 
            ? 'bg-[#1a1a1a] border-[#1a1a1a] rotate-45' 
            : 'border-black/20 group-hover:border-[#E02020] group-hover:text-[#E02020]'
        }`}>
          {isExpanded ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </div>
      </button>
      
      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-8 pb-8 md:pb-10">
              <div className="pl-0 md:pl-[120px]">
                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-8 max-w-2xl">
                  {service.description}
                </p>
                
                {/* Before / After Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Before */}
                  <div className="bg-white border border-red-200 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <X className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                        {service.before.label}
                      </span>
                    </div>
                    <p className="text-gray-600 font-mono text-sm bg-gray-50 px-3 py-2 border-l-2 border-red-300">
                      {service.before.example}
                    </p>
                  </div>
                  
                  {/* After */}
                  <div className="bg-white border border-green-200 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-green-600">
                        {service.after.label}
                      </span>
                    </div>
                    <p className="text-gray-800 font-mono text-sm bg-green-50 px-3 py-2 border-l-2 border-green-400 font-medium">
                      {service.after.example}
                    </p>
                  </div>
                </div>
                
                {/* Benefit */}
                <div className="flex items-center gap-3 text-[#E02020]">
                  <div className="w-2 h-2 bg-[#E02020] rounded-full" />
                  <span className="font-bold text-sm">{service.benefit}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const MethodologyFacebookAds = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-white border-t border-black/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Header - Sticky on Desktop */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start pr-8 lg:pr-12 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[2px] bg-[#E02020]" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E02020]">
                The Standard
              </span>
            </motion.div>

            {/* H2 - NO money keywords */}
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-syne font-bold uppercase leading-[0.95] mb-6 break-words"
            >
              Your Local <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% animate-gradient whitespace-nowrap">
                Performance
              </span>{" "}
              <span className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
                Agency
              </span>
            </motion.h2>

            {/* Body Copy - Money keywords go here */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              In 2025, Facebook picks winners based on who tells the best stories. As your partner, we act like a creative studio for your brand. We combine the power of a <span className="font-bold text-brand-red">Performance Creative Agency</span> with the local touch you expect.
            </motion.p>
          </div>

          {/* Right Content - Accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-black/10">
              {SERVICES.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  isExpanded={expandedIndex === index}
                  onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MethodologyFacebookAds;

