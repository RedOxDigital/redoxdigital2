import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Video, Play } from 'lucide-react';
import { ContactButton } from '../ContactFormModal';

const PRICING_PACKAGES = [
  {
    name: 'Basic',
    price: '1,497',
    icon: <Zap className="w-6 h-6" />,
    description: 'Perfect for new businesses that need a clean online presence fast.',
    features: [
      'Single Page Scroll Website',
      'Home, About, Services & Contact in one page',
      '5 Professional Photos',
      'Mobile Friendly Design',
      'Launched in 48 Hours'
    ],
    isPopular: false
  },
  {
    name: 'Pro',
    price: '2,497',
    icon: <Star className="w-6 h-6" />,
    description: 'Our most popular package for established North Lakes businesses.',
    features: [
      'Up to 5 Pages',
      'Home, About, Services, Gallery & Contact',
      '20 Professional Photos',
      'Basic SEO Setup',
      'Google Maps Integration',
      'Fast Loading Speed',
      'Launched in 48 Hours'
    ],
    isPopular: true
  },
  {
    name: 'Elite',
    price: '2,997',
    icon: <Crown className="w-6 h-6" />,
    description: 'For businesses that want the full package with premium support.',
    features: [
      'Up to 5 Pages',
      '20 Professional Photos',
      'Full SEO Setup',
      'Google Business Profile Setup',
      'Priority Support',
      'Launched in 48 Hours'
    ],
    isPopular: false
  }
];

const PricingCard = ({ pkg, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col h-full rounded-2xl overflow-hidden ${
        pkg.isPopular
          ? 'bg-gray-900 text-white ring-4 ring-brand-red ring-offset-4 ring-offset-white'
          : 'bg-white text-gray-900 border border-gray-200'
      }`}
    >
      {/* Popular Badge */}
      {pkg.isPopular && (
        <div className="absolute top-0 left-0 right-0 bg-brand-red py-2 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-white">
            Most Popular
          </span>
        </div>
      )}

      <div className={`flex flex-col h-full p-8 ${pkg.isPopular ? 'pt-14' : ''}`}>
        {/* Header */}
        <div className="mb-6">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 ${
            pkg.isPopular ? 'bg-white/10' : 'bg-gray-100'
          }`}>
            <span className={pkg.isPopular ? 'text-brand-red' : 'text-brand-red'}>
              {pkg.icon}
            </span>
            <span className={`text-sm font-bold uppercase tracking-wider ${
              pkg.isPopular ? 'text-white' : 'text-gray-700'
            }`}>
              {pkg.name}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1 mb-3">
            <span className={`text-sm ${pkg.isPopular ? 'text-white/60' : 'text-gray-500'}`}>$</span>
            <span className="text-5xl md:text-6xl font-syne font-bold">{pkg.price}</span>
          </div>

          <p className={`text-sm leading-relaxed ${
            pkg.isPopular ? 'text-white/70' : 'text-gray-600'
          }`}>
            {pkg.description}
          </p>
        </div>

        {/* Divider */}
        <div className={`h-px mb-6 ${pkg.isPopular ? 'bg-white/20' : 'bg-gray-200'}`} />

        {/* Features */}
        <div className="flex-grow">
          <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${
            pkg.isPopular ? 'text-white/50' : 'text-gray-400'
          }`}>
            What's Included
          </p>
          <ul className="space-y-3">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  pkg.isPopular ? 'bg-brand-red' : 'bg-brand-red/10'
                }`}>
                  <Check className={`w-3 h-3 ${pkg.isPopular ? 'text-white' : 'text-brand-red'}`} />
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
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-brand-red" />
            <span className="text-brand-red text-sm font-bold tracking-widest uppercase">
              Investment
            </span>
            <div className="w-12 h-[2px] bg-brand-red" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase tracking-tight leading-[0.95] mb-6">
            Simple Pricing.<br />No Hidden Fees.
          </h2>
          
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Transparent web design packages for North Lakes businesses. Pick a package, book a visit, and we handle everything else.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
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
          className="mt-12 max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-10 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
              {/* Icon */}
              <div className="w-20 h-20 bg-brand-red/20 rounded-2xl flex items-center justify-center shrink-0">
                <Video className="w-10 h-10 text-brand-red" />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                    Add-On
                  </span>
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full">
                    2 Week Delivery
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-syne font-bold text-white mb-3">
                  Videography Package
                </h3>
                <p className="text-white/70 text-lg mb-4">
                  Cinematic header video and drone footage to make your website stand out. Your website launches in 48 hours with your professional photos as placeholders. We swap in the final videos when ready.
                </p>
                <ul className="flex flex-wrap gap-4 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <Play className="w-4 h-4 text-brand-red" />
                    Cinematic Header Video
                  </li>
                  <li className="flex items-center gap-2">
                    <Play className="w-4 h-4 text-brand-red" />
                    Drone Photography
                  </li>
                  <li className="flex items-center gap-2">
                    <Play className="w-4 h-4 text-brand-red" />
                    Drone Videography
                  </li>
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="lg:text-right shrink-0">
                <div className="flex items-baseline gap-1 mb-2 lg:justify-end">
                  <span className="text-white/60 text-lg">+$</span>
                  <span className="text-4xl md:text-5xl font-syne font-bold text-white">1,500</span>
                </div>
                <p className="text-white/50 text-sm mb-4">Add to any package</p>
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
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Hosting Included</p>
                <p className="text-sm text-gray-600">We set up everything. You do not need to buy hosting or worry about tech.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">5 Page Maximum</p>
                <p className="text-sm text-gray-600">We build fast "brochure" websites. Need a bigger site? Ask about custom projects.</p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            All prices in AUD. GST included. No surprise charges.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default PricingNorthLakes;

