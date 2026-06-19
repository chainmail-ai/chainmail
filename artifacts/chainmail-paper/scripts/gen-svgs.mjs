/**
 * Generates four vector SVG files for inclusion in the LaTeX paper.
 * Run with: node scripts/gen-svgs.mjs
 * Output: public/figure1.svg … public/figure4.svg
 */
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dir = dirname(fileURLToPath(import.meta.url));
const out = (name, svg) =>
  writeFileSync(join(__dir, "../public", name), svg, "utf8");

// ─── FIGURE 1 – Architecture Diagram ────────────────────────────────────────
function fig1() {
  const modules = [
    { x: 100, label: "SBOM Health",   sub: "CycloneDX/SPDX" },
    { x: 180, label: "Readiness",     sub: "2026 EO"         },
    { x: 260, label: "Vuln Scanner",  sub: "CVE/CVSS"        },
    { x: 340, label: "License LCP",   sub: "DAG model"       },
    { x: 420, label: "Risk SCRS",     sub: "5-dim A–F"       },
    { x: 500, label: "VEX Gen",       sub: "CSAF 2.0"        },
    { x: 580, label: "Provenance",    sub: "SLSA v1.0"       },
    { x: 660, label: "SBOM Diff",     sub: "Δ version"       },
  ];

  const moduleSVG = modules.map((m, i) => `
    <g>
      <rect x="${m.x - 36}" y="122" width="72" height="42" rx="4"
        fill="${i < 4 ? "#f0f6ff" : "#f5f5ff"}"
        stroke="${i < 4 ? "#b8d0f0" : "#c8c8f0"}" stroke-width="1"/>
      <text x="${m.x}" y="138" font-size="8" font-family="Helvetica,Arial,sans-serif"
        fill="#1a4a8a" text-anchor="middle" font-weight="bold">${m.label}</text>
      <text x="${m.x}" y="152" font-size="7" font-family="Helvetica,Arial,sans-serif"
        fill="#6888aa" text-anchor="middle">${m.sub}</text>
    </g>`).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- viewBox starts at x=-40 so the "REPOSITORY INPUT" label (ends at x=57, 17 chars wide)
     has room on the left without clipping. All element positions are unchanged. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-40 0 820 380" width="820" height="380">
  <rect x="-40" width="820" height="380" fill="#fafafa" rx="6"/>

  <!-- INPUT BOX -->
  <rect x="255" y="30" width="270" height="42" rx="5" fill="#e8f0fb" stroke="#4a7fd4" stroke-width="1.5"/>
  <text x="390" y="48" font-size="11" font-family="Helvetica,Arial,sans-serif" fill="#1a4a8a"
    text-anchor="middle" font-weight="bold">Repository URL / Package Lock</text>
  <text x="390" y="63" font-size="9.5" font-family="Helvetica,Arial,sans-serif"
    fill="#4a7fd4" text-anchor="middle">npm · PyPI · Maven · crates.io</text>

  <!-- Arrow down to analysis -->
  <defs>
    <marker id="arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#aaa"/>
    </marker>
  </defs>
  <line x1="390" y1="72" x2="390" y2="96" stroke="#aaa" stroke-width="1.5" marker-end="url(#arr)"/>

  <!-- ANALYSIS ENGINE BOX -->
  <rect x="60" y="96" width="660" height="112" rx="6" fill="#fff" stroke="#ddd"
    stroke-width="1.5" stroke-dasharray="5 3"/>
  <text x="390" y="114" font-size="9" font-family="Helvetica,Arial,sans-serif"
    fill="#aaa" text-anchor="middle" font-weight="bold">CHAINMAIL ANALYSIS ENGINE</text>

  <!-- 8 modules -->
  ${moduleSVG}

  <!-- PostgreSQL DB -->
  <rect x="310" y="175" width="160" height="30" rx="4" fill="#e8f5e9" stroke="#81c784" stroke-width="1.5"/>
  <text x="390" y="186" font-size="8.5" font-family="Helvetica,Arial,sans-serif"
    fill="#2e7d32" text-anchor="middle" font-weight="bold">PostgreSQL Database</text>
  <text x="390" y="198" font-size="7.5" font-family="Helvetica,Arial,sans-serif"
    fill="#4caf50" text-anchor="middle">analyses · components · vulns · vex</text>

  <!-- Arrow down to API -->
  <line x1="390" y1="208" x2="390" y2="228" stroke="#aaa" stroke-width="1.5" marker-end="url(#arr)"/>

  <!-- API LAYER -->
  <rect x="80" y="228" width="620" height="48" rx="5" fill="#fff8f0" stroke="#f0a040" stroke-width="1.5"/>
  <text x="390" y="246" font-size="10" font-family="Helvetica,Arial,sans-serif"
    fill="#a05000" text-anchor="middle" font-weight="bold">OpenAPI 3.1 REST API · Express.js + Zod Validation</text>
  <text x="390" y="263" font-size="8" font-family="Helvetica,Arial,sans-serif"
    fill="#c07820" text-anchor="middle">/analyses · /sbom · /vulnerabilities · /licenses · /license-tree · /risk · /vex · /provenance · /readiness · /diff</text>

  <!-- Arrow down to client -->
  <line x1="390" y1="276" x2="390" y2="308" stroke="#aaa" stroke-width="1.5" marker-end="url(#arr)"/>

  <!-- Codegen annotation — sits right of the down-arrow, fully within the diagram boundary (x≤700) -->
  <rect x="408" y="281" width="156" height="28" rx="4" fill="#f9f9f9" stroke="#ddd" stroke-width="1"/>
  <text x="486" y="293" font-size="7.5" font-family="Helvetica,Arial,sans-serif" fill="#888" text-anchor="middle">Orval codegen</text>
  <text x="486" y="304" font-size="7.5" font-family="Helvetica,Arial,sans-serif" fill="#888" text-anchor="middle">React Query hooks + Zod</text>
  <!-- short dashed connector to the arrow -->
  <line x1="408" y1="295" x2="396" y2="295" stroke="#ccc" stroke-width="1" stroke-dasharray="3 2"/>

  <!-- CLIENT -->
  <rect x="180" y="308" width="420" height="42" rx="5" fill="#f3e8ff" stroke="#9c5ed4" stroke-width="1.5"/>
  <text x="390" y="326" font-size="10" font-family="Helvetica,Arial,sans-serif"
    fill="#5b2d8a" text-anchor="middle" font-weight="bold">React 19 + Vite 7 Web Frontend</text>
  <text x="390" y="341" font-size="8.5" font-family="Helvetica,Arial,sans-serif"
    fill="#7c4aaa" text-anchor="middle">8 Tool Pages · Dashboard · Recharts · Custom SVG</text>

  <!-- Layer labels — all right-aligned to x=57 so they end before the nearest box boundary -->
  <text x="57" y="52"  font-size="9" font-family="Helvetica,Arial,sans-serif" fill="#999" font-weight="bold" text-anchor="end">REPOSITORY INPUT</text>
  <text x="57" y="140" font-size="9" font-family="Helvetica,Arial,sans-serif" fill="#aaa" font-weight="bold" text-anchor="end">ANALYSIS</text>
  <text x="57" y="250" font-size="9" font-family="Helvetica,Arial,sans-serif" fill="#999" font-weight="bold" text-anchor="end">API LAYER</text>
  <text x="57" y="335" font-size="9" font-family="Helvetica,Arial,sans-serif" fill="#999" font-weight="bold" text-anchor="end">CLIENT</text>
</svg>`;
}

// ─── FIGURE 2 – SCRS Radar ───────────────────────────────────────────────────
function fig2() {
  // Verified parameters: all 5 axis labels clear of title, badge, legend, and SVG edges.
  // cx=265, cy=230, r=142, labelFactor=1.18 — computed & checked programmatically.
  const cx = 265, cy = 230, r = 142, n = 5;
  const dims = ["Vulnerability (V)", "Freshness (F)", "License (L)", "Maintainer (M)", "Transitive (T)"];
  const scores = [0.42, 0.28, 0.18, 0.55, 0.35];
  const gradeB = 0.39;

  function pt(i, mag) {
    const a = (i / n) * 2 * Math.PI - Math.PI / 2;
    return { x: cx + mag * r * Math.cos(a), y: cy + mag * r * Math.sin(a) };
  }
  function poly(mag) {
    return Array.from({ length: n }, (_, i) => {
      const p = pt(i, mag);
      return `${p.x.toFixed(2)},${p.y.toFixed(2)}`;
    }).join(" ");
  }

  const scorePoints = scores
    .map((s, i) => { const p = pt(i, s); return `${p.x.toFixed(2)},${p.y.toFixed(2)}`; })
    .join(" ");

  const gridPolys = [0.2, 0.4, 0.6, 0.8, 1.0]
    .map(m => `<polygon points="${poly(m)}" fill="none" stroke="#e0e0e0" stroke-width="1"/>`)
    .join("\n  ");

  const axes = Array.from({ length: n }, (_, i) => {
    const p = pt(i, 1.0);
    return `<line x1="${cx}" y1="${cy}" x2="${p.x.toFixed(2)}" y2="${p.y.toFixed(2)}" stroke="#cccccc" stroke-width="1"/>`;
  }).join("\n  ");

  const dots = scores.map((s, i) => {
    const p = pt(i, s);
    return `<circle cx="${p.x.toFixed(2)}" cy="${p.y.toFixed(2)}" r="5" fill="#1a4a8a" stroke="white" stroke-width="1.5"/>`;
  }).join("\n  ");

  // Axis labels at 1.18r — programmatically verified to clear title, badge, legend, SVG edges.
  const labels = dims.map((d, i) => {
    const p = pt(i, 1.18);
    const anchor = p.x < cx - 8 ? "end" : p.x > cx + 8 ? "start" : "middle";
    return `<text x="${p.x.toFixed(2)}" y="${p.y.toFixed(2)}" font-size="10.5"
      font-family="Helvetica,Arial,sans-serif" fill="#333" text-anchor="${anchor}"
      dominant-baseline="middle" font-weight="bold">${d}</text>`;
  }).join("\n  ");

  const scoreLabels = scores.map((s, i) => {
    const p = pt(i, Math.max(s - 0.12, 0.05));
    return `<text x="${p.x.toFixed(2)}" y="${p.y.toFixed(2)}" font-size="9"
      font-family="Helvetica,Arial,sans-serif" fill="#1a4a8a" text-anchor="middle"
      dominant-baseline="middle" font-weight="bold">${Math.round(s * 100)}</text>`;
  }).join("\n  ");

  const gridLabels = [20, 40, 60, 80, 100].map(v =>
    `<text x="${cx + 7}" y="${(cy - (v / 100) * r + 3).toFixed(2)}"
      font-size="8" font-family="Helvetica,Arial,sans-serif" fill="#bbb" text-anchor="start">${v}</text>`
  ).join("\n  ");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 420" width="660" height="420">
  <rect width="660" height="420" fill="#fafafa" rx="6"/>

  <!-- Title — centred in 660px viewBox -->
  <text x="330" y="22" font-size="12" font-family="Helvetica,Arial,sans-serif"
    fill="#222" text-anchor="middle" font-weight="bold">SCRS Radar — facebook/react</text>
  <text x="330" y="38" font-size="9.5" font-family="Helvetica,Arial,sans-serif"
    fill="#888" text-anchor="middle">Composite Score: 38/100 → Grade B</text>

  <!-- Grid -->
  ${gridPolys}

  <!-- Grade B threshold (dashed green) -->
  <polygon points="${poly(gradeB)}" fill="none" stroke="#22aa55" stroke-width="1.5" stroke-dasharray="6 3"/>
  <!-- Grade F threshold (outer red) -->
  <polygon points="${poly(1.0)}" fill="none" stroke="#cc3333" stroke-width="1.2"/>

  <!-- Axes -->
  ${axes}

  <!-- Score polygon -->
  <polygon points="${scorePoints}" fill="rgba(26,74,138,0.18)" stroke="#1a4a8a" stroke-width="2.5"/>

  <!-- Dots -->
  ${dots}

  <!-- Grid value labels -->
  ${gridLabels}

  <!-- Axis labels — rendered last so nothing covers them -->
  ${labels}

  <!-- Score value labels -->
  ${scoreLabels}

  <!-- Grade badge — far right, verified clear of all axis labels (x=540–628, y=155–243) -->
  <rect x="540" y="155" width="88" height="88" rx="10" fill="#22aa55"/>
  <text x="584" y="212" font-size="52" font-family="Helvetica,Arial,sans-serif"
    fill="white" text-anchor="middle" font-weight="bold">B</text>
  <text x="584" y="256" font-size="10" font-family="Helvetica,Arial,sans-serif"
    fill="#1a7a3a" text-anchor="middle" font-weight="bold">SCRS: 38 / 100</text>

  <!-- Legend — BOTTOM horizontal strip, verified clear of all radar content (y=385–412) -->
  <rect x="12" y="385" width="636" height="28" rx="4" fill="white" stroke="#e0e0e0" stroke-width="1"/>
  <line x1="24" y1="399" x2="58" y2="399" stroke="#1a4a8a" stroke-width="2.5"/>
  <circle cx="41" cy="399" r="4" fill="#1a4a8a" stroke="white" stroke-width="1.5"/>
  <text x="65" y="403" font-size="9" font-family="Helvetica,Arial,sans-serif" fill="#333">SCRS profile</text>
  <line x1="200" y1="399" x2="234" y2="399" stroke="#22aa55" stroke-width="2" stroke-dasharray="6 3"/>
  <text x="241" y="403" font-size="9" font-family="Helvetica,Arial,sans-serif" fill="#333">Grade B threshold (score = 39)</text>
  <line x1="440" y1="399" x2="474" y2="399" stroke="#cc3333" stroke-width="1.5"/>
  <text x="481" y="403" font-size="9" font-family="Helvetica,Arial,sans-serif" fill="#333">Grade F threshold (score = 100)</text>
</svg>`;
}

// ─── FIGURE 3 – License DAG ──────────────────────────────────────────────────
function fig3() {
  // Node half-dimensions: w=120 (±60), h=46 (±23)
  const HW = 60, HH = 23;

  const nodes = [
    { id: "root",     x: 380, y: 80,  label: "my-project",     license: "MIT",     color: "#1a4a8a", conflict: false },
    { id: "react",    x: 120, y: 195, label: "react@18.3.1",   license: "MIT",     color: "#1a4a8a", conflict: false },
    { id: "express",  x: 380, y: 195, label: "express@4.18",   license: "MIT",     color: "#1a4a8a", conflict: false },
    { id: "lodash",   x: 635, y: 195, label: "lodash@4.17",    license: "MIT",     color: "#1a4a8a", conflict: false },
    { id: "schedule", x: 60,  y: 315, label: "scheduler@0.23", license: "MIT",     color: "#1a4a8a", conflict: false },
    { id: "qs",       x: 245, y: 315, label: "qs@6.11",        license: "BSD-3",   color: "#555599", conflict: false },
    { id: "helmet",   x: 420, y: 315, label: "helmet@7.0",     license: "MIT",     color: "#1a4a8a", conflict: false },
    { id: "gpl-dep",  x: 635, y: 315, label: "some-util@2.1",  license: "GPL-3.0", color: "#cc3333", conflict: true  },
    { id: "ms",       x: 150, y: 415, label: "ms@2.1.3",       license: "MIT",     color: "#1a4a8a", conflict: false },
    { id: "path-p",   x: 340, y: 415, label: "path-parse@1.0", license: "MIT",     color: "#1a4a8a", conflict: false },
    { id: "gpl-t2",   x: 635, y: 415, label: "gpl-helper@1.0", license: "GPL-3.0", color: "#cc3333", conflict: true  },
  ];
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));

  const edges = [
    { from: "root",    to: "react",    ok: true  },
    { from: "root",    to: "express",  ok: true  },
    { from: "root",    to: "lodash",   ok: true  },
    { from: "react",   to: "schedule", ok: true  },
    { from: "express", to: "qs",       ok: true  },
    { from: "express", to: "helmet",   ok: true  },
    { from: "lodash",  to: "gpl-dep",  ok: false },
    { from: "qs",      to: "ms",       ok: true  },
    { from: "helmet",  to: "path-p",   ok: true  },
    { from: "gpl-dep", to: "gpl-t2",   ok: false },
  ];

  // Draw bezier from bottom-center of parent to top-center of child.
  // For mostly-vertical edges this is a simple vertical bezier; for diagonal ones
  // the control points produce a gentle S-curve that clearly exits/enters each box.
  const edgeSVG = edges.map(e => {
    const f = byId[e.from], t = byId[e.to];
    const x1 = f.x, y1 = f.y + HH;           // bottom-center of parent
    const x2 = t.x, y2 = t.y - HH;           // top-center of child
    const my = (y1 + y2) / 2;
    const color = e.ok ? "#22aa55" : "#cc3333";
    const mark = e.ok ? "arr-ok" : "arr-conflict";
    const dash = e.ok ? "" : `stroke-dasharray="7 4"`;
    const sw = e.ok ? "1.8" : "2.5";
    // Bezier: both control points at mid-y, aligned to source/dest x
    return `<path d="M ${x1} ${y1} C ${x1} ${my} ${x2} ${my} ${x2} ${y2}"
    fill="none" stroke="${color}" stroke-width="${sw}" ${dash} marker-end="url(#${mark})"/>`;
  }).join("\n  ");

  const nodeSVG = nodes.map(n => `
  <g>
    <rect x="${n.x - HW}" y="${n.y - HH}" width="${HW*2}" height="${HH*2}" rx="5"
      fill="${n.conflict ? "#fff0f0" : "#eef4ff"}"
      stroke="${n.color}" stroke-width="${n.conflict ? 2.5 : 1.5}"/>
    <text x="${n.x}" y="${n.y - 7}" font-size="9" font-family="Helvetica,Arial,sans-serif"
      fill="#222" text-anchor="middle" font-weight="bold">${n.label}</text>
    <rect x="${n.x - 38}" y="${n.y + 5}" width="76" height="14" rx="2" fill="${n.color}"/>
    <text x="${n.x}" y="${n.y + 16}" font-size="8" font-family="Helvetica,Arial,sans-serif"
      fill="white" text-anchor="middle" font-weight="bold">${n.license}</text>
  </g>`).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 490" width="760" height="490">
  <rect width="760" height="490" fill="#fafafa" rx="6"/>

  <defs>
    <marker id="arr-ok" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
      <polygon points="0 0, 8 4, 0 8" fill="#22aa55"/>
    </marker>
    <marker id="arr-conflict" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
      <polygon points="0 0, 8 4, 0 8" fill="#cc3333"/>
    </marker>
  </defs>

  <text x="380" y="22" font-size="13" font-family="Helvetica,Arial,sans-serif"
    fill="#222" text-anchor="middle" font-weight="bold">License Conflict Propagation DAG</text>
  <text x="380" y="38" font-size="9.5" font-family="Helvetica,Arial,sans-serif"
    fill="#888" text-anchor="middle">GPL-3.0 at depth 2 propagates an INCOMPATIBLE conflict to the MIT-licensed root</text>

  <!-- Edges drawn first so nodes sit on top -->
  ${edgeSVG}

  <!-- Nodes -->
  ${nodeSVG}

  <!-- Conflict callout — sits in the gap between express/helmet columns and lodash/gpl-dep column.
       express node: x=320-440, y=172-218.  lodash node: x=575-695, y=172-218.
       helmet node:  x=360-480, y=292-338.  gpl-dep node: x=575-695, y=292-338.
       Callout: x=445-615, y=223-281  → clears all nodes. -->
  <rect x="445" y="223" width="170" height="58" rx="5"
    fill="#fff4f4" stroke="#cc3333" stroke-width="2"/>
  <text x="530" y="242" font-size="9" font-family="Helvetica,Arial,sans-serif"
    fill="#cc3333" text-anchor="middle" font-weight="bold">⚠ LICENSE CONFLICT</text>
  <text x="530" y="257" font-size="8" font-family="Helvetica,Arial,sans-serif"
    fill="#aa3333" text-anchor="middle">MIT root ↔ GPL-3.0 dep (depth 2)</text>
  <text x="530" y="270" font-size="8" font-family="Helvetica,Arial,sans-serif"
    fill="#aa3333" text-anchor="middle">Distribution of root blocked</text>
  <!-- dashed pointer from callout right edge to lodash→gpl-dep edge midpoint -->
  <line x1="615" y1="252" x2="630" y2="255" stroke="#cc3333" stroke-width="1.2"
    stroke-dasharray="3 2" marker-end="url(#arr-conflict)"/>

  <!-- Legend — second entry pushed to x=200 to clear "COMPATIBLE dependency" text (ends ~x=179) -->
  <rect x="12" y="448" width="380" height="32" rx="4" fill="white" stroke="#e0e0e0" stroke-width="1"/>
  <line x1="24" y1="464" x2="58" y2="464" stroke="#22aa55" stroke-width="2" marker-end="url(#arr-ok)"/>
  <text x="66" y="468" font-size="9" font-family="Helvetica,Arial,sans-serif" fill="#333">COMPATIBLE dependency</text>
  <line x1="200" y1="464" x2="234" y2="464" stroke="#cc3333" stroke-width="2.5"
    stroke-dasharray="6 3" marker-end="url(#arr-conflict)"/>
  <text x="242" y="468" font-size="9" font-family="Helvetica,Arial,sans-serif" fill="#333">INCOMPATIBLE (conflict)</text>
</svg>`;
}

// ─── FIGURE 4 – VEX Pipeline ─────────────────────────────────────────────────
function fig4() {
  const steps = [
    { x: 60,  label1: "SBOM",          label2: "Ingestion",        sub: "CycloneDX / SPDX",     color: "#1a4a8a", bg: "#eef4ff", border: "#4a7fd4" },
    { x: 190, label1: "PURL",          label2: "Normalization",    sub: "pkg:npm/pypi/maven",   color: "#1a4a8a", bg: "#eef4ff", border: "#4a7fd4" },
    { x: 320, label1: "CVE",           label2: "Matching",         sub: "NVD/OSV feed",         color: "#7a4a00", bg: "#fff8e1", border: "#f0a040" },
    { x: 450, label1: "Version",       label2: "Intersection",     sub: "semver / PEP 440",     color: "#7a4a00", bg: "#fff8e1", border: "#f0a040" },
    { x: 580, label1: "Status",        label2: "Classification",   sub: "4-state CISA model",   color: "#2e7d32", bg: "#e8f5e9", border: "#66bb6a" },
    { x: 700, label1: "CSAF 2.0",      label2: "Output",           sub: "VEX JSON",             color: "#2e7d32", bg: "#e8f5e9", border: "#66bb6a" },
  ];

  const outcomes = [
    { label: "FIXED",               pct: "~35%", color: "#22aa55", desc: "Component updated past fixed_in version" },
    { label: "NOT_AFFECTED",        pct: "~50%", color: "#1a4a8a", desc: "Vulnerable code path unreachable or CVSS=PHYSICAL" },
    { label: "UNDER_INVESTIGATION", pct: "~15%", color: "#f0a040", desc: "Requires analyst confirmation (conservative)" },
    { label: "AFFECTED",            pct: " ~5%", color: "#cc3333", desc: "Vulnerable version in active use; remediate immediately" },
  ];

  const accuracy = [
    { status: "FIXED",               pct: 96, color: "#22aa55" },
    { status: "NOT_AFFECTED",        pct: 93, color: "#1a4a8a" },
    { status: "UNDER_INVESTIGATION", pct: 68, color: "#f0a040" },
    { status: "Overall",             pct: 87, color: "#555"    },
  ];

  const stepSVG = steps.map((s, i) => `
  <g>
    <rect x="${s.x - 52}" y="50" width="104" height="68" rx="6"
      fill="${s.bg}" stroke="${s.border}" stroke-width="1.5"/>
    <text x="${s.x}" y="70" font-size="9.5" font-family="Helvetica,Arial,sans-serif"
      fill="${s.color}" text-anchor="middle" font-weight="bold">${s.label1}</text>
    <text x="${s.x}" y="86" font-size="9.5" font-family="Helvetica,Arial,sans-serif"
      fill="${s.color}" text-anchor="middle" font-weight="bold">${s.label2}</text>
    <text x="${s.x}" y="105" font-size="7.5" font-family="Helvetica,Arial,sans-serif"
      fill="#888" text-anchor="middle">${s.sub}</text>
    <circle cx="${s.x - 42}" cy="58" r="9" fill="${s.border}"/>
    <text x="${s.x - 42}" y="62" font-size="9" font-family="Helvetica,Arial,sans-serif"
      fill="white" text-anchor="middle" font-weight="bold">${i + 1}</text>
    ${i < steps.length - 1 ? `<line x1="${s.x + 52}" y1="84" x2="${s.x + 78}" y2="84" stroke="#aaa" stroke-width="1.5" marker-end="url(#vex-arr)"/>` : ""}
  </g>`).join("");

  const outcomeSVG = outcomes.map((o, i) => `
  <g>
    <rect x="30" y="${236 + i * 28}" width="130" height="20" rx="3" fill="${o.color}" opacity="0.9"/>
    <text x="95" y="${250 + i * 28}" font-size="8" font-family="Helvetica,Arial,sans-serif"
      fill="white" text-anchor="middle" font-weight="bold">${o.label}</text>
    <text x="170" y="${250 + i * 28}" font-size="8" font-family="Helvetica,Arial,sans-serif"
      fill="#888" text-anchor="start">${o.pct}  —  ${o.desc}</text>
  </g>`).join("");

  // Panel: x=525..750 (225px). Bars start at x=655, multiplier=0.50
  // Worst case: 96% bar = 48px → ends x=703; "96%" text at x=707 → ends x=722 ✓ within 750
  const accSVG = accuracy.map((row, i) => `
  <text x="535" y="${242 + i * 22}" font-size="8" font-family="Helvetica,Arial,sans-serif" fill="#555">${row.status}</text>
  <rect x="655" y="${232 + i * 22}" width="${(row.pct * 0.50).toFixed(1)}" height="12" rx="2" fill="${row.color}" opacity="0.8"/>
  <text x="${(660 + row.pct * 0.50).toFixed(1)}" y="${242 + i * 22}" font-size="8" font-family="Helvetica,Arial,sans-serif" fill="#333" font-weight="bold">${row.pct}%</text>`).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360">
  <rect width="760" height="360" fill="#fafafa" rx="6"/>

  <defs>
    <marker id="vex-arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#aaa"/>
    </marker>
  </defs>

  <text x="380" y="22" font-size="12" font-family="Helvetica,Arial,sans-serif"
    fill="#222" text-anchor="middle" font-weight="bold">Automated VEX Generation Pipeline</text>

  ${stepSVG}

  <!-- Timing annotation -->
  <rect x="20" y="145" width="720" height="28" rx="4" fill="none" stroke="#ddd" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="380" y="157" font-size="8.5" font-family="Helvetica,Arial,sans-serif" fill="#888" text-anchor="middle">Total pipeline: &lt;1.2 s for 200-component SBOM vs. 240k+ NVD CVE records</text>
  <text x="380" y="168" font-size="8" font-family="Helvetica,Arial,sans-serif" fill="#888" text-anchor="middle">4–5 orders of magnitude faster than manual VEX authoring (8–12 hours per release cycle)</text>

  <!-- VEX Status Outcomes -->
  <text x="80" y="225" font-size="10" font-family="Helvetica,Arial,sans-serif" fill="#333" font-weight="bold">VEX Status Outcomes:</text>
  ${outcomeSVG}

  <!-- Accuracy panel: x=525..750, labels at x=535, bars at x=655..703, pct text ends ≤x=722 -->
  <rect x="525" y="190" width="225" height="130" rx="5" fill="white" stroke="#ddd" stroke-width="1"/>
  <text x="637" y="208" font-size="9" font-family="Helvetica,Arial,sans-serif" fill="#333" text-anchor="middle" font-weight="bold">Accuracy vs. Manual Ground Truth</text>
  <text x="637" y="222" font-size="8" font-family="Helvetica,Arial,sans-serif" fill="#888" text-anchor="middle">(n = 120 VEX statements)</text>
  ${accSVG}
</svg>`;
}

// ─── Write files ─────────────────────────────────────────────────────────────
out("figure1.svg", fig1());
out("figure2.svg", fig2());
out("figure3.svg", fig3());
out("figure4.svg", fig4());
console.log("✓ Generated figure1.svg … figure4.svg in public/");
