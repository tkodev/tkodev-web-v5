# Observations

Research findings and risks paired with the direction taken, structured by the
**priority frame** and subject to the directions-are-research rule, both defined
in [../standards/process.md](../standards/process.md) §The PRD. Where a direction
conflicts with the token contract, [04-design.md](04-design.md) wins. Settled
design lives in [03-solution.md](03-solution.md).

## 1. The Problem

A portfolio that proves a design engineer's range through visuals, with almost no
prose, while wearing a military/control-system aesthetic that could collapse into
either a generic dark dashboard or decorative cosplay. The hard part is making the
aesthetic *load-bearing*: every cinematic and HUD element must be on-brand and
crafted (honest wherever it displays a value), and the chrome must never outshine
the work it exists to present.

## 2. The Hardest Failure Mode

### Risk: the feeling rings false

The site's job is to convey a strong feeling: cinematic, precise, seasoned. The
military/HUD aesthetic is also a well-worn trend, and the moment any element feels
pasted-on, generic, or cheaply fake, the whole fiction collapses into template
cosplay: the exact opposite of the seasoned-engineer signal. This is not an
argument against ornament; atmosphere is *why the aesthetic works*. It's an
argument against cheap ornament.

**Direction.** The two-tier readout/atmosphere rule ([01-brief.md](01-brief.md)
pillar 1). Applied concretely: the clock is the real time, the coordinates are
Toronto's, the counters derive from the career constants, figure numbers actually
increment, the version stamp is the real build; one obviously-fake readout poisons
trust in all the rest. What gets cut is not ornament but *off-brand* ornament: the
element that could appear on any dark-dashboard Dribbble shot. Precision instead of
theatrics is what separates acustable.com from that pile; feeling instead of
sterility is what separates it from an admin panel.

### Risk: chrome outshining work

The site's job is social proof; the work is the evidence. A too-loud shell buries
a 10,000-datapoint telemetry UI under its own decoration.

**Direction.** The monochrome-chrome rule ([01-brief.md](01-brief.md), the gmunk
inspiration). Work sits in uniform monochrome mattes so wildly different media
(telemetry UIs, CAD renders, architectural drawings, Web 1.0 screenshots) read as
one system, and every saturated pixel on screen is, by definition, the work.

## 3. What the research found

### The current v4 site (tko.dev, live)

- The homepage is a mood-gate (loading state, audio, one CTA): zero evidence of
  range up front. A visitor who doesn't dig assumes "UI designer who codes."
- Every case study (a teenage Xanga theme and a subsecond oil-rig telemetry
  platform alike) pours into the identical template, flattening the strongest
  proof points.
- The actual range (physical → spatial → digital, two decades, precision under
  constraint) is the differentiator, and it's structurally invisible.

### The v5 Figma file (audited July 2026)

Sharpest read: *a shadcn zinc site wearing a military-noir texture, with a
genuinely strong accent-typography voice bolted on.* The identity is ~15% of the
canvas; the redesign promotes that 15% to the load-bearing system.

**Bespoke (protect and amplify):**

- The accent-label system: Alliance No.2 font with expanded text
- The reticle/ring hero overlay and mix-blend-exclusion loading core.
- Corner bracket labels (`[ spec validated ]`), vertical side rails.
- The `figure N.0` / `5.0 / Contact //` indexing convention (under-systematized:
  numbers don't increment correctly yet).
- The command copy voice: "SYNCHRONIZING", "SIGNAL ACQUIRED", "ASSETS DEPLOYED".
- The works tile-wall-at-15%-opacity hero; the rotated giant numeral on About.

**Template (rebuild):**

- Verbatim shadcn zinc palette; `card` equals `background`, so every surface is a
  16%-white hairline box.
- One baked background image supplies all atmosphere, color, and grain on every
  page (a wallpaper, not a system), and it carries orange while work imagery sits
  dark: backwards from the color rule.
- Rings and reticles are flattened PNG exports: nothing can animate, scan, or boot.
- Type maxes at 60px on 1920px frames; typography-as-image is timid.
- The nav overlay is a plain centered list with none of the accent language.
- Uniform 96px-padded centered section stacks: SaaS-marketing rhythm.
- No mono/tabular tier anywhere: coordinates, timestamps, and stats are all
  proportional Alliance, which is why the "instrument" read stays approximate.

### The reference sites

Common thread: **all of them replace "cards describing work" with a surface that
behaves.** Structure is bespoke (a non-scrolling viewport, a hairline ledger, a
horizontal reel); there is always one physical/textural layer a template can't ship
(custom cursor, film grain, drag inertia, canvas-in-cell generative art); media is
autonomous (autoplaying loops, intro sequences) so visuals carry the narrative.
Text collapses to labels: coordinates, timestamps, `01 //` indices.

Standout techniques adopted (see [03-solution.md](03-solution.md) for where):

- micheledu: single-viewport instrument panel; biography as live widgets.
- ctxdc: hairline cell/ledger architecture; canvas as just another cell.
- rauno: the work atom: muted autoplay loop + title + date, nothing else.
- naughtyduk: global film-grain compositing; grab-to-scroll reel with snap.
- gmunk: mosaic archive; monochrome chassis, chromatic cargo.
- acustable: earned restraint; testimonials threaded as ambient status readouts.
- midlife: the skeuomorphism guardrail: a rendered control must function or be cut.
- Shopify Editions: density hidden inside scroll choreography, for one page only.

## 4. Key Design Decisions

### Risk: flash vs subtlety (parallax showcase vs rauno restraint)

Both instincts are real and they conflict as page mechanics.

**Direction.** Restraint is the chassis; cinema is for moments. Each surface gets
**one** signature interaction, never two: boot sequence (entry), instrument panel
(home), ledger + reel (works index), scroll choreography (one flagship case study
only), quiet dossier (other work details). Site-wide parallax scrolljacking is out.

### Risk: frosted glass vs the military theme

The glass trend reads soft and consumer; the references are hard: hairlines,
grain, matte black.

**Direction.** No frosted glass. The skeuomorphism that fits the theme is the
**artifact**: work presented as dossiers, spec sheets, tickets, film strips,
physical-feeling documents with stamped metadata. Depth comes from grain, hairline
borders, and blend modes, not blur.

### Risk: the aesthetic reads as borrowed

Military/HUD styling is a well-worn trend; on most portfolios it's costume.

**Direction.** Lean into the fact that it's earned. Beyond MPD (PLC-connected rig
telemetry), the observability/OpenTelemetry work, and the industrial design are
literally this subject matter. The flagship case study gets the cinematic
treatment; work is annotated like engineering documentation (the wireframe
spec-sheet presentation fits the CAD work natively). The site never claims the
aesthetic; the work justifies it.

### Risk: WebGL/canvas as decoration

The creative-site urge is to ship a hero blob. Blobs are template-adjacent now and
cost LCP.

**Direction.** Canvas as **generative instruments**, budgeted: dot-matrix/contour
fields and the animated reticle, placed inside the grid system (ctxdc's
canvas-in-cell), driven by real data where possible. One or two canvas moments per
page maximum; static SVG fallback under reduced motion; nothing blocks first
paint. Atmospheric instruments need no data feed; they need to pass the brand
bar; any value they *display* falls under the readout rule.

### Risk: the type system can't say "instrument"

The audit confirmed the signature move (small expanded uppercase accents) but found
no mono/tabular tier, and tabular alignment is what makes real HUDs read as
instruments.

**Direction.** Add a dedicated data scale: monospace with tabular numerals, for
machine data (timestamps, coordinates, counters, meta footers, figure indices).
Alliance No.2 keeps display and accent-label duty; Geist keeps prose. Display scale
gets promoted (the 128px rotated numeral becomes normal, not exceptional). A pixel
display face may join later as a fourth voice if a concrete use earns it.

### Risk: token sprawl (a ton of custom values vs a standardized system)

A bespoke design accumulates custom values fast: colors, tracking ratios, grain
parameters, easings. Scattered through components they become unmaintainable; but
flattening them into one giant token list buries the standardized vocabulary the
app should speak.

**Direction.** Two layers. A **brand layer** holds every custom raw value, defined
once (`--brand-*`); it's allowed to be large. A **semantic layer** is assigned
from brand tokens and is the only thing components consume, at all times. For the
semantic vocabulary: **shadcn's convention over Untitled UI's**. Untitled UI's
taxonomy (full gray ramps, per-property text/bg/border token families) earns its
weight in large multi-theme product apps; this site is monochrome, dark-only, and
already speaks shadcn in both the codebase (CVA components, `components.json`) and
the Figma variables (`dark-vars/background`, `foreground`, `muted`, `border`).
shadcn's compact background/foreground pairing covers it, extended with a few
site-specific semantic tokens (`sunken`, `faint`, `hairline`, `signal`) where
shadcn has no word for the concept. Same pattern for type: three named scales
(heading `h`, accent `e`, body) matching the tkodev-design-v5 text tokens.

### Risk: light/dark theming vs one considered theme

The noir direction is dark by definition; a light mode would be a second, half-committed design.

**Direction.** The toggle dies ([04-design.md](04-design.md) §Color): depth over
breadth; grain, blend modes, and edge-lit hairlines designed once, properly. The
light theme survives for inverse-color sections.

### Risk: text: where prose survives

"Let the work speak" can overcorrect into a site that says nothing.

**Direction.** Three text registers, in order of prevalence: **labels** (the
annotation grammar: designations, dates, coordinates, indices), **captions** (one
line under a figure), **prose** (opt-in only: the flagship narrative, the About
statement, per-work "In Depth" behind a disclosure). No teaser paragraphs, no
marketing copy.

## 5. What to Prototype First

The riskiest unknown is the **cinematic system over real data**. Foundations
delivers the ingredients (design tokens, the type scales, the grain layer),
gated on the `/design` specimen; the **proving surface** then composes them end
to end: the boot sequence and the home instrument panel, exercising canvas
performance, reduced-motion gating, the honest-readout rule wired to
`constants/`, and whether the promoted accent system can carry a page without
the shadcn skin underneath. The ledger and dossiers extend the proven system.

## Low Priority Features

*Deliberately deferred: noted, not built.*

- **Sound design**: v4 had ambient audio; the boot sequence could carry a
  reduced-motion-respecting audio layer later. Not in the first build.
