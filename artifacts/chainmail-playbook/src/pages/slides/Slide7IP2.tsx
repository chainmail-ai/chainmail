export default function Slide7IP2() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1E3D 0%, #0D2654 60%, #0A3060 100%)" }}>

      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="opacity-[0.06]">
          <circle cx="1820" cy="540" r="450" fill="none" stroke="#00C5D4" strokeWidth="2" />
          <circle cx="1820" cy="540" r="300" fill="none" stroke="#00C5D4" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="280" fill="none" stroke="#00C5D4" strokeWidth="2" />
          <line x1="200" y1="200" x2="600" y2="400" stroke="#F59E0B" strokeWidth="1.2" />
          <line x1="600" y1="400" x2="900" y2="250" stroke="#F59E0B" strokeWidth="1.2" />
          <line x1="900" y1="250" x2="1200" y2="500" stroke="#F59E0B" strokeWidth="1.2" />
          <line x1="1200" y1="500" x2="1000" y2="750" stroke="#F59E0B" strokeWidth="1.2" />
          <circle cx="200" cy="200" r="6" fill="#F59E0B" />
          <circle cx="600" cy="400" r="6" fill="#F59E0B" />
          <circle cx="900" cy="250" r="6" fill="#F59E0B" />
          <circle cx="1200" cy="500" r="6" fill="#F59E0B" />
          <circle cx="1000" cy="750" r="6" fill="#F59E0B" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5vh]" style={{ background: "linear-gradient(to right, #00C5D4, #F59E0B)" }} />

      <div className="absolute inset-0 flex flex-col px-[6vw] pt-[6vh] pb-[5vh]">
        <div className="font-body font-600 mb-[1vh]" style={{ color: "#00C5D4", fontSize: "1.5vw", letterSpacing: "0.12em" }}>CHAPTER 03: INTELLECTUAL PROPERTY</div>
        <div className="font-display font-800 text-white mb-[4vh] tracking-tight" style={{ fontSize: "3.2vw" }}>Proprietary insights, open-source access</div>

        <div className="grid gap-[3vw]" style={{ gridTemplateColumns: "1fr 1fr", flex: 1 }}>
          <div className="flex flex-col" style={{ borderTop: "0.3vh solid #00C5D4", paddingTop: "2.5vh" }}>
            <div className="font-display font-800 mb-[0.5vh]" style={{ color: "#00C5D4", fontSize: "1.6vw", letterSpacing: "0.1em" }}>SUPPLY CHAIN RISK SCORE ENGINE</div>
            <div className="font-display font-700 text-white mb-[2vh]" style={{ fontSize: "2.2vw" }}>Five-dimension A to F grade, explained</div>
            <div className="font-body mb-[2.5vh]" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.6vw", textWrap: "pretty" }}>Enterprise SAST tools charge thousands for risk scoring. Chainmail synthesizes five weighted dimensions into a single letter grade, with full breakdown and actionable next steps.</div>
            <div className="flex flex-col gap-[1.2vh]">
              <div className="flex items-center gap-[1vw]">
                <div className="w-[0.8vw] h-[0.8vw] rounded-full shrink-0" style={{ background: "#00C5D4" }} />
                <div className="font-body text-white" style={{ fontSize: "1.5vw" }}>Critical vulns + High severity vulns</div>
              </div>
              <div className="flex items-center gap-[1vw]">
                <div className="w-[0.8vw] h-[0.8vw] rounded-full shrink-0" style={{ background: "#00C5D4" }} />
                <div className="font-body text-white" style={{ fontSize: "1.5vw" }}>Dependency staleness + License risk</div>
              </div>
              <div className="flex items-center gap-[1vw]">
                <div className="w-[0.8vw] h-[0.8vw] rounded-full shrink-0" style={{ background: "#00C5D4" }} />
                <div className="font-body text-white" style={{ fontSize: "1.5vw" }}>Provenance and SLSA level</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col" style={{ borderTop: "0.3vh solid #F59E0B", paddingTop: "2.5vh" }}>
            <div className="font-display font-800 mb-[0.5vh]" style={{ color: "#F59E0B", fontSize: "1.6vw", letterSpacing: "0.1em" }}>LICENSE INHERITANCE VISUALIZER</div>
            <div className="font-display font-700 text-white mb-[2vh]" style={{ fontSize: "2.2vw" }}>How copyleft propagates through your tree</div>
            <div className="font-body mb-[2.5vh]" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.6vw", textWrap: "pretty" }}>No open-source tool shows how a GPL dependency at the bottom of your tree creates an obligation at the top. Chainmail's recursive inheritance graph makes this visible, and flags every conflict with the precise package and version.</div>
            <div className="flex flex-col gap-[1.2vh]">
              <div className="flex items-center gap-[1vw]">
                <div className="w-[0.8vw] h-[0.8vw] rounded-full shrink-0" style={{ background: "#F59E0B" }} />
                <div className="font-body text-white" style={{ fontSize: "1.5vw" }}>Expandable tree: root → direct → transitive</div>
              </div>
              <div className="flex items-center gap-[1vw]">
                <div className="w-[0.8vw] h-[0.8vw] rounded-full shrink-0" style={{ background: "#F59E0B" }} />
                <div className="font-body text-white" style={{ fontSize: "1.5vw" }}>Conflict badges per package at every depth</div>
              </div>
              <div className="flex items-center gap-[1vw]">
                <div className="w-[0.8vw] h-[0.8vw] rounded-full shrink-0" style={{ background: "#F59E0B" }} />
                <div className="font-body text-white" style={{ fontSize: "1.5vw" }}>Category labels: permissive, weak/strong copyleft, unknown</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
