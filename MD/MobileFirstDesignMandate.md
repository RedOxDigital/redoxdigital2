# Cursor.com Mobile-First Design & UX Mandate

This document outlines the mandatory mobile-first design and User Experience (UX) standards for all content built on the Cursor.com platform. All design decisions must prioritize usability on a narrow, mobile viewport.

---

## Section 1: Core Mobile-First Foundation

| Metric/Standard | Threshold/Value | Actionable Mandate |
|----------------|-----------------|-------------------|
| **Primary Design Focus** | Mobile Viewport | All initial design and layout decisions must be verified on a mobile preview first. |
| **Branding/Theme** | Consistent | Do not introduce new font families, colors, or visual styles outside the established theme. |
| **Preview Requirement** | Mandatory Check | Must pass a visual review using the mobile preview feature prior to final submission. |

---

## Section 2: Typography and Readability (Legibility & Contrast)

Adherence to these standards ensures content is easy to read without requiring manual zooming or eye strain.

| Metric | Threshold/Value | UX Action |
|--------|----------------|-----------|
| **Body Font Size** | **≥ 16px** | Use the platform's default "Normal Text." This is the absolute minimum for all body copy. |
| **Contrast Ratio** | **≥ 4.5:1** (WCAG AA) | Always select text and background colors for high contrast (e.g., dark text on light backgrounds). Avoid light grey text for essential information. |
| **Line Height (Leading)** | **≈ 1.5x** font size | Visually verify generous vertical spacing between lines to prevent line skipping. |
| **Alignment** | Left-Aligned | All main body text must be left-aligned. Justified text is forbidden on narrow screens. |

---

## Section 3: Content Flow and Structure (Scannability)

Optimize text blocks for rapid scanning and comprehension on a phone screen.

| Metric | Threshold/Value | UX Action |
|--------|----------------|-----------|
| **Line Length (CPL)** | **35 - 50** characters | Trust the default single-column mobile layout. Avoid manual adjustments that drastically narrow or widen the text block. |
| **Paragraph Length** | **≤ 3** lines of text | Use "micro-paragraphs." Force a line break after every one to three sentences or a single core idea to increase vertical white space. |
| **Heading Structure** | Consistent **H₁, H₂, H₃** | Use headings logically to break up content every **≈ 150** words. |
| **Heading Spacing** | Above > Below | Ensure the vertical space above a heading is greater than the space below it to clearly group the heading with the content block. |

---

## Section 4: Card Layout and Scroll Mitigation

Cards (Content Blocks, Image Blocks) must act as concise summaries and gateways to prevent excessive vertical scrolling.

| Metric | Threshold/Value | UX Action |
|--------|----------------|-----------|
| **Card Description Length** | **≤ 3** lines of Normal Text | Truncate summary descriptions. Detailed information belongs on the linked sub-page, not the card. |
| **CTA Density** | Max 1 primary button per card | Limit the focus to a single, main action (linking to the detail page). |
| **Visible Card Count** | Max 4 related cards per dominant section | If more than 4 related items are needed, they must be moved to a dedicated sub-page or presented via a carousel/horizontal interaction. |
| **Image Consistency** | Fixed Aspect Ratio (e.g., 16:9) | All images within a related card block must share the same dimensions to maintain visual consistency during scrolling. |

---

## Section 5: Condensation and Embed Control

Use condensation tools wisely, and ensure technical elements do not break the mobile scrolling experience.

| Metric | Threshold/Value | UX Action |
|--------|----------------|-----------|
| **Collapsible Text Trigger** | Content is **≥ 8** lines of secondary detail | Use the collapse feature to hide supporting, secondary, or technical information that is not immediately critical. |
| **Critical Content Rule** | Never collapse | The primary purpose, main value proposition, or essential Call-to-Action (CTA) must never be placed behind a collapse function. |
| **Header Clarity** | Single line, explicit summary | The Collapsible Header text must be a clear, explicit summary of the hidden content (e.g., "View Full Technical Specifications"). |
| **Embedded Content** | No Internal Scrolling | Embedded objects (custom HTML, large Google Sheets) must be adjusted so their full content is visible on the mobile screen without creating a secondary scrollbar inside the embed box. Link out to large data sets instead of embedding. |

---

## Summary

This mandate ensures a professional, efficient, and comfortable experience for all mobile users on Cursor.com. All designers and developers must adhere to these standards when creating or modifying content on the platform.

**Key Principles:**
- Mobile viewport is the primary design focus
- Typography must be readable without zooming
- Content must be scannable and digestible
- Cards must prevent excessive scrolling
- Critical content must never be hidden

---

*Last Updated: [Date]*
*Version: 1.0*

