# Design

The design-token contract — the source of truth for typography, color, radius, gap, and fonts in code. Transcribed from the Figma design system [tkodev-design-v5](https://www.figma.com/design/zUdcG1LrZ6lzQXqT01euMe/tkodev-design-v5). Where [03-observations.md](03-observations.md) proposes token or type directions not yet in the Figma (a data scale, a signal accent, brand-layer tokens), **this contract wins** until the Figma adopts them and this doc is re-transcribed.

Figma sources (node IDs are stable — fetch these when a value here needs verification):

| Token page | Figma node |
| --- | --- |
| Text tokens | [`6007:3488`](https://www.figma.com/design/zUdcG1LrZ6lzQXqT01euMe/tkodev-design-v5?node-id=6007-3488) |
| Color tokens | [`6009:161`](https://www.figma.com/design/zUdcG1LrZ6lzQXqT01euMe/tkodev-design-v5?node-id=6009-161) |
| Visual tokens (radius, gap) | [`6029:2117`](https://www.figma.com/design/zUdcG1LrZ6lzQXqT01euMe/tkodev-design-v5?node-id=6029-2117) |

Base unit: **16px = 1rem**. Tokens land in CSS as custom properties consumed through Tailwind v4 `@theme` (see [05-architecture.md](05-architecture.md) §Theming).

## Fonts

| Font | Role | Weights used |
| --- | --- | --- |
| **Alliance No.2** | Display headings (`h1`–`h4`) and expressive/eyebrow text (`e1`–`e5`) | 400, 700 |
| **Geist** | Body text, `h5`, UI labels — the default | variable |
| **Geist Mono** | Inline and block code | 600 |

Loaded via `next/font/local`; font files come from `ops/notes/tkodev/career-notes/profiles/assets/fonts/`. CSS variables: `--font-alliance-no2`, `--font-geist-sans`, `--font-geist-mono`. Alliance No.2 is licensed — the licensed-assets rule in the data standard applies.

## Typography

Three ramps plus inline styles. The `-main` suffix in Figma (`h4-main`, `e4-main`, `sm-main`) marks the **default step** of each ramp — the size a component gets when no explicit step is chosen.

### Headings — Alliance No.2 Bold (h5: Geist Bold)

| Token | Family | Size | Line height | Tracking |
| --- | --- | --- | --- | --- |
| `h1` | Alliance No.2 Bold | 60px | 60px | 0 |
| `h2` | Alliance No.2 Bold | 48px | normal | 0 |
| `h3` | Alliance No.2 Bold | 40px | normal | 0 |
| `h4` *(main)* | Alliance No.2 Bold | 32px | 32px | 0 |
| `h5` | Geist Bold | 24px | 24px | 0 |

The family break at `h5` is deliberate: `h5` is the bridge from display headings into UI/body typography.

### Expressive — Alliance No.2 Regular, 25% tracking

All-caps eyebrow/label register (specimen: "Engineering, Design, Technology"). Line height 100%, letter spacing **25%** (tracking renders as a fraction of size: 3px at `e4`, 2.5px at `e5`).

| Token | Size |
| --- | --- |
| `e1` | 18px |
| `e2` | 16px |
| `e3` | 14px |
| `e4` *(main)* | 12px |
| `e5` | 10px |

Two wider-tracked companions appear across the page designs:

| Style | Spec | Used for |
| --- | --- | --- |
| `outer` | Alliance No.2 Regular 12px, **50%** tracking (6px) | Hero corner annotations (`1.0 / intro //`, `[ spec validated ]`), loading `SYNCHRONIZING`, card year slots |
| eyebrow | Alliance No.2 Medium 14px, 50% tracking (7px) | Hero eyebrows (`TONY KO`, `ABOUT`, `SIGNAL ACQUIRED`) |

### Body — Geist Regular

Line height 100% at token level; prose blocks in components may carry relaxed leading — the component's Figma node is authoritative for multi-line paragraph leading.

| Token | Size |
| --- | --- |
| `xl` | 20px |
| `lg` | 18px |
| `md` | 16px |
| `sm` *(main)* | 14px |
| `xs` | 12px |

### Inline styles

| Token | Spec |
| --- | --- |
| `strong` | Geist SemiBold 600, inherits size (specimen at 14px) |
| `emphasis` | Geist Italic, inherits size (specimen at 14px) |
| `underline` | Geist Regular + underline (specimen at 14px) |
| `blockquote` | Geist Italic 16px |
| `code` | Geist Mono SemiBold 14px |

## Color

Semantic shadcn-shaped token set, zinc-based, in two full themes (`dark-vars` + `light-vars`). **The active theme is hardcoded to dark** — no toggle, no system switching. The light theme exists for **inverse-color sections** (e.g. the loading core), applied as a scoped class. Dark values below; transcribe the light values from Figma when first used.

### Core

| Token | Value | Usage |
| --- | --- | --- |
| `background` | `#09090b` | Page background |
| `foreground` | `#fafafa` | Primary text |
| `card` | `#09090b` | Card surfaces |
| `card-foreground` | `#fafafa` | Text on card |
| `popover` | `#09090b` | Popover surfaces |
| `popover-foreground` | `#fafafa` | Text on popover |
| `primary` | `#fafafa` | Primary action background |
| `primary-foreground` | `#18181b` | Text on primary |
| `secondary` | `#27272a` | Secondary elements |
| `secondary-foreground` | `#fafafa` | Text on secondary |
| `muted` | `#27272a` | Subdued surfaces |
| `muted-foreground` | `#a1a1aa` | Captions, meta text |
| `accent` | `#27272a` | Hover/highlight surfaces |
| `accent-foreground` | `#fafafa` | Text on accent |
| `destructive` | `#7f1d1d` | Destructive actions |
| `destructive-foreground` | `#fafafa` | Text on destructive |
| `border` | `#ffffff29` (white @ 16%) | Hairlines, dividers |
| `input` | `#27272a` | Form control borders |
| `ring` | `#d4d4d8` | Focus rings |
| `muted-gradient` | Figma style | Gradient variant of muted — pull from the Figma style when implementing |

Note the customization vs stock shadcn zinc: `border` is **alpha white** (`#ffffff29`), not a solid gray — hairlines blend over imagery and gradients. Preserve the alpha approach.

### Chart

| Token | Value |
| --- | --- |
| `chart-1` | `#2662d9` |
| `chart-2` | `#e23670` |
| `chart-3` | `#e88c30` |
| `chart-4` | `#af57db` |
| `chart-5` | `#2eb88a` |
| `chart-1-gradient`, `chart-2-gradient` | Figma styles — gradient fills derived from chart-1/chart-2 |

## Radius

| Token | Value |
| --- | --- |
| `radius-xs` | 4px / 0.25rem |
| `radius-sm` | 8px / 0.5rem |
| `radius-md` | 12px / 0.75rem |
| `radius-lg` | 16px / 1rem |
| `radius-xl` | 32px / 2rem |

## Gap

Spacing steps for flex/grid gaps and rhythm within components.

| Token | Value |
| --- | --- |
| `gap-xs` | 4px / 0.25rem |
| `gap-sm` | 8px / 0.5rem |
| `gap-md` | 16px / 1rem |
| `gap-lg` | 32px / 2rem |
| `gap-xl` | 64px / 4rem |

(The Figma sheet's rem annotations for `gap-md/lg/xl` contain typos; the px values are authoritative and the rem values above are px ÷ 16.)

## Motion

Motion is not tokenized in Figma. The settled motion grammar lives in [04-solution.md](04-solution.md) §The cinematic system; when motion tokens land in Figma (durations, easings), this section becomes their transcription.
