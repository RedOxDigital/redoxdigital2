import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EmpathyFacebookAds = () => {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={ref} className="py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-white">
             <div className="order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase mb-8 leading-tight">
                    Your Ads Should <br/>
                    <span className="text-[#E02020]">Work as Hard</span> <br/>
                    as You Do.
                </h2>
                <div className="space-y-6 text-lg text-gray-700 font-light leading-relaxed">
                    <p>
                        It is annoying when you know your service is great, but your ads are hit-and-miss. You might be paying too much for clicks or struggling to reach the right people.
                    </p>
                    <p>
                        We get it. The online world has changed. Just "boosting" a post is not enough for a strong business like yours anymore.
                    </p>
                    <p className="font-normal text-gray-900 border-l-4 border-brand-red pl-4 py-1">
                        You are ready for a <span className="font-bold">Facebook Marketing Expert</span> who treats your money with respect. We help you stop guessing and start using a Strategic Media plan built for the modern Facebook system.
                    </p>
                </div>
            </div>
            
            <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden order-1 md:order-2">
                <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
                        alt="Team collaborating on Facebook Marketing strategy" 
                        className="w-full h-full object-cover grayscale contrast-125"
                    />
                </motion.div>
                <div className="absolute inset-0 border-[20px] border-white z-10 pointer-events-none" />
            </div>
        </section>
    )
}

export default EmpathyFacebookAds;


