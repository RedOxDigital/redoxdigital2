import { motion } from 'framer-motion';
import { Target, Camera, Code, ArrowRight } from 'lucide-react';

const EXPERTISE_ITEMS = [
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Marketing Strategist',
    description:
      'Your website is built to capture leads, not just look pretty. Every page has a purpose. Every button has a job.',
  },
  {
    icon: <Camera className="h-6 w-6" />,
    title: 'Photographer',
    description:
      'Real photos of your North Lakes business shot on location. No more stock images that look fake and staged.',
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Web Designer',
    description:
      'Fast loading pages that work on phones and computers. Your web design North Lakes customers will actually use.',
  },
];

const AuthorityNorthLakes = () => {
  return (
    <section className="border-t border-black/10 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
                Who You're Working With
              </span>
            </div>

            <h2 className="mb-8 font-syne text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
              More Than Just a Web Designer
            </h2>

            <div className="space-y-6 text-lg font-light leading-relaxed text-gray-700">
              <p>
                I run Red Ox Digital, a digital marketing consultancy based in Dakabin. I do not
                just build "pretty" sites. I build websites that bring you customers.
              </p>
              <p>
                When you hire me for web design in North Lakes, you get three experts rolled into
                one visit. No need to book a photographer. No need to hire a copywriter. No need to
                find a separate developer.
              </p>
              <p className="text-xl font-medium text-gray-900">
                One visit. One price. Everything handled.
              </p>
            </div>

            {/* Red Ox Digital Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 inline-flex items-center gap-4 rounded-xl border border-black/5 bg-neutral-50 p-4"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red">
                <span className="font-syne text-xl font-bold text-white">RO</span>
              </div>
              <div>
                <p className="font-syne text-lg font-bold">Red Ox Digital</p>
                <p className="text-sm text-gray-500">Digital Marketing Consultant</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Expertise Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {EXPERTISE_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="group relative rounded-2xl border border-black/5 bg-neutral-50 p-6 transition-all duration-300 hover:border-brand-red/20 hover:bg-neutral-100 md:p-8"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
                    <span className="text-brand-red transition-colors duration-300 group-hover:text-white">
                      {item.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-2 font-syne text-xl font-bold uppercase transition-colors duration-300 group-hover:text-brand-red">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">{item.description}</p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden -translate-x-2 text-brand-red opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Summary Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl bg-gray-900 p-6 text-white md:p-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="mb-1 text-sm uppercase tracking-widest text-white/60">You Get</p>
                  <p className="font-syne text-2xl font-bold md:text-3xl">3 Experts in 1 Visit</p>
                </div>
                <div className="font-syne text-6xl font-bold text-brand-red">3</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityNorthLakes;



