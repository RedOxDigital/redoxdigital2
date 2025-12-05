import { motion } from 'framer-motion';
import { LayoutTemplate, Clock, Zap } from 'lucide-react';

const PIVOT_CARDS = [
  {
    step: '01',
    icon: <LayoutTemplate className="h-8 w-8" />,
    headline: 'Is this your website right now?',
    body: "It's a DIY template. It's full of stock photos of people who don't work for you. You know it looks generic, but it \"does the job\" (barely). Your web design doesn't show who you really are.",
    color: 'from-gray-900 to-gray-800',
  },
  {
    step: '02',
    icon: <Clock className="h-8 w-8" />,
    headline: "Why you haven't fixed it",
    body: 'Agencies want $5k and 3 months. Freelancers want you to write all the text and send them Google Drive folders. You\'re too busy running a business to do "website homework". Finding good web design in North Lakes feels impossible.',
    color: 'from-gray-800 to-gray-700',
  },
  {
    step: '03',
    icon: <Zap className="h-8 w-8" />,
    headline: 'The Red Ox Digital Way',
    body: 'We come to you. We take the photos. We interview you for 20 mins. We build the site. You get back to work, and 48 hours later, you look amazing online. Professional web design North Lakes businesses can afford.',
    color: 'from-brand-red to-red-700',
    isHighlight: true,
  },
];

const PivotCard = ({ card, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group relative flex h-full flex-col bg-gradient-to-br ${card.color} overflow-hidden rounded-2xl ${
        card.isHighlight ? 'ring-2 ring-brand-red ring-offset-4 ring-offset-white' : ''
      }`}
    >
      {/* Card Content */}
      <div className="flex h-full flex-col p-8 md:p-10">
        {/* Step Number & Icon */}
        <div className="mb-8 flex items-center justify-between">
          <span className="font-syne text-6xl font-bold text-white/10">{card.step}</span>
          <div className={`rounded-xl p-3 ${card.isHighlight ? 'bg-white/20' : 'bg-white/10'}`}>
            <span className={card.isHighlight ? 'text-white' : 'text-white/70'}>{card.icon}</span>
          </div>
        </div>

        {/* Headline */}
        <h3 className="mb-6 font-syne text-2xl font-bold leading-tight text-white md:text-3xl">
          {card.headline}
        </h3>

        {/* Body Copy */}
        <p className="flex-grow text-lg leading-relaxed text-white/80">{card.body}</p>
      </div>

      {/* Hover Glow Effect */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
          card.isHighlight
            ? 'bg-gradient-to-t from-white/10 to-transparent'
            : 'bg-gradient-to-t from-white/5 to-transparent'
        }`}
      />
    </motion.div>
  );
};

const PivotNorthLakes = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-12 bg-brand-red" />
            <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Sound Familiar?
            </span>
          </div>
          <h2 className="max-w-4xl font-syne text-4xl font-bold uppercase leading-[0.95] tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Websites Shouldn't Be Something You Dread
          </h2>
          <p className="mt-6 max-w-2xl text-xl font-light text-gray-600">
            And they shouldn't cost a fortune either. Most North Lakes business owners feel stuck
            with their online presence. There is a better way.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {PIVOT_CARDS.map((card, index) => (
            <PivotCard key={index} card={card} index={index} />
          ))}
        </div>

        {/* Bottom Connector Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 hidden h-[2px] origin-left bg-gradient-to-r from-gray-200 via-brand-red to-gray-200 md:block"
        />
      </div>
    </section>
  );
};

export default PivotNorthLakes;
