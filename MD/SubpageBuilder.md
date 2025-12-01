# Subpage Builder Guide

> Lessons learned from building the TradiesSEO subpage to prevent white screens and errors.

---

## Quick Start Checklist

```
✅ Create page file: src/pages/NewPage.tsx
✅ Create component folder: src/components/newpage/
✅ Add route to App.tsx
✅ Update sitemap.xml
✅ Test with showPreloader={false} first
✅ Add components one at a time
✅ Hard refresh (Cmd+Shift+R) after changes
```

---

## 1. Keep Components Simple Initially

The `AdvantageTradies` component caused a white screen crash because it used:
- Complex Framer Motion hooks (`useScroll`, `useTransform`, `useRef`)
- JSX elements stored in arrays and mapped
- Multiple nested motion transformations

### What NOT to do initially:

```tsx
// RISKY - Can break silently
const ref = useRef(null);
const { scrollYProgress } = useScroll({ target: ref });
const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

const items = [
  { icon: <SomeIcon />, title: "Item 1" },
  { icon: <OtherIcon />, title: "Item 2" }
];

return (
  <motion.div style={{ y }}>
    {items.map(item => <Card {...item} />)}
  </motion.div>
);
```

### What TO do instead:

```tsx
// SAFER - Predictable behavior
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <div className="p-6 bg-white">
    <h3>Item 1</h3>
    <p>Description</p>
  </div>
  <div className="p-6 bg-white">
    <h3>Item 2</h3>
    <p>Description</p>
  </div>
</motion.div>
```

**Rule:** Start with simple, hardcoded JSX first. Add animations incrementally after confirming the base renders.

---

## 2. Test Components Incrementally

When the page goes white, debug by:

1. Comment out all components except one
2. Add them back one-by-one
3. Identify which component breaks the page

```tsx
const NewPage = () => {
  return (
    <Layout showPreloader={false}>
      <HeroSection />
      {/* <ProblemSection /> */}
      {/* <SolutionSection /> */}
      {/* <ServicesSection /> */}
      {/* <FAQSection /> */}
      {/* <CTASection /> */}
    </Layout>
  );
};
```

Uncomment each one and refresh until you find the culprit.

---

## 3. Disable the Preloader for Debugging

```tsx
<Layout showPreloader={false}>
  {/* your components */}
</Layout>
```

The preloader can mask errors. Disabling it helps see if the issue is in component rendering or the loading state.

---

## 4. Framer Motion Safety Guide

### Safe Patterns (Use These First)

```tsx
// Simple fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content here
</motion.div>

// Staggered children
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1, duration: 0.5 }}
>
  Card content
</motion.div>
```

### Risky Patterns (Add After Base Works)

```tsx
// Scroll-linked transforms - can cause issues
const ref = useRef(null);
const { scrollYProgress } = useScroll({ target: ref });
const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

// AnimatePresence with complex states
<AnimatePresence mode="wait">
  {isOpen && <motion.div>...</motion.div>}
</AnimatePresence>
```

---

## 5. Inline JSX as a Fallback

When a component keeps failing, put the JSX directly in the page file:

```tsx
// Instead of importing a broken component
// import BrokenComponent from '../components/newpage/BrokenComponent';

const NewPage = () => {
  return (
    <Layout>
      <HeroSection />
      
      {/* Inline the broken component's JSX temporarily */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <h2 className="text-4xl font-bold">Section Title</h2>
          <p>Content goes here</p>
        </div>
      </section>
      
      <FAQSection />
    </Layout>
  );
};
```

Once it works inline, refactor back to a separate component with simpler code.

---

## 6. File Structure for New Subpages

```
src/
├── pages/
│   └── NewPage.tsx          # Main page file
├── components/
│   └── newpage/             # Component folder (lowercase)
│       ├── HeroNewPage.tsx
│       ├── ProblemNewPage.tsx
│       ├── SolutionNewPage.tsx
│       ├── ServicesNewPage.tsx
│       ├── FAQNewPage.tsx
│       └── CTANewPage.tsx
```

---

## 7. Route Setup in App.tsx

```tsx
import NewPage from './pages/NewPage';

// Inside AnimatedRoutes component
<Route
  path="/new-page-slug"
  element={<NewPage />}
/>
```

---

## 8. Sitemap Update

Add new page to `public/sitemap.xml`:

```xml
<url>
  <loc>https://redoxdigital.com.au/new-page-slug</loc>
  <lastmod>2025-12-01</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>
```

---

## 9. Layout Component Props

```tsx
<Layout 
  title="Page Title | Red Ox Digital"
  description="Meta description for SEO (150-160 chars)"
  canonical="https://redoxdigital.com.au/new-page-slug"
  keywords="keyword1, keyword2, keyword3"
  showPreloader={true}  // Set to false for debugging
>
```

---

## 10. Mobile Optimisation Pattern

For card sections, use the desktop/mobile split pattern:

```tsx
{/* Desktop Grid - Hidden on mobile */}
<div className="hidden md:grid md:grid-cols-3 gap-6">
  {cards.map(card => <Card key={card.id} {...card} />)}
</div>

{/* Mobile Horizontal Scroll */}
<div className="md:hidden -mx-6">
  <div 
    className="flex gap-4 overflow-x-auto pb-6 px-6 snap-x snap-mandatory scrollbar-hide"
    style={{ WebkitOverflowScrolling: 'touch' }}
  >
    {cards.map(card => (
      <div 
        key={card.id}
        className="flex-shrink-0 w-[85vw] max-w-[340px] snap-center"
      >
        <Card {...card} />
      </div>
    ))}
  </div>
  {/* Swipe Indicator */}
  <div className="flex items-center justify-center gap-2 mt-2 px-6">
    <div className="flex gap-1">
      <div className="w-6 h-1 bg-[#E02020] rounded-full"></div>
      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
    </div>
    <span className="text-[10px] uppercase tracking-widest text-gray-400 ml-2">Swipe</span>
  </div>
</div>
```

---

## 11. Debugging Checklist

| Issue | Check |
|-------|-------|
| White screen | Disable preloader, check browser console |
| Component not rendering | Verify import path, check for typos |
| Styles missing | Confirm Tailwind classes, check for typos |
| Route not working | Check App.tsx route path |
| Mobile broken | Test with Chrome DevTools device toolbar |
| SEO not showing | Verify Layout props, check document head |

---

## 12. Terminal Commands

```bash
# Start dev server
npm run dev

# Kill and restart if stuck
pkill -f "vite" && npm run dev

# Build for production (catches more errors)
npm run build
```

---

## Summary: Golden Rules

1. **Start simple** - Hardcoded JSX, no complex animations
2. **Test incrementally** - Add one component at a time
3. **Disable preloader** - See real errors faster
4. **Check console** - Browser DevTools shows runtime errors
5. **Inline as fallback** - If component fails, inline the JSX
6. **Mobile first** - Use the desktop/mobile split pattern
7. **Australian spelling** - Use "tyre", "neighbour", "colour", etc.

---

*Last updated: December 2025*
*Based on TradiesSEO subpage build experience*

