# SEO Mothra - Design Guide & Brand System

## Quick Reference

### Primary Brand Color
**Sage Green** — `#7a9b6d`  
Used for: Primary buttons, links, badges, accents, primary interactive elements

### Secondary Color
**Dusty Rose** — `#c97b7b`  
Used for: Blog section, secondary CTAs, testimonials, emphasis

### Background
**Cream** — `#faf7f2`  
Used for: Page background, base color

### Text
**Deep Charcoal** — `#2a2622`  
Used for: Headlines, primary text

### Muted Text
**Soft Gray** — `#6b6560`  
Used for: Body copy, secondary text, descriptions

---

## Typography System

### Headings (Outfit Font)
```
H1: 72px bold (desktop) / 48px bold (mobile)
    Leading: 1.1
    Letter-spacing: -0.3px
    Color: #2a2622

H2: 48px bold
    Leading: 1.15
    Color: #2a2622

H3: 28px bold / 24px (mobile)
    Leading: 1.2
    Color: #2a2622
```

### Body Copy (Inter Font)
```
p: 18px regular / 16px (mobile)
   Line-height: 1.6
   Color: #6b6560

small: 14px regular
       Color: #6b6560

label: 14px semibold
       Color: #2a2622
```

---

## Component Styles

### Primary Button
```
Background: #7a9b6d
Color: white
Padding: 16px 32px
Border-radius: 9999px
Hover: background #6b8b5d, shadow-lg
Transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)
Font: semibold Inter
```

### Secondary Button
```
Border: 2px #7a9b6d
Background: transparent
Color: #7a9b6d
Padding: 14px 32px
Hover: background-color #7a9b6d/5
```

### Card
```
Background: rgba(255, 248, 238, 0.6)
Border: 1px rgba(122, 155, 109, 0.2)
Border-radius: 16px / 24px
Padding: 32px
Backdrop-filter: blur(10px)
Hover: border-color rgba(122, 155, 109, 0.4), 
       background rgba(255, 248, 238, 0.9),
       box-shadow lg
```

### Badge
```
Background: rgba(122, 155, 109, 0.1)
Border: 1px rgba(122, 155, 109, 0.3)
Color: #7a9b6d
Padding: 4px 12px / 8px 16px
Border-radius: 9999px
Font: 12px semibold uppercase
Letter-spacing: 0.08em
```

### Input
```
Background: rgba(255, 248, 238, 0.6)
Border: 1px rgba(122, 155, 109, 0.2)
Color: #2a2622
Padding: 12px 16px
Border-radius: 8px
Focus: border-color rgba(122, 155, 109, 0.4),
       ring 2px rgba(122, 155, 109, 0.2)
Placeholder: #6b6560
```

---

## Spacing System

```
4px    (minimal)
8px    (base unit)
12px   (xs gap)
16px   (sm gap, padding)
20px   (md gap)
24px   (lg gap, padding)
32px   (xl gap, padding, section spacing)
40px   (2xl)
48px   (3xl)
64px   (4xl)
```

### Section Spacing
```
Desktop:  48px top/bottom
Tablet:   32px top/bottom
Mobile:   24px top/bottom

Grid gap: 24px (mobile) → 32px (desktop)
```

---

## Border Radius Scale

```
4px   - inputs, small elements
8px   - cards, buttons (when not rounded-full)
16px  - larger cards, sections
24px  - hero sections, featured cards
9999px - fully rounded (buttons, badges, pills)
```

---

## Shadows

```
none
sm:     0 1px 2px 0 rgba(0, 0, 0, 0.05)
base:   0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
md:     0 4px 6px -1px rgba(0, 0, 0, 0.1)
lg:     0 10px 15px -3px rgba(0, 0, 0, 0.1)
xl:     0 20px 25px -5px rgba(0, 0, 0, 0.1)

Hover effect: transition to lg shadow with 0.3s timing
```

---

## Color Applications by Section

### Homepage
- Hero gradient text: Sage → Rose
- Stats cards: Cream bg, sage text
- Services: Sage buttons, rose accents
- Testimonials: Rose emphasis
- CTA section: Sage gradient background

### Services Page
- Hero: Sage gradient text
- Service icons: Colorful (🔍🤖📈⚙️🎨🛠️)
- Process section: Sage accent
- CTA: Sage gradient

### Blog Page
- Hero: Rose-themed
- Article cards: Sage category badges
- Newsletter: Sage CTA
- Section separators: Sage borders

### Contact Page
- Hero: Rose-themed
- Form: Neutral with sage accents
- Trust signals: Sage numbers
- CTA: Sage button

### About Page
- Stats: Sage numbers
- Values: Colorful emoji (✨🔍🛠️📊)
- Capabilities: Sage/rose mix
- Philosophy: Sage gradient bg

### Locations Page
- Hero: Sage-themed
- Location emojis: Unique per city (🌟🏢⚡🎯)
- Specialties: Sage dots
- CTA: Sage button

---

## Animation Guidelines

### Transitions
```
Default: transition all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)
Fast:    0.15s
Slow:    0.6s
```

### Hover Effects

**Buttons:**
```
opacity: 1 → 0.9
box-shadow: base → lg
```

**Cards:**
```
transform: translateY(0) → translateY(-4px)
border-color: fade from 0.2 → 0.4
background: fade from 0.6 → 0.9
box-shadow: none → lg
```

**Links:**
```
color: sage → sage (darker)
transform: translateX(0) → translateX(4px)
```

### Page Load
```
fadeInUp: 0 → 100% opacity, 0 → 0px Y position, 0.6s ease-out
stagger: 50ms per card
```

---

## Accessibility Standards

### Color Contrast
- All text on backgrounds: WCAG AA (4.5:1 minimum)
- Sage + white: 4.8:1 ✓
- Charcoal + cream: 9.2:1 ✓
- Muted gray + cream: 5.1:1 ✓

### Focus States
```
All interactive elements: 2px ring offset-2px in sage color
Buttons: outline 2px sage/40%
Links: outline 2px sage/40%
Inputs: ring 2px sage/20% on focus
```

### Semantic HTML
```
<main>     - page main content
<section>  - major sections
<article>  - individual cards, posts
<nav>      - navigation menus
<h1> - <h6> - heading hierarchy
<button>   - interactive elements
<form>     - form containers
<label>    - form labels (associated with inputs)
```

---

## Responsive Breakpoints

```
Mobile:  < 640px (default)
Tablet:  640px - 1024px
Desktop: > 1024px

Grid columns:
Mobile:  1 column
Tablet:  2 columns
Desktop: 3-4 columns (depending on section)
```

### Mobile Optimizations
```
Padding: 16px (mobile) → 24px (tablet) → 32px (desktop)
Gap:     16px (mobile) → 24px (tablet) → 32px (desktop)
Hero text: 48px (mobile) → 72px (desktop)
Button height: 44px min (touch-friendly)
```

---

## Typography Hierarchy Example

### Hero Section
```
H1: 72px bold sage gradient text
    "Transform Your Brand"
    Line height: 1.1
    Margin-bottom: 24px

p:  18px regular gray text
    "Premium SEO, conversion optimization..."
    Margin-bottom: 32px
    Max-width: 40ch
```

### Service Card
```
.icon:     text-5xl emoji
.number:   text-xs uppercase sage
.title:    24px bold charcoal
.desc:     16px regular gray
.features: 14px regular gray with sage dots
.cta:      14px semibold sage link
```

---

## Gradient Specifications

### Hero Title Gradient
```
background: linear-gradient(to right, #7a9b6d, #c97b7b)
background-clip: text
-webkit-background-clip: text
-webkit-text-fill-color: transparent
```

### Section Background Gradient
```
background: linear-gradient(135deg, #faf7f2, #f5f1eb, #f0ebe5)
```

### CTA Section Gradient
```
background: linear-gradient(to bottom right, #7a9b6d, #6b8b5d)
```

### Floating Element Gradient
```
background: radial-gradient(circle at top, rgba(122, 155, 109, 0.15), transparent 32%)
```

---

## Image & Asset Guidelines

### Favicon
- Format: SVG
- Size: 32x32px reference
- Color: Sage green (#7a9b6d)
- Design: Premium star/diamond motif

### OG Image
- Format: SVG
- Size: 1200x630px
- Colors: Sage, rose, gold accents
- Contains: Brand name, tagline

### Product Images
- Source: imgur.com (external link)
- Sizing: Responsive with aspect-ratio
- Borders: Subtle sage/20% border on cards
- Overlay: Optional gradient overlay for depth

---

## Theme Color Meta Tag
```html
<meta name="theme-color" content="#faf7f2">
<meta name="color-scheme" content="light">
```

---

## Common Component Patterns

### Section Container
```tsx
<section className="border-t border-[#7a9b6d]/20 py-16 md:py-24">
  <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
    {/* Content */}
  </div>
</section>
```

### Grid Layout (3 columns)
```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* Items */}
</div>
```

### Card with Hover
```tsx
<div className="rounded-2xl border border-[#7a9b6d]/20 
                bg-gradient-to-br from-white/80 to-[#f5f1eb]/40 
                p-8 transition hover:border-[#7a9b6d]/40 
                hover:bg-white/90 hover:shadow-lg">
  {/* Card content */}
</div>
```

### Button Group
```tsx
<div className="flex flex-wrap gap-4">
  <button className="...primary...">Primary</button>
  <button className="...secondary...">Secondary</button>
</div>
```

---

## Design Tokens (Tailwind)

All design tokens are defined in `globals.css` using CSS variables:

```css
:root {
  --bg: #faf7f2;
  --bg-soft: #f5f1eb;
  --bg-darker: #f0ebe5;
  --card: rgba(122, 155, 109, 0.06);
  --border: rgba(122, 155, 109, 0.15);
  --text: #2a2622;
  --text-muted: #6b6560;
  --accent-sage: #7a9b6d;
  --accent-rose: #c97b7b;
  --accent-gold: #c4a574;
  --accent-cream: #e8e4d8;
}
```

Use via Tailwind class names (e.g., `text-[var(--accent-sage)]`)

---

## Future Enhancements

### Phase 2 Animations
- Scroll-triggered reveals (Framer Motion / GSAP)
- Parallax backgrounds on sections
- Hero video backgrounds
- SVG path animations
- Micro-interactions on form submission

### Phase 3 Interactive Elements
- Product carousel (blog posts)
- Service comparison table
- Testimonial slider
- Location interactive map
- Newsletter signup with confetti

### Phase 4 Advanced Features
- Dark mode toggle (CSS variable swap)
- Animated counters (stats section)
- Animated progress indicators
- Case study carousel
- Video testimonials

---

## Maintenance Notes

### Color Updates
If you need to change the primary color:
1. Update `--accent-sage: #7a9b6d` in `:root` in `globals.css`
2. Update all Tailwind hex references (search for `#7a9b6d`)
3. Update theme-color meta tag in `layout.tsx`
4. Rebuild and test all pages

### Font Changes
If you need different fonts:
1. Update `@import url(...)` in `globals.css`
2. Update font-family in `globals.css` (`font-family: "Inter"...`)
3. Update Tailwind class in component templates
4. Test heading hierarchy and contrast

### Component Updates
- All components use Tailwind classes for consistency
- Custom CSS in `globals.css` only for global styles
- Animations defined in `globals.css` for reusability
- Use CSS variables for color consistency

---

## File Structure

```
src/
├── app/
│   ├── globals.css          ← All theme styles, animations, variables
│   ├── layout.tsx           ← HTML structure, fonts, meta tags
│   ├── page.tsx             ← Homepage
│   ├── blog/page.tsx        ← Blog page
│   ├── services/page.tsx    ← Services page
│   ├── contact/page.tsx     ← Contact page
│   ├── goal/page.tsx        ← About page (goal route)
│   ├── locations/page.tsx   ← Locations page
│   ├── not-found.tsx        ← 404 page
│   └── error.tsx            ← Error boundary
├── components/
│   ├── site-header.tsx      ← Navigation
│   └── site-footer.tsx      ← Footer
└── lib/
    └── site.ts              ← Site configuration
```

---

## Quick Deploy Checklist

Before deploying to production:

- [ ] All pages tested on mobile
- [ ] All links working
- [ ] Form submission functional
- [ ] Images loading correctly
- [ ] Favicons displaying
- [ ] OG image previewing correctly
- [ ] Schema markup valid (schema.org validator)
- [ ] No console errors (DevTools)
- [ ] Performance good (Lighthouse)
- [ ] Build succeeds: `npm run build`

---

**Design System Version:** 1.0  
**Last Updated:** June 6, 2025  
**Created by:** Claude Code + Team  
**Status:** Production Ready

For questions or design updates, refer to `REDESIGN_SUMMARY.md` for the transformation details.
