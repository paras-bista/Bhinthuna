# Bhintuna House Design System

## Brand Positioning
Bhintuna House is an Authentic Nepali Restaurant in Parramatta, Sydney.

Brand personality:
- Warm and welcoming
- Premium but approachable
- Heritage-led, modern execution
- Social dining and hospitality-first

Design intent:
- Luxury casual dining energy
- Minimal layouts with rich textures
- Strong food focus with emotionally warm lighting

## Logo Treatment
Primary lockup guidance:
- Use a transparent-background logo (prefer SVG).
- Keep clear space around logo equal to at least 0.75x logo height.
- Place on deep maroon, charcoal, or warm cream backgrounds for best contrast.

Do:
- Use one-color gold or white lockups on dark backgrounds.
- Use the full-color saffron/maroon version on light backgrounds.

Do not:
- Add outer strokes or drop shadows that reduce clarity.
- Place logo over noisy imagery without an overlay.
- Stretch logo non-proportionally.

Recommended lockups:
- Horizontal lockup for navbar and hero.
- Stacked lockup for social/profile and print assets.

## Color Palette
Core palette:

| Token | Hex | Usage |
|---|---|---|
| Saffron 500 | #FF7A00 | Primary CTA, highlights, links |
| Saffron 600 | #E86800 | Primary hover, active states |
| Maroon 700 | #9C2A2A | Brand base, nav background |
| Maroon 800 | #7D1F1F | Dark mode surfaces |
| Cream 50 | #FDF6EC | Light mode page background |
| Beige 100 | #F4E8D6 | Cards, subtle sections |
| Gold 500 | #D4A017 | Premium accents, dividers, badges |
| Green 700 | #2E7D32 | Freshness/accent labels |

Neutrals:

| Token | Hex | Usage |
|---|---|---|
| Ink 900 | #1E1613 | Primary text light mode |
| Ink 700 | #3A2D28 | Secondary text light mode |
| Stone 400 | #B8A89A | Borders and subtle dividers |
| Sand 200 | #E8DAC8 | Inputs and soft backgrounds |
| Charcoal 950 | #0F0C0A | Dark mode background |
| Smoke 200 | #E6DDD3 | Dark mode text |

Semantic states:

| Token | Hex |
|---|---|
| Success | #2E7D32 |
| Warning | #D4A017 |
| Error | #B3261E |
| Info | #9C2A2A |

## Light & Dark Theme Tokens
Light mode:
- Background: #FDF6EC
- Surface: #FFFFFF
- Surface Alt: #F4E8D6
- Text Primary: #1E1613
- Text Secondary: #3A2D28
- Border: #E8DAC8
- Primary: #FF7A00
- Primary Hover: #E86800

Dark mode:
- Background: #0F0C0A
- Surface: #1A1310
- Surface Alt: #261B16
- Text Primary: #E6DDD3
- Text Secondary: #CBBEAF
- Border: #3B2D25
- Primary: #FF7A00
- Primary Hover: #FF8A1C
- Accent Gold: #D4A017

## Typography System
Type pairing:
- Headings: Playfair Display
- Body/UI: Inter

Font usage rules:
- Headings: sentence case preferred, tight optical kerning.
- Body: 400/500 for readability.
- Buttons and nav labels: 600.

Type scale (desktop):
- Display XL: 72/80, Playfair Display, 700
- Display L: 56/64, Playfair Display, 700
- H1: 48/56, Playfair Display, 700
- H2: 40/48, Playfair Display, 700
- H3: 32/40, Playfair Display, 600
- H4: 24/32, Playfair Display, 600
- Body L: 20/32, Inter, 400
- Body M: 18/28, Inter, 400
- Body S: 16/24, Inter, 400
- Caption: 14/20, Inter, 500
- Overline: 12/18, Inter, 600, tracking +0.14em

Type scale (mobile):
- Display: 44/50
- H1: 36/42
- H2: 30/36
- H3: 24/30
- Body: 16/24

## Spacing, Radius, Shadows
Spacing scale:
- 4, 8, 12, 16, 24, 32, 40, 56, 72, 96

Radius:
- Small: 8
- Medium: 12
- Large: 18
- Pill: 999

Shadows:
- Soft: 0 6px 24px rgba(60, 30, 10, 0.10)
- Medium: 0 12px 34px rgba(45, 22, 8, 0.16)
- Elevated dark: 0 14px 38px rgba(0, 0, 0, 0.45)

## Buttons
Primary button:
- BG: #FF7A00
- Text: #FFFFFF
- Radius: 999
- Padding: 14px 28px
- Hover: #E86800 + subtle lift (translateY -1px)

Secondary button (outline/ghost):
- BG: transparent
- Border: 1.5px solid currentColor
- Text: inherit
- Hover: tinted saffron overlay (rgba(255,122,0,.10))

Button states:
- Disabled: opacity 0.45, no shadow
- Focus: 2px ring #D4A017 with 2px offset

## Card Styles
Menu card:
- Surface: white (light), #1A1310 (dark)
- Radius: 18
- Image ratio: 4:3
- Border: 1px subtle neutral
- Hover: stronger shadow + border accent saffron

Story card:
- Editorial style with cream texture
- Icon + short headline + concise paragraph

Pricing badge:
- Gold or saffron pill with high contrast text

## Navbar Variants
Variant A (hero overlay):
- Transparent background
- White text
- Blended logo allowed for PNG fallback

Variant B (scrolled):
- Solid maroon/charcoal surface with blur
- Compact logo size
- Links with saffron hover

Desktop behavior:
- Logo left
- Nav centered
- Utility action right (optional)

Mobile behavior:
- Logo left at reduced height
- Hamburger right
- Drawer with large touch targets (48px min)

## Hero Overlay Styles
Preferred overlays:
1. Warm gradient overlay:
   linear-gradient(180deg, rgba(24,12,8,.25), rgba(24,12,8,.72))
2. Editorial vignette:
   radial-gradient(circle at center, rgba(0,0,0,0) 30%, rgba(0,0,0,.45) 100%)
3. Saffron glow accent:
   radial-gradient(circle at 25% 15%, rgba(255,122,0,.18), transparent 55%)

Hero content principles:
- Keep one main message and one supporting line.
- Use two CTAs max.
- Preserve negative space around food/steam focal area.

## Icon System (Nepali-inspired Motifs)
Icon style:
- 1.75px rounded strokes
- Minimal geometry
- Soft corners and balanced spacing

Motif directions:
- Pagoda roof silhouette
- Himalayan ridge line
- Spice leaf/chili contour
- Mandala dot pattern (subtle, decorative only)

Recommended icon library:
- Lucide for UI consistency
- Custom SVG motifs for brand moments only

## Photography Direction
Visual language:
- Moody warm lighting, side light and steam visibility
- Wooden textures, brass/copper serving elements
- Tight crop details: spices, grill marks, hand plating
- Rich reds, saffron highlights, and natural greens

Shot list guidance:
- Signature thali close-up
- Chef plating action shot
- Shared table hospitality scene
- Ingredient macro textures (spices, herbs, chutney)

## Mobile-First Responsive Rules
Breakpoints:
- xs: 360
- sm: 640
- md: 768
- lg: 1024
- xl: 1280

Rules:
- Start with single-column layout.
- Maintain minimum 44x44 touch targets.
- Keep max line length 26-34 chars on hero headlines.
- Reduce decorative effects on low-power mobile.
- Avoid fixed heights for text-heavy cards.

## Accessibility Rules
- Minimum contrast 4.5:1 for body text.
- Keyboard visible focus states on all interactives.
- Use semantic landmarks: header/main/nav/footer.
- Use alt text that describes dish and atmosphere context.

## Component Specs Quick Sheet
Primary CTA:
- Height: 48
- Radius: 999
- Font: Inter 600, 16

Navbar link:
- Font: Inter 600, 14
- Letter spacing: 0.06em
- Hover color: #FF7A00

Section heading:
- Font: Playfair Display 700
- Size: 40 desktop / 30 mobile

## Design Deliverables Created
Moodboards:
- [public/design-system/moodboard-01-hearth.svg](public/design-system/moodboard-01-hearth.svg)
- [public/design-system/moodboard-02-market.svg](public/design-system/moodboard-02-market.svg)
- [public/design-system/moodboard-03-evening.svg](public/design-system/moodboard-03-evening.svg)

Full-screen hero example:
- [public/design-system/hero-example.html](public/design-system/hero-example.html)

## Optional Next Step for Implementation
If you want this design system wired into your app immediately, map these tokens to your Tailwind theme and replace existing semantic colors with this token set in one migration pass.
