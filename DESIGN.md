---
name: AMAX Vacations
description: An editorial tropical travel world that turns Canadian destination discovery into a trusted advisor conversation.
colors:
  deep-teal: "#002b31"
  brand-teal: "#003f46"
  tropical-magenta: "#d81862"
  tropical-magenta-dark: "#a70d48"
  warm-cream: "#f7f1e5"
  paper: "#fffdf8"
  ink: "#12333a"
  muted: "#586f73"
  line: "#d8dedb"
  sun-gold: "#f2cf72"
  whatsapp-green: "#1d9455"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(3.6rem, 6.5vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 4.4rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.65rem"
    fontWeight: 600
    lineHeight: 1.1
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.13em"
rounded:
  action: "8px"
  surface: "14px"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "22px"
  lg: "48px"
  section: "clamp(82px, 9vw, 128px)"
components:
  button-primary:
    backgroundColor: "{colors.tropical-magenta}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.action}"
    padding: "13px 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "#ed1f70"
    textColor: "{colors.white}"
  package-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
  filter-selected:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
  whatsapp-float:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.circle}"
    size: "58px"
---

# Design System: AMAX Vacations

## Overview

**Creative North Star: "The Tropical Editorial Escape"**

AMAX Vacations is a vivid, image-led travel publication with the confidence of a trusted Canadian advisor. Deep teal gives the world authority, warm cream makes it hospitable, and tropical magenta creates the decisive moments that move a traveller from inspiration to conversation. The result should feel youthful and premium, never like a generic discount aggregator.

Photography carries the desire. Editorial serif headlines, generous vertical rhythm, and large scenic crops make each destination feel worth entering; compact sans-serif copy keeps package facts practical. The official AMAX mark is reserved for navigation and footer identity so destination photography stays clean. Original destination imagery lives under `assets/destinations/`; provenance and creation notes are maintained in `IMAGE-SOURCES.md`.

The interface is a catalogue and advisor handoff, not a booking engine. Destination discovery, honest illustrative pricing, Canada-wide departure language, and repeated WhatsApp actions must remain visually and semantically clear.

**Key Characteristics:**

- Image-led destination discovery with editorial scale and tropical warmth.
- Deep-teal structure, cream breathing room, and sparing magenta conversion accents.
- Premium rounded image cards with subtle lift and restrained image zoom.
- Human-advisor trust cues and a dominant WhatsApp conversion path.
- Canada-wide language with transparent, non-live package pricing.

## Colors

The palette balances deep coastal authority with warm editorial paper and one high-energy tropical accent.

### Primary

- **Brand Teal:** The primary field for navigation, reassurance sections, branded tiles, and destination inquiry panels.
- **Deep Teal:** The darker cinematic anchor for announcement bars, footer fields, image fallbacks, and hero overlays.

### Secondary

- **Tropical Magenta:** The scarce action color for primary CTAs, active filters, icons, bullets, and selection moments.
- **Tropical Magenta Dark:** The more readable accent for compact links and small price-adjacent labels on light surfaces.

### Tertiary

- **Sun Gold:** A small trust and focus accent for visible keyboard outlines, branded script, and secondary emphasis on deep teal.
- **WhatsApp Green:** Reserved for the floating WhatsApp affordance so the familiar channel remains instantly recognizable.

### Neutral

- **Warm Cream:** Elevated editorial panels, hero trust strips, and final conversion containers.
- **Paper:** The default page background; warmer than pure white to prevent a sterile catalogue feel.
- **Ink:** Primary copy on light surfaces.
- **Muted:** Supporting copy, qualifiers, metadata, and pricing disclaimers.
- **Line:** Quiet dividers and control borders.
- **White:** Text over dark fields and the base of cards and controls.

**The Magenta Is a Signal Rule.** Use tropical magenta for action, state, or a small semantic flourish; never wash whole sections in it.

**The Teal Carries Trust Rule.** Deep and brand teal should frame the experience and protect text legibility over photography.

## Typography

**Display Font:** Playfair Display (with Georgia and serif fallbacks)  
**Body Font:** DM Sans (with Arial and sans-serif fallbacks)  
**Label Font:** Barlow Condensed (with Arial Narrow and sans-serif fallbacks)

**Character:** Playfair Display supplies aspirational editorial drama; DM Sans handles clear, contemporary guidance; Barlow Condensed makes prices, announcements, counters, and AMAX wordmarks feel crisp and commercially legible.

### Hierarchy

- **Display** (600, fluid 3.6rem–6rem, 0.94 line height): Homepage hero statements. Destination detail heroes may expand to a fluid 3.8rem–7.2rem with a tighter 0.9 line height.
- **Headline** (600, fluid 2.5rem–4.4rem, 1.02 line height): Major section headings and conversion statements.
- **Title** (600, 1.65rem, 1.1 line height): Destination cards, benefit headings, and compact editorial titles.
- **Body** (400, 1rem, 1.6 line height): Advisor-led explanations and package context; keep long prose near 55–65 characters per line.
- **Label** (600–700, 0.68rem–0.82rem, wide tracking where uppercase): Announcements, buttons, facts, prices, pills, and compact navigation metadata.

**The Serif Leads, Sans Explains Rule.** Use Playfair for emotional hierarchy and DM Sans for decisions, facts, and instructions; never turn paragraphs into display typography.

**The Numbers Stay Crisp Rule.** Use Barlow Condensed with tabular numerals for package prices and ordered steps.

## Layout

The desktop system uses a centered content width capped at 1240px with at least 24px side clearance and generous fluid section spacing. Homepage content alternates between full-bleed cinematic fields and contained editorial grids. Package discovery uses one prominent text search followed by a three-column card grid; supporting content uses purposeful asymmetric splits rather than a uniform component wall.

At 1060px, packages move to two columns. At 760px, navigation collapses behind the native menu button, package cards become one column, the search remains full-width, split sections stack, and major CTAs become easier to reach. Side clearance tightens to 20px–22px without eliminating breathing room. Touch targets remain at least 44px.

Detail pages follow a consistent journey: immersive hero, raised facts-and-price summary, copy beside a three-image gallery, inclusions, then a full-width WhatsApp inquiry panel. See `destinations/SURFACE.md` for the surface-level contract.

**The Image Before Inventory Rule.** Lead with destination feeling, then expose the smallest useful facts and the advisor handoff; do not simulate a live booking dashboard.

## Elevation & Depth

Depth is ambient and selective. Images and cards rise from warm paper through broad, low-opacity teal shadows; hover states add a small upward translation and slightly stronger shadow. Hero depth comes from photographic cropping and deep-teal gradients rather than stacked glass panels.

### Shadow Vocabulary

- **Ambient Surface** (`0 18px 45px rgba(0,45,49,.12)`): Trust strips, large image frames, summaries, and final CTA panels.
- **Card Rest** (`0 10px 30px rgba(0,45,49,.10)`): Package cards at rest.
- **Card Hover** (`0 24px 50px rgba(0,45,49,.17)`): Interactive package-card lift.
- **Magenta Action** (`0 10px 24px rgba(160,0,65,.28)`): Primary conversion controls only.
- **WhatsApp Float** (`0 12px 30px rgba(0,48,27,.30)`): Persistent channel affordance.

**The Photograph Makes the Depth Rule.** Use shadow to support image hierarchy, never to make every text container float.

## Shapes

The system uses gently rounded editorial surfaces. Cards, image frames, summaries, and inquiry panels share a 14px radius; primary buttons use a tighter 8px radius to feel decisive. Pills and brand overlays use fully rounded silhouettes. Circular forms are reserved for benefit icons and the WhatsApp shortcut.

Photography is clipped cleanly into these shapes. Borders are quiet and structural; the active filter earns a magenta outline and glow, while ordinary containers rely on spacing and tonal contrast.

**The Real Mark Rule.** Use `assets/logo/amax-logo-color.png`, the approved pink-and-lime AMAX Vacations logo supplied September 15, 2026, as a crisp overlay or standalone brand element. Preserve its proportions and colours; never retype it, distort it, or bake an approximation into destination photography.

## Components

### Buttons

- **Shape:** Decisive soft rectangle (8px radius), 48px minimum height, with uppercase DM Sans labeling and wide tracking.
- **Primary:** Tropical magenta on white with a restrained magenta shadow; used for the dominant WhatsApp action.
- **Hover / Focus:** Lift 2px and brighten the magenta on hover. Keyboard focus uses a 3px Sun Gold outline with a 4px offset.
- **Text Link:** Minimum 44px target with a thin magenta underline; used for secondary exploration, not as a competing filled CTA.

### Chips

- **Departure Pill:** Fully rounded, quiet line border, muted label, and teal value. It communicates the Canada-wide departure region without behaving like an editable live-search field.
- **Destination Links:** Fully rounded detail-page links with a quiet line border; hover shifts border and text toward magenta.

### Cards / Containers

- **Destination Search:** A labelled native search input with clear affordance, live result summary, forgiving keyword matching, keyboard Escape handling, and an honest empty state.
- **Package Card:** White, 14px corners, broad soft shadow, 1.45:1 image crop, and 22px content padding. Hover lifts the card and zooms the image only slightly.
- **Fact Summary:** Warm-cream grid raised across the bottom of a destination hero; facts precede price and the WhatsApp action.
- **Trust and Contact Block:** A two-part deep-teal and warm-cream section pairing official TICO/IATA badge assets with readable office contact details. Registration claims link to their verification sources; contact methods remain native telephone, email, map, and website links.

### Navigation

- **Desktop:** Deep/brand-teal header with white links, 44px targets, and one visible WhatsApp CTA. Detail pages place the same header transparently over the hero with a protective gradient.
- **Mobile:** A 46px native menu button controls a stacked navigation region and exposes `aria-expanded`. The desktop header CTA hides, while in-page and floating WhatsApp actions preserve conversion continuity.

### Hero

Use a real destination or campaign photograph as the dominant first-view asset. Protect white display copy with a directional deep-teal gradient; preserve a clear focal area in the image. Motion is limited to a single 1.1-second settle and is disabled under `prefers-reduced-motion`.

### WhatsApp Conversion

WhatsApp is the dominant action in the header, hero, detail summary, final inquiry block, and persistent 58px floating control. Labels should describe the next human step—start, ask, inquire—rather than imply instant booking or confirmed inventory.

## Do's and Don'ts

### Do:

- **Do** lead discovery with authentic, geographically coherent destination imagery and meaningful alt text.
- **Do** source original destination imagery from `assets/destinations/` and maintain provenance in `IMAGE-SOURCES.md`.
- **Do** preserve the exact AMAX mark in the navigation and footer so it remains crisp and truthful without obscuring destination photography.
- **Do** use a native search input for filtering, native links for navigation, visible focus, semantic labels, a clear empty state, and 44px minimum targets.
- **Do** keep illustrative pricing explicitly qualified as CAD, per person, based on double occupancy, and subject to advisor confirmation.
- **Do** speak to travellers across Canada and use “major Canadian gateways” when a specific origin is not verified.
- **Do** lazy-load below-the-fold imagery, provide intrinsic image dimensions, prioritize the hero image, and honor reduced-motion preferences.
- **Do** preserve the full-width mobile destination search, single-column package flow, stacked detail content, and accessible mobile menu.

### Don't:

- **Don't** claim live availability, guaranteed pricing, ratings, testimonials, supplier inventory, or checkout capability that the static catalogue does not have.
- **Don't** use generic dashboard chrome, dense search widgets, or discount-aggregator styling; the product is an editorial shortlist with human follow-up.
- **Don't** stretch, recolor, redraw, or embed a synthetic AMAX logo into scenic imagery.
- **Don't** let magenta compete with photography across large background areas or turn every secondary action into a filled button.
- **Don't** introduce auto-playing carousels, heavy video, or decorative motion that weakens loading performance or reduced-motion behavior.
- **Don't** hide pricing qualifiers, Canada-wide scope, or the advisor-confirmation step beneath interaction.
