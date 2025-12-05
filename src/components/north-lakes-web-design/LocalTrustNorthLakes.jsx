import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Car } from 'lucide-react';

const LOCAL_FACTS = [
  {
    icon: <MapPin className="h-5 w-5" />,
    title: 'Based in Dakabin',
    description: 'Our studio is right here in the community. Not an interstate call center.',
  },
  {
    icon: <Car className="h-5 w-5" />,
    title: '5 Minute Drive',
    description: 'If you need us, we can be at your North Lakes business in minutes.',
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: 'Same Day Visits',
    description: 'Need something urgent? We can often visit your shop the same day you call.',
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: 'Real Phone Number',
    description: 'Call and speak to a real person. No bots. No overseas support teams.',
  },
];

const LocalTrustNorthLakes = () => {
  return (
    <section className="border-t border-black/10 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Map Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Google Maps Embed - North Lakes / Dakabin Area */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56544.98436451477!2d152.9684!3d-27.2408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b93e5f1a8c7c6a7%3A0x502a35af3de9c60!2sNorth%20Lakes%20QLD%204509!5e0!3m2!1sen!2sau!4v1699999999999!5m2!1sen!2sau"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Red Ox Digital Location - North Lakes Web Design"
                className="w-full"
              />

              {/* Map Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-xs">
                <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-lg">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-syne font-bold text-gray-900">Red Ox Digital</p>
                      <p className="text-sm text-gray-500">Dakabin, QLD</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Serving North Lakes, Mango Hill, Kallangur, and surrounding suburbs.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-4 -top-4 -z-10 h-24 w-24 rounded-full bg-brand-red/10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 -z-10 h-32 w-32 rounded-full bg-brand-red/5 blur-3xl" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
                Local Business
              </span>
            </div>

            <h2 className="mb-8 font-syne text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
              Your Local Web Team
            </h2>

            <div className="mb-10 space-y-6 text-lg font-light leading-relaxed text-gray-700">
              <p>
                We are not a call center. We are not an overseas agency. We are based right here in
                Dakabin, serving North Lakes businesses every week.
              </p>
              <p>
                When you need help with your website, you get a real person who knows your area.
                Someone who can drive to your shop and fix problems face to face.
              </p>
              <p className="text-xl font-medium text-gray-900">
                If you need us, we are a 5 minute drive away.
              </p>
            </div>

            {/* Local Facts Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {LOCAL_FACTS.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group rounded-xl border border-black/5 bg-neutral-50 p-4 transition-all duration-300 hover:border-brand-red/20 hover:bg-neutral-100"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand-red shadow-sm transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
                      {fact.icon}
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-bold text-gray-900">{fact.title}</p>
                      <p className="text-sm leading-relaxed text-gray-600">{fact.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Service Area Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 rounded-2xl bg-gray-900 p-6 md:mt-24 md:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-sm uppercase tracking-widest text-white/60">Service Area</p>
              <p className="font-syne text-xl font-bold text-white md:text-2xl">
                Proudly Serving the Moreton Bay Region
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['North Lakes', 'Dakabin', 'Mango Hill', 'Kallangur', 'Griffin', 'Petrie'].map(
                (suburb, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80"
                  >
                    {suburb}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalTrustNorthLakes;
