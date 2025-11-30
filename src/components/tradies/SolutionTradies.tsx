import { motion } from 'framer-motion';
import { MapPin, FileText, Video, CheckCircle, ArrowRight } from 'lucide-react';

const FEATURES = [
  {
    id: "01",
    icon: <MapPin className="w-6 h-6" />,
    title: "Google Business Profile",
    subtitle: "Get Found on Maps",
    description: "We claim, verify, and fix your map listing so you appear at the top of local searches right away. When someone in North Lakes searches for your trade, your business shows up first in the Google 3-Pack.",
    benefits: [
      "Show up in Google Maps results",
      "Display your reviews and photos",
      "Get calls directly from the listing"
    ],
    img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "02",
    icon: <FileText className="w-6 h-6" />,
    title: "Location Pages",
    subtitle: "Capture Every Suburb",
    description: "We build specific pages for your key suburbs like Mango Hill, Griffin, and Rothwell. This way, you capture every nearby lead in the Moreton Bay Region who is searching for a tradie in their area.",
    benefits: [
      "Rank for suburb-specific searches",
      "Target homeowners near you",
      "Beat competitors who only target broad terms"
    ],
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "03",
    icon: <Video className="w-6 h-6" />,
    title: "Job Site Content",
    subtitle: "Show Your Best Work",
    description: "Text is not enough anymore. We come to your job sites to capture strategic media like photos and videos of your best builds. We use this content to answer customer questions before they even ask, proving you are the expert.",
    benefits: [
      "Real photos of your actual work",
      "Videos that build trust instantly",
      "Content that sells while you sleep"
    ],
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof FEATURES[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-white border border-black/10 overflow-hidden hover:border-[#E02020]/30 transition-colors duration-500"
    >
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={feature.img}
          alt={feature.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
        
        {/* Number Badge */}
        <span className="absolute top-4 right-4 text-6xl font-syne font-bold text-white/10 group-hover:text-white/20 transition-colors">
          {feature.id}
        </span>
        
        {/* Icon */}
        <div className="absolute bottom-4 left-4 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-[#E02020] transition-colors duration-300">
          {feature.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Subtitle */}
        <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] mb-2 block">
          {feature.subtitle}
        </span>
        
        {/* Title - NO money keywords */}
        <h3 className="text-2xl font-syne font-bold uppercase mb-4 group-hover:text-[#E02020] transition-colors">
          {feature.title}
        </h3>
        
        {/* Description - Money keywords OK here */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {feature.description}
        </p>

        {/* Benefits List */}
        <ul className="space-y-3">
          {feature.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#E02020] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 font-medium">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-[#E02020] to-[#E02020]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

const SolutionTradies = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-[#F2F2F2]">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
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
            className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase leading-[0.95] mb-6"
          >
            The Strategy That <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% animate-gradient">
              Actually Works
            </span>
          </motion.h2>

          {/* Body copy - Money keywords go here */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            We focus on the Google "3-Pack" and strategic media to build instant trust. This tradies SEO approach puts your business in front of local homeowners who are ready to hire. No tricks. No waiting months. Just results that fill your calendar with quality jobs.
          </motion.p>
        </div>

        {/* Desktop Feature Cards Grid - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        {/* Mobile Horizontal Scroll - iPhone optimized */}
        <div className="md:hidden -mx-6">
          <div 
            className="flex gap-4 overflow-x-auto pb-6 px-6 snap-x snap-mandatory scrollbar-hide" 
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[85vw] max-w-[340px] bg-white border border-black/10 overflow-hidden snap-center"
              >
                {/* Image Header */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  
                  {/* Number Badge */}
                  <span className="absolute top-4 right-4 text-5xl font-syne font-bold text-white/20">
                    {feature.id}
                  </span>
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-[#E02020] flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Subtitle */}
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] mb-2 block">
                    {feature.subtitle}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-xl font-syne font-bold uppercase mb-3 text-[#E02020]">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {feature.description}
                  </p>

                  {/* Benefits List - Simplified for mobile */}
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#E02020] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Accent Line */}
                <div className="h-1 bg-[#E02020]" />
              </motion.div>
            ))}
          </div>
          
          {/* Swipe Indicator */}
          <div className="flex items-center justify-center gap-2 mt-2 px-6">
            <div className="flex gap-1">
              <div className="w-6 h-1 bg-[#E02020] rounded-full"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 ml-2">Swipe</span>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 md:mt-20 bg-[#1a1a1a] p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-syne font-bold text-white uppercase mb-2">
                The Local Dominator Package
              </h3>
              <p className="text-gray-400 max-w-xl">
                All three strategies working together to get your trade business found by local customers in North Lakes and the Moreton Bay Region.
              </p>
            </div>
            <a 
              href="#faq" 
              className="flex items-center gap-3 px-6 py-4 bg-[#E02020] text-white hover:bg-white hover:text-[#1a1a1a] transition-colors duration-300 group whitespace-nowrap"
            >
              <span className="uppercase text-xs font-bold tracking-widest">
                See How It Works
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SolutionTradies;

