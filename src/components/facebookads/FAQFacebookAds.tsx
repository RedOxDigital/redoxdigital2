import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, MapPin, Video, Search, DollarSign } from 'lucide-react';
import { ContactLink } from '../ContactFormModal';

const FAQ_DATA = [
  {
    icon: <MapPin className="w-5 h-5" />,
    question: "Do you only work with North Lakes businesses?",
    answer: "We are proud to be a Facebook Ads Specialist in North Lakes, but we help clients all over Moreton Bay. This includes Mango Hill, Griffin, and Redcliffe. Being local means we can meet face-to-face to plan your strategy."
  },
  {
    icon: <Video className="w-5 h-5" />,
    question: "What is a \"Performance Creative Agency\"?",
    answer: "The Facebook algorithm now favours high-quality creative over technical settings. A Performance Creative Agency focuses on the content of the ads. We believe that better videos and images are the main reason ad costs go down."
  },
  {
    icon: <Search className="w-5 h-5" />,
    question: "Can you check my current ads?",
    answer: "Yes. We offer a full Facebook Ad Account Audit. We look at your setup, your creative ads, and who you are targeting."
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    question: "Do I need a huge budget to start?",
    answer: "No. We work with established small businesses. We will help you pick a budget that lets us test and grow without breaking the bank."
  }
];

const FAQItem = ({ 
  item, 
  isOpen, 
  onClick, 
  index 
}: { 
  item: typeof FAQ_DATA[0], 
  isOpen: boolean, 
  onClick: () => void, 
  index: number 
}) => {
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

const FAQFacebookAds = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
                Frequently<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% animate-gradient">
                  Asked Questions
                </span>
              </h2>

              {/* Body Copy - Money keywords go here */}
              <p className="mt-6 md:mt-8 text-base md:text-lg text-neutral-500 font-medium leading-relaxed max-w-md">
                 Expert answers for smart business owners. Here is what you need to know before you hire a <span className="text-gray-800 font-bold">Facebook Ads Specialist</span>.
              </p>

              <div className="mt-8 md:mt-12">
                <ContactLink>
                  <span>Still have questions?</span>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#E02020] transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </ContactLink>
              </div>

              {/* Quick Stats */}
              <div className="mt-10 md:mt-12 pt-8 border-t border-black/10 hidden lg:block">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="text-3xl font-syne font-bold text-[#E02020]">24h</span>
                    <p className="text-sm text-gray-500 mt-1">Response time</p>
                  </div>
                  <div>
                    <span className="text-3xl font-syne font-bold text-[#E02020]">100%</span>
                    <p className="text-sm text-gray-500 mt-1">Local Support</p>
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQFacebookAds;

