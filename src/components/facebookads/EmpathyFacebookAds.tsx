import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EmpathyFacebookAds = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 items-center gap-16 bg-white px-6 py-24 md:grid-cols-2 md:px-12"
    >
      <div className="order-2 md:order-1">
        <h2 className="mb-8 font-syne text-4xl font-bold uppercase leading-tight md:text-5xl lg:text-6xl">
          Your Ads Should <br />
          <span className="text-[#E02020]">Work as Hard</span> <br />
          as You Do.
        </h2>
        <div className="space-y-6 text-lg font-light leading-relaxed text-gray-700">
          <p>
            It is annoying when you know your service is great, but your ads are hit-and-miss. You
            might be paying too much for clicks or struggling to reach the right people.
          </p>
          <p>
            We get it. The online world has changed. Just "boosting" a post is not enough for a
            strong business like yours anymore.
          </p>
          <p className="border-l-4 border-brand-red py-1 pl-4 font-normal text-gray-900">
            You are ready for a <span className="font-bold">Facebook Marketing Expert</span> who
            treats your money with respect. We help you stop guessing and start using a Strategic
            Media plan built for the modern Facebook system.
          </p>
        </div>
      </div>

      <div className="relative order-1 h-[500px] w-full overflow-hidden md:order-2 md:h-[600px]">
        <motion.div style={{ y }} className="absolute inset-0 -top-[10%] h-[120%] w-full">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
            alt="Team collaborating on Facebook Marketing strategy"
            className="h-full w-full object-cover contrast-125 grayscale"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 z-10 border-[20px] border-white" />
      </div>
    </section>
  );
};

export default EmpathyFacebookAds;

