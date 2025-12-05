import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, FolderOpen, Star, Users, MessageSquare, HelpCircle, ChevronRight, X, Check } from 'lucide-react';

const PAGES_DATA = [
  {
    id: "01",
    icon: <Wrench className="w-6 h-6" />,
    title: "Services Page",
    subtitle: "What You Do",
    description: "A clear list of every service you offer. Google uses this to match you with the right searches.",
    benefit: "Shows up when people search for specific jobs like 'hot water repair North Lakes'."
  },
  {
    id: "02",
    icon: <FolderOpen className="w-6 h-6" />,
    title: "Projects Page",
    subtitle: "Proof You Deliver",
    description: "Photos of your best work with short stories about each job. Real pictures from real jobs you have done.",
    benefit: "Builds trust and shows Google you are active in the local area."
  },
  {
    id: "03",
    icon: <Star className="w-6 h-6" />,
    title: "Reviews Page",
    subtitle: "What Customers Say",
    description: "A page that shows off your best Google reviews. We pull them in so they stay fresh.",
    benefit: "Gives Google more text to read and helps people trust you faster."
  },
  {
    id: "04",
    icon: <Users className="w-6 h-6" />,
    title: "About Page",
    subtitle: "Your Story",
    description: "Who you are, how long you have been in business, and why you started. People want to hire a real person.",
    benefit: "Connects with customers and tells Google you are a real local business."
  },
  {
    id: "05",
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Contact Page",
    subtitle: "Easy To Reach",
    description: "Your phone, email, and a simple form. Plus your service area map for North Lakes and North Brisbane.",
    benefit: "Makes it easy for leads to call you and confirms your location to Google."
  },
  {
    id: "06",
    icon: <HelpCircle className="w-6 h-6" />,
    title: "FAQ Page",
    subtitle: "Answer Questions Fast",
    description: "Common questions people ask before they hire a tradie. We write answers that sound like you.",
    benefit: "Catches long tail searches and builds trust before they even call."
  }
];

const PageCard = ({ page, index, isExpanded, onToggle }) => {
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
          {page.id}
        </span>
        
        {/* Icon */}
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
          isExpanded ? 'bg-[#E02020] text-white' : 'bg-[#F2F2F2] text-[#1a1a1a] group-hover:bg-[#E02020]/10 group-hover:text-[#E02020]'
        }`}>
          {page.icon}
        </div>
        
        {/* Title & Subtitle */}
        <div className="flex-1 min-w-0">
          <h3 className={`text-xl md:text-2xl font-syne font-bold uppercase transition-colors ${
            isExpanded ? 'text-[#E02020]' : 'text-[#1a1a1a]'
          }`}>
            {page.title}
          </h3>
          <p className="text-sm text-gray-500 font-medium mt-1">
            {page.subtitle}
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
                <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl">
                  {page.description}
                </p>
                
                {/* Benefit */}
                <div className="flex items-start gap-3 bg-green-50 border border-green-200 p-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-green-800 font-medium text-sm">
                    {page.benefit}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SolutionAdRealEstate = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

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
                The Solution
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
              The 6 Page <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% animate-gradient">
                Sitelink Engine
              </span>
            </motion.h2>

            {/* Body Copy - Money keywords go here */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              We do not just run your ads. We build the asset that makes them work. 
              This is what separates good{" "}
              <span className="font-bold text-brand-red">Google Ads Management for Tradies</span>{" "}
              from wasted money. Each page gives Google a new link to show in your ad.
            </motion.p>

            {/* Result Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#1a1a1a] text-white p-6"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl font-syne font-bold text-[#E02020]">2x</div>
                <div>
                  <p className="font-bold uppercase text-sm">Screen Space</p>
                  <p className="text-gray-400 text-sm">Same cost per click</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-black/10">
              {PAGES_DATA.map((page, index) => (
                <PageCard
                  key={page.id}
                  page={page}
                  index={index}
                  isExpanded={expandedIndex === index}
                  onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                />
              ))}
            </div>

            {/* Bottom Result */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 md:p-8 bg-gradient-to-r from-[#E02020] to-[#c41a1a] text-white"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-syne font-bold uppercase mb-2">
                    The Result?
                  </h3>
                  <p className="text-white/80">
                    Your ad pushes competitors below the fold. They see you first. They call you first.
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Check className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase">Built For Tradies</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SolutionAdRealEstate;

