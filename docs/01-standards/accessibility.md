# Accessibility

The floor, not a cleanup pass.

1. **WCAG 2.0 AA (AODA) is the baseline:** semantic landmarks (`header`/`main`/`footer`/`nav`/`section`), one `h1` per page, accordion and nav keyboard-operable with correct ARIA, focus trapped in the nav overlay while open, visible `ring` focus states, decorative art `aria-hidden`.
2. **Respect `prefers-reduced-motion`**: ambient and entrance animations pause or reduce; every motion moment has a static equivalent, and nothing is readable only through motion.
3. **Contrast is checked in every theme scope**: AA contrast for text tokens (`muted-foreground` on `background` included) in the base theme and inside any inverse-color section.
