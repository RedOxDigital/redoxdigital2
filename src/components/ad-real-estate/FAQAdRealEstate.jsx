import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, Globe, MapPin, Clock, DollarSign, Wrench } from 'lucide-react';
import { ContactLink } from '../ContactFormModal';

const FAQ_DATA = [
  {
    icon: <Globe className="w-5 h-5" />,
    question: "Do I need to scrap my old website?",
    answer: "No. Your old website stays where it is. We build a new 6 page microsite that runs alongside it. This new site is built just for your Google Ads. Think of it as a high speed engine that powers your ads while your main site does its own thing."
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    question: "Why do you only work in North Lakes?",
    answer: "Because we actually show up. We drive to your job site and take the photos ourselves. We are not sitting in a call centre overseas. We are down the road. That local touch is what makes your ads feel real to Google and to your customers."
  },
  {
    icon: <Clock className="w-5 h-5" />,
    question: "How long until I see results?",
    answer: "Most tradies see their ad size double within 2 weeks of launch. The pages go live fast because we handle everything. You do not need to send us files or write anything. We come to you, we build it, we launch it."
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    question: "Is this worth it if I already run Google Ads?",
    answer: "Yes. If you are already spending money on ads, this makes that money work harder. You pay the same cost per click but get double the screen space. Your competitors get pushed down. More people see you first and call you first."
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    question: "What trades do you work with?",
    answer: "We work with plumbers, electricians, roofers, builders, and other trade businesses in North Lakes and North Brisbane. If you do jobs for homes or businesses and want more local leads, we can help."
  }
];

const FAQItem = ({ item, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-black/10 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full py-6 md:py-8 flex items-start justify-between gap-4 md:gap-6 text-left group hover:bg-neutral-50 transition-colors duration-300 px-2 md:px-6"
      >
        <div className="flex items-start gap-4 md:gap-6">
          {/* Icon */}
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
            isOpen 
              ? 'bg-[#E02020] text-white' 
              : 'bg-[#F2F2F2] text-[#1a1a1a] group-hover:bg-[#E02020]/10 group-hover:text-[#E02020]'
          }`}>
            {item.icon}
          </div>
          
          {/* Question */}
          <div className="pt-2 md:pt-3">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#E02020] mb-1 block">
              {`Question ${String(index + 1).padStart(2, '0')}`}
            </span>
            <h3 className={`text-lg md:text-2xl font-syne font-bold leading-tight transition-colors duration-300 ${
              isOpen ? 'text-[#E02020]' : 'text-black group-hover:text-neutral-700'
            }`}>
              {item.question}
            </h3>
          </div>
        </div>
        
        {/* Toggle Button */}
        <div className={`shrink-0 mt-2 md:mt-3 w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-[#E02020] border-[#E02020] rotate-180' 
            : 'bg-transparent border-black/10 group-hover:border-black'
        }`}>
          {isOpen ? (
            <Minus className="w-4 h-4 md:w-5 md:h-5 text-white" />
          ) : (
            <Plus className="w-4 h-4 md:w-5 md:h-5 text-black" />
          )}
        </div>
      </button>

      {/* Answer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 md:pb-10 pl-16 md:pl-24 pr-4 md:pr-20">
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-3xl">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQAdRealEstate = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-32 bg-white border-t border-black/10 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-neutral-50 to-transparent -z-10 opacity-50 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column - Header & CTA */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-8 md:w-12 h-[2px] bg-[#E02020]" />
                <span className="text-[#E02020] text-xs md:text-sm font-bold tracking-widest uppercase">
                  Q&A
                </span>
              </div>

              {/* H2 - NO money keywords */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold tracking-tight uppercase leading-[0.9]">
                Common<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% animate-gradient">
                  Questions
                </span>
              </h2>

              {/* Body Copy - Money keywords go here */}
              <p className="mt-6 md:mt-8 text-base md:text-lg text-neutral-500 font-medium leading-relaxed max-w-md">
                Straight answers for busy tradies. Here is what you need to know about{" "}
                <span className="text-gray-800 font-bold">Google Ads Management for Tradies</span>{" "}
                before you book your site visit.
              </p>

              <div className="mt-8 md:mt-12">
                <ContactLink>
                  <span>Got a different question?</span>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#E02020] transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </ContactLink>
              </div>

              {/* Quick Stats */}
              <div className="mt-10 md:mt-12 pt-8 border-t border-black/10 hidden lg:block">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="text-3xl font-syne font-bold text-[#E02020]">2 Weeks</span>
                    <p className="text-sm text-gray-500 mt-1">Average build time</p>
                  </div>
                  <div>
                    <span className="text-3xl font-syne font-bold text-[#E02020]">100%</span>
                    <p className="text-sm text-gray-500 mt-1">Done for you</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-black/10 bg-white">
              {FAQ_DATA.map((item, index) => (
                <FAQItem
                  key={index}
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>

            {/* Bottom Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-[#F2F2F2]"
            >
              <p className="text-gray-600 text-sm">
                Still not sure? We offer a free 15 minute call to talk through your situation. 
                No pressure, just honest advice about whether{" "}
                <span className="font-bold text-gray-800">Local SEO North Lakes</span> and 
                Google Ads are right for your trade business.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQAdRealEstate;

