# Solution

The settled design: the Figma surfaces described at concept level, read through
the research in [02-observations.md](02-observations.md). The structure lives in
[05-architecture.md](05-architecture.md); the token contract in [04-design.md](04-design.md).
A concept not yet in the Figma is marked **direction**: research, not contract
([process](../01-standards/process.md) §The PRD).

## The concept

**A declassified engineering dossier.** A near-black, monochrome command surface
where the work (telemetry UIs, CAD renders, architectural drawings, Web 1.0
relics) is presented as evidence, annotated and indexed like technical
documentation: accent labels (`1.1 / PROJECTS //`), incrementing figure numbers,
corner bracket annotations (`[ spec validated ]`), command copy ("SYNCHRONIZING",
"SIGNAL ACQUIRED", "ASSETS DEPLOYED").

The layers, top to bottom:

| Layer | What it is |
| --- | --- |
| **Chassis** | Near-black base, alpha-white hairlines, textured underlays, annotation density at the edges (centers breathe) |
| **Voice** | The three settled type scales (heading Alliance display, accent small expanded uppercase, body Geist prose) plus a tabular-mono **data scale**: direction |
| **Payload** | The work: media in bordered mattes carrying the site's color (the brief's chrome rule applied) |
| **Signal** | Direction: one accent color, small-scale and functional only |
| **Proof** | The brief's readout rule applied: real career data behind every displayed value |

## Figma frames

| Frame | Link |
| --- | --- |
| Loading / boot sequence | [`9:797`](https://www.figma.com/design/XcvIouVcagv7vGRRLEy6Gj/tkodev-web-v5?node-id=9-797) |
| Nav overlay | [`33:7043`](https://www.figma.com/design/XcvIouVcagv7vGRRLEy6Gj/tkodev-web-v5?node-id=33-7043) |
| Home | [`9:2380`](https://www.figma.com/design/XcvIouVcagv7vGRRLEy6Gj/tkodev-web-v5?node-id=9-2380) |
| Works index | [`67:1947`](https://www.figma.com/design/XcvIouVcagv7vGRRLEy6Gj/tkodev-web-v5?node-id=67-1947) |
| Work detail | [`68:12288`](https://www.figma.com/design/XcvIouVcagv7vGRRLEy6Gj/tkodev-web-v5?node-id=68-12288) |
| About | [`136:2405`](https://www.figma.com/design/XcvIouVcagv7vGRRLEy6Gj/tkodev-web-v5?node-id=136-2405) |
| Experience | not designed yet |

## Surfaces

Global: the **boot sequence** (entry overlay) and the **nav overlay**
(full-screen). Routes and navigation live in
[05-architecture.md](05-architecture.md) §Information architecture.

## Pages

### Boot sequence (entry)

The settled loading frame: the brand ring/reticle composite with the
mix-blend-exclusion core, "SYNCHRONIZING" in the accent register, and a progress
readout tied to actual loading, never a fake timer. Plays once per session,
skippable on any input, absent entirely under reduced motion; doubles as genuine
loading cover and never blocks an already-loaded page. Direction: the flattened
underlay redrawn as animated vectors.

### Home: the briefing

The hero reads identity off the brand instrument: the ring/reticle composite,
eyebrow name, display designation (STAFF SOFTWARE ENGINEER · DESIGN ENGINEER), one
line of positioning, corner annotations. Below it, indexed evidence sections:

- **Selected works**: the featured trio as framed project cards, each linking
  into a work detail.
- **Statement**: one display-scale line in a bordered band.
- **Overview**: the bio card (portrait, career summary, career CTA) beside the
  eight competencies as an indexed accordion.
- **Testimonials**: quote cards in drifting marquee rows; every quote real.
- **Contact**: the transmission block

### Works: the manifest

- **Hero**: the work tile-wall at low opacity under the command headline
  ("SIGNAL ACQUIRED / ASSETS DEPLOYED"): the range visible before a single click.
- **Featured**: the flagship case studies as full-width horizontal cards.
- **Archive**: the complete record as a dense grid, every entry present at once
  (no load-more gate); every era belongs here; the range is the point. Mediums
  (software / industrial / spatial / web-era / experiment) categorize the archive.

### Work detail: the dossier

Quiet and document-like: designation tagline, display title, badge row, and the
meta footer (CLIENT / LOCATION / YEAR / TEAM), then the evidence: an intro
statement, real stats, a testimonial where one exists, alternating annotated
figures with incrementing `figure N.0` indices, and full-width media plates.

The figures and the plates carry different weight. **Stories** are the annotated
figures: each pairs one media asset with copy that explains the work behind the
frame, not what the frame depicts. A story answers what Tony owned or shaped here,
what problem, constraint, or decision the asset represents, and why it mattered to
the product, the client, or the career arc; the pattern is "here is the work I
owned, this asset proves it, here is why it mattered." Stories carry the dossier's
argument for design-minded engineering, product judgment, systems thinking, and
shipped work. **Visuals** are the supporting plates: extra media that broadens the
record with range, detail, atmosphere, or proof of polish, never load-bearing for
the narrative. Stories tell the story; visuals widen the file.

Direction: one flagship (Beyond MPD, the earned centerpiece) gets scroll
choreography on this same route (pinned scenes, telemetry-style data reveals),
built last, on top of the proven dossier system.

### Experience: the service record *(no Figma frame)*

Career history as its own surface, all real career data; dense and scannable, no prose
per entry. The signature interaction is the ledger itself, not a new futuristic moment.

- **Hero**: the brand instrument, identity only.
- **Record**: the employment ledger. Roles collapse into one indexed row per employer
  carrying the role count, the elapsed span, and the engagement type; the employer is the
  disclosure, opening to its roles with their spans, locations, duties, and capability
  badges. Resume is the one download action, in the board's CTA slot.
- **Summary**: an unindexed band closing the ledger with the evidence behind it, given the
  same bare treatment the dossier gives a work's stats. The four readouts an evaluating
  founder or CTO scans for (years experience, employers, projects shipped, clients and
  brands), each counted from the career constants rather than typed, over the employer and
  client logos drifting as counter-rotating marquee rows, dimmed until hovered. An
  organization appears only if it ships a dark-theme mark.
- **Signals**: the speaking log, each talk indexed with its host, date, and the artifacts
  it left behind (recording, slides, album).
- **Training**: the education log, same row grammar, year spans only.

### About: the identity file

- **Statement**: the first-person lead ("Design was the first language I spoke
  fluently") over the brand underlay.
- **Method**: the how-I-work prose band, then the process steps with the oversized
  rotated numerals.
- **The details**: the origin prose and signature asset (the human layer), with a
  pointer to `/experience` for the full record.

### The transmission section

Contact is not a page: it is the recurring closing section at the foot of every
surface (home, works, about, work detail), so the ask-to-reach-out is always one
scroll away. A terse instrument block: channels (email, LinkedIn, GitHub, resume)
as labeled rows in the annotation grammar under one display-scale headline. No
form, no marketing prose.

### Nav overlay

Full-screen menu over the textured chassis; while open the header shows identity
only and the footer swaps to a close control. Direction: rebuild the list in the
annotation language, with indexed entries (`01 // WORKS`), staggered reveal, and
a current-location marker.

## The motion system

Motion is a grammar, not garnish:

- **Sequences**: the boot (progress → reveal) and the nav overlay (open/close)
  as choreographed moments.
- **Entrances**: sections reveal with staggered children, never wholesale blocks.
- **Ambient**: the testimonial marquee drift, the scroll-cue pulse; the site
  feels *on* even at rest.
- **Micro**: accordion expand/collapse (~0.2s); hover states fast (≤150ms).
- Direction: page **cuts** (fast fades-through-black), **decode** label reveals,
  and **scan** figure wipes, adopted as the design matures.

## Edge cases

- **Reduced motion**: the boot sequence is absent (§Boot sequence); canvas
  instruments render their static state, loops replaced by posters. Every state
  readable with zero motion.
- **Mobile**: the instrument panel recomposes (edge-density becomes top/bottom
  strips); grab-reel becomes native touch scroll; hover-revealed metadata must have
  a visible-by-default equivalent.
- **Media failure**: a loop that fails to load shows its monochrome poster, never
  a black hole.
- **Slow connections**: the background canvas is generated, not a texture download;
  loading cover behaviour is §Boot sequence's.

## Why this shape

The hardest risks ([02-observations.md](02-observations.md)) are the costume and
chrome-over-work; the brief's two pillars answer them. Everything else follows:
one signature moment per surface keeps the cinema from becoming the mechanic, and
the layers are separable; the site functions with the boot sequence and ambient
motion stripped, which is exactly what the reduced-motion path proves.
