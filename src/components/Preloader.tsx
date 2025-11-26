import { motion } from 'framer-motion';

const Preloader = ({ setLoading }: { setLoading: (v: boolean) => void }) => {
    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-white flex flex-col justify-between p-6 md:p-12"
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
            <div className="flex justify-between items-start">
                <span className="font-syne font-bold text-xl uppercase">Red Ox</span>
                <span className="font-mono text-xs">EST 2024</span>
            </div>
            
            <div className="overflow-hidden">
                <motion.h1 
                    className="text-[12vw] leading-none font-bold font-syne uppercase text-black"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                >
                    Strategy
                </motion.h1>
                <motion.h1 
                    className="text-[12vw] leading-none font-bold font-syne uppercase text-[#E02020] text-right"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                    onAnimationComplete={() => setTimeout(() => setLoading(false), 1000)}
                >
                    Redefined
                </motion.h1>
            </div>

            <div className="flex justify-between items-end">
                <span className="text-xs uppercase tracking-widest">North Lakes / QLD</span>
                <motion.div 
                    className="h-1 bg-black"
                    initial={{ width: 0 }}
                    animate={{ width: "200px" }}
                    transition={{ duration: 1.5 }}
                />
            </div>
        </motion.div>
    )
}

export default Preloader;
