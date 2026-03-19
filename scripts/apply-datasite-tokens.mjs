import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const files = [
  "src/imports/DiligenceDashboardHaloDesignSprint.tsx",
  "src/imports/TopNavBar.tsx",
];

function apply(s) {
  const pairs = [
    // SVG / attr fills (longer patterns first)
    ['fill="var(--fill-0, #4E4E4D)"', 'fill="var(--ds-action-active)"'],
    ['fill="var(--fill-0, #4e4e4d)"', 'fill="var(--ds-action-active)"'],
    ['fill="var(--fill-0, #0D0D0D)"', 'fill="var(--ds-logotype)"'],
    ['fill="var(--fill-0, #485EF0)"', 'fill="var(--ds-primary-main)"'],
    ['fill="var(--fill-0, #485ef0)"', 'fill="var(--ds-primary-main)"'],
    ['fill="var(--fill-0, #A3A2A0)"', 'fill="var(--ds-moondust-400)"'],
    ['fill="var(--fill-0, #a3a2a0)"', 'fill="var(--ds-moondust-400)"'],
    ['fill="var(--fill-0, #747880)"', 'fill="var(--ds-moondust-400)"'],
    ['fill="var(--fill-0, #575559)"', 'fill="var(--ds-text-secondary)"'],
    ['fill="var(--fill-0, white)"', 'fill="var(--ds-primary-contrast)"'],
    ['stroke="var(--stroke-0, #A3A2A0)"', 'stroke="var(--ds-moondust-400)"'],
    ['stroke="var(--stroke-0, #747880)"', 'stroke="var(--ds-moondust-400)"'],

    // Fonts (compound patterns first — Figma export already includes font-normal / font-medium)
    ["font-['AL_Sigla_Trial:Light',sans-serif]", "font-ds-display font-light"],
    [
      "font-['TT_Hoves_Pro_VF_Trial:Medium',sans-serif] font-medium",
      "font-ds-body font-medium",
    ],
    [
      "font-['TT_Hoves_Pro_VF_Trial:Regular',sans-serif] font-normal",
      "font-ds-body font-normal",
    ],
    ["font-['Roboto:Medium',sans-serif] font-medium", "font-ds-body font-medium"],
    ["font-['Roboto:Regular',sans-serif] font-normal", "font-ds-body font-normal"],

    // Typography size / leading / tracking (token names from cursorrules)
    ["text-[10px]", "text-ds-2xs"],
    ["text-[12px]", "text-ds-caption"],
    ["text-[13px]", "text-ds-chip"],
    ["text-[14px]", "text-ds-button"],
    ["text-[16px]", "text-ds-body1"],
    ["text-[20px]", "text-ds-h6"],
    ["text-[60px]", "text-ds-h2"],
    ["text-[96px]", "text-ds-h1"],
    ["leading-[1.66]", "leading-ds-caption"],
    ["leading-[1.5]", "leading-ds-body1"],
    ["leading-[1.57]", "leading-ds-subtitle2"],
    ["leading-[24px]", "leading-ds-button"],
    ["leading-[18px]", "leading-ds-chip"],
    ["leading-[1.6]", "leading-ds-h6"],
    ["leading-[1.2]", "leading-ds-h2"],
    ["leading-[1.167]", "leading-ds-h1"],
    ["leading-[14px]", "leading-ds-tooltip"],
    ["tracking-[0.4px]", "tracking-ds-button"],
    ["tracking-[0.15px]", "tracking-ds-body1"],
    ["tracking-[0.1px]", "tracking-ds-subtitle2"],
    ["tracking-[0.16px]", "tracking-ds-chip"],
    ["tracking-[0.14px]", "tracking-ds-badge"],
    ["tracking-[-0.5px]", "tracking-ds-h2"],
    ["tracking-[-1.5px]", "tracking-ds-h1"],

    // Colors in utilities
    ["text-[#323232]", "text-ds-text-primary"],
    ["text-[#1f2227]", "text-ds-text-primary"],
    ["text-[#1F2227]", "text-ds-text-primary"],
    ["text-[#4e4e4d]", "text-ds-action-active"],
    ["text-[#4E4E4D]", "text-ds-action-active"],
    ["text-[#485ef0]", "text-ds-primary-main"],
    ["text-[#485EF0]", "text-ds-primary-main"],
    ["text-[#6a6a69]", "text-ds-text-secondary"],
    ["text-[#6A6A69]", "text-ds-text-secondary"],
    ["text-[#b34814]", "text-ds-warning"],
    ["text-[#B34814]", "text-ds-warning"],
    ["text-[rgba(31,34,39,0.87)]", "text-ds-text-primary"],

    ["text-white", "text-ds-primary-contrast"],

    ["bg-[#fafaf7]", "bg-ds-paper-alt"],
    ["bg-[#FAFAF7]", "bg-ds-paper-alt"],
    ["bg-[#f7f8fa]", "bg-ds-paper-alt"],
    ["bg-[#dbdad7]", "bg-ds-surface-neutral"],
    ["bg-[#DBDAD7]", "bg-ds-surface-neutral"],
    ["bg-[#191919]", "bg-ds-moondust-900"],
    ["bg-[#1f2227]", "bg-ds-moondust-900"],
    ["bg-[#1F2227]", "bg-ds-moondust-900"],
    ["bg-[#b34814]", "bg-ds-warning"],
    ["bg-[#B34814]", "bg-ds-warning"],
    ["bg-[#ff8818]", "bg-ds-amber-500"],
    ["bg-[#FF8818]", "bg-ds-amber-500"],
    ["bg-[rgba(255,136,24,0.1)]", "bg-ds-amber-bg"],
    ["bg-[#53856d]", "bg-ds-emerald-500"],
    ["bg-[#53856D]", "bg-ds-emerald-500"],
    ["bg-[#1e4d36]", "bg-ds-emerald-700"],
    ["bg-[#1E4D36]", "bg-ds-emerald-700"],
    ["bg-[#9f5481]", "bg-ds-purpurite-500"],
    ["bg-[#651f4a]", "bg-ds-purpurite-700"],
    ["bg-[#6c6e1c]", "bg-ds-peridot-700"],
    ["bg-[#6C6E1C]", "bg-ds-peridot-700"],
    ["bg-[#1d595c]", "bg-ds-turquoise-700"],
    ["bg-[#1D595C]", "bg-ds-turquoise-700"],
    ["bg-[#c02641]", "bg-ds-ruby-700"],
    ["bg-[#C02641]", "bg-ds-ruby-700"],

    ["bg-white", "bg-ds-paper-default"],

    ["border-[rgba(25,25,25,0.12)]", "border-ds-divider"],
    ["border-[rgba(25,25,25,0.5)]", "border-ds-border-strong"],
    ["border-[rgba(31,34,39,0.12)]", "border-ds-action-disabled-bg"],

    // Shadow & spacing / radius from cursorrules scale
    [
      "shadow-[0px_0px_8px_2px_rgba(219,218,215,0.25)]",
      "shadow-ds-card",
    ],
    ["gap-[16px]", "gap-ds-2"],
    ["gap-[8px]", "gap-ds-1"],
    ["px-[16px]", "px-ds-2"],
    ["py-[16px]", "py-ds-2"],
    ["pb-[16px]", "pb-ds-2"],
    ["pt-[16px]", "pt-ds-2"],
    ["pl-[16px]", "pl-ds-2"],
    ["pr-[16px]", "pr-ds-2"],
    ["p-[16px]", "p-ds-2"],
    ["px-[8px]", "px-ds-1"],
    ["py-[8px]", "py-ds-1"],
    ["p-[8px]", "p-ds-1"],
    ["gap-[4px]", "gap-ds-new"],
    ["px-[4px]", "px-ds-new"],
    ["py-[4px]", "py-ds-new"],
    ["p-[4px]", "p-ds-new"],

    ["rounded-[8px]", "rounded-ds-m"],
    ["rounded-[4px]", "rounded-ds-s"],

    ["h-[36px]", "h-ds-button"],
    ["min-h-[24px]", "min-h-ds-chip-sm"],
    ["max-h-[24px]", "max-h-ds-chip-sm"],
    ["h-[32px]", "h-ds-chip-md"],
  ];

  for (const [a, b] of pairs) {
    s = s.split(a).join(b);
  }

  return s;
}

function mergePageGradientClass(s) {
  // <div className="..." ... style={{ backgroundImage: "linear-gradient(...)" }}
  const re =
    /className="([^"]*)"\s+data-name="Page Content"\s+style=\{\{\s*backgroundImage:\s*"linear-gradient\(178\.591deg,\s*rgb\(250,\s*250,\s*247\)\s*1\.7353%,\s*rgb\(247,\s*246,\s*242\)\s*50\.432%\)"\s*\}\}/g;
  return s.replace(re, 'className="$1 bg-ds-page-gradient" data-name="Page Content"');
}

for (const rel of files) {
  const fp = path.join(root, rel);
  let s = fs.readFileSync(fp, "utf8");
  s = apply(s);
  s = mergePageGradientClass(s);
  fs.writeFileSync(fp, s);
}

console.log("Applied Datasite tokens to", files.join(", "));
