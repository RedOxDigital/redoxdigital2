import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, ImageOff, Camera } from 'lucide-react';

const VisualProofNorthLakes = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderMove = (e) => {
    if (!isDragging) return;
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section className="bg-neutral-900 text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-brand-red" />
            <span className="text-brand-red text-sm font-bold tracking-widest uppercase">
              The Difference
            </span>
            <div className="w-12 h-[2px] bg-brand-red" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase tracking-tight leading-[0.95] mb-6">
            Stock Photos Lie.<br />Real Photos Sell.
          </h2>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            Customers can spot a fake from a mile away. Real photos of your North Lakes business build trust instantly.
          </p>
        </motion.div>

        {/* Comparison Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none"
          onMouseMove={handleSliderMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
        >
          {/* Stock Photo Side (Left - Underneath) */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
              alt="Generic stock photo of a tradesperson - looks fake and staged"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Stock Label */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-red-500/90 backdrop-blur-sm rounded-full mb-3">
                <X className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wider">Your Competitor</span>
              </div>
              <p className="text-white/80 text-sm md:text-base max-w-xs">
                Stock photo. American truck. Clean uniform. Nobody believes it.
              </p>
            </div>

            {/* Fake Badge */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full">
              <ImageOff className="w-4 h-4 text-red-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">Stock Photo</span>
            </div>
          </div>

          {/* Real Photo Side (Right - On Top with Clip) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2232&auto=format&fit=crop"
              alt="Real photo of an authentic local business - genuine and trustworthy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            
            {/* Real Label */}
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-right">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/90 backdrop-blur-sm rounded-full mb-3 justify-end">
                <Check className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wider">Your Business</span>
              </div>
              <p className="text-white/90 text-sm md:text-base max-w-xs">
                Real photos. Your team. Your work. Customers trust what they see.
              </p>
            </div>

            {/* Real Badge */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full">
              <Camera className="w-4 h-4 text-green-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-green-400">Real Photo</span>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize z-10"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="flex items-center gap-1">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-gray-800" />
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-gray-800" />
              </div>
            </div>
          </div>

          {/* Drag Instruction */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full">
            <span className="text-xs uppercase tracking-widest text-white/70">
              Drag to Compare
            </span>
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center mb-4">
              <Camera className="w-5 h-5 text-brand-red" />
            </div>
            <h3 className="text-lg font-syne font-bold uppercase mb-2">Professional Shots</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              We bring the camera. We capture your team, your workspace, and your finished work. No stock photos needed.
            </p>
          </div>

          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center mb-4">
              <Check className="w-5 h-5 text-brand-red" />
            </div>
            <h3 className="text-lg font-syne font-bold uppercase mb-2">Geo-Tagged Images</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Google ranks North Lakes businesses higher when photos are geo-tagged to your location. We include this standard with every web design package.
            </p>
          </div>

          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-brand-red font-bold">$0</span>
            </div>
            <h3 className="text-lg font-syne font-bold uppercase mb-2">No Extra Cost</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Photography is included in every package. Most web designers charge extra for this. We think it should be standard.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default VisualProofNorthLakes;

