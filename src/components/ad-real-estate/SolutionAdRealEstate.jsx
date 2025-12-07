import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wrench,
  FolderOpen,
  Star,
  Users,
  MessageSquare,
  HelpCircle,
  ChevronRight,
  X,
  Check,
} from 'lucide-react';

const PAGES_DATA = [
  {
    id: '01',
    icon: <Wrench className="h-6 w-6" />,
    title: 'Services Page',
    subtitle: 'What You Do',
    description:
      'A clear list of every service you offer. Google uses this to match you with the right searches.',
    benefit: "Shows up when people search for specific jobs like 'hot water repair North Lakes'.",
  },
  {
    id: '02',
    icon: <FolderOpen className="h-6 w-6" />,
    title: 'Projects Page',
    subtitle: 'Proof You Deliver',
    description:
      'Photos of your best work with short stories about each job. Real pictures from real jobs you have done.',
    benefit: 'Builds trust and shows Google you are active in the local area.',
  },
  {
    id: '03',
    icon: <Star className="h-6 w-6" />,
    title: 'Reviews Page',
    subtitle: 'What Customers Say',
    description:
      'A page that shows off your best Google reviews. We pull them in so they stay fresh.',
    benefit: 'Gives Google more text to read and helps people trust you faster.',
  },
  {
    id: '04',
    icon: <Users className="h-6 w-6" />,
    title: 'About Page',
    subtitle: 'Your Story',
    description:
      'Who you are, how long you have been in business, and why you started. People want to hire a real person.',
    benefit: 'Connects with customers and tells Google you are a real local business.',
  },
  {
    id: '05',
    icon: <MessageSquare className="h-6 w-6" />,
    title: 'Contact Page',
    subtitle: 'Easy To Reach',
    description:
      'Your phone, email, and a simple form. Plus your service area map for North Lakes and North Brisbane.',
    benefit: 'Makes it easy for leads to call you and confirms your location to Google.',
  },
  {
    id: '06',
    icon: <HelpCircle className="h-6 w-6" />,
    title: 'FAQ Page',
    subtitle: 'Answer Questions Fast',
    description:
      'Common questions people ask before they hire a tradie. We write answers that sound like you.',
    benefit: 'Catches long tail searches and builds trust before they even call.',
  },
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
        className="group flex w-full items-center gap-4 px-4 py-6 text-left md:gap-8 md:px-8 md:py-8"
      >
        {/* Number */}
        <span className="font-syne text-3xl font-bold text-[#E02020]/20 transition-colors group-hover:text-[#E02020]/40 md:text-4xl">
          {page.id}
        </span>

        {/* Icon */}
        <div
          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 md:h-14 md:w-14 ${
            isExpanded
              ? 'bg-[#E02020] text-white'
              : 'bg-[#F2F2F2] text-[#1a1a1a] group-hover:bg-[#E02020]/10 group-hover:text-[#E02020]'
          }`}
        >
          {page.icon}
        </div>

        {/* Title & Subtitle */}
        <div className="min-w-0 flex-1">
          <h3
            className={`font-syne text-xl font-bold uppercase transition-colors md:text-2xl ${
              isExpanded ? 'text-[#E02020]' : 'text-[#1a1a1a]'
            }`}
          >
            {page.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-gray-500">{page.subtitle}</p>
        </div>

        {/* Toggle Icon */}
        <div
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 md:h-12 md:w-12 ${
            isExpanded
              ? 'rotate-45 border-[#1a1a1a] bg-[#1a1a1a]'
              : 'border-black/20 group-hover:border-[#E02020] group-hover:text-[#E02020]'
          }`}
        >
          {isExpanded ? <X className="h-5 w-5 text-white" /> : <ChevronRight className="h-5 w-5" />}
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-8 md:px-8 md:pb-10">
              <div className="pl-0 md:pl-[120px]">
                {/* Description */}
                <p className="mb-6 max-w-2xl leading-relaxed text-gray-700">{page.description}</p>

                {/* Benefit */}
                <div className="flex items-start gap-3 border border-green-200 bg-green-50 p-4">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-sm font-medium text-green-800">{page.benefit}</p>
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
    <section className="border-t border-black/10 bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Header - Sticky on Desktop */}
          <div className="self-start overflow-hidden pr-8 lg:sticky lg:top-32 lg:col-span-4 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-[2px] w-12 bg-[#E02020]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] md:text-sm">
                The Solution
              </span>
            </motion.div>

            {/* H2 - NO money keywords */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6 break-words font-syne text-3xl font-bold uppercase leading-[0.95] md:text-4xl lg:text-4xl xl:text-5xl"
            >
              The 6 Page <br />
              <span className="animate-gradient bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% bg-clip-text text-transparent">
                Sitelink Engine
              </span>
            </motion.h2>

            {/* Body Copy - Money keywords go here */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8 text-lg leading-relaxed text-gray-600"
            >
              We do not just run your ads. We build the asset that makes them work. This is what
              separates good{' '}
              <span className="font-bold text-brand-red">Google Ads Management for Tradies</span>{' '}
              from wasted money. Each page gives Google a new link to show in your ad.
            </motion.p>

            {/* Result Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#1a1a1a] p-6 text-white"
            >
              <div className="flex items-center gap-4">
                <div className="font-syne text-4xl font-bold text-[#E02020]">2x</div>
                <div>
                  <p className="text-sm font-bold uppercase">Screen Space</p>
                  <p className="text-sm text-gray-400">Same cost per click</p>
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
              className="mt-8 bg-gradient-to-r from-[#E02020] to-[#c41a1a] p-6 text-white md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="mb-2 font-syne text-xl font-bold uppercase md:text-2xl">
                    The Result?
                  </h3>
                  <p className="text-white/80">
                    Your ad pushes competitors below the fold. They see you first. They call you
                    first.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                  <Check className="h-5 w-5" />
                  <span className="text-sm font-bold uppercase">Built For Tradies</span>
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

