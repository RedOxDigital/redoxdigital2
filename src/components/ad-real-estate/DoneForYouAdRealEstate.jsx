import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Truck, MapPin, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "We Come To You",
    description: "We drive to your job site or workshop. You do not need to leave your work."
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "We Capture Everything",
    description: "Your team, your trucks, your tools, your best finished jobs. Real photos of real work."
  },
  {
    icon: <Truck className="w-5 h-5" />,
    title: "We Build Your Engine",
    description: "We take those photos back and build your 6 page Sitelink Engine. You focus on jobs."
  }
];

const DoneForYouAdRealEstate = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white border-t border-black/10">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left Side - Image with Parallax */}
          <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden order-2 md:order-1">
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop" 
                alt="Tradie at work site ready for professional photos" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </motion.div>
            <div className="absolute inset-0 border-[20px] border-white z-10 pointer-events-none" />
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-8 left-8 md:bottom-12 md:left-12 bg-[#E02020] text-white px-6 py-4 z-20 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <Camera className="w-5 h-5" />
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
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[2px] bg-[#E02020]" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E02020]">
                Done For You
              </span>
            </motion.div>

            {/* H2 - NO money keywords */}
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase mb-8 leading-tight"
            >
              You Are A Tradie, <br/>
              <span className="text-[#E02020]">Not A Photographer.</span>
            </motion.h2>

            {/* Body Copy - Money keywords go here */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-gray-700 font-light leading-relaxed"
            >
              <p>
                Most agencies send you a list and ask you to gather photos, write your story, and send them files. 
                You are too busy running a business for that.
              </p>
              <p>
                We do things different. We drive to your job site in North Lakes or North Brisbane. 
                We capture everything we need for your{" "}
                <span className="font-bold text-brand-red">Web Design for Tradies North Brisbane</span> pages.
              </p>
              <p className="font-normal text-gray-900 border-l-4 border-brand-red pl-4 py-1">
                We get what we need. You get the screen real estate. That is how a real{" "}
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
                  className="flex items-start gap-4 p-4 bg-[#F2F2F2] hover:bg-[#E02020]/5 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#E02020] group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-syne font-bold uppercase text-[#1a1a1a] group-hover:text-[#E02020] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      {step.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#E02020] ml-auto flex-shrink-0 mt-2 transition-colors" />
                </div>
              ))}
            </motion.div>

            {/* Local Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center gap-4 p-4 bg-[#1a1a1a] text-white"
            >
              <MapPin className="w-6 h-6 text-[#E02020]" />
              <div>
                <p className="font-bold text-sm uppercase">North Lakes Based</p>
                <p className="text-gray-400 text-xs">
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

