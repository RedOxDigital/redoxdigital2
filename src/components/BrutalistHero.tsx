import React, { useEffect, useRef } from 'react';

// --- Configuration ---
const textConfig = {
  // Desktop layout (2 rows)
  desktop: {
    row1: { before: 'STRATEGIC', after: 'WEB DESIGN', hasImage: true },
    row2: { before: 'PERFORMANCE', after: 'MEDIA', hasImage: true },
  },
  // Mobile layout (4 rows)
  mobile: {
    row1: { text: 'STRATEGIC', hasImage: false },
    row2: { before: 'WEB', after: 'DESIGN', hasImage: true },
    row3: { text: 'PERFORMANCE', hasImage: false },
    row4: { before: '', after: 'MEDIA', hasImage: true }, // Image before MEDIA
  },
  fontFamily: "'Anton', sans-serif",
};

// Images for the Top Row (Web Design / Tech feel)
// Using local images with WebP primary and JPG fallback
const topImageUrls = [
  '/images/hero/brutalist-hero-top-01.webp', // EnchanceMEDWeb3
  '/images/hero/brutalist-hero-top-02.webp', // ModiahealthWeb1
  '/images/hero/brutalist-hero-top-03.webp', // searchrightWeb4
  '/images/hero/brutalist-hero-top-04.webp', // SEQMEDWeb2
];

// JPG fallbacks for browsers that don't support WebP
const topImageUrlsFallback = [
  '/images/hero/brutalist-hero-top-01.jpg',
  '/images/hero/brutalist-hero-top-02.jpg',
  '/images/hero/brutalist-hero-top-03.jpg',
  '/images/hero/brutalist-hero-top-04.jpg',
];

// Images for the Bottom Row (Architecture / Spaces)
// Using local images with WebP primary and JPG fallback
const bottomImageUrls = [
  '/images/hero/brutalist-hero-bottom-01.webp', // Concertrehero1
  '/images/hero/brutalist-hero-bottom-02.webp', // Meetinghero2
  '/images/hero/brutalist-hero-bottom-03.webp', // ultrasoundhero3
  '/images/hero/brutalist-hero-bottom-04.webp', // Waterhero4
];

// JPG fallbacks for browsers that don't support WebP
const bottomImageUrlsFallback = [
  '/images/hero/brutalist-hero-bottom-01.jpg',
  '/images/hero/brutalist-hero-bottom-02.jpg',
  '/images/hero/brutalist-hero-bottom-03.jpg',
  '/images/hero/brutalist-hero-bottom-04.jpg',
];

const BrutalistHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Refs to hold mutable state without triggering re-renders
  const stateRef = useRef({
    topImages: [] as HTMLImageElement[],
    bottomImages: [] as HTMLImageElement[],
    loadedCount: 0,
    currentIndex: 0,
    lastSwitchTime: 0,
    switchInterval: 3000, // Slower transitions (3 seconds)
    scale: 1,
    topAspectRatio: 1.0,
    bottomAspectRatio: 16 / 9,
    // Animation states for smooth transitions
    topAspectRatioTarget: 1.0,
    bottomAspectRatioTarget: 16 / 9,
    transitionProgress: 1, // 0 to 1, controls interpolation
    imageOpacity: 1, // For fade effects
    gradientOffset: 0, // For animated gradient
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load Font
    // We assume 'Anton' is loaded via Google Fonts in index.html or CSS
    // Check for font readiness before starting loop if possible, or just let it render

    // --- Asset Loading ---
    const loadImages = () => {
      const state = stateRef.current;
      
      // Clear existing images to avoid duplicates on hot reload if effect runs again
      state.topImages = [];
      state.bottomImages = [];

      topImageUrls.forEach((url, index) => {
        const img = new Image();
        // Try WebP first, fallback to JPG if WebP fails
        img.src = url;
        img.onerror = () => {
          // Fallback to JPG if WebP fails
          img.src = topImageUrlsFallback[index];
        };
        img.onload = () => state.loadedCount++;
        state.topImages.push(img);
      });

      bottomImageUrls.forEach((url, index) => {
        const img = new Image();
        // Try WebP first, fallback to JPG if WebP fails
        img.src = url;
        img.onerror = () => {
          // Fallback to JPG if WebP fails
          img.src = bottomImageUrlsFallback[index];
        };
        img.onload = () => state.loadedCount++;
        state.bottomImages.push(img);
      });
    };

    // --- Helper: Draw Dynamic Image with Crossfade ---
    const drawDynamicImage = (
      img: HTMLImageElement,
      prevImg: HTMLImageElement | null,
      x: number,
      y: number,
      width: number,
      height: number,
      fadeProgress: number
    ) => {
      if (!img || !img.complete) return;

      ctx.save();
      // Background placeholder
      ctx.fillStyle = '#eee';
      ctx.fillRect(x, y, width, height);

      // Draw previous image fading out
      if (prevImg && prevImg.complete && fadeProgress < 1) {
        const prevOpacity = 1 - fadeProgress;
        ctx.globalAlpha = prevOpacity;
        drawImageCover(prevImg, x, y, width, height);
      }

      // Draw current image fading in
      ctx.globalAlpha = fadeProgress;
      drawImageCover(img, x, y, width, height);
      
      ctx.restore();
    };

    // Helper function for object-fit: cover
    const drawImageCover = (
      img: HTMLImageElement,
      x: number,
      y: number,
      width: number,
      height: number
    ) => {
      const aspect = img.width / img.height;
      const targetAspect = width / height;
      let sx, sy, sWidth, sHeight;

      if (aspect > targetAspect) {
        sHeight = img.height;
        sWidth = img.height * targetAspect;
        sx = (img.width - sWidth) / 2;
        sy = 0;
      } else {
        sWidth = img.width;
        sHeight = img.width / targetAspect;
        sx = 0;
        sy = (img.height - sHeight) / 2;
      }

      ctx.drawImage(img, sx, sy, sWidth, sHeight, x, y, width, height);
    };

    // Helper: Draw text with animated gradient
    const drawGradientText = (
      text: string,
      x: number,
      y: number,
      width: number
    ) => {
      const state = stateRef.current;
      
      // Create animated gradient
      const gradientWidth = width * 3; // Make gradient 3x wider for smooth animation
      const offset = state.gradientOffset % gradientWidth;
      
      const gradient = ctx.createLinearGradient(
        x - offset,
        y,
        x - offset + gradientWidth,
        y
      );
      
      // Gradient stops: black -> black -> red -> black (for smooth loop)
      gradient.addColorStop(0, '#1a1a1a');
      gradient.addColorStop(0.3, '#1a1a1a');
      gradient.addColorStop(0.5, '#E02020');
      gradient.addColorStop(0.7, '#1a1a1a');
      gradient.addColorStop(1, '#1a1a1a');
      
      ctx.fillStyle = gradient;
      ctx.fillText(text, x, y);
      
      // Reset to black for other text
      ctx.fillStyle = 'black';
    };

    const draw = () => {
      const state = stateRef.current;
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width / state.scale, canvas.height / state.scale);

      const w = canvas.width / state.scale;
      const h = canvas.height / state.scale;

      // Detect mobile viewport (iPhone reference: ~390px width)
      const isMobile = w < 768; // Tailwind md breakpoint

      // --- 1. Typography & Layout Settings ---
      const fontSize = isMobile 
        ? Math.min(w * 0.15, h * 0.15) // Relaxed height constraint
        : Math.min(w * 0.08, h * 0.4); // Relaxed height constraint

      ctx.font = `${fontSize}px ${textConfig.fontFamily}`;
      ctx.textBaseline = 'alphabetic';

      const gap = isMobile ? fontSize * 0.15 : fontSize * 0.2; // Tighter gap on mobile

      // --- 2. Vertical Alignment Math ---
      const capHeight = fontSize * 0.74;
      const imgHeight = fontSize * 0.9;

      const textBaselineOffset = capHeight / 2;
      // For all-caps text, visual center is higher than baseline center
      // Adjust image offset to match the optical center of caps
      const imgYOffset = imgHeight * 0.55; 

      // Calculate dynamic widths - use max aspect ratio for safety on mobile
      const topImgWidth = isMobile 
        ? imgHeight * Math.min(state.topAspectRatio, 1.4) 
        : imgHeight * state.topAspectRatio;
      const bottomImgWidth = isMobile
        ? imgHeight * Math.min(state.bottomAspectRatio, 1.4) 
        : imgHeight * state.bottomAspectRatio;

      ctx.fillStyle = 'black';

      if (isMobile) {
        // Mobile layout: 4 rows (optimized for iPhone)
        const rowSpacing = fontSize * 0.95;
        const centerX = w / 2;
        const startY = h * 0.35; // Moved up to avoid covering subtext

        // Row 1: STRATEGIC (no image)
        const row1Y = startY;
        const mRow1 = ctx.measureText(textConfig.mobile.row1.text);
        ctx.fillText(textConfig.mobile.row1.text, centerX - mRow1.width / 2, row1Y + textBaselineOffset);

        // Row 2: WEB [IMAGE] DESIGN
        const row2Y = row1Y + rowSpacing;
        const mRow2Before = ctx.measureText(textConfig.mobile.row2.before);
        const mRow2After = ctx.measureText(textConfig.mobile.row2.after);
        const row2TotalWidth = mRow2Before.width + gap + topImgWidth + gap + mRow2After.width;
        let startX = centerX - row2TotalWidth / 2;
        
        ctx.fillText(textConfig.mobile.row2.before, startX, row2Y + textBaselineOffset);
        startX += mRow2Before.width + gap;
        
        if (state.topImages.length > 0) {
          const currentIdx = state.currentIndex % state.topImages.length;
          const prevIdx = (state.currentIndex - 1 + state.topImages.length) % state.topImages.length;
          const img = state.topImages[currentIdx];
          const prevImg = state.topImages[prevIdx];
          const fadeProgress = Math.min(1, state.transitionProgress * 2);
          drawDynamicImage(img, prevImg, startX, row2Y - imgYOffset, topImgWidth, imgHeight, fadeProgress);
        }
        startX += topImgWidth + gap;
        
        drawGradientText(textConfig.mobile.row2.after, startX, row2Y + textBaselineOffset, mRow2After.width);

        // Row 3: PERFORMANCE (no image)
        const row3Y = row2Y + rowSpacing;
        const mRow3 = ctx.measureText(textConfig.mobile.row3.text);
        ctx.fillText(textConfig.mobile.row3.text, centerX - mRow3.width / 2, row3Y + textBaselineOffset);

        // Row 4: [IMAGE] MEDIA
        const row4Y = row3Y + rowSpacing;
        const mRow4After = ctx.measureText(textConfig.mobile.row4.after);
        const row4TotalWidth = bottomImgWidth + gap + mRow4After.width;
        startX = centerX - row4TotalWidth / 2;
        
        if (state.bottomImages.length > 0) {
          const currentIdx = state.currentIndex % state.bottomImages.length;
          const prevIdx = (state.currentIndex - 1 + state.bottomImages.length) % state.bottomImages.length;
          const img = state.bottomImages[currentIdx];
          const prevImg = state.bottomImages[prevIdx];
          const fadeProgress = Math.min(1, state.transitionProgress * 2);
          drawDynamicImage(img, prevImg, startX, row4Y - imgYOffset, bottomImgWidth, imgHeight, fadeProgress);
        }
        startX += bottomImgWidth + gap;
        
        drawGradientText(textConfig.mobile.row4.after, startX, row4Y + textBaselineOffset, mRow4After.width);
        
      } else {
        // Desktop layout: 2 rows (original)
        const rowSpacing = fontSize * 0.95;
        const centerX = w / 2;
        const centerY = h * 0.45; // Adjusted for shorter container (was 0.30)
        const row1CenterY = centerY - rowSpacing / 1.7;
        const row2CenterY = centerY + rowSpacing / 1.7;

        // --- 5. Render Row 1 (Top) ---
        const mTop1 = ctx.measureText(textConfig.desktop.row1.before);
        const mTop2 = ctx.measureText(textConfig.desktop.row1.after);
        const row1TotalWidth = mTop1.width + gap + topImgWidth + gap + mTop2.width;
        let startX = centerX - row1TotalWidth / 2;

        ctx.fillText(textConfig.desktop.row1.before, startX, row1CenterY + textBaselineOffset);
        startX += mTop1.width + gap;

        // Draw Image
        if (state.topImages.length > 0) {
          const currentIdx = state.currentIndex % state.topImages.length;
          const prevIdx = (state.currentIndex - 1 + state.topImages.length) % state.topImages.length;
          const img = state.topImages[currentIdx];
          const prevImg = state.topImages[prevIdx];
          const fadeProgress = Math.min(1, state.transitionProgress * 2);
          drawDynamicImage(img, prevImg, startX, row1CenterY - imgYOffset, topImgWidth, imgHeight, fadeProgress);
        }
        startX += topImgWidth + gap;

        drawGradientText(textConfig.desktop.row1.after, startX, row1CenterY + textBaselineOffset, mTop2.width);

        // --- 6. Render Row 2 (Bottom) ---
        const mBot1 = ctx.measureText(textConfig.desktop.row2.before);
        const mBot2 = ctx.measureText(textConfig.desktop.row2.after);
        const row2TotalWidth = mBot1.width + gap + bottomImgWidth + gap + mBot2.width;
        startX = centerX - row2TotalWidth / 2;

        ctx.fillText(textConfig.desktop.row2.before, startX, row2CenterY + textBaselineOffset);
        startX += mBot1.width + gap;

        // Draw Image
        if (state.bottomImages.length > 0) {
          const currentIdx = state.currentIndex % state.bottomImages.length;
          const prevIdx = (state.currentIndex - 1 + state.bottomImages.length) % state.bottomImages.length;
          const img = state.bottomImages[currentIdx];
          const prevImg = state.bottomImages[prevIdx];
          const fadeProgress = Math.min(1, state.transitionProgress * 2);
          drawDynamicImage(img, prevImg, startX, row2CenterY - imgYOffset, bottomImgWidth, imgHeight, fadeProgress);
        }
        startX += bottomImgWidth + gap;

        drawGradientText(textConfig.desktop.row2.after, startX, row2CenterY + textBaselineOffset, mBot2.width);
      }
    };

    const resize = () => {
      const state = stateRef.current;
      const dpr = window.devicePixelRatio || 1;
      // Use parent container dimensions if possible, or window
      // Ideally this component takes up 100% of its container
      const parent = canvas.parentElement;
      if (parent) {
          canvas.width = parent.clientWidth * dpr;
          canvas.height = parent.clientHeight * dpr;
          canvas.style.width = `${parent.clientWidth}px`;
          canvas.style.height = `${parent.clientHeight}px`;
      } else {
          canvas.width = window.innerWidth * dpr;
          canvas.height = window.innerHeight * dpr;
          canvas.style.width = `${window.innerWidth}px`;
          canvas.style.height = `${window.innerHeight}px`;
      }
      
      ctx.scale(dpr, dpr);
      state.scale = dpr;
      
      // Redraw immediately on resize
      draw();
    };

    let animationFrameId: number;

    const loop = () => {
      const state = stateRef.current;
      const now = Date.now();
      const deltaTime = now - state.lastSwitchTime;

      // Animate gradient continuously
      state.gradientOffset += 2; // Adjust speed (higher = faster)

      // Check if it's time to switch images
      if (deltaTime > state.switchInterval) {
        state.currentIndex++;

        // Set new target aspect ratios
        const minRatio = 1.0;
        const maxRatio = 1.8;

        state.topAspectRatioTarget = minRatio + Math.random() * (maxRatio - minRatio);
        state.bottomAspectRatioTarget = minRatio + Math.random() * (maxRatio - minRatio);

        state.lastSwitchTime = now;
        state.transitionProgress = 0; // Reset transition
      }

      // Smooth interpolation of aspect ratios (easing)
      if (state.transitionProgress < 1) {
        state.transitionProgress = Math.min(1, state.transitionProgress + 0.02); // Adjust speed here
        
        // Ease-in-out function for smooth animation
        const easeProgress = state.transitionProgress < 0.5
          ? 2 * state.transitionProgress * state.transitionProgress
          : 1 - Math.pow(-2 * state.transitionProgress + 2, 2) / 2;

        // Interpolate aspect ratios
        state.topAspectRatio = 
          state.topAspectRatio + (state.topAspectRatioTarget - state.topAspectRatio) * easeProgress * 0.1;
        state.bottomAspectRatio = 
          state.bottomAspectRatio + (state.bottomAspectRatioTarget - state.bottomAspectRatio) * easeProgress * 0.1;
      }

      draw();
      animationFrameId = requestAnimationFrame(loop);
    };

    // Init
    loadImages();
    window.addEventListener('resize', resize);
    
    // Initial resize to set canvas size
    resize();
    
    // Start loop
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="block w-full h-full" />;
};

export default BrutalistHero;

