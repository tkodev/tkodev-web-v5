# Design

The design-token contract for typography, color, radius, gap, and fonts in code, transcribed from the Figma design system [tkodev-design-v5](https://www.figma.com/design/zUdcG1LrZ6lzQXqT01euMe/tkodev-design-v5). Directions proposed in [02-observations.md](02-observations.md) (a data scale, a signal accent, brand-layer tokens) land here only when the Figma adopts them and this doc is re-transcribed.

Figma sources (node IDs are stable; fetch these when a value here needs verification):

| Token page | Figma node |
| --- | --- |
| Text tokens | [`6007:3488`](https://www.figma.com/design/zUdcG1LrZ6lzQXqT01euMe/tkodev-design-v5?node-id=6007-3488) |
| Color tokens | [`6009:161`](https://www.figma.com/design/zUdcG1LrZ6lzQXqT01euMe/tkodev-design-v5?node-id=6009-161) |
| Visual tokens (radius, gap) | [`6029:2117`](https://www.figma.com/design/zUdcG1LrZ6lzQXqT01euMe/tkodev-design-v5?node-id=6029-2117) |

Base unit: **16px = 1rem**. Tokens land in CSS as custom properties consumed through Tailwind v4 `@theme` (see [05-architecture.md](05-architecture.md) §Theming).

## Fonts

| Font | Role | Weights used |
| --- | --- | --- |
| **Alliance No.2** | Display headings (`h1`–`h5`) and expressive/eyebrow text (`e1`–`e5`) | 400, 700 |
| **Geist** | Body text, UI labels (the default) | variable |
| **Geist Mono** | Inline and block code | 600 |

Loaded via `next/font/local`; CSS variables: `--font-alliance-no2`, `--font-geist-sans`, `--font-geist-mono`. Alliance No.2 is licensed: the licensed-assets rule in the data standard applies.

## Typography

Three ramps plus inline styles. The `-main` suffix in Figma (`h4-main`, `e4-main`, `sm-main`) marks the **default step** of each ramp: the size a component gets when no explicit step is chosen.

### Headings: Alliance No.2 Bold

| Token | Family | Size | Line height | Tracking |
| --- | --- | --- | --- | --- |
| `h1` | Alliance No.2 Bold | 60px | 60px | 0 |
| `h2` | Alliance No.2 Bold | 48px | normal | 0 |
| `h3` | Alliance No.2 Bold | 36px | normal | 0 |
| `h4` *(main)* | Alliance No.2 Bold | 28px | 28px | 0 |
| `h5` | Alliance No.2 Bold | 20px | 20px | 0 |

### Expressive: Alliance No.2 Regular, 25% tracking

All-caps eyebrow/label register (specimen: "Engineering, Design, Technology"). Line height 100%, letter spacing **25%**.

| Token | Size |
| --- | --- |
| `e1` | 16px |
| `e2` | 14px |
| `e3` | 12px |
| `e4` *(main)* | 10px |
| `e5` | 8px |

Two wider-tracked companions appear across the page designs:

| Style | Spec | Used for |
| --- | --- | --- |
| `outer` | Alliance No.2 Regular 12px, **50%** tracking (6px) | Hero corner annotations (`1.0 / intro //`, `[ spec validated ]`), loading `SYNCHRONIZING`, card year slots |
| eyebrow | Alliance No.2 Medium 14px, 50% tracking (7px) | Hero eyebrows (`TONY KO`, `ABOUT`, `SIGNAL ACQUIRED`) |

### Body: Geist Regular

Line height 150% at token level (every body consumer wanted normal leading, so the token carries it); components override only when a design calls for tighter or looser leading.

| Token | Size |
| --- | --- |
| `xl` | 18px |
| `lg` | 16px |
| `md` | 14px |
| `sm` *(main)* | 12px |
| `xs` | 10px |

### Inline styles

| Token | Spec |
| --- | --- |
| `strong` | Geist SemiBold 600, inherits size (specimen at 14px) |
| `emphasis` | Geist Italic, inherits size (specimen at 14px) |
| `underline` | Geist Regular + underline (specimen at 14px) |
| `blockquote` | Geist Italic 16px |
| `code` | Geist Mono SemiBold 14px |

## Color

Semantic shadcn-shaped token set, zinc-based, in two full themes (`dark-vars` + `light-vars`). **The active theme is hardcoded to dark**: no toggle, no system switching. The light theme exists for **inverse-color sections** (e.g. the loading core), applied as a scoped class.

### Core

| Token | Dark | Light | Usage |
| --- | --- | --- | --- |
| `background` | `#000000` | `#ffffff` | Page background |
| `foreground` | `#fafafa` | `#09090b` | Primary text |
| `card` | `#09090b` | `#ffffff` | Card surfaces |
| `card-foreground` | `#fafafa` | `#09090b` | Text on card |
| `popover` | `#09090b` | `#ffffff` | Popover surfaces |
| `popover-foreground` | `#fafafa` | `#09090b` | Text on popover |
| `primary` | `#fafafa` | `#18181b` | Primary action background |
| `primary-foreground` | `#18181b` | `#fafafa` | Text on primary |
| `secondary` | `#27272a` | `#f4f4f5` | Secondary elements |
| `secondary-foreground` | `#fafafa` | `#18181b` | Text on secondary |
| `muted` | `#27272a` | `#f4f4f5` | Subdued surfaces |
| `muted-foreground` | `#a1a1aa` | `#71717a` | Captions, meta text |
| `accent` | `#27272a` | `#f4f4f5` | Hover/highlight surfaces |
| `accent-foreground` | `#fafafa` | `#18181b` | Text on accent |
| `destructive` | `#7f1d1d` | `#ef4444` | Destructive actions |
| `destructive-foreground` | `#fafafa` | `#fafafa` | Text on destructive |
| `border` | `#ffffff29` (white @ 16%) | `#000000e5` (black @ 90%) | Hairlines, dividers |
| `input` | `#27272a` | `#e4e4e7` | Form control borders |
| `ring` | `#d4d4d8` | `#18181b` | Focus rings |
| `muted-gradient` | Figma style | — | Gradient variant of muted; pull from the Figma style when implementing |

Note the customization vs stock shadcn zinc: `border` is **alpha** in both themes (white @ 16% dark, black @ 90% light), not a solid gray; hairlines blend over imagery and gradients. Preserve the alpha approach.

### Chart

| Token | Dark | Light |
| --- | --- | --- |
| `chart-1` | `#2662d9` | `#2a9d90` |
| `chart-2` | `#e23670` | `#e76e50` |
| `chart-3` | `#e88c30` | `#274754` |
| `chart-4` | `#af57db` | `#e8c468` |
| `chart-5` | `#2eb88a` | `#f4a462` |
| `chart-1-gradient`, `chart-2-gradient` | Figma styles; gradient fills derived from chart-1/chart-2 | — |

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

Motion is not tokenized in Figma. The settled motion grammar lives in [03-solution.md](03-solution.md) §The motion system; when motion tokens land in Figma (durations, easings), this section becomes their transcription.
