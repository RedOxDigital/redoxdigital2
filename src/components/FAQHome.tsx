import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { ContactLink } from './ContactFormModal';

const FAQ_DATA = [
  {
    question: "What does a Digital Marketing Consultant actually do?",
    answer: "A Digital Marketing Consultant looks at your whole business, not just one ad. We help North Lakes small business owners find where they are losing money and fix it. Then, we build a plan to bring you more of the right customers."
  },
  {
    question: "Why do I need Strategic Media Content?",
    answer: "Anyone can post a photo, but Strategic Media Content is built to sell. We create videos and images that show you are the expert in your field. This builds trust with new clients before they even call you."
  },
  {
    question: "Do you work with my type of Small Business?",
    answer: "We work with many local industries. Whether you run a medical clinic, a trade business, or a law firm in North Lakes, we can help. If you want to grow and find better clients, we are a good fit."
  },
  {
    question: "How is this different from a normal agency?",
    answer: "Most agencies just sell you 'likes' or a shiny website. We focus on your profit. We act as your partner to make sure your marketing brings in real jobs and sales, not just clicks."
  },
  {
    question: "How fast will I see results?",
    answer: "We don't like waiting either. We aim to get your main systems running quickly so you can start getting leads in the first few weeks. We build for speed so you see a return on your investment fast."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick, index }: { question: string, answer: string, isOpen: boolean, onClick: () => void, index: number }) => {
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
        className="w-full py-6 md:py-10 flex items-start justify-between gap-4 md:gap-6 text-left group hover:bg-neutral-50 transition-colors duration-300 px-2 md:px-8"
      >
        <div className="flex items-start gap-4 md:gap-8">
            <span className="font-syne font-bold text-xs md:text-base text-[#E02020] mt-1.5 shrink-0">
                {`0${index + 1}`}
            </span>
            <h3 className={`text-xl md:text-3xl font-syne font-bold leading-tight transition-colors duration-300 ${isOpen ? 'text-[#E02020]' : 'text-black group-hover:text-neutral-700'}`}>
                {question}
            </h3>
        </div>
        <div className={`shrink-0 mt-0.5 md:mt-1.5 w-8 h-8 md:w-10 md:h-10 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#E02020] border-[#E02020] rotate-180' : 'bg-transparent group-hover:border-black'}`}>
            {isOpen ? (
                <Minus className="w-4 h-4 md:w-5 md:h-5 text-white" />
            ) : (
                <Plus className="w-4 h-4 md:w-5 md:h-5 text-black" />
            )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            {/* Adjusted padding for mobile to be more aligned with content and less indented */}
            <div className="pb-8 md:pb-10 pl-4 md:pl-24 pr-4 md:pr-8 max-w-4xl">
              <p className="text-base md:text-xl text-neutral-600 leading-relaxed font-medium">
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
    <section id="faq" className="bg-white text-black py-16 md:py-32 border-t border-black relative overflow-hidden">
      {/* Background Decoration - Subtle Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-neutral-50 to-transparent -z-10 opacity-50 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Column - Header & CTA */}
            {/* Removed sticky from mobile, enabled on large screens only */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                        <div className="w-8 md:w-12 h-[2px] bg-[#E02020]"></div>
                        <span className="text-[#E02020] text-xs md:text-sm font-bold tracking-widest uppercase">Q&A</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-syne font-bold tracking-tight uppercase leading-[0.9]">
                        COMMON<br />QUESTIONS
                    </h2>
                    <p className="mt-6 md:mt-8 text-base md:text-lg text-neutral-500 font-medium leading-relaxed max-w-md">
                        Guessing costs money. We prefer clarity. Here is how our Digital Marketing Consultant services help North Lakes businesses grow safely.
                    </p>

                    <div className="mt-8 md:mt-12">
                        <ContactLink>
                            <span>Still have questions?</span>
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#E02020] transition-colors duration-300">
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
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
