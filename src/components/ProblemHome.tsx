import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Animated counter with gradient transition
const AnimatedStat = ({ 
    targetValue, 
    countDirection, 
    label 
}: { 
    targetValue: number; 
    countDirection: 'up' | 'down'; 
    label: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [currentValue, setCurrentValue] = useState(countDirection === 'up' ? 0 : 100);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (!isInView) return;

        const startValue = countDirection === 'up' ? 0 : 100;
        const endValue = targetValue;
        const duration = 2000; // 2 seconds
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out cubic)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            let newValue: number;
            if (countDirection === 'up') {
                newValue = Math.round(startValue + (endValue - startValue) * easeOut);
            } else {
                newValue = Math.round(startValue - (startValue - endValue) * easeOut);
            }
            
            setCurrentValue(newValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setIsComplete(true);
            }
        };

        // Small delay before starting
        const timeout = setTimeout(() => {
            requestAnimationFrame(animate);
        }, 200);

        return () => clearTimeout(timeout);
    }, [isInView, targetValue, countDirection]);

    return (
        <div ref={ref}>
            <motion.h3 
                className="text-5xl font-syne font-bold mb-2"
                initial={{ color: '#1a1a1a' }}
                animate={isComplete ? { 
                    color: '#E02020',
                    textShadow: [
                        '0 0 0px rgba(224, 32, 32, 0)',
                        '0 0 20px rgba(224, 32, 32, 0.6)',
                        '0 0 10px rgba(224, 32, 32, 0.4)'
                    ]
                } : { 
                    color: '#1a1a1a',
                    textShadow: '0 0 0px rgba(224, 32, 32, 0)'
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {currentValue}%
            </motion.h3>
            <p className="text-xs uppercase tracking-widest text-black">{label}</p>
        </div>
    );
};

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
                        In North Lakes, standing out is hard. Most agencies just tell you to shout louder. As a Marketing Strategy Consultant, I don't do that. I help you speak the right language to your right people.
                    </p>
                    <p className="font-semibold text-gray-900">
                        Is your marketing a Money Pit?
                    </p>
                    <p>
                        Have you been told to "spend more" or "post more." That is just noise. Noise does not pay the bills.
                    </p>
                    <p>
                        As your Digital Marketing Consultant, I trade creative risks for hard facts. We don't just "run ads." We build complete Profit Ecosystems.
                    </p>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <h3 className="text-3xl font-syne font-bold uppercase mb-6">THE RESULTS</h3>
                    <div className="grid grid-cols-2 gap-8">
                        <AnimatedStat 
                            targetValue={100} 
                            countDirection="up" 
                            label="Focus on Profit" 
                        />
                        <AnimatedStat 
                            targetValue={0} 
                            countDirection="down" 
                            label="Wasted Ad Spend" 
                        />
                    </div>
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
