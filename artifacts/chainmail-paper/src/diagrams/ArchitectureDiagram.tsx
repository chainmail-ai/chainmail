export default function ArchitectureDiagram() {
  const modules = [
    { x: 100, label: "SBOM Health", sub: "CycloneDX/SPDX" },
    { x: 180, label: "Readiness", sub: "2026 EO" },
    { x: 260, label: "Vuln Scanner", sub: "CVE/CVSS" },
    { x: 340, label: "License LCP", sub: "DAG model" },
    { x: 420, label: "Risk SCRS", sub: "5-dim A–F" },
    { x: 500, label: "VEX Gen", sub: "CSAF 2.0" },
    { x: 580, label: "Provenance", sub: "SLSA v1.0" },
    { x: 660, label: "SBOM Diff", sub: "Δ version" },
  ];

  return (
    <svg viewBox="0 0 780 380" width="100%" height="380">
      <rect width="780" height="380" fill="#fafafa" rx="6" />

      {/* ─── INPUT BOX ─── */}
      <rect x="255" y="30" width="270" height="42" rx="5" fill="#e8f0fb" stroke="#4a7fd4" strokeWidth="1.5" />
      <text x="390" y="48" fontSize="11" fontFamily="Lato,sans-serif" fill="#1a4a8a" textAnchor="middle" fontWeight="700">Repository URL / Package Lock</text>
      <text x="390" y="63" fontSize="9.5" fontFamily="Lato,sans-serif" fill="#4a7fd4" textAnchor="middle">npm · PyPI · Maven · crates.io</text>

      {/* Arrow down to analysis */}
      <line x1="390" y1="72" x2="390" y2="96" stroke="#aaa" strokeWidth="1.5" markerEnd="url(#arr)" />

      {/* ─── ANALYSIS ENGINE BOX ─── */}
      <rect x="60" y="96" width="660" height="112" rx="6" fill="#fff" stroke="#ddd" strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="390" y="114" fontSize="9" fontFamily="Lato,sans-serif" fill="#aaa" textAnchor="middle" fontWeight="700">CHAINMAIL ANALYSIS ENGINE</text>

      {/* 8 analysis modules — evenly spaced, no overlap */}
      {modules.map((m, i) => (
        <g key={i}>
          <rect x={m.x - 36} y="122" width="72" height="42" rx="4"
            fill={i < 4 ? "#f0f6ff" : "#f5f5ff"}
            stroke={i < 4 ? "#b8d0f0" : "#c8c8f0"} strokeWidth="1" />
          <text x={m.x} y="138" fontSize="8" fontFamily="Lato,sans-serif" fill="#1a4a8a" textAnchor="middle" fontWeight="700">{m.label}</text>
          <text x={m.x} y="152" fontSize="7" fontFamily="Lato,sans-serif" fill="#6888aa" textAnchor="middle">{m.sub}</text>
        </g>
      ))}

      {/* PostgreSQL DB */}
      <rect x="310" y="175" width="160" height="30" rx="4" fill="#e8f5e9" stroke="#81c784" strokeWidth="1.5" />
      <text x="390" y="186" fontSize="8.5" fontFamily="Lato,sans-serif" fill="#2e7d32" textAnchor="middle" fontWeight="700">PostgreSQL Database</text>
      <text x="390" y="198" fontSize="7.5" fontFamily="Lato,sans-serif" fill="#4caf50" textAnchor="middle">analyses · components · vulns · vex</text>

      {/* Arrow down to API */}
      <line x1="390" y1="208" x2="390" y2="228" stroke="#aaa" strokeWidth="1.5" markerEnd="url(#arr)" />

      {/* ─── API LAYER ─── */}
      <rect x="80" y="228" width="620" height="48" rx="5" fill="#fff8f0" stroke="#f0a040" strokeWidth="1.5" />
      <text x="390" y="246" fontSize="10" fontFamily="Lato,sans-serif" fill="#a05000" textAnchor="middle" fontWeight="700">OpenAPI 3.1 REST API · Express.js + Zod Validation</text>
      <text x="390" y="263" fontSize="8" fontFamily="Lato,sans-serif" fill="#c07820" textAnchor="middle">/analyses · /sbom · /vulnerabilities · /licenses · /license-tree · /risk · /vex · /provenance · /readiness · /diff</text>

      {/* Arrow down to client */}
      <line x1="390" y1="276" x2="390" y2="308" stroke="#aaa" strokeWidth="1.5" markerEnd="url(#arr)" />

      {/* Codegen side annotation */}
      <rect x="590" y="282" width="138" height="30" rx="4" fill="#f9f9f9" stroke="#ddd" strokeWidth="1" />
      <text x="659" y="294" fontSize="7.5" fontFamily="Lato,sans-serif" fill="#888" textAnchor="middle">Orval codegen →</text>
      <text x="659" y="306" fontSize="7.5" fontFamily="Lato,sans-serif" fill="#888" textAnchor="middle">React Query hooks + Zod</text>
      <line x1="590" y1="297" x2="570" y2="297" stroke="#ccc" strokeWidth="1" strokeDasharray="3 2" />

      {/* ─── CLIENT ─── */}
      <rect x="180" y="308" width="420" height="42" rx="5" fill="#f3e8ff" stroke="#9c5ed4" strokeWidth="1.5" />
      <text x="390" y="326" fontSize="10" fontFamily="Lato,sans-serif" fill="#5b2d8a" textAnchor="middle" fontWeight="700">React 19 + Vite 7 Web Frontend</text>
      <text x="390" y="341" fontSize="8.5" fontFamily="Lato,sans-serif" fill="#7c4aaa" textAnchor="middle">8 Tool Pages · Dashboard · Recharts · Custom SVG</text>

      {/* ─── LAYER LABELS (rendered last so they appear on top) ─── */}
      <text x="22" y="52" fontSize="9" fontFamily="Lato,sans-serif" fill="#999" fontWeight="700" textAnchor="start">REPOSITORY INPUT</text>
      <text x="22" y="140" fontSize="9" fontFamily="Lato,sans-serif" fill="#aaa" fontWeight="700" textAnchor="start" style={{ paintOrder: "stroke" }}>ANALYSIS</text>
      <text x="22" y="250" fontSize="9" fontFamily="Lato,sans-serif" fill="#999" fontWeight="700" textAnchor="start">API LAYER</text>
      <text x="22" y="335" fontSize="9" fontFamily="Lato,sans-serif" fill="#999" fontWeight="700" textAnchor="start">CLIENT</text>

      {/* Arrow marker */}
      <defs>
        <marker id="arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#aaa" />
        </marker>
      </defs>
    </svg>
  );
}
