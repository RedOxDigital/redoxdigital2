import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Target, BarChart2, ChevronRight, X, Check } from 'lucide-react';

const SERVICES = [
  {
    id: '01',
    icon: <Rocket className="h-6 w-6" />,
    title: 'Creative Velocity',
    subtitle: 'We Build Ads, Not Just Run Them',
    description:
      "We don't just run ads; we build them. We make lots of Facebook ad creative, images, videos, and headlines, to keep your brand looking fresh.",
    before: {
      label: 'Old Way',
      example: 'Using the same image for 6 months',
      status: 'bad',
    },
    after: {
      label: 'Our Way',
      example: 'Weekly fresh creative testing',
      status: 'good',
    },
    benefit: 'Stop ad fatigue before it kills your results.',
  },
  {
    id: '02',
    icon: <Target className="h-6 w-6" />,
    title: 'Broad Signal Targeting',
    subtitle: 'AI Finds Your Customer',
    description:
      'We use smart AI tools to find your perfect customers based on what they actually want, not just their age or location.',
    before: {
      label: 'Guessing',
      example: "Manually picking 'interests'",
      status: 'bad',
    },
    after: {
      label: 'Data-Led',
      example: 'AI finds buyers based on behaviour',
      status: 'good',
    },
    benefit: 'Reach people ready to buy, not just browse.',
  },
  {
    id: '03',
    icon: <BarChart2 className="h-6 w-6" />,
    title: 'Honest Data',
    subtitle: 'One Source of Truth',
    description:
      'We believe in being open. We connect your ad data straight to Google Analytics 4. This gives you one honest place to see your profit.',
    before: {
      label: 'Confusing',
      example: "Trusting Facebook's inflated numbers",
      status: 'bad',
    },
    after: {
      label: 'Clear',
      example: 'Verifying sales in Google Analytics',
      status: 'good',
    },
    benefit: 'Know exactly how much money you make.',
  },
];

const ServiceCard = ({
  service,
  index,
  isExpanded,
  onToggle,
}: {
  service: (typeof SERVICES)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
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
        className="group flex w-full items-center gap-4 px-4 py-6 text-left md:gap-8 md:px-8 md:py-8"
      >
        {/* Number */}
        <span className="font-syne text-3xl font-bold text-[#E02020]/20 transition-colors group-hover:text-[#E02020]/40 md:text-4xl">
          {service.id}
        </span>

        {/* Icon */}
        <div
          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 md:h-14 md:w-14 ${
            isExpanded
              ? 'bg-[#E02020] text-white'
              : 'bg-[#F2F2F2] text-[#1a1a1a] group-hover:bg-[#E02020]/10 group-hover:text-[#E02020]'
          }`}
        >
          {service.icon}
        </div>

        {/* Title & Subtitle */}
        <div className="min-w-0 flex-1">
          <h3
            className={`font-syne text-xl font-bold uppercase transition-colors md:text-2xl ${
              isExpanded ? 'text-[#E02020]' : 'text-[#1a1a1a]'
            }`}
          >
            {service.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-gray-500">{service.subtitle}</p>
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
                <p className="mb-8 max-w-2xl leading-relaxed text-gray-700">
                  {service.description}
                </p>

                {/* Before / After Comparison */}
                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* Before */}
                  <div className="border border-red-200 bg-white p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                        <X className="h-4 w-4 text-red-500" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                        {service.before.label}
                      </span>
                    </div>
                    <p className="border-l-2 border-red-300 bg-gray-50 px-3 py-2 font-mono text-sm text-gray-600">
                      {service.before.example}
                    </p>
                  </div>

                  {/* After */}
                  <div className="border border-green-200 bg-white p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-green-600">
                        {service.after.label}
                      </span>
                    </div>
                    <p className="border-l-2 border-green-400 bg-green-50 px-3 py-2 font-mono text-sm font-medium text-gray-800">
                      {service.after.example}
                    </p>
                  </div>
                </div>

                {/* Benefit */}
                <div className="flex items-center gap-3 text-[#E02020]">
                  <div className="h-2 w-2 rounded-full bg-[#E02020]" />
                  <span className="text-sm font-bold">{service.benefit}</span>
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
                The Standard
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
              Your Local <br />
              <span className="animate-gradient whitespace-nowrap bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% bg-clip-text text-transparent">
                Performance
              </span>{' '}
              <span className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl">Agency</span>
            </motion.h2>

            {/* Body Copy - Money keywords go here */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed text-gray-600"
            >
              In 2025, Facebook picks winners based on who tells the best stories. As your partner,
              we act like a creative studio for your brand. We combine the power of a{' '}
              <span className="font-bold text-brand-red">Performance Creative Agency</span> with the
              local touch you expect.
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
