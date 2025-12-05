import { motion } from 'framer-motion';
import { Target, Camera, Code, ArrowRight } from 'lucide-react';

const EXPERTISE_ITEMS = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Marketing Strategist',
    description: 'Your website is built to capture leads, not just look pretty. Every page has a purpose. Every button has a job.'
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: 'Photographer',
    description: 'Real photos of your North Lakes business shot on location. No more stock images that look fake and staged.'
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Web Designer',
    description: 'Fast loading pages that work on phones and computers. Your web design North Lakes customers will actually use.'
  }
];

const AuthorityNorthLakes = () => {
  return (
    <section className="bg-white py-24 md:py-32 border-t border-black/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-brand-red" />
              <span className="text-brand-red text-sm font-bold tracking-widest uppercase">
                Who You're Working With
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase tracking-tight leading-[0.95] mb-8">
              More Than Just a Web Designer
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 font-light leading-relaxed">
              <p>
                I run Red Ox Digital, a digital marketing consultancy based in Dakabin. I do not just build "pretty" sites. I build websites that bring you customers.
              </p>
              <p>
                When you hire me for web design in North Lakes, you get three experts rolled into one visit. No need to book a photographer. No need to hire a copywriter. No need to find a separate developer.
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
              className="mt-10 inline-flex items-center gap-4 p-4 bg-neutral-50 rounded-xl border border-black/5"
            >
              <div className="w-14 h-14 bg-brand-red rounded-xl flex items-center justify-center">
                <span className="text-white font-syne font-bold text-xl">RO</span>
              </div>
              <div>
                <p className="font-syne font-bold text-lg">Red Ox Digital</p>
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
                className="group relative p-6 md:p-8 bg-neutral-50 rounded-2xl border border-black/5 hover:bg-neutral-100 hover:border-brand-red/20 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    <span className="text-brand-red group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-syne font-bold uppercase mb-2 group-hover:text-brand-red transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-brand-red hidden md:block">
                    <ArrowRight className="w-5 h-5" />
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
              className="p-6 md:p-8 bg-gray-900 rounded-2xl text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-widest mb-1">You Get</p>
                  <p className="text-2xl md:text-3xl font-syne font-bold">3 Experts in 1 Visit</p>
                </div>
                <div className="text-6xl font-syne font-bold text-brand-red">3</div>
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AuthorityNorthLakes;

