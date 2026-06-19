import ArchitectureDiagram from "@/diagrams/ArchitectureDiagram";
import RiskRadarDiagram from "@/diagrams/RiskRadarDiagram";
import LicenseDAG from "@/diagrams/LicenseDAG";
import VexPipelineDiagram from "@/diagrams/VexPipelineDiagram";

const path = window.location.pathname;

const BASE: React.CSSProperties = {
  margin: 0,
  padding: 0,
  background: "white",
  display: "block",
  lineHeight: 0,
  overflow: "hidden",
};

export default function Figures() {
  if (path.includes("/fig1"))
    return (
      <div style={{ ...BASE, width: 780 }}>
        <ArchitectureDiagram />
      </div>
    );
  if (path.includes("/fig2"))
    return (
      <div style={{ ...BASE, width: 500 }}>
        <RiskRadarDiagram />
      </div>
    );
  if (path.includes("/fig3"))
    return (
      <div style={{ ...BASE, width: 780 }}>
        <LicenseDAG />
      </div>
    );
  if (path.includes("/fig4"))
    return (
      <div style={{ ...BASE, width: 780 }}>
        <VexPipelineDiagram />
      </div>
    );

  return (
    <div style={{ background: "#f5f5f5", padding: 24, fontFamily: "sans-serif" }}>
      <h2>Figures</h2>
      <a href="/chainmail-paper/fig1" style={{ display: "block", margin: 8 }}>Figure 1 — System Architecture</a>
      <a href="/chainmail-paper/fig2" style={{ display: "block", margin: 8 }}>Figure 2 — SCRS Radar</a>
      <a href="/chainmail-paper/fig3" style={{ display: "block", margin: 8 }}>Figure 3 — License DAG</a>
      <a href="/chainmail-paper/fig4" style={{ display: "block", margin: 8 }}>Figure 4 — VEX Pipeline</a>
    </div>
  );
}
