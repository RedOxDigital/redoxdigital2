# Photo Replacement Guide

This document lists all images found in `Home.tsx` and `TradiesSEO.tsx` pages, along with their current sizes and recommended optimal sizes for mobile and desktop.

---

## Home Page Images

### HeroHome Component (`src/components/HeroHome.tsx`)

#### 1. Health & Medical Card Image

- **Current URL**: `https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1200&auto=format&fit=crop`
- **Current Size**: 1200x1600px (width x height attributes)
- **Usage**: Hero slider card background
- **Display Size**:
  - Mobile: ~75vw width, ~65vh height
  - Desktop: ~40vw width, ~60vh height
- **Recommended Size**:
  - **Mobile**: 800x1200px (portrait, 2:3 ratio)
  - **Desktop**: 1200x1600px (portrait, 3:4 ratio)
- **Format**: JPG/WebP, optimized
- **Notes**: Used in draggable slider, needs to cover full card area

#### 2. Trades & Construction Card Image

- **Current URL**: `https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop`
- **Current Size**: 1200x1600px
- **Usage**: Hero slider card background
- **Recommended Size**:
  - **Mobile**: 800x1200px
  - **Desktop**: 1200x1600px
- **Format**: JPG/WebP, optimized

#### 3. Professional Services Card Image

- **Current URL**: `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop`
- **Current Size**: 1200x1600px
- **Usage**: Hero slider card background
- **Recommended Size**:
  - **Mobile**: 800x1200px
  - **Desktop**: 1200x1600px
- **Format**: JPG/WebP, optimized

#### 4. CTA Card Image ("Your Industry")

- **Current URL**: `https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop`
- **Current Size**: 1200x1600px
- **Usage**: Hero slider card background
- **Recommended Size**:
  - **Mobile**: 800x1200px
  - **Desktop**: 1200x1600px
- **Format**: JPG/WebP, optimized

---

### ProblemHome Component (`src/components/ProblemHome.tsx`)

#### 5. Digital Strategy Planning Image

- **Current URL**: `https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop`
- **Current Size**: 2671px width (unspecified height)
- **Usage**: Parallax background image
- **Display Size**:
  - Mobile: Full width, ~500-600px height
  - Desktop: Full width, ~600px height
- **Recommended Size**:
  - **Mobile**: 1200x800px (landscape, 3:2 ratio)
  - **Desktop**: 1920x1200px (landscape, 16:10 ratio)
- **Format**: JPG/WebP, optimized
- **Notes**: Has grayscale and contrast filters applied

---

### ServicesHome Component (`src/components/ServicesHome.tsx`)

#### 6. Views Step Image

- **Current URL**: `https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop`
- **Current Size**: 800x1200px (width x height attributes)
- **Usage**: Process step card background
- **Display Size**:
  - Mobile: Full card height (~70vh)
  - Desktop: Grid card (~500px min-height)
- **Recommended Size**:
  - **Mobile**: 800x1200px (portrait, 2:3 ratio)
  - **Desktop**: 1200x1600px (portrait, 3:4 ratio)
- **Format**: JPG/WebP, optimized
- **Notes**: Used in scroll-triggered mobile cards and desktop grid

#### 7. Leads Step Image

- **Current URL**: `https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop`
- **Current Size**: 800x1200px
- **Usage**: Process step card background
- **Recommended Size**:
  - **Mobile**: 800x1200px
  - **Desktop**: 1200x1600px
- **Format**: JPG/WebP, optimized

#### 8. Sales Step Image

- **Current URL**: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop`
- **Current Size**: 800x1200px
- **Usage**: Process step card background
- **Recommended Size**:
  - **Mobile**: 800x1200px
  - **Desktop**: 1200x1600px
- **Format**: JPG/WebP, optimized

#### 9. Advocates Step Image

- **Current URL**: `https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop`
- **Current Size**: 800x1200px
- **Usage**: Process step card background
- **Recommended Size**:
  - **Mobile**: 800x1200px
  - **Desktop**: 1200x1600px
- **Format**: JPG/WebP, optimized

---

### ClientHome Component (`src/components/ClientHome.tsx`)

#### 10. Medical Technology Image

- **Current URL**: `https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop&grayscale`
- **Current Size**: 800x1000px (width x height attributes)
- **Usage**: Case study hero image
- **Display Size**:
  - Mobile: Full width, ~400px height
  - Desktop: ~400px height, full width of column
- **Recommended Size**:
  - **Mobile**: 1200x1500px (portrait, 4:5 ratio)
  - **Desktop**: 1600x2000px (portrait, 4:5 ratio)
- **Format**: JPG/WebP, optimized
- **Notes**: Has grayscale filter applied, used with mix-blend-multiply overlay

#### 11. Testimonial Background Texture

- **Current URL**: `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop&grayscale`
- **Current Size**: 1200x800px (width x height attributes)
- **Usage**: Background texture overlay in testimonial section
- **Display Size**: Full section background
- **Recommended Size**:
  - **Mobile**: 1200x800px (landscape, 3:2 ratio)
  - **Desktop**: 1920x1080px (landscape, 16:9 ratio)
- **Format**: JPG/WebP, optimized
- **Notes**: Used as background with mix-blend-overlay, opacity 20%

---

## TradiesSEO Page Images

### HeroTradies Component (`src/components/tradies/HeroTradies.tsx`)

#### 12. Google Maps Image

- **Current URL**: `https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop`
- **Current Size**: 1200px width (unspecified height)
- **Usage**: Split-screen hero visual (top-left)
- **Display Size**:
  - Mobile: ~70% width, ~60% height
  - Desktop: ~70% width, ~60% height of 600px container
- **Recommended Size**:
  - **Mobile**: 1000x800px (landscape, 5:4 ratio)
  - **Desktop**: 1400x1000px (landscape, 7:5 ratio)
- **Format**: JPG/WebP, optimized
- **Notes**: Overlayed with gradient and badge

#### 13. Job Site Image

- **Current URL**: `https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop`
- **Current Size**: 1200px width (unspecified height)
- **Usage**: Split-screen hero visual (bottom-right)
- **Display Size**:
  - Mobile: ~70% width, ~60% height
  - Desktop: ~70% width, ~60% height of 600px container
- **Recommended Size**:
  - **Mobile**: 1000x800px (landscape, 5:4 ratio)
  - **Desktop**: 1400x1000px (landscape, 7:5 ratio)
- **Format**: JPG/WebP, optimized
- **Notes**: Overlayed with gradient and badge, has border

---

### ProblemTradies Component (`src/components/tradies/ProblemTradies.tsx`)

#### 14. Frustrated Tradie Image

- **Current URL**: `https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop`
- **Current Size**: 1200px width (unspecified height)
- **Usage**: Parallax background image
- **Display Size**:
  - Mobile: Full width, ~500-600px height
  - Desktop: Full width, ~600px height
- **Recommended Size**:
  - **Mobile**: 1200x800px (landscape, 3:2 ratio)
  - **Desktop**: 1920x1200px (landscape, 16:10 ratio)
- **Format**: JPG/WebP, optimized
- **Notes**: Has grayscale and contrast filters applied, framed with border

---

### SolutionTradies Component (`src/components/tradies/SolutionTradies.tsx`)

#### 15. Google Business Profile Feature Image

- **Current URL**: `https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop`
- **Current Size**: 800px width (unspecified height)
- **Usage**: Feature card header image
- **Display Size**:
  - Mobile: Full card width, ~160px height
  - Desktop: Full card width, ~192px height
- **Recommended Size**:
  - **Mobile**: 800x600px (landscape, 4:3 ratio)
  - **Desktop**: 1200x800px (landscape, 3:2 ratio)
- **Format**: JPG/WebP, optimized
- **Notes**: Used in feature cards, has grayscale filter on hover

#### 16. Location Pages Feature Image

- **Current URL**: `https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop`
- **Current Size**: 800px width (unspecified height)
- **Usage**: Feature card header image
- **Recommended Size**:
  - **Mobile**: 800x600px (landscape, 4:3 ratio)
  - **Desktop**: 1200x800px (landscape, 3:2 ratio)
- **Format**: JPG/WebP, optimized

#### 17. Job Site Content Feature Image

- **Current URL**: `https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop`
- **Current Size**: 800px width (unspecified height)
- **Usage**: Feature card header image
- **Recommended Size**:
  - **Mobile**: 800x600px (landscape, 4:3 ratio)
  - **Desktop**: 1200x800px (landscape, 3:2 ratio)
- **Format**: JPG/WebP, optimized

---

### TradiesSEO Page Inline Section (`src/pages/TradiesSEO.tsx`)

#### 18. Advantage Section Image

- **Current URL**: `https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop`
- **Current Size**: 1200px width (unspecified height)
- **Usage**: "We Are Local & Hands-On" section
- **Display Size**:
  - Mobile: Full width, ~400px height
  - Desktop: Full width, ~500px height
- **Recommended Size**:
  - **Mobile**: 1200x800px (landscape, 3:2 ratio)
  - **Desktop**: 1600x1000px (landscape, 8:5 ratio)
- **Format**: JPG/WebP, optimized
- **Notes**: Has gradient overlay and location badge

---

### CTATradies Component (`src/components/tradies/CTATradies.tsx`)

#### 19. CTA Background Image

- **Current URL**: `https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop`
- **Current Size**: 1600px width (unspecified height)
- **Usage**: Background overlay in CTA section
- **Display Size**: Full section background
- **Recommended Size**:
  - **Mobile**: 1200x800px (landscape, 3:2 ratio)
  - **Desktop**: 1920x1080px (landscape, 16:9 ratio)
- **Format**: JPG/WebP, optimized
- **Notes**: Used with opacity 20% and gradient overlay

---

## Summary by Image Type

### Hero/Slider Card Images (Portrait)

- **Count**: 7 images
- **Recommended Mobile**: 800x1200px (2:3 ratio)
- **Recommended Desktop**: 1200x1600px (3:4 ratio)
- **Components**: HeroHome (4), ServicesHome (4)

### Feature Card Header Images (Landscape)

- **Count**: 3 images
- **Recommended Mobile**: 800x600px (4:3 ratio)
- **Recommended Desktop**: 1200x800px (3:2 ratio)
- **Components**: SolutionTradies (3)

### Parallax/Background Images (Landscape)

- **Count**: 4 images
- **Recommended Mobile**: 1200x800px (3:2 ratio)
- **Recommended Desktop**: 1920x1200px (16:10 ratio)
- **Components**: ProblemHome (1), ProblemTradies (1), ClientHome testimonial (1), CTATradies (1)

### Hero Split-Screen Images (Landscape)

- **Count**: 2 images
- **Recommended Mobile**: 1000x800px (5:4 ratio)
- **Recommended Desktop**: 1400x1000px (7:5 ratio)
- **Components**: HeroTradies (2)

### Section Images (Landscape)

- **Count**: 2 images
- **Recommended Mobile**: 1200x800px (3:2 ratio)
- **Recommended Desktop**: 1600x1000px (8:5 ratio)
- **Components**: ClientHome hero (1), TradiesSEO inline (1)

---

## Image Optimization Recommendations

1. **Format**: Use WebP with JPG fallback for maximum compatibility
2. **Compression**:
   - Mobile: 70-80% quality
   - Desktop: 80-90% quality
3. **Responsive Images**: Consider using `srcset` for different screen sizes
4. **Lazy Loading**: Most images already have `loading="lazy"` - maintain this
5. **Aspect Ratios**: Maintain the recommended aspect ratios to prevent layout shifts

---

## Total Image Count

- **Home Page**: 11 images
- **TradiesSEO Page**: 8 images
- **Total**: 19 unique images (some URLs are reused)

---

## Notes

- Some images are reused across components (e.g., trades/construction image appears in multiple places)
- All images should be optimized for web delivery
- Consider creating responsive image sets for critical above-the-fold images
- Background images can be lower quality (70-75%) since they're often overlayed
- Hero images should be higher quality (85-90%) as they're focal points



