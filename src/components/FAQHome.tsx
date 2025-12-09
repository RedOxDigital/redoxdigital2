import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { ContactLink } from './ContactFormModal';

const FAQ_DATA = [
  {
    question: 'What do you actually do?',
    answer:
      'We look at your whole business, not just one ad. We help North Lakes small business owners find where they are losing money and fix it. Then, we build a plan to bring you more of the right customers.',
  },
  {
    question: 'Why do I need professional photos and videos?',
    answer:
      'Anyone can post a photo, but professional media is built to sell. We create videos and images that show you are the expert in your field. This builds trust with new clients before they even call you.',
  },
  {
    question: 'Do you work with my type of Small Business?',
    answer:
      'We work with many local industries. Whether you run a medical clinic, a trade business, or a law firm in North Lakes, we can help. If you want to grow and find better clients, we are a good fit.',
  },
  {
    question: 'How is this different from a normal agency?',
    answer:
      "Most agencies just sell you 'likes' or a shiny website. We focus on your profit. We act as your partner to make sure your marketing brings in real jobs and sales, not just clicks.",
  },
  {
    question: 'How fast will I see results?',
    answer:
      "We don't like waiting either. We aim to get your main systems running quickly so you can start getting leads in the first few weeks. We build for speed so you see a return on your investment fast.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
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
        className="group flex w-full items-start justify-between gap-4 px-2 py-6 text-left transition-colors duration-300 hover:bg-neutral-50 md:gap-6 md:px-8 md:py-10"
      >
        <div className="flex items-start gap-4 md:gap-8">
          <span className="mt-1.5 shrink-0 font-syne text-xs font-bold text-[#E02020] md:text-base">
            {`0${index + 1}`}
          </span>
          <h3
            className={`font-syne text-xl font-bold leading-tight transition-colors duration-300 md:text-3xl ${isOpen ? 'text-[#E02020]' : 'text-black group-hover:text-neutral-700'}`}
          >
            {question}
          </h3>
        </div>
        <div
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-300 md:mt-1.5 md:h-10 md:w-10 ${isOpen ? 'rotate-180 border-[#E02020] bg-[#E02020]' : 'bg-transparent group-hover:border-black'}`}
        >
          {isOpen ? (
            <Minus className="h-4 w-4 text-white md:h-5 md:w-5" />
          ) : (
            <Plus className="h-4 w-4 text-black md:h-5 md:w-5" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            {/* Adjusted padding for mobile to be more aligned with content and less indented */}
            <div className="max-w-4xl pb-8 pl-4 pr-4 md:pb-10 md:pl-24 md:pr-8">
              <p className="text-base font-medium leading-relaxed text-neutral-600 md:text-xl">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQHome = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-black bg-white py-16 text-black md:py-32"
    >
      {/* Background Decoration - Subtle Gradient */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-1/2 w-1/2 bg-gradient-to-b from-neutral-50 to-transparent opacity-50" />

      <div className="mx-auto max-w-[1600px] px-4 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
          {/* Left Column - Header & CTA */}
          {/* Removed sticky from mobile, enabled on large screens only */}
          <div className="self-start lg:sticky lg:top-32 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 flex items-center gap-3 md:mb-6">
                <div className="h-[2px] w-8 bg-[#E02020] md:w-12"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] md:text-sm">
                  Q&A
                </span>
              </div>
              <h2 className="font-syne text-4xl font-bold uppercase leading-[0.9] tracking-tight md:text-6xl lg:text-7xl">
                COMMON
                <br />
                QUESTIONS
              </h2>
              <p className="mt-6 max-w-md text-base font-medium leading-relaxed text-neutral-500 md:mt-8 md:text-lg">
                Guessing costs money. We prefer clarity. Here is how our local web design
                and media services help North Lakes businesses grow safely.
              </p>

              <div className="mt-8 md:mt-12">
                <ContactLink>
                  <span>Still have questions?</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-[#E02020] md:h-12 md:w-12">
                    <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-500 group-hover:rotate-0 md:h-5 md:w-5" />
                  </div>
                </ContactLink>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-black/10">
              {FAQ_DATA.map((item, index) => (
                <FAQItem
                  key={index}
                  index={index}
                  question={item.question}
                  answer={item.answer}
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

export default FAQHome;
