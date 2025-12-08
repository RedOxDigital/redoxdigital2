import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, FileEdit, Image, Link2, ChevronRight, X, Check } from 'lucide-react';

const SERVICES = [
  {
    id: '01',
    icon: <Target className="h-6 w-6" />,
    title: 'High-Intent Keywords',
    subtitle: 'Target Buyers, Not Browsers',
    description:
      'We target terms like "Emergency Electrician North Lakes" rather than just "Electrician." These are the searches from people who need help right now and are ready to pay.',
    before: {
      label: 'Generic',
      example: 'Electrician',
      status: 'bad',
    },
    after: {
      label: 'High-Intent',
      example: 'Emergency Electrician North Lakes',
      status: 'good',
    },
    benefit: 'Get calls from people who need you today, not next month.',
  },
  {
    id: '02',
    icon: <FileEdit className="h-6 w-6" />,
    title: 'SEO Friendly Titles',
    subtitle: 'Tell Google What You Do',
    description:
      'We rewrite your website tags so Google knows exactly what you do and where you do it. This helps you show up for the right searches in your service area.',
    before: {
      label: 'Vague',
      example: 'Services | ABC Plumbing',
      status: 'bad',
    },
    after: {
      label: 'Clear',
      example: 'Hot Water Repairs North Lakes | ABC Plumbing',
      status: 'good',
    },
    benefit: 'Rank for specific services in your exact location.',
  },
  {
    id: '03',
    icon: <Image className="h-6 w-6" />,
    title: 'Show Your Work',
    subtitle: 'Real Photos, Real Trust',
    description:
      'We replace stock photos with real images of your work. Potential customers want to see what you have actually built, not some random photo from the internet.',
    before: {
      label: 'Stock Photo',
      example: 'Generic tradesman image',
      status: 'bad',
    },
    after: {
      label: 'Your Work',
      example: 'Your latest bathroom renovation',
      status: 'good',
    },
    benefit: 'Build trust instantly with proof of your quality work.',
  },
  {
    id: '04',
    icon: <Link2 className="h-6 w-6" />,
    title: 'Citation Building',
    subtitle: 'Get Listed Everywhere',
    description:
      'We get you listed on quality directories and local business sites. This builds your online presence and tells Google that your business is real and trusted.',
    before: {
      label: 'Missing',
      example: 'Not on key directories',
      status: 'bad',
    },
    after: {
      label: 'Listed',
      example: 'Found on 20+ trusted sites',
      status: 'good',
    },
    benefit: 'Boost your rankings with consistent business listings.',
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

const ServicesTradies = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-black/10 bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Header - Sticky on Desktop */}
          <div className="self-start lg:sticky lg:top-32 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-[2px] w-12 bg-[#E02020]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] md:text-sm">
                What We Do
              </span>
            </motion.div>

            {/* H2 - NO money keywords */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6 font-syne text-4xl font-bold uppercase leading-[0.95] md:text-5xl lg:text-6xl"
            >
              For Your <br />
              <span className="animate-gradient bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% bg-clip-text text-transparent">
                Trade Business
              </span>
            </motion.h2>

            {/* Body Copy - Money keywords go here */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed text-gray-600"
            >
              Our tradies SEO services focus on the things that actually move the needle. We do not
              waste your time on vanity metrics. Every action we take is designed to get your phone
              ringing with local jobs in North Lakes and the Moreton Bay Region.
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

export default ServicesTradies;


