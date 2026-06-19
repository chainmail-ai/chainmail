export default function RiskRadarDiagram() {
  const cx = 210, cy = 180, r = 140;
  const dims = ["Vulnerability (V)", "Freshness (F)", "License (L)", "Maintainer (M)", "Transitive (T)"];
  const scores = [0.42, 0.28, 0.18, 0.55, 0.35]; // sample: facebook/react
  const gradeB = 0.39, gradeF = 1.0;
  const n = 5;

  function polarToCart(angleIdx: number, magnitude: number) {
    const angle = (angleIdx / n) * 2 * Math.PI - Math.PI / 2;
    return { x: cx + magnitude * r * Math.cos(angle), y: cy + magnitude * r * Math.sin(angle) };
  }

  function gridPolygon(mag: number) {
    return Array.from({ length: n }, (_, i) => {
      const p = polarToCart(i, mag);
      return `${p.x},${p.y}`;
    }).join(" ");
  }

  const scorePoints = scores.map((s, i) => {
    const p = polarToCart(i, s);
    return `${p.x},${p.y}`;
  }).join(" ");

  return (
    <svg viewBox="0 0 520 370" width="100%" style={{ maxHeight: 370 }}>
      <rect width="520" height="370" fill="#fafafa" rx="6" />

      {/* Grid circles */}
      {[0.2, 0.4, 0.6, 0.8, 1.0].map((mag, i) => (
        <polygon key={i} points={gridPolygon(mag)} fill="none" stroke="#e0e0e0" strokeWidth="1" />
      ))}

      {/* Grade B threshold (dashed) */}
      <polygon points={gridPolygon(gradeB)} fill="none" stroke="#22aa55" strokeWidth="1.2" strokeDasharray="5 3" />
      {/* Grade F threshold */}
      <polygon points={gridPolygon(gradeF)} fill="none" stroke="#cc3333" strokeWidth="1" />

      {/* Axis lines */}
      {Array.from({ length: n }, (_, i) => {
        const p = polarToCart(i, 1.0);
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#cccccc" strokeWidth="1" />;
      })}

      {/* Score polygon */}
      <polygon points={scorePoints} fill="rgba(26,74,138,0.18)" stroke="#1a4a8a" strokeWidth="2" />

      {/* Score dots */}
      {scores.map((s, i) => {
        const p = polarToCart(i, s);
        return <circle key={i} cx={p.x} cy={p.y} r="5" fill="#1a4a8a" stroke="white" strokeWidth="1.5" />;
      })}

      {/* Axis labels */}
      {dims.map((d, i) => {
        const p = polarToCart(i, 1.22);
        const anchor = p.x < cx - 5 ? "end" : p.x > cx + 5 ? "start" : "middle";
        return (
          <text key={i} x={p.x} y={p.y} fontSize="10" fontFamily="Lato,sans-serif" fill="#333" textAnchor={anchor} dominantBaseline="middle" fontWeight="700">{d}</text>
        );
      })}

      {/* Score percentage labels */}
      {scores.map((s, i) => {
        const p = polarToCart(i, s - 0.08);
        return (
          <text key={i} x={p.x} y={p.y} fontSize="9" fontFamily="Lato,sans-serif" fill="#1a4a8a" textAnchor="middle" dominantBaseline="middle" fontWeight="700">{Math.round(s * 100)}</text>
        );
      })}

      {/* Grid labels */}
      {[20, 40, 60, 80, 100].map((v, i) => (
        <text key={i} x={cx + 6} y={cy - (v / 100) * r + 3} fontSize="7.5" fontFamily="Lato,sans-serif" fill="#aaa" textAnchor="start">{v}</text>
      ))}

      {/* Legend */}
      <rect x="340" y="110" width="160" height="90" rx="4" fill="white" stroke="#eee" strokeWidth="1" />
      <text x="420" y="128" fontSize="9" fontFamily="Lato,sans-serif" fill="#555" textAnchor="middle" fontWeight="700">LEGEND</text>

      <line x1="355" y1="145" x2="375" y2="145" stroke="#1a4a8a" strokeWidth="2" />
      <circle cx="365" cy="145" r="3.5" fill="#1a4a8a" />
      <text x="382" y="148" fontSize="8.5" fontFamily="Lato,sans-serif" fill="#333">SCRS profile</text>

      <line x1="355" y1="162" x2="375" y2="162" stroke="#22aa55" strokeWidth="1.5" strokeDasharray="5 2" />
      <text x="382" y="166" fontSize="8.5" fontFamily="Lato,sans-serif" fill="#333">Grade B threshold</text>

      <line x1="355" y1="179" x2="375" y2="179" stroke="#cc3333" strokeWidth="1" />
      <text x="382" y="182" fontSize="8.5" fontFamily="Lato,sans-serif" fill="#333">Grade F threshold</text>

      {/* Title */}
      <text x="260" y="22" fontSize="12" fontFamily="Lato,sans-serif" fill="#222" textAnchor="middle" fontWeight="700">SCRS Radar — facebook/react</text>
      <text x="260" y="38" fontSize="9.5" fontFamily="Lato,sans-serif" fill="#888" textAnchor="middle">Composite Score: 38/100 → Grade B</text>

      {/* Grade badge */}
      <rect x="425" y="220" width="60" height="60" rx="6" fill="#22aa55" />
      <text x="455" y="258" fontSize="36" fontFamily="Lato,sans-serif" fill="white" textAnchor="middle" fontWeight="700">B</text>
      <text x="455" y="296" fontSize="9" fontFamily="Lato,sans-serif" fill="#22aa55" textAnchor="middle">SCRS: 38</text>
    </svg>
  );
}
