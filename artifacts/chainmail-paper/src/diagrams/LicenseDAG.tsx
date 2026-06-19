export default function LicenseDAG() {
  const nodes = [
    { id: "root",    x: 360, y: 50,  label: "my-project",      license: "MIT",      color: "#1a4a8a", text: "white" },
    { id: "react",   x: 180, y: 140, label: "react@18.3.1",    license: "MIT",      color: "#1a4a8a", text: "white" },
    { id: "express", x: 360, y: 140, label: "express@4.18",    license: "MIT",      color: "#1a4a8a", text: "white" },
    { id: "lodash",  x: 560, y: 140, label: "lodash@4.17",     license: "MIT",      color: "#1a4a8a", text: "white" },
    { id: "schedule",x: 100, y: 240, label: "scheduler@0.23",  license: "MIT",      color: "#1a4a8a", text: "white" },
    { id: "qs",      x: 290, y: 240, label: "qs@6.11",         license: "BSD-3",    color: "#1a4a8a", text: "white" },
    { id: "helmet",  x: 450, y: 240, label: "helmet@7.0",      license: "MIT",      color: "#1a4a8a", text: "white" },
    { id: "gpl-dep", x: 640, y: 240, label: "some-util@2.1",   license: "GPL-3.0",  color: "#cc3333", text: "white" },
    { id: "ms",      x: 180, y: 330, label: "ms@2.1.3",        license: "MIT",      color: "#1a4a8a", text: "white" },
    { id: "path-p",  x: 360, y: 330, label: "path-parse@1.0",  license: "MIT",      color: "#1a4a8a", text: "white" },
    { id: "gpl-t2",  x: 560, y: 330, label: "gpl-helper@1.0",  license: "GPL-3.0",  color: "#cc3333", text: "white" },
  ];

  const edges = [
    { from: "root",    to: "react",    compat: "ok" },
    { from: "root",    to: "express",  compat: "ok" },
    { from: "root",    to: "lodash",   compat: "ok" },
    { from: "react",   to: "schedule", compat: "ok" },
    { from: "express", to: "qs",       compat: "ok" },
    { from: "express", to: "helmet",   compat: "ok" },
    { from: "lodash",  to: "gpl-dep",  compat: "conflict" },
    { from: "qs",      to: "ms",       compat: "ok" },
    { from: "helmet",  to: "path-p",   compat: "ok" },
    { from: "gpl-dep", to: "gpl-t2",   compat: "ok" },
  ];

  function nodeById(id: string) {
    return nodes.find(n => n.id === id)!;
  }

  function edgeColor(compat: string) {
    if (compat === "ok") return "#22aa55";
    if (compat === "warn") return "#f0a040";
    return "#cc3333";
  }

  return (
    <svg viewBox="0 0 760 420" width="100%" style={{ maxHeight: 420 }}>
      <rect width="760" height="420" fill="#fafafa" rx="6" />

      {/* Title */}
      <text x="380" y="22" fontSize="12" fontFamily="Lato,sans-serif" fill="#222" textAnchor="middle" fontWeight="700">
        License Conflict Propagation DAG
      </text>
      <text x="380" y="36" fontSize="9" fontFamily="Lato,sans-serif" fill="#888" textAnchor="middle">
        GPL-3.0 at depth 2 propagates INCOMPATIBLE conflict to MIT-licensed root
      </text>

      {/* Arrows */}
      <defs>
        <marker id="arr-ok" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#22aa55" />
        </marker>
        <marker id="arr-warn" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#f0a040" />
        </marker>
        <marker id="arr-conflict" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#cc3333" />
        </marker>
      </defs>

      {edges.map((e, i) => {
        const from = nodeById(e.from);
        const to = nodeById(e.to);
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const nx = dx / len, ny = dy / len;
        const x1 = from.x + nx * 44;
        const y1 = from.y + ny * 17;
        const x2 = to.x - nx * 44;
        const y2 = to.y - ny * 17;
        const color = edgeColor(e.compat);
        const markerId = `arr-${e.compat}`;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={color} strokeWidth={e.compat === "conflict" ? 2.5 : 1.5}
            strokeDasharray={e.compat === "conflict" ? "6 3" : undefined}
            markerEnd={`url(#${markerId})`} />
        );
      })}

      {/* Nodes */}
      {nodes.map((n) => (
        <g key={n.id}>
          <rect x={n.x - 58} y={n.y - 22} width="116" height="44" rx="5"
            fill={n.color === "#cc3333" ? "#fff0f0" : "#eef4ff"}
            stroke={n.color} strokeWidth={n.color === "#cc3333" ? 2 : 1.5} />
          <text x={n.x} y={n.y - 6} fontSize="8.5" fontFamily="Lato,sans-serif"
            fill="#222" textAnchor="middle" fontWeight="700">{n.label}</text>
          <rect x={n.x - 35} y={n.y + 4} width="70" height="13" rx="2"
            fill={n.color} />
          <text x={n.x} y={n.y + 14} fontSize="7.5" fontFamily="Lato,sans-serif"
            fill="white" textAnchor="middle" fontWeight="700">{n.license}</text>
        </g>
      ))}

      {/* Conflict annotation */}
      <rect x="600" y="155" width="148" height="44" rx="4" fill="#fff8f0" stroke="#cc3333" strokeWidth="1.5" />
      <text x="674" y="171" fontSize="8.5" fontFamily="Lato,sans-serif" fill="#cc3333" textAnchor="middle" fontWeight="700">⚠ LICENSE CONFLICT</text>
      <text x="674" y="184" fontSize="7.5" fontFamily="Lato,sans-serif" fill="#aa3333" textAnchor="middle">MIT root → GPL-3.0 dep</text>
      <text x="674" y="195" fontSize="7.5" fontFamily="Lato,sans-serif" fill="#aa3333" textAnchor="middle">Distribution blocked</text>

      {/* Legend */}
      <rect x="10" y="350" width="300" height="55" rx="4" fill="white" stroke="#eee" strokeWidth="1" />
      <line x1="22" y1="368" x2="50" y2="368" stroke="#22aa55" strokeWidth="2" markerEnd="url(#arr-ok)" />
      <text x="58" y="372" fontSize="8.5" fontFamily="Lato,sans-serif" fill="#333">COMPATIBLE</text>

      <line x1="130" y1="368" x2="158" y2="368" stroke="#f0a040" strokeWidth="2" markerEnd="url(#arr-warn)" />
      <text x="166" y="372" fontSize="8.5" fontFamily="Lato,sans-serif" fill="#333">WARNING</text>

      <line x1="22" y1="390" x2="50" y2="390" stroke="#cc3333" strokeWidth="2.5" strokeDasharray="5 2" markerEnd="url(#arr-conflict)" />
      <text x="58" y="394" fontSize="8.5" fontFamily="Lato,sans-serif" fill="#333">INCOMPATIBLE (conflict)</text>

      <rect x="22" y="398" width="10" height="10" rx="2" fill="none" stroke="#1a4a8a" strokeWidth="1.5" />
      <text x="38" y="407" fontSize="7.5" fontFamily="Lato,sans-serif" fill="#555">Node border color = license category</text>
    </svg>
  );
}
