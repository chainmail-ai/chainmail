export default function Slide8Roadmap() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(150deg, #EBF4FF 0%, #F0F8FF 100%)" }}>

      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <circle cx="1860" cy="60" r="300" fill="none" stroke="#00C5D4" strokeWidth="1.5" opacity="0.1" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5vh]" style={{ background: "linear-gradient(to right, #00C5D4, #F59E0B)" }} />
      <div className="absolute top-0 left-0 right-0 h-[0.5vh]" style={{ background: "#0B1E3D" }} />

      <div className="absolute inset-0 flex flex-col px-[6vw] pt-[6vh] pb-[5vh]">
        <div className="font-body font-600 mb-[1vh]" style={{ color: "#00C5D4", fontSize: "1.5vw", letterSpacing: "0.12em" }}>CHAPTER 04: IMPLEMENTATION</div>
        <div className="font-display font-800 mb-[5vh] tracking-tight" style={{ color: "#0B1E3D", fontSize: "3.2vw" }}>From zero to compliant in under an hour</div>

        <div className="flex items-stretch gap-[0]" style={{ flex: 1 }}>
          <div className="flex flex-col items-center flex-1 relative">
            <div className="w-[4vw] h-[4vw] rounded-full flex items-center justify-center mb-[2.5vh] shrink-0 z-10" style={{ background: "#0B1E3D" }}>
              <span className="font-display font-800 text-white" style={{ fontSize: "1.8vw" }}>1</span>
            </div>
            <div className="absolute top-[2vw] left-[50%] right-0 h-[0.15vh]" style={{ background: "#CBD9E8" }} />
            <div className="font-display font-700 mb-[1.5vh] text-center" style={{ color: "#0B1E3D", fontSize: "1.8vw" }}>Connect Repo</div>
            <div className="font-body text-center" style={{ color: "#4A6080", fontSize: "1.5vw" }}>Enter your GitHub repository URL. Chainmail pulls the dependency manifest automatically.</div>
          </div>
          <div className="flex flex-col items-center flex-1 relative">
            <div className="w-[4vw] h-[4vw] rounded-full flex items-center justify-center mb-[2.5vh] shrink-0 z-10" style={{ background: "#00C5D4" }}>
              <span className="font-display font-800 text-white" style={{ fontSize: "1.8vw" }}>2</span>
            </div>
            <div className="absolute top-[2vw] left-[50%] right-0 h-[0.15vh]" style={{ background: "#CBD9E8" }} />
            <div className="font-display font-700 mb-[1.5vh] text-center" style={{ color: "#0B1E3D", fontSize: "1.8vw" }}>Run Analysis</div>
            <div className="font-body text-center" style={{ color: "#4A6080", fontSize: "1.5vw" }}>The engine scans components, resolves licenses, detects CVEs, and scores risk across all 5 dimensions.</div>
          </div>
          <div className="flex flex-col items-center flex-1 relative">
            <div className="w-[4vw] h-[4vw] rounded-full flex items-center justify-center mb-[2.5vh] shrink-0 z-10" style={{ background: "#F59E0B" }}>
              <span className="font-display font-800 text-white" style={{ fontSize: "1.8vw" }}>3</span>
            </div>
            <div className="absolute top-[2vw] left-[50%] right-0 h-[0.15vh]" style={{ background: "#CBD9E8" }} />
            <div className="font-display font-700 mb-[1.5vh] text-center" style={{ color: "#0B1E3D", fontSize: "1.8vw" }}>Review All 8 Tools</div>
            <div className="font-body text-center" style={{ color: "#4A6080", fontSize: "1.5vw" }}>Navigate the workbench sidebar. Each tool shows results with no configuration needed to get started.</div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="w-[4vw] h-[4vw] rounded-full flex items-center justify-center mb-[2.5vh] shrink-0" style={{ background: "#0B1E3D" }}>
              <span className="font-display font-800 text-white" style={{ fontSize: "1.8vw" }}>4</span>
            </div>
            <div className="font-display font-700 mb-[1.5vh] text-center" style={{ color: "#0B1E3D", fontSize: "1.8vw" }}>Remediate</div>
            <div className="font-body text-center" style={{ color: "#4A6080", fontSize: "1.5vw" }}>Generate VEX statements, check 2026 readiness, track your grade improving with each fix.</div>
          </div>
        </div>

        <div className="mt-[4vh] p-[2vh_2.5vw] rounded-[0.6vw]" style={{ background: "rgba(11,30,61,0.05)", borderLeft: "0.4vw solid #F59E0B" }}>
          <div className="font-body font-500" style={{ color: "#0B1E3D", fontSize: "1.6vw" }}>No agent installation. No CI integration required. Chainmail works from the browser, open-source and self-hostable.</div>
        </div>
      </div>
    </div>
  );
}
