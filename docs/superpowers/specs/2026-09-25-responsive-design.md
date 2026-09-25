# Responsive Design System Architecture Specification

**Date**: 2026-09-25  
**Topic**: Full-Screen Responsive Scaling across Mobile (320px+), Tablet (768px+), Laptop (1024px+), Desktop (1440px+), and 4K / Ultra-Wide (2560px+)

---

## 1. Overview
The goal is to scale the entire AICceler8 website to be completely responsive across all device form factors:
- **Mobile** (`320px` to `639px`)
- **Tablet** (`640px` to `1023px`)
- **Laptop / Standard Desktop** (`1024px` to `1535px`)
- **Large Desktop / 1440p** (`1536px` to `2559px`)
- **Ultra-Wide & 4K** (`2560px` to `3840px+`)

The design retains full edge-to-edge layout stretching for 4K displays with proportional font sizing, grid layout scaling, fluid clamp padding, and zero horizontal scroll overflow.

---

## 2. Global Layout & Typography Strategy (`globals.css`)
- **Breakpoint Extensions**:
  - `sm`: `640px`
  - `md`: `768px`
  - `lg`: `1024px`
  - `xl`: `1280px`
  - `2xl`: `1536px`
  - `3xl`: `1920px`
  - `4xl`: `2560px`
  - `5xl`: `3840px`

- **Fluid Typography Tokens**:
  - **Display / Hero**: `clamp(2.5rem, 6vw, 6.5rem)`
  - **Section Titles**: `clamp(2rem, 4vw, 4.5rem)`
  - **Subtitles & H3**: `clamp(1.25rem, 2.5vw, 2.5rem)`
  - **Body Text**: `clamp(0.875rem, 1.2vw, 1.35rem)`

- **Fluid Container Padding**:
  - `px-4 sm:px-8 lg:px-16 2xl:px-24 4xl:px-36`

---

## 3. Component-by-Component Responsiveness Breakdown

### A. `Header.tsx`
- **Mobile / Tablet (`< 1024px`)**:
  - Compact logo + mobile menu toggle hamburger button.
  - Slide-over backdrop navigation menu for phone screens.
- **Desktop / 4K (`>= 1024px`)**:
  - Edge-to-edge floating glass bar with proportional link spacing and CTA button scaling (`4xl:py-5 4xl:px-8`).

### B. `Hero.tsx`
- **Height**: Change `h-screen` or fixed pixel heights to `min-h-screen py-16 lg:py-24 4xl:py-36` to prevent overflow on short phones.
- **Content Layout**: Stack text and action buttons vertically on mobile; side-by-side on desktop/4K.

### C. `SectionEvolution.tsx`
- **Grid Layout**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 4xl:gap-12`
- **Cards**: Flexible `min-h-[...]` cards with auto-adjusting text and icon sizes.

### D. `SectionPillars.tsx` & `AccordionGallery.tsx`
- **Accordion Layout**:
  - **Mobile / Tablet (`< 1024px`)**: Vertical accordion stack.
  - **Desktop / 4K (`>= 1024px`)**: 5-column horizontal expandable gallery with dynamic width transitions.

### E. `SectionPartners.tsx`
- **Marquee Ticker**:
  - Card dimensions: `w-72 sm:w-80 lg:w-[22rem] 3xl:w-[28rem] 4xl:w-[34rem]`
  - Touchpad horizontal swipe & mouse drag enabled for all screens.

### F. `SectionDifferentiators.tsx` & `SectionApproach.tsx`
- **Grid Adaptation**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-4`
- **Card Padding**: Responsive padding scaling from `p-6` to `4xl:p-12`.

### G. `ContactSection.tsx`
- **Height**: `min-h-screen py-12 sm:py-20 4xl:py-32`
- **Layout**: 12-column grid (`lg:col-span-5` info + `lg:col-span-7` form) with scalable input fields, country code selector, and thank-you inline message.

### H. `Footer.tsx` & `BookingDrawer.tsx`
- **Footer**: Responsive multi-column layout on desktop/4K, single column on mobile.
- **Booking Drawer**: Slide-over drawer with max-w `sm:max-w-lg 4xl:max-w-xl` and touch scroll support.

---

## 4. Implementation Phasing
1. **Phase 1**: Configure global CSS tokens and responsive utility classes in [`app/globals.css`](file:///d:/Accelerate/aicceler8/app/globals.css).
2. **Phase 2**: Update Header, Hero, and SectionEvolution.
3. **Phase 3**: Update SectionPillars, SectionPartners, SectionDifferentiators, SectionApproach.
4. **Phase 4**: Update ContactSection, Footer, and BookingDrawer.
5. **Phase 5**: Full screen verification across mobile, tablet, laptop, and 4K viewports.
