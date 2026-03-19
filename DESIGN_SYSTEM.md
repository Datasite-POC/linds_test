# Design system

This document was **generated from the Figma file** using the **Figma MCP** (`get_variable_defs`, `get_design_context`). It reflects **variables and component specs** published in that file—not necessarily every marketing or product-specific screen variant.

**In-repo usage:** Product rules for the AI and humans live in **`cursorrules`** / **`.cursorrules`** (same token names and values). Tailwind maps them in **`src/styles/datasite-tokens.css`** (`ds-*` utilities and `--ds-*` CSS variables). The main prototype UI is implemented in **`DatasitePreLaunchDashboard.jsx`** using those tokens.

| | |
|---|---|
| **Figma file key** | `cG8SFq7d3fHWQvvRMvbMJS` |
| **File (UI name)** | Project Dashboard FY27 |
| **Variables scope** | Collected from file root page node `0:1` via `get_variable_defs` |
| **Button spec** | Node `<Button>` `1:558` via `get_design_context` |
| **Chip set** | Node `<Chip>` `1:6271` — metadata (size / variant / color / state matrix) |

---

## 1. Color tokens

Primitive and semantic tokens below use **names as defined in Figma variables**. Hex values are shown as returned by the MCP; 8-digit hex is **RRGGBBAA** (alpha in last byte).

### 1.1 Primary, text, surfaces, borders

| Token name | Value |
|------------|--------|
| `primary/main` | `#485EF0` |
| `primary/contrastText` | `#ffffff` |
| `primary/states/outlinedBorder` | `#485EF0` |
| `primary/_states/outlinedBorder` | `rgba(72, 94, 240, 0.5)` *(from Button codegen)* |
| `primary/_states/hover` | `rgba(72, 94, 240, 0.04)` |
| `primary/_states/focusVisible` | `rgba(72, 94, 240, 0.3)` |
| `primary/dark` | `#454eb0` *(hover state, contained)* |
| `primary/_states/outlinedBorder` (alt naming) | `#19191980` → `rgba(25, 25, 25, 0.5)` |

| Token name | Value |
|------------|--------|
| `text/primary` | `#323232` |
| `text/secondary` | `#6a6a69` |
| `action/active` | `#4e4e4d` |
| `action/disabled` | `rgba(31, 34, 39, 0.38)` |
| `action/disabledBackground` | `rgba(31, 34, 39, 0.12)` |

| Token name | Value |
|------------|--------|
| `background/default` | `#ffffff` |
| `background/alt` | `#fafaf7` |
| `paper/default` | `#ffffff` |
| `paper/alt` | `#fafaf7` |
| `MoonDust50` | `#fafaf7` |
| `MoonDust100` | `#f7f6f2` |
| `MoonDust400` | `#a3a2a0` |
| `MoonDust900` | `#191919` |
| `NEW/surfaceNeutral` | `#dbdad7` |
| `LeftNav/Selected` | `#dbdad7` |

| Token name | Value |
|------------|--------|
| `_components/divider/divider` | `#1919191f` → ~`rgba(25, 25, 25, 0.12)` |
| `secondary/light` | `#a3a2a0` |
| `_components/switch/slideFill` | `#191919` |
| `toDeprecate/TopNav/Logotype` | `#0d0d0d` |

### 1.2 Semantic: warning, error (from variables + Button)

| Token name | Value |
|------------|--------|
| `warning/main` | `#b34814` |
| `warning/contrastText` | `#ffffff` |
| `Amber700` | `#b34814` |
| `Amber500` | `#ff8818` |
| `AmberBG` | `#ff88181a` → `rgba(255, 136, 24, ~0.1)` |
| `error/main` | `#d43034` *(Button codegen)* |
| `error/_states/outlinedBorder` | `rgba(212, 48, 52, 0.5)` *(Button codegen)* |

### 1.3 Data visualization / extended palette

| Token name | Value |
|------------|--------|
| `Emerald500` | `#53856d` |
| `Emerald700` | `#1e4d36` |
| `Purpurite500` | `#9f5481` |
| `Purpurite700` | `#651f4a` |
| `Peridot700` | `#6c6e1c` |
| `Turquoise700` | `#1d595c` |
| `Ruby700` | `#c02641` |
| `theme/accessibleColors/tealStrong` | `#00796b` |

---

## 2. Typography

### 2.1 Font families (variables)

| Variable | Family |
|----------|--------|
| `fontFamily` | TT Hoves Pro VF Trial |
| `fontFamily1` | TT Hoves Pro VF Trial |
| `fontFamily2` | AL Sigla Trial |

### 2.2 Font weights (variables)

| Variable | Weight |
|----------|--------|
| `fontWeightRegular` | `400` |
| `fontWeightMedium` | `500` |
| `fontWeightLight` | `300` |

### 2.3 Font size primitives

| Token | px (resolved) |
|-------|----------------|
| `_fontSize/0,625rem` | 10 |
| `_fontSize/0,75rem` | 12 |
| `_fontSize/0,8125rem` | 13 |
| `_fontSize/0,875rem` | 14 |
| `_fontSize/1rem` | 16 |
| `_fontSize/1,25rem` | 20 |
| `_fontSize/3,75rem` | 60 |
| `typography/h1` fixed size | 96 *(see composite style)* |

### 2.4 Composite text styles (from variables)

Values below are **as returned by Figma** (family references `fontFamily` / `fontFamily1` / `fontFamily2`).

| Style name | Family ref | Weight | Size ref | Line height | Letter spacing |
|------------|------------|--------|----------|-------------|----------------|
| `typography/caption` | fontFamily | Regular 400 | 12px (`0.75rem`) | 1.66 | 0.4px |
| `button/medium` | fontFamily1 | Medium 500 | 14px (`0.875rem`) | 24px | 0.4px |
| `typography/h6` | fontFamily1 | Medium 500 | 20px (`1.25rem`) | 1.6 | 0.15px |
| `chip/label` | fontFamily | Regular 400 | 13px (`0.8125rem`) | 18px | 0.16px |
| `typography/subtitle2` | fontFamily1 | Medium 500 | 14px (`0.875rem`) | 1.57 | 0.1px |
| `typography/body1` | fontFamily | Regular 400 | 16px (`1rem`) | 1.5 | 0.15px |
| `badge/label` | fontFamily1 | Medium 500 | 12px (`0.75rem`) | 20px | 0.14px |
| `typography/h2` | fontFamily2 | Light 300 | 60px (`3.75rem`) | 1.2 | -0.5px |
| `typography/h1` | fontFamily2 | Light 300 | 96px | 1.167 | -1.5px |
| `tooltip/label` | fontFamily1 | Regular 400 | 12px (`0.75rem`) | 14px | 0.15px |

**Button label** (from `<Button>` inspect): uses **button/medium** token — TT Hoves Pro VF Trial / Medium / **14px** / line-height **24px** / tracking **0.4px**; color follows variant (e.g. `primary/main` for text/outlined, `primary/contrastText` on contained).

---

## 3. Spacing & radius

| Token / key | Value | Typical use |
|-------------|-------|-------------|
| `NEW` | `4` | Tight vertical padding (e.g. button py) |
| `1` | `8` | Gap, horizontal padding (text buttons) |
| `2` | `16` | Horizontal padding (contained/outlined buttons) |
| `borderRadiusS` | `4` | Small radius |
| `borderRadiusM` | `8` | Default control radius (buttons, inputs) |

---

## 4. Core components

### 4.1 Button (`<Button>`, node `1:558`)

Aligned with **[MUI Button API](https://mui.com/api/button)** per Figma documentation link.

**Anatomy**

- **Size (documented in extract):** `Medium` — height **36px**, vertical padding tied to `NEW` (**4px**), horizontal padding **`2` = 16px** (contained/outlined) or **`1` = 8px** (text variant).
- **Radius:** `borderRadiusM` → **8px**.
- **Typography:** `button/medium` (see §2.4).
- **Icons:** **16×16** slot; optional start/end icon (e.g. angle-down **20×16** frame).

**Variants & colors (Primary)**

| Variant | Enabled fill / border | Label color |
|---------|------------------------|-------------|
| Contained | Background `primary/main` `#485EF0` | `primary/contrastText` white |
| Outlined | Border `primary/_states/outlinedBorder` ~50% primary | `primary/main` |
| Text | Transparent | `primary/main` |

**States (high level)**

- **Hovered (contained):** background `primary/dark` `#454eb0`.
- **Hovered (outlined/text):** background `primary/_states/hover` `rgba(72,94,240,0.04)`.
- **Pressed / focus ripple:** overlays using `primary/_states/focusVisible` and contrast white at reduced opacity on contained.
- **Disabled:** background/border `action/disabledBackground`; label `action/disabled`.
- **Error:** separate fills/borders `error/main` and `error/_states/outlinedBorder`.

**Error** variant uses `error/main` `#d43034` for text/outlined labels and error-contained backgrounds per generated spec.

---

### 4.2 Chip (`<Chip>`, node `1:6271`)

Figma exposes a **full matrix** (metadata from MCP):

- **Sizes:** `Small` (e.g. **24px** tall symbols), `Medium` (**32px**).
- **Variants:** `Filled`, `Outlined`.
- **Colors:** `Default`, `Primary`, `Secondary`, `Error`, `Warning`, `Info`, `Success`.
- **States:** `Enabled`, `Hovered`, `Focused`, `Pressed`, `Disabled`.

**Label typography:** use token **`chip/label`** (§2.4).

Implementation reference: **[MUI Chip](https://mui.com/api/chip)** per component description in file.

---

### 4.3 Cards / surfaces (inferred from variables)

There is no single “Card” component node in this extract; surfaces are defined by **color variables**:

| Role | Token |
|------|--------|
| Default card / panel background | `paper/default` `#ffffff` |
| Alternate page/canvas tint | `paper/alt` / `background/alt` `#fafaf7` |
| Subtle neutral blocks | `MoonDust100` `#f7f6f2` |
| Dividers | `_components/divider/divider` |

Use **`borderRadiusM` (8px)** or **`borderRadiusS` (4px)** for inner elements consistent with buttons/chips.

---

### 4.4 Other referenced primitives

| Component | Figma notes |
|-----------|-------------|
| **Switch / dark mode** | Maps to MUI `Switch` (`color="primary"`, `size="small"`) in component notes |
| **ButtonGroup** | [MUI ButtonGroup](https://mui.com/api/button-group) |
| **Divider** | Vertical/horizontal; MUI `Divider` |
| **Tooltip** | Dark surface `MoonDust900`, caption-sized label, `borderRadiusS` |
| **Badge** | MUI `Badge` variant `standard` |

---

## 5. Keeping this document in sync

1. Re-run **Figma MCP** `get_variable_defs` (e.g. `nodeId: "0:1"` or your design-system collection root).
2. For deep component specs, call `get_design_context` on the specific **component set** node ID (split large sets into sub-nodes if the tool returns sparse metadata only).
3. If your **canonical** design system lives in a **different Figma file**, replace the file key and repeat the calls; variable names may differ.

---

*End of document.*
