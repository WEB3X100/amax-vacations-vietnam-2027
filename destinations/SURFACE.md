# Destination Detail Surface

Mode: Persuade  
Applies to: `destinations/*.html`, `destination-shell.js`, and `destination.css`

## Purpose

Turn destination interest into an informed WhatsApp inquiry without implying live inventory or checkout. Every page reuses the global system in `../DESIGN.md` and changes only the destination content and imagery.

## Required Sequence

1. **Immersive hero:** Geographic image, back link, destination name, and concise introduction under a deep-teal readability gradient.
2. **Raised summary:** Canada departure region, availability language, package style, illustrative CAD starting price, and “Ask about this trip” CTA.
3. **Overview and facts:** Short advisor-oriented copy plus departure, airline, resort, meal-plan, and date facts.
4. **Three-image gallery:** One dominant image and two supporting crops on desktop; one wide image over two supporting images on mobile.
5. **Inclusions:** Six scannable possibilities, expressed as what the vacation can include rather than guaranteed inventory.
6. **Final WhatsApp panel:** Deep-teal conversion block requesting preferred dates, departure city, traveller count, and budget.
7. **Disclosure and onward navigation:** Visible non-live pricing note followed by links to the other destinations.

## Responsive Contract

- At 980px and below, the summary becomes two columns, its CTA spans both, overview stacks, and inclusions become two columns.
- At 760px and below, the gallery becomes one dominant wide frame plus two supporting frames, inclusions become one column, and the inquiry panel stacks with a full-width CTA.
- The mobile menu remains a native button with `aria-expanded`; all actionable targets remain at least 44px.

## Content and Asset Guardrails

- Use the original destination imagery under `../assets/destinations/`; provenance is documented in `../IMAGE-SOURCES.md`.
- Use the approved full-colour `../assets/logo/amax-logo-color.png` as a separate asset, preserve its proportions and colours, and never composite it into scenery.
- Keep “Canada,” “major Canadian gateways,” CAD units, per-person basis, double-occupancy basis, and advisor confirmation visible wherever pricing is shown.
- Do not introduce live availability, named supplier claims, ratings, reviews, or guaranteed inclusions without approved evidence.
- Preserve intrinsic image dimensions, eager priority for the hero only, lazy loading for gallery imagery, meaningful alt text, visible focus, and reduced-motion behavior.
