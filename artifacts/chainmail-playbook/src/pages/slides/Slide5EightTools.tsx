export default function Slide5EightTools() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(150deg, #EBF4FF 0%, #F0F8FF 100%)" }}>

      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <circle cx="1860" cy="60" r="300" fill="none" stroke="#00C5D4" strokeWidth="1.5" opacity="0.1" />
          <circle cx="-60" cy="1020" r="250" fill="none" stroke="#0B1E3D" strokeWidth="1.5" opacity="0.06" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5vh]" style={{ background: "linear-gradient(to right, #00C5D4, #F59E0B)" }} />
      <div className="absolute top-0 left-0 right-0 h-[0.5vh]" style={{ background: "#0B1E3D" }} />

      <div className="absolute inset-0 flex flex-col px-[6vw] pt-[6vh] pb-[5vh]">
        <div className="font-body font-600 mb-[1vh]" style={{ color: "#00C5D4", fontSize: "1.5vw", letterSpacing: "0.12em" }}>CHAPTER 02: THE WORKBENCH</div>
        <div className="font-display font-800 mb-[4vh] tracking-tight" style={{ color: "#0B1E3D", fontSize: "3.2vw" }}>Eight tools. One unified workbench.</div>

        <div className="grid gap-[2vw]" style={{ gridTemplateColumns: "repeat(4, 1fr)", flex: 1 }}>
          <div className="flex flex-col gap-[1.5vh] p-[2vh_1.5vw] rounded-[0.6vw]" style={{ background: "rgba(11,30,61,0.05)" }}>
            <div className="font-display font-800" style={{ color: "#00C5D4", fontSize: "1.6vw" }}>01</div>
            <div className="font-display font-700" style={{ color: "#0B1E3D", fontSize: "1.7vw" }}>SBOM Health</div>
            <div className="font-body" style={{ color: "#4A6080", fontSize: "1.5vw" }}>Full bill of materials: direct, transitive, stale</div>
          </div>
          <div className="flex flex-col gap-[1.5vh] p-[2vh_1.5vw] rounded-[0.6vw]" style={{ background: "rgba(11,30,61,0.05)" }}>
            <div className="font-display font-800" style={{ color: "#00C5D4", fontSize: "1.6vw" }}>02</div>
            <div className="font-display font-700" style={{ color: "#0B1E3D", fontSize: "1.7vw" }}>Vulnerability Scanner</div>
            <div className="font-body" style={{ color: "#4A6080", fontSize: "1.5vw" }}>CVE tracking with CVSS scores per dependency</div>
          </div>
          <div className="flex flex-col gap-[1.5vh] p-[2vh_1.5vw] rounded-[0.6vw]" style={{ background: "rgba(11,30,61,0.05)" }}>
            <div className="font-display font-800" style={{ color: "#00C5D4", fontSize: "1.6vw" }}>03</div>
            <div className="font-display font-700" style={{ color: "#0B1E3D", fontSize: "1.7vw" }}>License Compliance</div>
            <div className="font-body" style={{ color: "#4A6080", fontSize: "1.5vw" }}>Conflict detection across all dependency licenses</div>
          </div>
          <div className="flex flex-col gap-[1.5vh] p-[2vh_1.5vw] rounded-[0.6vw]" style={{ background: "rgba(11,30,61,0.05)" }}>
            <div className="font-display font-800" style={{ color: "#F59E0B", fontSize: "1.6vw" }}>04</div>
            <div className="font-display font-700" style={{ color: "#0B1E3D", fontSize: "1.7vw" }}>License Tree</div>
            <div className="font-body" style={{ color: "#4A6080", fontSize: "1.5vw" }}>Recursive inheritance graph with conflict propagation</div>
          </div>
          <div className="flex flex-col gap-[1.5vh] p-[2vh_1.5vw] rounded-[0.6vw]" style={{ background: "rgba(11,30,61,0.05)" }}>
            <div className="font-display font-800" style={{ color: "#F59E0B", fontSize: "1.6vw" }}>05</div>
            <div className="font-display font-700" style={{ color: "#0B1E3D", fontSize: "1.7vw" }}>Risk Scorer</div>
            <div className="font-body" style={{ color: "#4A6080", fontSize: "1.5vw" }}>5-dimension A to F grade for holistic supply chain risk</div>
          </div>
          <div className="flex flex-col gap-[1.5vh] p-[2vh_1.5vw] rounded-[0.6vw]" style={{ background: "rgba(11,30,61,0.05)" }}>
            <div className="font-display font-800" style={{ color: "#F59E0B", fontSize: "1.6vw" }}>06</div>
            <div className="font-display font-700" style={{ color: "#0B1E3D", fontSize: "1.7vw" }}>VEX Generator</div>
            <div className="font-body" style={{ color: "#4A6080", fontSize: "1.5vw" }}>CISA-compliant exploitability statements from scan results</div>
          </div>
          <div className="flex flex-col gap-[1.5vh] p-[2vh_1.5vw] rounded-[0.6vw]" style={{ background: "rgba(11,30,61,0.05)" }}>
            <div className="font-display font-800" style={{ color: "#F59E0B", fontSize: "1.6vw" }}>07</div>
            <div className="font-display font-700" style={{ color: "#0B1E3D", fontSize: "1.7vw" }}>2026 Readiness</div>
            <div className="font-body" style={{ color: "#4A6080", fontSize: "1.5vw" }}>Live government mandate compliance tracker</div>
          </div>
          <div className="flex flex-col gap-[1.5vh] p-[2vh_1.5vw] rounded-[0.6vw]" style={{ background: "rgba(11,30,61,0.05)" }}>
            <div className="font-display font-800" style={{ color: "#F59E0B", fontSize: "1.6vw" }}>08</div>
            <div className="font-display font-700" style={{ color: "#0B1E3D", fontSize: "1.7vw" }}>SBOM Diff</div>
            <div className="font-body" style={{ color: "#4A6080", fontSize: "1.5vw" }}>Version-to-version dependency change comparison</div>
          </div>
        </div>
      </div>
    </div>
  );
}
