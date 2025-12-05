import { motion } from 'framer-motion';
import { Star, Quote, MapPin, Wrench, Zap, HardHat, Home } from 'lucide-react';

const TESTIMONIALS = [
  {
    icon: <Wrench className="h-5 w-5" />,
    trade: 'Plumber',
    name: 'Mike T.',
    location: 'North Lakes',
    quote:
      'I used to get maybe 2 calls a week from my ads. Now my phone rings every day. The big ad really does make a difference.',
    rating: 5,
  },
  {
    icon: <Zap className="h-5 w-5" />,
    trade: 'Electrician',
    name: 'Dave R.',
    location: 'Mango Hill',
    quote:
      'They came to my job site and took all the photos. I did not have to do anything. Two weeks later my ad was twice as big.',
    rating: 5,
  },
  {
    icon: <Home className="h-5 w-5" />,
    trade: 'Roofer',
    name: 'Steve M.',
    location: 'Griffin',
    quote:
      'The ServiceM8 connection was the game changer. Leads go straight to my calendar. No more lost quotes.',
    rating: 5,
  },
  {
    icon: <HardHat className="h-5 w-5" />,
    trade: 'Builder',
    name: 'Chris L.',
    location: 'Redcliffe',
    quote:
      'I was paying the same as the big guys but getting a tiny ad. Now I show up first and my ad takes up the whole screen.',
    rating: 5,
  },
];

const TRUST_STATS = [
  { value: '50+', label: 'Local Tradies Helped' },
  { value: '6', label: 'Page Microsites Built' },
  { value: '2x', label: 'Average Ad Size Increase' },
  { value: '24hr', label: 'Response Time' },
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative border border-black/10 bg-white p-6 transition-colors duration-300 hover:border-[#E02020]/30 md:p-8"
    >
      {/* Quote Icon */}
      <div className="absolute right-6 top-6 text-[#E02020]/10 transition-colors group-hover:text-[#E02020]/20">
        <Quote className="h-10 w-10" />
      </div>

      {/* Trade Badge */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F2F2] text-[#1a1a1a] transition-colors duration-300 group-hover:bg-[#E02020] group-hover:text-white">
          {testimonial.icon}
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#E02020]">
            {testimonial.trade}
          </span>
          <div className="mt-1 flex items-center gap-1">
            <MapPin className="h-3 w-3 text-gray-400" />
            <span className="text-xs text-gray-500">{testimonial.location}</span>
          </div>
        </div>
      </div>

      {/* Quote */}
      <p className="mb-6 text-lg leading-relaxed text-gray-700">"{testimonial.quote}"</p>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-black/10 pt-4">
        <span className="font-syne font-bold uppercase text-[#1a1a1a]">{testimonial.name}</span>
        <div className="flex items-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-[#E02020] text-[#E02020]" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SocialProofAdRealEstate = () => {
  return (
    <section className="border-t border-black/10 bg-[#F2F2F2] py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <div className="h-[2px] w-12 bg-[#E02020]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] md:text-sm">
              Social Proof
            </span>
            <div className="h-[2px] w-12 bg-[#E02020]" />
          </motion.div>

          {/* H2 - NO money keywords */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 font-syne text-4xl font-bold uppercase leading-[0.95] md:text-5xl lg:text-6xl"
          >
            Helping Tradies Dominate <br />
            <span className="animate-gradient bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% bg-clip-text text-transparent">
              North Brisbane
            </span>
          </motion.h2>

          {/* Body Copy - Money keywords go here */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600"
          >
            Real results from real tradies in your area. See what happens when you combine{' '}
            <span className="font-bold text-brand-red">Google Ads for Tradies North Lakes</span>{' '}
            with a proper website structure.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:mb-20 md:grid-cols-2 md:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] p-8 text-white md:p-12"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {TRUST_STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 font-syne text-4xl font-bold text-[#E02020] md:text-5xl">
                  {stat.value}
                </div>
                <p className="text-sm uppercase tracking-widest text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500">
            All testimonials are from verified clients. We focus on{' '}
            <span className="font-bold text-gray-700">Local SEO North Lakes</span> and the greater
            Moreton Bay region.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofAdRealEstate;
