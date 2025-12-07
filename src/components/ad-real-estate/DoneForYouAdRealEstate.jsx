import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Truck, MapPin, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    icon: <MapPin className="h-5 w-5" />,
    title: 'We Come To You',
    description: 'We drive to your job site or workshop. You do not need to leave your work.',
  },
  {
    icon: <Camera className="h-5 w-5" />,
    title: 'We Capture Everything',
    description:
      'Your team, your trucks, your tools, your best finished jobs. Real photos of real work.',
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: 'We Build Your Engine',
    description:
      'We take those photos back and build your 6 page Sitelink Engine. You focus on jobs.',
  },
];

const DoneForYouAdRealEstate = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="border-t border-black/10 bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Side - Image with Parallax */}
          <div className="relative order-2 h-[400px] w-full overflow-hidden md:order-1 md:h-[600px]">
            <motion.div style={{ y }} className="absolute inset-0 -top-[10%] h-[120%] w-full">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop"
                alt="Tradie at work site ready for professional photos"
                className="h-full w-full object-cover contrast-125 grayscale"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 z-10 border-[20px] border-white" />

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-8 left-8 z-20 bg-[#E02020] px-6 py-4 text-white shadow-xl md:bottom-12 md:left-12"
            >
              <div className="flex items-center gap-3">
                <Camera className="h-5 w-5" />
                <span className="text-sm font-bold uppercase tracking-widest">
                  We Handle The Photos
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-[2px] w-12 bg-[#E02020]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] md:text-sm">
                Done For You
              </span>
            </motion.div>

            {/* H2 - NO money keywords */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8 font-syne text-4xl font-bold uppercase leading-tight md:text-5xl lg:text-6xl"
            >
              You Are A Tradie, <br />
              <span className="text-[#E02020]">Not A Photographer.</span>
            </motion.h2>

            {/* Body Copy - Money keywords go here */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg font-light leading-relaxed text-gray-700"
            >
              <p>
                Most agencies send you a list and ask you to gather photos, write your story, and
                send them files. You are too busy running a business for that.
              </p>
              <p>
                We do things different. We drive to your job site in North Lakes or North Brisbane.
                We capture everything we need for your{' '}
                <span className="font-bold text-brand-red">
                  Web Design for Tradies North Brisbane
                </span>{' '}
                pages.
              </p>
              <p className="border-l-4 border-brand-red py-1 pl-4 font-normal text-gray-900">
                We get what we need. You get the screen real estate. That is how a real{' '}
                <span className="font-bold">Plumber Marketing Agency</span> should work.
              </p>
            </motion.div>

            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 space-y-4"
            >
              {STEPS.map((step, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 bg-[#F2F2F2] p-4 transition-colors duration-300 hover:bg-[#E02020]/5"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white transition-colors duration-300 group-hover:bg-[#E02020] group-hover:text-white">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-syne font-bold uppercase text-[#1a1a1a] transition-colors group-hover:text-[#E02020]">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">{step.description}</p>
                  </div>
                  <ArrowRight className="ml-auto mt-2 h-5 w-5 flex-shrink-0 text-gray-300 transition-colors group-hover:text-[#E02020]" />
                </div>
              ))}
            </motion.div>

            {/* Local Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center gap-4 bg-[#1a1a1a] p-4 text-white"
            >
              <MapPin className="h-6 w-6 text-[#E02020]" />
              <div>
                <p className="text-sm font-bold uppercase">North Lakes Based</p>
                <p className="text-xs text-gray-400">
                  We are not in a call centre. We are down the road.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoneForYouAdRealEstate;

