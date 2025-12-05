import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Video, Play } from 'lucide-react';
import { ContactButton } from '../ContactFormModal';

const PRICING_PACKAGES = [
  {
    name: 'Basic',
    price: '1,497',
    icon: <Zap className="h-6 w-6" />,
    description: 'Perfect for new businesses that need a clean online presence fast.',
    features: [
      'Single Page Scroll Website',
      'Home, About, Services & Contact in one page',
      '5 Professional Photos',
      'Mobile Friendly Design',
      'Launched in 48 Hours',
    ],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '2,497',
    icon: <Star className="h-6 w-6" />,
    description: 'Our most popular package for established North Lakes businesses.',
    features: [
      'Up to 5 Pages',
      'Home, About, Services, Gallery & Contact',
      '20 Professional Photos',
      'Basic SEO Setup',
      'Google Maps Integration',
      'Fast Loading Speed',
      'Launched in 48 Hours',
    ],
    isPopular: true,
  },
  {
    name: 'Elite',
    price: '2,997',
    icon: <Crown className="h-6 w-6" />,
    description: 'For businesses that want the full package with premium support.',
    features: [
      'Up to 5 Pages',
      '20 Professional Photos',
      'Full SEO Setup',
      'Google Business Profile Setup',
      'Priority Support',
      'Launched in 48 Hours',
    ],
    isPopular: false,
  },
];

const PricingCard = ({ pkg, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl ${
        pkg.isPopular
          ? 'bg-gray-900 text-white ring-4 ring-brand-red ring-offset-4 ring-offset-white'
          : 'border border-gray-200 bg-white text-gray-900'
      }`}
    >
      {/* Popular Badge */}
      {pkg.isPopular && (
        <div className="absolute left-0 right-0 top-0 bg-brand-red py-2 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-white">
            Most Popular
          </span>
        </div>
      )}

      <div className={`flex h-full flex-col p-8 ${pkg.isPopular ? 'pt-14' : ''}`}>
        {/* Header */}
        <div className="mb-6">
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 ${
              pkg.isPopular ? 'bg-white/10' : 'bg-gray-100'
            }`}
          >
            <span className={pkg.isPopular ? 'text-brand-red' : 'text-brand-red'}>{pkg.icon}</span>
            <span
              className={`text-sm font-bold uppercase tracking-wider ${
                pkg.isPopular ? 'text-white' : 'text-gray-700'
              }`}
            >
              {pkg.name}
            </span>
          </div>

          {/* Price */}
          <div className="mb-3 flex items-baseline gap-1">
            <span className={`text-sm ${pkg.isPopular ? 'text-white/60' : 'text-gray-500'}`}>
              $
            </span>
            <span className="font-syne text-5xl font-bold md:text-6xl">{pkg.price}</span>
          </div>

          <p
            className={`text-sm leading-relaxed ${
              pkg.isPopular ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            {pkg.description}
          </p>
        </div>

        {/* Divider */}
        <div className={`mb-6 h-px ${pkg.isPopular ? 'bg-white/20' : 'bg-gray-200'}`} />

        {/* Features */}
        <div className="flex-grow">
          <p
            className={`mb-4 text-xs font-bold uppercase tracking-widest ${
              pkg.isPopular ? 'text-white/50' : 'text-gray-400'
            }`}
          >
            What's Included
          </p>
          <ul className="space-y-3">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                    pkg.isPopular ? 'bg-brand-red' : 'bg-brand-red/10'
                  }`}
                >
                  <Check className={`h-3 w-3 ${pkg.isPopular ? 'text-white' : 'text-brand-red'}`} />
                </div>
                <span className={`text-sm ${pkg.isPopular ? 'text-white/90' : 'text-gray-700'}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <ContactButton
            variant={pkg.isPopular ? 'primary' : 'dark'}
            className="w-full justify-center"
          >
            Get Started
          </ContactButton>
        </div>
      </div>
    </motion.div>
  );
};

const PricingNorthLakes = () => {
  return (
    <section className="bg-neutral-50 py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:mb-20"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-[2px] w-12 bg-brand-red" />
            <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Investment
            </span>
            <div className="h-[2px] w-12 bg-brand-red" />
          </div>

          <h2 className="mb-6 font-syne text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
            Simple Pricing.
            <br />
            No Hidden Fees.
          </h2>

          <p className="mx-auto max-w-2xl text-xl font-light text-gray-600">
            Transparent web design packages for North Lakes businesses. Pick a package, book a
            visit, and we handle everything else.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {PRICING_PACKAGES.map((pkg, index) => (
            <PricingCard key={index} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Videography Add-on */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-10">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-red blur-3xl" />
            </div>

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
              {/* Icon */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand-red/20">
                <Video className="h-10 w-10 text-brand-red" />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                    Add-On
                  </span>
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-400">
                    2 Week Delivery
                  </span>
                </div>
                <h3 className="mb-3 font-syne text-2xl font-bold text-white md:text-3xl">
                  Videography Package
                </h3>
                <p className="mb-4 text-lg text-white/70">
                  Cinematic header video and drone footage to make your website stand out. Your
                  website launches in 48 hours with your professional photos as placeholders. We
                  swap in the final videos when ready.
                </p>
                <ul className="flex flex-wrap gap-4 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <Play className="h-4 w-4 text-brand-red" />
                    Cinematic Header Video
                  </li>
                  <li className="flex items-center gap-2">
                    <Play className="h-4 w-4 text-brand-red" />
                    Drone Photography
                  </li>
                  <li className="flex items-center gap-2">
                    <Play className="h-4 w-4 text-brand-red" />
                    Drone Videography
                  </li>
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="shrink-0 lg:text-right">
                <div className="mb-2 flex items-baseline gap-1 lg:justify-end">
                  <span className="text-lg text-white/60">+$</span>
                  <span className="font-syne text-4xl font-bold text-white md:text-5xl">1,500</span>
                </div>
                <p className="mb-4 text-sm text-white/50">Add to any package</p>
                <ContactButton variant="primary" className="w-full lg:w-auto">
                  Add Videography
                </ContactButton>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="mb-1 font-bold text-gray-900">Hosting Included</p>
                <p className="text-sm text-gray-600">
                  We set up everything. You do not need to buy hosting or worry about tech.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="mb-1 font-bold text-gray-900">5 Page Maximum</p>
                <p className="text-sm text-gray-600">
                  We build fast "brochure" websites. Need a bigger site? Ask about custom projects.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            All prices in AUD. GST included. No surprise charges.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingNorthLakes;
