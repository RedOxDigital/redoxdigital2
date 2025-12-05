import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Car } from 'lucide-react';

const LOCAL_FACTS = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: 'Based in Dakabin',
    description: 'Our studio is right here in the community. Not an interstate call center.'
  },
  {
    icon: <Car className="w-5 h-5" />,
    title: '5 Minute Drive',
    description: 'If you need us, we can be at your North Lakes business in minutes.'
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Same Day Visits',
    description: 'Need something urgent? We can often visit your shop the same day you call.'
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: 'Real Phone Number',
    description: 'Call and speak to a real person. No bots. No overseas support teams.'
  }
];

const LocalTrustNorthLakes = () => {
  return (
    <section className="bg-white py-24 md:py-32 border-t border-black/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Map Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
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
                <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
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
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-red/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-brand-red" />
              <span className="text-brand-red text-sm font-bold tracking-widest uppercase">
                Local Business
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase tracking-tight leading-[0.95] mb-8">
              Your Local Web Team
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 font-light leading-relaxed mb-10">
              <p>
                We are not a call center. We are not an overseas agency. We are based right here in Dakabin, serving North Lakes businesses every week.
              </p>
              <p>
                When you need help with your website, you get a real person who knows your area. Someone who can drive to your shop and fix problems face to face.
              </p>
              <p className="text-xl font-medium text-gray-900">
                If you need us, we are a 5 minute drive away.
              </p>
            </div>

            {/* Local Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LOCAL_FACTS.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group p-4 bg-neutral-50 rounded-xl border border-black/5 hover:bg-neutral-100 hover:border-brand-red/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                      {fact.icon}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1 text-sm">{fact.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{fact.description}</p>
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
          className="mt-16 md:mt-24 p-6 md:p-8 bg-gray-900 rounded-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Service Area</p>
              <p className="text-xl md:text-2xl font-syne font-bold text-white">
                Proudly Serving the Moreton Bay Region
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['North Lakes', 'Dakabin', 'Mango Hill', 'Kallangur', 'Griffin', 'Petrie'].map((suburb, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80 border border-white/10"
                >
                  {suburb}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LocalTrustNorthLakes;

