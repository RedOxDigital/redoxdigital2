import { motion } from 'framer-motion';
import { CheckCircle, Camera, Globe, Settings, Link2, Zap, Shield } from 'lucide-react';
import { ContactButton } from '../ContactFormModal';

const INCLUSIONS = [
  {
    icon: <Camera className="h-5 w-5" />,
    title: 'On Site Strategy & Photo Shoot',
    description: 'We drive to you. We plan your pages. We take all the photos.',
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: '6 Page High Speed Microsite',
    description: 'Custom built for 100/100 speed score. Fast sites win.',
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: 'Google Ads Account Restructure',
    description: 'We set up your Sitelink Extensions so your ad doubles in size.',
  },
  {
    icon: <Link2 className="h-5 w-5" />,
    title: 'Job Software Integration',
    description: 'Connect to ServiceM8, Simpro, Tradify, or Fergus.',
  },
];

const GUARANTEES = [
  'No lock in contracts',
  'You own everything we build',
  'Results in 30 days or we fix it free',
];

const OfferAdRealEstate = () => {
  return (
    <section className="border-t border-black/10 bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Side: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-[2px] w-12 bg-[#E02020]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] md:text-sm">
                The Offer
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
              The Ad Real Estate <br />
              <span className="animate-gradient bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% bg-clip-text text-transparent">
                Overhaul
              </span>
            </motion.h2>

            {/* Body Copy - Money keywords go here */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl space-y-6 text-lg font-light leading-relaxed text-gray-600"
            >
              <p>
                This is not a cost. This is an investment in an asset that works for you every
                single day. Most tradies spend money on ads that disappear. You are building
                something that stays.
              </p>
              <p>
                With proper <span className="font-bold text-brand-red">Google Ads for Tradies</span>
                , your ad becomes twice as big. Your competitors get pushed down. You get the calls.
              </p>
            </motion.div>

            {/* Inclusions List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 space-y-4"
            >
              {INCLUSIONS.map((item, index) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 bg-[#F2F2F2] p-4 transition-colors duration-300 hover:bg-[#E02020]/5"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#1a1a1a] transition-colors duration-300 group-hover:bg-[#E02020] group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-syne font-bold uppercase text-[#1a1a1a] transition-colors group-hover:text-[#E02020]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Pricing Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="relative overflow-hidden bg-[#1a1a1a] p-8 text-white md:p-10">
              {/* Corner Accent */}
              <div className="absolute right-0 top-0 h-24 w-24 bg-[#E02020]" />
              <div
                className="w-18 h-18 absolute right-3 top-3 bg-[#1a1a1a]"
                style={{ width: '72px', height: '72px' }}
              />

              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 bg-[#E02020] px-4 py-2 text-white">
                <Zap className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  North Lakes Pilot
                </span>
              </div>

              {/* Package Name */}
              <h3 className="mb-6 font-syne text-2xl font-bold uppercase md:text-3xl">
                Complete Package
              </h3>

              {/* Price */}
              <div className="mb-8">
                <div className="mb-2 flex items-baseline gap-2">
                  <span className="font-syne text-5xl font-bold text-[#E02020] md:text-6xl">
                    $2,500
                  </span>
                  <span className="text-lg text-gray-400">setup</span>
                </div>
                <p className="text-gray-400">+ Monthly management from $750/month</p>
              </div>

              {/* What's Included Quick List */}
              <ul className="mb-8 space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#E02020]" />
                  <span className="text-gray-300">Site visit and photo shoot</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#E02020]" />
                  <span className="text-gray-300">6 page microsite build</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#E02020]" />
                  <span className="text-gray-300">Google Ads restructure</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#E02020]" />
                  <span className="text-gray-300">Job software integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#E02020]" />
                  <span className="text-gray-300">Monthly reporting</span>
                </li>
              </ul>

              {/* CTA */}
              <ContactButton variant="primary" className="w-full justify-center">
                Book My Site Visit
              </ContactButton>

              {/* Guarantees */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#E02020]" />
                  <span className="text-sm font-bold uppercase tracking-widest">Guarantees</span>
                </div>
                <ul className="space-y-2">
                  {GUARANTEES.map((guarantee, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#E02020]" />
                      {guarantee}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-center text-sm text-gray-500"
            >
              This is what professional{' '}
              <span className="font-bold text-gray-700">Web Design for Tradies North Brisbane</span>{' '}
              looks like.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfferAdRealEstate;


