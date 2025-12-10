# Red Ox Digital - Complete Image Requirements

**Date Created:** January 2025  
**Total Images Needed:** 28 unique images  
**Format:** WebP (primary) with JPG fallback  
**Optimization:** 70-80% quality for mobile, 80-90% for desktop

---

## 📋 Quick Summary

| Category | Count | Priority |
|----------|-------|----------|
| Hero/Large Backgrounds | 6 | HIGH |
| Canvas Rotating Images | 8 | HIGH |
| Portrait Cards | 4 | MEDIUM |
| Feature Card Headers | 3 | MEDIUM |
| Split-Screen Heroes | 2 | HIGH |
| Section Backgrounds | 3 | LOW |
| Comparison Slider | 2 | MEDIUM |
| Case Study Images | 2 | MEDIUM |
| CTA Backgrounds | 3 | LOW |

---

## 🎯 Priority Levels

### HIGH PRIORITY (Above the Fold - Replace First)
- BrutalistHero canvas images (8 images)
- WedoHome slider images (5 images)
- HeroNorthLakes (1 image)
- HeroTradies (2 images)

### MEDIUM PRIORITY (Main Content)
- ServicesHome cards (4 images)
- SolutionTradies cards (3 images)
- ClientHome images (2 images)
- VisualProofNorthLakes (2 images)

### LOW PRIORITY (Supporting Content)
- Section backgrounds (6 images)
- CTA backgrounds (3 images)

---

## 📸 Detailed Image Specifications

### 1. HERO SECTION - BrutalistHero Component
**Location:** `src/components/BrutalistHero.tsx`  
**Usage:** Rotating canvas images embedded in hero text

#### Top Row Images (4 images) - Between "WEB" and "DESIGN"
**Purpose:** Modern web design/tech aesthetic

| Image # | Description | Size | Aspect Ratio | Format | Notes |
|---------|-------------|------|---------------|--------|-------|
| 1 | Modern laptop/computer workspace | 1600x1200px | 4:3 | WebP/JPG | Minimal, clean tech aesthetic |
| 2 | Code/development interface | 1600x1200px | 4:3 | WebP/JPG | Screen showing code or design tools |
| 3 | Digital/abstract tech visualization | 1600x1200px | 4:3 | WebP/JPG | Abstract grid or digital pattern |
| 4 | Modern web design mockup | 1600x1200px | 4:3 | WebP/JPG | Website design or interface |

**Content Requirements:**
- Modern, minimal aesthetic
- Professional tech/web design feel
- Clean backgrounds
- Can be abstract or literal
- Rotates every 3 seconds with crossfade

#### Bottom Row Images (4 images) - Before "MEDIA"
**Purpose:** Architecture/spaces aesthetic

| Image # | Description | Size | Aspect Ratio | Format | Notes |
|---------|-------------|------|---------------|--------|-------|
| 1 | Modern office space | 1600x1200px | 4:3 | WebP/JPG | Professional workspace |
| 2 | Contemporary architecture | 1600x1200px | 4:3 | WebP/JPG | Modern building interior/exterior |
| 3 | Professional environment | 1600x1200px | 4:3 | WebP/JPG | Business or creative space |
| 4 | Architectural detail | 1600x1200px | 4:3 | WebP/JPG | Modern design element |

**Content Requirements:**
- Professional spaces
- Modern architecture
- Clean, minimal aesthetic
- Rotates every 3 seconds with crossfade

**Suggested File Names:**
- `brutalist-hero-top-01.webp` through `brutalist-hero-top-04.webp`
- `brutalist-hero-bottom-01.webp` through `brutalist-hero-bottom-04.webp`

---

### 2. WEDOHOME SLIDER - Full-Screen Backgrounds
**Location:** `src/components/WedoHome.tsx`  
**Usage:** Full-screen background slider with 60% opacity overlay

| Slide # | Service | Description | Size | Aspect Ratio | Format | Current Stock Image |
|---------|---------|-------------|------|---------------|--------|---------------------|
| 1 | Web Design & Dev | Modern website development workspace | 2560x1440px | 16:9 | WebP/JPG | photo-1547658719 |
| 2 | SEO Dominance | Analytics/search/ranking visuals | 2560x1440px | 16:9 | WebP/JPG | photo-1460925895917 |
| 3 | Facebook Ads | Social media marketing dashboard | 2560x1440px | 16:9 | WebP/JPG | photo-1611162617474 |
| 4 | Strategic Media | Professional photography/video production | 2560x1440px | 16:9 | WebP/JPG | photo-1516035069371 |
| 5 | Google Reviews | Reviews/ratings/trust building | 2560x1440px | 16:9 | WebP/JPG | photo-1556761175 |

**Content Requirements:**
- Full-screen landscape orientation
- Professional, high-quality
- Should work with dark overlay (60% opacity)
- Should convey the service being offered
- Used as background with text overlay

**Suggested File Names:**
- `slider-web-design.webp`
- `slider-seo-dominance.webp`
- `slider-facebook-ads.webp`
- `slider-strategic-media.webp`
- `slider-google-reviews.webp`

---

### 3. SERVICESHOME - Process Step Cards
**Location:** `src/components/ServicesHome.tsx`  
**Usage:** Portrait card backgrounds with grayscale filter (color on hover)

| Card # | Title | Description | Mobile Size | Desktop Size | Aspect Ratio | Format |
|--------|-------|-------------|------------|--------------|--------------|--------|
| 1 | VIEWS | SEO/search/traffic growth imagery | 800x1200px | 1200x1600px | 3:4 Portrait | WebP/JPG |
| 2 | LEADS | Web design/conversion/contact forms | 800x1200px | 1200x1600px | 3:4 Portrait | WebP/JPG |
| 3 | SALES | Social media/ads/revenue growth | 800x1200px | 1200x1600px | 3:4 Portrait | WebP/JPG |
| 4 | ADVOCATES | Reviews/testimonials/trust | 800x1200px | 1200x1600px | 3:4 Portrait | WebP/JPG |

**Content Requirements:**
- Portrait orientation
- Should work in grayscale (converts to color on hover)
- Professional, business-focused
- Should relate to the service step
- Used as card background with text overlay

**Suggested File Names:**
- `services-views-seo.webp`
- `services-leads-web-design.webp`
- `services-sales-facebook-ads.webp`
- `services-advocates-reviews.webp`

---

### 4. CLIENTHOME - Case Study Images
**Location:** `src/components/ClientHome.tsx`

#### 4a. Medical Technology Hero Image
| Property | Value |
|----------|-------|
| **Description** | Modern medical/healthcare technology (radiology/ultrasound context) |
| **Mobile Size** | 1200x1500px |
| **Desktop Size** | 1600x2000px |
| **Aspect Ratio** | 4:5 Portrait |
| **Format** | WebP/JPG |
| **Usage** | Case study hero with grayscale filter and mix-blend-multiply overlay |
| **Current Stock** | photo-1516549655169 |

**Content Requirements:**
- Medical/healthcare technology focus
- Radiology/ultrasound equipment context
- Professional, modern medical setting
- Should work with grayscale filter
- Used in Modia Health case study

**Suggested File Name:** `client-medical-tech-hero.webp`

#### 4b. Testimonial Background Texture
| Property | Value |
|----------|-------|
| **Description** | Subtle abstract texture for overlay |
| **Mobile Size** | 1200x800px |
| **Desktop Size** | 1920x1080px |
| **Aspect Ratio** | 16:9 Landscape |
| **Format** | WebP/JPG |
| **Usage** | Background texture with mix-blend-overlay at 20% opacity |
| **Current Stock** | photo-1576091160399 |

**Content Requirements:**
- Abstract texture pattern
- Subtle, not distracting
- Works well at low opacity (20%)
- Professional aesthetic
- Used behind testimonial quote

**Suggested File Name:** `client-testimonial-texture.webp`

---

### 5. TRADIESSEO PAGE - Hero Section
**Location:** `src/components/tradies/HeroTradies.tsx`  
**Usage:** Split-screen hero with parallax effect

#### 5a. Google Maps Image
| Property | Value |
|----------|-------|
| **Description** | Local map view showing North Lakes area |
| **Size** | 1400x1000px |
| **Aspect Ratio** | 7:5 Landscape |
| **Format** | WebP/JPG |
| **Usage** | Top-left split (70% width, 60% height) with "#1 Map Rank" badge |
| **Current Stock** | photo-1526778548025 |

**Content Requirements:**
- Google Maps or map-like view
- Should show North Lakes/Moreton Bay Region
- Professional, clear map visualization
- Works with gradient overlay
- Badge overlay in bottom-left

**Suggested File Name:** `tradies-hero-google-maps.webp`

#### 5b. Job Site Image
| Property | Value |
|----------|-------|
| **Description** | Real tradie job site/work in progress |
| **Size** | 1400x1000px |
| **Aspect Ratio** | 7:5 Landscape |
| **Format** | WebP/JPG |
| **Usage** | Bottom-right split (70% width, 60% height) with "Strategic Media" badge |
| **Current Stock** | photo-1504307651254 |

**Content Requirements:**
- Real tradie work site
- Active job in progress
- Professional quality
- Shows actual work being done
- Badge overlay in bottom-right

**Suggested File Name:** `tradies-hero-job-site.webp`

---

### 6. TRADIESSEO PAGE - Problem Section
**Location:** `src/components/tradies/ProblemTradies.tsx`

| Property | Value |
|----------|-------|
| **Description** | Frustrated tradie/empty calendar/problem scenario |
| **Mobile Size** | 1200x800px |
| **Desktop Size** | 1920x1200px |
| **Aspect Ratio** | 16:10 Landscape |
| **Format** | WebP/JPG |
| **Usage** | Parallax background with 20% opacity overlay |
| **Current Stock** | photo-1581578731548 |

**Content Requirements:**
- Problem/frustration scenario
- Empty calendar or no leads
- Relatable tradie situation
- Professional but showing challenge
- Used as background with text overlay

**Suggested File Name:** `tradies-problem-background.webp`

---

### 7. TRADIESSEO PAGE - Solution Cards
**Location:** `src/components/tradies/SolutionTradies.tsx`  
**Usage:** Feature card headers (grayscale on hover, scales to 110%)

| Card # | Title | Description | Size | Aspect Ratio | Format | Current Stock |
|--------|-------|-------------|------|--------------|--------|---------------|
| 1 | Google Business Profile | Google Maps/Business Profile visualization | 1200x800px | 3:2 Landscape | WebP/JPG | photo-1553729459 |
| 2 | Location Pages | Location targeting/suburb-specific content | 1200x800px | 3:2 Landscape | WebP/JPG | photo-1560518883 |
| 3 | Job Site Content | Real job site photography/video | 1200x800px | 3:2 Landscape | WebP/JPG | photo-1504307651254 |

**Content Requirements:**
- Landscape orientation
- Should work in grayscale (converts to color on hover)
- Relates to the feature being described
- Professional quality
- Used as card header (h-48 desktop, h-40 mobile)

**Suggested File Names:**
- `tradies-solution-google-business.webp`
- `tradies-solution-location-pages.webp`
- `tradies-solution-job-site-content.webp`

---

### 8. TRADIESSEO PAGE - Advantage Section
**Location:** `src/components/tradies/AdvantageTradies.tsx`

| Property | Value |
|----------|-------|
| **Description** | Successful tradie/happy customer/advantage scenario |
| **Size** | 1200x800px |
| **Aspect Ratio** | 3:2 Landscape |
| **Format** | WebP/JPG |
| **Usage** | Section background image |
| **Current Stock** | photo-1581092160607 |

**Content Requirements:**
- Success/advantage scenario
- Happy tradie or satisfied customer
- Professional, positive imagery
- Shows benefit/advantage
- Used as section background

**Suggested File Name:** `tradies-advantage-background.webp`

---

### 9. TRADIESSEO PAGE - CTA Section
**Location:** `src/components/tradies/CTATradies.tsx`

| Property | Value |
|----------|-------|
| **Description** | Professional tradie/business success |
| **Size** | 1920x1200px |
| **Aspect Ratio** | 16:10 Landscape |
| **Format** | WebP/JPG |
| **Usage** | Full-width background with parallax effect |
| **Current Stock** | photo-1497366216548 |

**Content Requirements:**
- Professional tradie success
- Business growth/professionalism
- High-quality, inspiring
- Full-width landscape
- Used as CTA background

**Suggested File Name:** `tradies-cta-background.webp`

---

### 10. FACEBOOKADS PAGE - Empathy Section
**Location:** `src/components/facebookads/EmpathyFacebookAds.tsx`

| Property | Value |
|----------|-------|
| **Description** | Team collaboration/marketing strategy |
| **Size** | 1600x1000px |
| **Aspect Ratio** | 8:5 Landscape |
| **Format** | WebP/JPG |
| **Usage** | Parallax background with contrast and grayscale filters, white border frame |
| **Current Stock** | photo-1522071820081 |

**Content Requirements:**
- Team collaboration
- Marketing strategy session
- Professional business setting
- Works with contrast/grayscale filters
- Has white border frame effect

**Suggested File Name:** `facebook-ads-empathy-background.webp`

---

### 11. FACEBOOKADS PAGE - CTA Section
**Location:** `src/components/facebookads/CTAFacebookAds.tsx`

| Property | Value |
|----------|-------|
| **Description** | Social media marketing success |
| **Size** | 1920x1200px |
| **Aspect Ratio** | 16:10 Landscape |
| **Format** | WebP/JPG |
| **Usage** | Full-width background |
| **Current Stock** | photo-1552664730 |

**Content Requirements:**
- Social media marketing
- Digital marketing success
- Professional, inspiring
- Full-width landscape
- Used as CTA background

**Suggested File Name:** `facebook-ads-cta-background.webp`

---

### 12. NORTHLAKESWEBDESIGN PAGE - Hero Section
**Location:** `src/components/north-lakes-web-design/HeroNorthLakes.jsx`

| Property | Value |
|----------|-------|
| **Description** | North Lakes area (boardwalk, lake, business district) |
| **Size** | 2560x1440px |
| **Aspect Ratio** | 16:9 Landscape |
| **Format** | WebP/JPG |
| **Usage** | Full-screen hero background with gradient overlay |
| **Current Stock** | photo-1506905925346 |

**Content Requirements:**
- **MUST** show North Lakes area
- Boardwalk, lake, or business district
- Local, recognizable location
- Professional quality
- Works with dark gradient overlay
- Used as full-screen hero

**Suggested File Name:** `north-lakes-hero-scenic.webp`

---

### 13. NORTHLAKESWEBDESIGN PAGE - Visual Proof Comparison
**Location:** `src/components/north-lakes-web-design/VisualProofNorthLakes.jsx`  
**Usage:** Before/after comparison slider

#### 13a. Stock Photo (Before - Left Side)
| Property | Value |
|----------|-------|
| **Description** | Generic/fake-looking business photo (stock photo example) |
| **Size** | 2400x1350px |
| **Aspect Ratio** | 16:9 Landscape |
| **Format** | WebP/JPG |
| **Usage** | Comparison slider left side (grayscale) |
| **Current Stock** | photo-1621905251189 |

**Content Requirements:**
- Generic, stock photo look
- Fake/staged appearance
- Should look obviously like a stock photo
- Used to show what NOT to use
- Grayscale filter applied

**Suggested File Name:** `north-lakes-comparison-stock.webp`

#### 13b. Real Photo (After - Right Side)
| Property | Value |
|----------|-------|
| **Description** | Authentic local business photo (real photo example) |
| **Size** | 2400x1350px |
| **Aspect Ratio** | 16:9 Landscape |
| **Format** | WebP/JPG |
| **Usage** | Comparison slider right side (full color) |
| **Current Stock** | photo-1558618666 |

**Content Requirements:**
- Authentic, real business photo
- Local North Lakes business
- Professional but genuine
- Shows actual business/team
- Full color (no filter)
- Used to show what TO use

**Suggested File Name:** `north-lakes-comparison-real.webp`

---

### 14. ADREALESTATE PAGE - Final CTA
**Location:** `src/components/ad-real-estate/FinalCTAAdRealEstate.jsx`

| Property | Value |
|----------|-------|
| **Description** | Real estate/digital marketing success |
| **Size** | 1920x1200px |
| **Aspect Ratio** | 16:10 Landscape |
| **Format** | WebP/JPG |
| **Usage** | Full-width background |
| **Current Stock** | photo-1504307651254 |

**Content Requirements:**
- Real estate or digital marketing
- Professional success imagery
- High-quality, inspiring
- Full-width landscape
- Used as CTA background

**Suggested File Name:** `ad-real-estate-cta-background.webp`

---

## 📁 File Organization Structure

```
/public/images/
├── hero/
│   ├── brutalist-hero-top-01.webp
│   ├── brutalist-hero-top-02.webp
│   ├── brutalist-hero-top-03.webp
│   ├── brutalist-hero-top-04.webp
│   ├── brutalist-hero-bottom-01.webp
│   ├── brutalist-hero-bottom-02.webp
│   ├── brutalist-hero-bottom-03.webp
│   └── brutalist-hero-bottom-04.webp
├── slider/
│   ├── slider-web-design.webp
│   ├── slider-seo-dominance.webp
│   ├── slider-facebook-ads.webp
│   ├── slider-strategic-media.webp
│   └── slider-google-reviews.webp
├── services/
│   ├── services-views-seo.webp
│   ├── services-leads-web-design.webp
│   ├── services-sales-facebook-ads.webp
│   └── services-advocates-reviews.webp
├── client/
│   ├── client-medical-tech-hero.webp
│   └── client-testimonial-texture.webp
├── tradies/
│   ├── tradies-hero-google-maps.webp
│   ├── tradies-hero-job-site.webp
│   ├── tradies-problem-background.webp
│   ├── tradies-solution-google-business.webp
│   ├── tradies-solution-location-pages.webp
│   ├── tradies-solution-job-site-content.webp
│   ├── tradies-advantage-background.webp
│   └── tradies-cta-background.webp
├── facebook-ads/
│   ├── facebook-ads-empathy-background.webp
│   └── facebook-ads-cta-background.webp
├── north-lakes/
│   ├── north-lakes-hero-scenic.webp
│   ├── north-lakes-comparison-stock.webp
│   └── north-lakes-comparison-real.webp
└── ad-real-estate/
    └── ad-real-estate-cta-background.webp
```

---

## 🎨 Content Style Guidelines

### Overall Aesthetic
- **Professional** - High-quality, polished imagery
- **Modern** - Contemporary, current design trends
- **Authentic** - Real, genuine (avoid overly staged)
- **Local** - North Lakes/Moreton Bay Region context where applicable
- **Brand Colors** - Consider red (#E02020) accent where appropriate

### Color Considerations
- Many images use grayscale filters that convert to color on hover
- Ensure images work well in both grayscale and color
- High contrast recommended for text overlay areas
- Consider dark overlay areas (60% opacity common)

### Technical Requirements
- **Format:** WebP primary, JPG fallback
- **Compression:** 70-80% mobile, 80-90% desktop
- **Optimization:** All images should be optimized for web
- **Alt Text:** Descriptive alt text required for all images
- **Lazy Loading:** Already implemented in code

---

## ✅ Delivery Checklist

- [ ] All 28 images delivered in WebP format
- [ ] JPG fallbacks provided for all images
- [ ] All images optimized for web (compressed)
- [ ] Images match specified dimensions
- [ ] File names follow suggested naming convention
- [ ] Images organized in suggested folder structure
- [ ] Alt text descriptions provided for each image
- [ ] High priority images (15) delivered first
- [ ] Medium priority images (9) delivered second
- [ ] Low priority images (4) delivered last

---

## 📞 Questions or Clarifications?

If you need clarification on any image requirements, please refer to:
- Component files in `src/components/` for usage context
- Current stock images (URLs provided in this document)
- This document for size and format specifications

---

**Last Updated:** January 2025  
**Document Version:** 1.0

