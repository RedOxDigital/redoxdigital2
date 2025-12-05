import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, MapPin, Video, Search, DollarSign } from 'lucide-react';
import { ContactLink } from '../ContactFormModal';

const FAQ_DATA = [
  {
    icon: <MapPin className="h-5 w-5" />,
    question: 'Do you only work with North Lakes businesses?',
    answer:
      'We are proud to be a Facebook Ads Specialist in North Lakes, but we help clients all over Moreton Bay. This includes Mango Hill, Griffin, and Redcliffe. Being local means we can meet face-to-face to plan your strategy.',
  },
  {
    icon: <Video className="h-5 w-5" />,
    question: 'What is a "Performance Creative Agency"?',
    answer:
      'The Facebook algorithm now favours high-quality creative over technical settings. A Performance Creative Agency focuses on the content of the ads. We believe that better videos and images are the main reason ad costs go down.',
  },
  {
    icon: <Search className="h-5 w-5" />,
    question: 'Can you check my current ads?',
    answer:
      'Yes. We offer a full Facebook Ad Account Audit. We look at your setup, your creative ads, and who you are targeting.',
  },
  {
    icon: <DollarSign className="h-5 w-5" />,
    question: 'Do I need a huge budget to start?',
    answer:
      'No. We work with established small businesses. We will help you pick a budget that lets us test and grow without breaking the bank.',
  },
];

const FAQItem = ({
  item,
  isOpen,
  onClick,
  index,
}: {
  item: (typeof FAQ_DATA)[0];
  isOpen: boolean;
  onClick: () => void;
  index: number;
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
        className="group flex w-full items-start justify-between gap-4 px-2 py-6 text-left transition-colors duration-300 hover:bg-neutral-50 md:gap-6 md:px-6 md:py-8"
      >
        <div className="flex items-start gap-4 md:gap-6">
          {/* Icon */}
          <div
            className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 md:h-12 md:w-12 ${
              isOpen
                ? 'bg-[#E02020] text-white'
                : 'bg-[#F2F2F2] text-[#1a1a1a] group-hover:bg-[#E02020]/10 group-hover:text-[#E02020]'
            }`}
          >
            {item.icon}
          </div>

          {/* Question */}
          <div className="pt-2 md:pt-3">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-[#E02020] md:text-xs">
              {`Question ${String(index + 1).padStart(2, '0')}`}
            </span>
            <h3
              className={`font-syne text-lg font-bold leading-tight transition-colors duration-300 md:text-2xl ${
                isOpen ? 'text-[#E02020]' : 'text-black group-hover:text-neutral-700'
              }`}
            >
              {item.question}
            </h3>
          </div>
        </div>

        {/* Toggle Button */}
        <div
          className={`mt-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 md:mt-3 md:h-10 md:w-10 ${
            isOpen
              ? 'rotate-180 border-[#E02020] bg-[#E02020]'
              : 'border-black/10 bg-transparent group-hover:border-black'
          }`}
        >
          {isOpen ? (
            <Minus className="h-4 w-4 text-white md:h-5 md:w-5" />
          ) : (
            <Plus className="h-4 w-4 text-black md:h-5 md:w-5" />
          )}
        </div>
      </button>

      {/* Answer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-16 pr-4 md:pb-10 md:pl-24 md:pr-20">
              <p className="max-w-3xl text-base leading-relaxed text-neutral-600 md:text-lg">
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
    <section
      id="faq"
      className="relative overflow-hidden border-t border-black/10 bg-white py-20 md:py-32"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-1/2 w-1/2 bg-gradient-to-b from-neutral-50 to-transparent opacity-50" />

      <div className="mx-auto max-w-[1600px] px-4 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left Column - Header & CTA */}
          <div className="self-start lg:sticky lg:top-32 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 flex items-center gap-3 md:mb-6">
                <div className="h-[2px] w-8 bg-[#E02020] md:w-12" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] md:text-sm">
                  Q&A
                </span>
              </div>

              {/* H2 - NO money keywords */}
              <h2 className="font-syne text-4xl font-bold uppercase leading-[0.9] tracking-tight md:text-5xl lg:text-6xl">
                Frequently
                <br />
                <span className="animate-gradient bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% bg-clip-text text-transparent">
                  Asked Questions
                </span>
              </h2>

              {/* Body Copy - Money keywords go here */}
              <p className="mt-6 max-w-md text-base font-medium leading-relaxed text-neutral-500 md:mt-8 md:text-lg">
                Expert answers for smart business owners. Here is what you need to know before you
                hire a <span className="font-bold text-gray-800">Facebook Ads Specialist</span>.
              </p>

              <div className="mt-8 md:mt-12">
                <ContactLink>
                  <span>Still have questions?</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-[#E02020] md:h-12 md:w-12">
                    <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-500 group-hover:rotate-0 md:h-5 md:w-5" />
                  </div>
                </ContactLink>
              </div>

              {/* Quick Stats */}
              <div className="mt-10 hidden border-t border-black/10 pt-8 md:mt-12 lg:block">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="font-syne text-3xl font-bold text-[#E02020]">24h</span>
                    <p className="mt-1 text-sm text-gray-500">Response time</p>
                  </div>
                  <div>
                    <span className="font-syne text-3xl font-bold text-[#E02020]">100%</span>
                    <p className="mt-1 text-sm text-gray-500">Local Support</p>
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
