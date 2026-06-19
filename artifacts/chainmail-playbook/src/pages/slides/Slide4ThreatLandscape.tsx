export default function Slide4ThreatLandscape() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1E3D 0%, #0D2654 60%, #0A3060 100%)" }}>

      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="opacity-[0.08]">
          <circle cx="1700" cy="200" r="350" fill="none" stroke="#00C5D4" strokeWidth="2" />
          <circle cx="1700" cy="200" r="220" fill="none" stroke="#00C5D4" strokeWidth="1.5" />
          <circle cx="200" cy="900" r="280" fill="none" stroke="#00C5D4" strokeWidth="2" />
          <line x1="300" y1="100" x2="700" y2="350" stroke="#00C5D4" strokeWidth="1" />
          <line x1="700" y1="350" x2="1100" y2="180" stroke="#00C5D4" strokeWidth="1" />
          <line x1="1100" y1="180" x2="1400" y2="550" stroke="#00C5D4" strokeWidth="1" />
          <line x1="1400" y1="550" x2="1100" y2="800" stroke="#F59E0B" strokeWidth="1" />
          <circle cx="300" cy="100" r="6" fill="#00C5D4" />
          <circle cx="700" cy="350" r="6" fill="#00C5D4" />
          <circle cx="1100" cy="180" r="6" fill="#00C5D4" />
          <circle cx="1400" cy="550" r="8" fill="#F59E0B" />
          <circle cx="1100" cy="800" r="6" fill="#F59E0B" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5vh]" style={{ background: "linear-gradient(to right, #00C5D4, #F59E0B)" }} />

      <div className="absolute inset-0 flex flex-col justify-center px-[6vw]">
        <div className="font-body font-600 mb-[2vh]" style={{ color: "#00C5D4", fontSize: "1.5vw", letterSpacing: "0.12em" }}>CHAPTER 01: THE THREAT LANDSCAPE</div>
        <div className="font-display font-800 text-white mb-[5vh] tracking-tight" style={{ fontSize: "3.8vw", textWrap: "balance" }}>Four attack vectors every maintainer faces</div>

        <div className="grid gap-[2.5vw]" style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
          <div className="p-[2.5vh_1.8vw] rounded-[0.6vw]" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,197,212,0.2)" }}>
            <div className="font-display font-800 mb-[1.5vh]" style={{ color: "#F59E0B", fontSize: "2.2vw" }}>01</div>
            <div className="font-display font-700 text-white mb-[1vh]" style={{ fontSize: "1.7vw" }}>Typosquatting</div>
            <div className="font-body" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.5vw" }}>Malicious packages mimicking popular names on npm and PyPI</div>
          </div>
          <div className="p-[2.5vh_1.8vw] rounded-[0.6vw]" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,197,212,0.2)" }}>
            <div className="font-display font-800 mb-[1.5vh]" style={{ color: "#F59E0B", fontSize: "2.2vw" }}>02</div>
            <div className="font-display font-700 text-white mb-[1vh]" style={{ fontSize: "1.7vw" }}>Dependency Confusion</div>
            <div className="font-body" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.5vw" }}>Private packages shadowed by public registry entries</div>
          </div>
          <div className="p-[2.5vh_1.8vw] rounded-[0.6vw]" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,197,212,0.2)" }}>
            <div className="font-display font-800 mb-[1.5vh]" style={{ color: "#F59E0B", fontSize: "2.2vw" }}>03</div>
            <div className="font-display font-700 text-white mb-[1vh]" style={{ fontSize: "1.7vw" }}>Transitive Vulns</div>
            <div className="font-body" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.5vw" }}>CVEs hidden deep in indirect dependencies, invisible to maintainers</div>
          </div>
          <div className="p-[2.5vh_1.8vw] rounded-[0.6vw]" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,197,212,0.2)" }}>
            <div className="font-display font-800 mb-[1.5vh]" style={{ color: "#F59E0B", fontSize: "2.2vw" }}>04</div>
            <div className="font-display font-700 text-white mb-[1vh]" style={{ fontSize: "1.7vw" }}>License Drift</div>
            <div className="font-body" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.5vw" }}>Copyleft licenses propagating silently through dependency trees</div>
          </div>
        </div>

        <div className="mt-[4vh] font-body" style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.5vw" }}>Chainmail addresses all four with dedicated tooling.</div>
      </div>
    </div>
  );
}
