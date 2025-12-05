import { motion } from 'framer-motion';
import { LayoutTemplate, Clock, Zap } from 'lucide-react';

const PIVOT_CARDS = [
  {
    step: '01',
    icon: <LayoutTemplate className="w-8 h-8" />,
    headline: 'Is this your website right now?',
    body: "It's a DIY template. It's full of stock photos of people who don't work for you. You know it looks generic, but it \"does the job\" (barely). Your web design doesn't show who you really are.",
    color: 'from-gray-900 to-gray-800'
  },
  {
    step: '02',
    icon: <Clock className="w-8 h-8" />,
    headline: 'Why you haven\'t fixed it',
    body: "Agencies want $5k and 3 months. Freelancers want you to write all the text and send them Google Drive folders. You're too busy running a business to do \"website homework\". Finding good web design in North Lakes feels impossible.",
    color: 'from-gray-800 to-gray-700'
  },
  {
    step: '03',
    icon: <Zap className="w-8 h-8" />,
    headline: 'The Red Ox Digital Way',
    body: "We come to you. We take the photos. We interview you for 20 mins. We build the site. You get back to work, and 48 hours later, you look amazing online. Professional web design North Lakes businesses can afford.",
    color: 'from-brand-red to-red-700',
    isHighlight: true
  }
];

const PivotCard = ({ card, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group relative flex flex-col h-full bg-gradient-to-br ${card.color} rounded-2xl overflow-hidden ${
        card.isHighlight ? 'ring-2 ring-brand-red ring-offset-4 ring-offset-white' : ''
      }`}
    >
      {/* Card Content */}
      <div className="flex flex-col h-full p-8 md:p-10">
        
        {/* Step Number & Icon */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-6xl font-syne font-bold text-white/10">
            {card.step}
          </span>
          <div className={`p-3 rounded-xl ${card.isHighlight ? 'bg-white/20' : 'bg-white/10'}`}>
            <span className={card.isHighlight ? 'text-white' : 'text-white/70'}>
              {card.icon}
            </span>
          </div>
        </div>

        {/* Headline */}
        <h3 className="text-2xl md:text-3xl font-syne font-bold text-white mb-6 leading-tight">
          {card.headline}
        </h3>

        {/* Body Copy */}
        <p className="text-white/80 text-lg leading-relaxed flex-grow">
          {card.body}
        </p>

      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
        card.isHighlight 
          ? 'bg-gradient-to-t from-white/10 to-transparent' 
          : 'bg-gradient-to-t from-white/5 to-transparent'
      }`} />
    </motion.div>
  );
};

const PivotNorthLakes = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-brand-red" />
            <span className="text-brand-red text-sm font-bold tracking-widest uppercase">
              Sound Familiar?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase tracking-tight leading-[0.95] text-gray-900 max-w-4xl">
            Websites Shouldn't Be Something You Dread
          </h2>
          <p className="mt-6 text-xl text-gray-600 font-light max-w-2xl">
            And they shouldn't cost a fortune either. Most North Lakes business owners feel stuck with their online presence. There is a better way.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
          className="hidden md:block mt-12 h-[2px] bg-gradient-to-r from-gray-200 via-brand-red to-gray-200 origin-left"
        />

      </div>
    </section>
  );
};

export default PivotNorthLakes;

