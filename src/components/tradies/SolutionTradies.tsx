import { motion } from 'framer-motion';
import { MapPin, FileText, Video, CheckCircle, ArrowRight } from 'lucide-react';

const FEATURES = [
  {
    id: '01',
    icon: <MapPin className="h-6 w-6" />,
    title: 'Google Business Profile',
    subtitle: 'Get Found on Maps',
    description:
      'We claim, verify, and fix your map listing so you appear at the top of local searches right away. When someone in North Lakes searches for your trade, your business shows up first in the Google 3-Pack.',
    benefits: [
      'Show up in Google Maps results',
      'Display your reviews and photos',
      'Get calls directly from the listing',
    ],
    img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '02',
    icon: <FileText className="h-6 w-6" />,
    title: 'Location Pages',
    subtitle: 'Capture Every Suburb',
    description:
      'We build specific pages for your key suburbs like Mango Hill, Griffin, and Rothwell. This way, you capture every nearby lead in the Moreton Bay Region who is searching for a tradie in their area.',
    benefits: [
      'Rank for suburb-specific searches',
      'Target homeowners near you',
      'Beat competitors who only target broad terms',
    ],
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '03',
    icon: <Video className="h-6 w-6" />,
    title: 'Job Site Content',
    subtitle: 'Show Your Best Work',
    description:
      'Text is not enough anymore. We come to your job sites to capture strategic media like photos and videos of your best builds. We use this content to answer customer questions before they even ask, proving you are the expert.',
    benefits: [
      'Real photos of your actual work',
      'Videos that build trust instantly',
      'Content that sells while you sleep',
    ],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
  },
];

const FeatureCard = ({ feature, index }: { feature: (typeof FEATURES)[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative overflow-hidden border border-black/10 bg-white transition-colors duration-500 hover:border-[#E02020]/30"
    >
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={feature.img}
          alt={feature.title}
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/40" />

        {/* Number Badge */}
        <span className="absolute right-4 top-4 font-syne text-6xl font-bold text-white/10 transition-colors group-hover:text-white/20">
          {feature.id}
        </span>

        {/* Icon */}
        <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#E02020]">
          {feature.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Subtitle */}
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#E02020]">
          {feature.subtitle}
        </span>

        {/* Title - NO money keywords */}
        <h3 className="mb-4 font-syne text-2xl font-bold uppercase transition-colors group-hover:text-[#E02020]">
          {feature.title}
        </h3>

        {/* Description - Money keywords OK here */}
        <p className="mb-6 leading-relaxed text-gray-600">{feature.description}</p>

        {/* Benefits List */}
        <ul className="space-y-3">
          {feature.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#E02020]" />
              <span className="text-sm font-medium text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 origin-left scale-x-0 transform bg-gradient-to-r from-[#E02020] to-[#E02020]/50 transition-transform duration-500 group-hover:scale-x-100" />
    </motion.div>
  );
};

const SolutionTradies = () => {
  return (
    <section className="bg-[#F2F2F2] px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl md:mb-20">
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
            className="mb-6 font-syne text-4xl font-bold uppercase leading-[0.95] md:text-5xl lg:text-6xl"
          >
            The Strategy That <br />
            <span className="animate-gradient bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% bg-clip-text text-transparent">
              Actually Works
            </span>
          </motion.h2>

          {/* Body copy - Money keywords go here */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            We focus on the Google "3-Pack" and strategic media to build instant trust. This tradies
            SEO approach puts your business in front of local homeowners who are ready to hire. No
            tricks. No waiting months. Just results that fill your calendar with quality jobs.
          </motion.p>
        </div>

        {/* Desktop Feature Cards Grid - Hidden on mobile */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        {/* Mobile Horizontal Scroll - iPhone optimized */}
        <div className="-mx-6 md:hidden">
          <div
            className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-[85vw] max-w-[340px] flex-shrink-0 snap-center overflow-hidden border border-black/10 bg-white"
              >
                {/* Image Header */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50" />

                  {/* Number Badge */}
                  <span className="absolute right-4 top-4 font-syne text-5xl font-bold text-white/20">
                    {feature.id}
                  </span>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E02020] text-white">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Subtitle */}
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#E02020]">
                    {feature.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="mb-3 font-syne text-xl font-bold uppercase text-[#E02020]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-5 text-sm leading-relaxed text-gray-600">
                    {feature.description}
                  </p>

                  {/* Benefits List - Simplified for mobile */}
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E02020]" />
                        <span className="text-xs font-medium text-gray-700">{benefit}</span>
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
          <div className="mt-2 flex items-center justify-center gap-2 px-6">
            <div className="flex gap-1">
              <div className="h-1 w-6 rounded-full bg-[#E02020]"></div>
              <div className="h-1 w-1 rounded-full bg-gray-300"></div>
              <div className="h-1 w-1 rounded-full bg-gray-300"></div>
            </div>
            <span className="ml-2 text-[10px] uppercase tracking-widest text-gray-400">Swipe</span>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-[#1a1a1a] p-8 md:mt-20 md:p-12"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="mb-2 font-syne text-2xl font-bold uppercase text-white md:text-3xl">
                The Local Dominator Package
              </h3>
              <p className="max-w-xl text-gray-400">
                All three strategies working together to get your trade business found by local
                customers in North Lakes and the Moreton Bay Region.
              </p>
            </div>
            <a
              href="#faq"
              className="group flex items-center gap-3 whitespace-nowrap bg-[#E02020] px-6 py-4 text-white transition-colors duration-300 hover:bg-white hover:text-[#1a1a1a]"
            >
              <span className="text-xs font-bold uppercase tracking-widest">See How It Works</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionTradies;
