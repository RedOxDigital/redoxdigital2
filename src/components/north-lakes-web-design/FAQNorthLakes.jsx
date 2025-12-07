import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ_DATA = [
  {
    question: 'Do I have to write the text for my website?',
    answer:
      'No. We interview you for about 20 minutes and write all the copy for you. You just need to tell us about your business in your own words. We turn that into website content that sounds professional and brings in customers. No homework for you.',
  },
  {
    question: 'Can I update my website myself later?',
    answer:
      'Yes. We give you a simple guide that shows you how to make basic changes. Things like updating your phone number, adding new photos, or changing your hours. If you get stuck, we are a 5 minute drive away in Dakabin and happy to help.',
  },
  {
    question: 'Why is there a 5 page limit?',
    answer:
      'We build fast "brochure" websites for North Lakes businesses that need a professional online presence now. Five pages is enough for most small businesses: Home, About, Services, Gallery, and Contact. If you need a bigger site with 20 pages and advanced SEO, we can do that too. But that is a custom project, not a 48 hour build.',
  },
  {
    question: 'Is hosting included?',
    answer:
      'Yes. We set up your hosting for free using Vercel, which is one of the fastest and most reliable platforms for basic websites. You do not need to pay for hosting or worry about any technical setup. We handle everything.',
  },
  {
    question: 'What if I do not like the design?',
    answer:
      'You get to see your website before it goes live. If you want changes, just tell us. We want you to be proud of your new site. Small tweaks are included in the price. We do not go live until you are happy with how it looks.',
  },
  {
    question: 'Do you work with businesses outside North Lakes?',
    answer:
      'Yes. We are based in Dakabin and serve all of the Moreton Bay region. We regularly visit businesses in Mango Hill, Kallangur, Griffin, Petrie, and beyond. If you are within a 30 minute drive, we can come to you.',
  },
  {
    question: 'What happens after my website goes live?',
    answer:
      'Your website is yours. We hand over everything you need to manage it. If you want ongoing help with updates, SEO, or marketing, we offer monthly support packages. But there is no pressure. Many clients are happy to manage their site on their own after launch.',
  },
  {
    question: 'How do I pay?',
    answer:
      'We take a 50% deposit to book your visit. The other 50% is due when we finish the build and you approve the final design. We accept bank transfer and card payments. Simple and straightforward.',
  },
];

const FAQItem = ({ item, index, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-black/10 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-start justify-between gap-4 py-6 text-left md:py-8"
        aria-expanded={isOpen}
      >
        <span
          className={`text-lg font-medium transition-colors duration-300 md:text-xl ${
            isOpen ? 'text-brand-red' : 'text-gray-900 group-hover:text-brand-red'
          }`}
        >
          {item.question}
        </span>
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? 'bg-brand-red text-white'
              : 'bg-gray-100 text-gray-600 group-hover:bg-brand-red/10 group-hover:text-brand-red'
          }`}
        >
          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-6 text-lg leading-relaxed text-gray-600 md:pb-8">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQNorthLakes = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="border-t border-black/10 bg-neutral-50 py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-32">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[2px] w-12 bg-brand-red" />
                <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
                  Questions
                </span>
              </div>

              <h2 className="mb-6 font-syne text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-5xl">
                Got Questions? We Have Answers.
              </h2>

              <p className="mb-8 text-lg font-light leading-relaxed text-gray-600">
                We know you have questions about web design for your North Lakes business. Here are
                the ones we hear most often.
              </p>

              {/* Quick Contact */}
              <div className="rounded-xl border border-black/5 bg-white p-6">
                <p className="mb-2 text-sm text-gray-500">Still have questions?</p>
                <p className="mb-1 font-bold text-gray-900">Give us a call</p>
                <a
                  href="tel:+61493992661"
                  className="text-lg font-bold text-brand-red hover:underline"
                >
                  0493 992 661
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - FAQ List */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-black/5 bg-white">
              <div className="px-6 md:px-10">
                {FAQ_DATA.map((item, index) => (
                  <FAQItem
                    key={index}
                    item={item}
                    index={index}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQNorthLakes;

