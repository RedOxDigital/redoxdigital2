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
    <section className="overflow-hidden bg-neutral-900 py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:mb-20"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-[2px] w-12 bg-brand-red" />
            <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
              The Difference
            </span>
            <div className="h-[2px] w-12 bg-brand-red" />
          </div>
          <h2 className="mb-6 font-syne text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
            Stock Photos Lie.
            <br />
            Real Photos Sell.
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-light text-white/70">
            Customers can spot a fake from a mile away. Real photos of your North Lakes business
            build trust instantly.
          </p>
        </motion.div>

        {/* Comparison Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl md:aspect-[21/9]"
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
              className="h-full w-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/30" />

            {/* Stock Label */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <div className="mb-3 flex items-center gap-2 rounded-full bg-red-500/90 px-4 py-2 backdrop-blur-sm">
                <X className="h-4 w-4" />
                <span className="text-sm font-bold uppercase tracking-wider">Your Competitor</span>
              </div>
              <p className="max-w-xs text-sm text-white/80 md:text-base">
                Stock photo. American truck. Clean uniform. Nobody believes it.
              </p>
            </div>

            {/* Fake Badge */}
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm md:left-10 md:top-10">
              <ImageOff className="h-4 w-4 text-red-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                Stock Photo
              </span>
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
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />

            {/* Real Label */}
            <div className="absolute bottom-6 right-6 text-right md:bottom-10 md:right-10">
              <div className="mb-3 flex items-center justify-end gap-2 rounded-full bg-green-500/90 px-4 py-2 backdrop-blur-sm">
                <Check className="h-4 w-4" />
                <span className="text-sm font-bold uppercase tracking-wider">Your Business</span>
              </div>
              <p className="max-w-xs text-sm text-white/90 md:text-base">
                Real photos. Your team. Your work. Customers trust what they see.
              </p>
            </div>

            {/* Real Badge */}
            <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm md:right-10 md:top-10">
              <Camera className="h-4 w-4 text-green-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-green-400">
                Real Photo
              </span>
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute bottom-0 top-0 z-10 w-1 cursor-ew-resize bg-white shadow-2xl"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
              <div className="flex items-center gap-1">
                <div className="h-0 w-0 border-b-[6px] border-r-[8px] border-t-[6px] border-b-transparent border-r-gray-800 border-t-transparent" />
                <div className="h-0 w-0 border-b-[6px] border-l-[8px] border-t-[6px] border-b-transparent border-l-gray-800 border-t-transparent" />
              </div>
            </div>
          </div>

          {/* Drag Instruction */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-widest text-white/70">Drag to Compare</span>
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8"
        >
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/20">
              <Camera className="h-5 w-5 text-brand-red" />
            </div>
            <h3 className="mb-2 font-syne text-lg font-bold uppercase">Professional Shots</h3>
            <p className="text-sm leading-relaxed text-white/60">
              We bring the camera. We capture your team, your workspace, and your finished work. No
              stock photos needed.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/20">
              <Check className="h-5 w-5 text-brand-red" />
            </div>
            <h3 className="mb-2 font-syne text-lg font-bold uppercase">Geo-Tagged Images</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Google ranks North Lakes businesses higher when photos are geo-tagged to your
              location. We include this standard with every web design package.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/20">
              <span className="font-bold text-brand-red">$0</span>
            </div>
            <h3 className="mb-2 font-syne text-lg font-bold uppercase">No Extra Cost</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Photography is included in every package. Most web designers charge extra for this. We
              think it should be standard.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualProofNorthLakes;

