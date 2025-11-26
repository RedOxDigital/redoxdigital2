import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProblemHome = () => {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={ref} className="py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-5xl md:text-4xl lg:text-5xl font-syne font-bold uppercase mb-8 leading-tight">
                    RESULTS NOT <br/> 
                    <span className="text-[#E02020] relative inline-block">
                        EXCUSES
                        <motion.span
                            className="absolute left-0 top-[55%] w-full h-[4px] md:h-[5px] bg-black origin-left -translate-y-1/2 z-10"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, amount: 1, margin: "0px 0px -100px 0px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                        />
                    </span>
                </h2>
                <div className="space-y-6 text-lg text-gray-700 font-light">
                    <p>
                        In North Lakes, standing out is hard. Most agencies will tell you to just "spend more" or "shout louder." That isn't a strategy; that's a money pit.
                    </p>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <h3 className="text-3xl font-syne font-bold uppercase mb-6">Does This Resonate?</h3>
                    <div className="space-y-6">
                        <div className="pl-4 border-l-4 border-brand-red">
                            <p className="font-semibold text-gray-900 mb-1">The Empty Calendar <span className="text-brand-red">(Health)</span></p>
                            <p className="text-gray-700 font-light">Are you paying for clicks, but your appointment book still has gaps?</p>
                        </div>
                        <div className="pl-4 border-l-4 border-brand-red">
                            <p className="font-semibold text-gray-900 mb-1">The Cheap Leads <span className="text-brand-red">(Trades)</span></p>
                            <p className="text-gray-700 font-light">Are you sick of quoting for "tyre kickers" who only care about the cheapest price?</p>
                        </div>
                        <div className="pl-4 border-l-4 border-brand-red">
                            <p className="font-semibold text-gray-900 mb-1">The Referral Dry Spell <span className="text-brand-red">(Professional)</span></p>
                            <p className="text-gray-700 font-light">Has your "word-of-mouth" dried up, leaving you wondering where the next client is coming from?</p>
                        </div>
                    </div>
                    <p className="mt-8 text-xl font-semibold text-gray-900">
                        You don't need more noise. You need a Digital Strategy.
                    </p>
                </div>
            </div>
            
            <div className="relative h-[600px] w-full overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                    <img 
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop" 
                        alt="Digital Strategy Planning" 
                        className="w-full h-full object-cover grayscale contrast-125"
                    />
                </motion.div>
                <div className="absolute inset-0 border-[20px] border-[#F2F2F2] z-10 pointer-events-none" />
            </div>
        </section>
    )
}

export default ProblemHome;
