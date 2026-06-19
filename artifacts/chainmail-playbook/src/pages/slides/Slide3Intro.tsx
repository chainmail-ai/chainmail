export default function Slide3Intro() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(150deg, #EBF4FF 0%, #F0F8FF 100%)" }}>

      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <circle cx="1820" cy="540" r="420" fill="none" stroke="#00C5D4" strokeWidth="1.5" opacity="0.1" />
          <circle cx="1820" cy="540" r="280" fill="none" stroke="#00C5D4" strokeWidth="1" opacity="0.08" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5vh]" style={{ background: "linear-gradient(to right, #00C5D4, #F59E0B)" }} />
      <div className="absolute top-0 left-0 right-0 h-[0.5vh]" style={{ background: "#0B1E3D" }} />

      <div className="absolute inset-0 flex flex-col justify-center px-[7vw]">
        <div className="font-body font-600 mb-[2.5vh]" style={{ color: "#00C5D4", fontSize: "1.5vw", letterSpacing: "0.12em" }}>CHAPTER 01: INTRODUCTION</div>
        <div className="font-display font-800 mb-[5vh] tracking-tight" style={{ color: "#0B1E3D", fontSize: "4vw", textWrap: "balance" }}>The supply chain is the new attack surface.</div>

        <div className="grid gap-[4vw]" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
          <div className="flex flex-col">
            <div className="font-display font-800 leading-none mb-[1.5vh]" style={{ color: "#0B1E3D", fontSize: "7vw" }}>61<span style={{ color: "#F59E0B", fontSize: "3vw" }}>%</span></div>
            <div className="w-[3vw] h-[0.3vh] mb-[1.5vh]" style={{ background: "#00C5D4" }} />
            <div className="font-body" style={{ color: "#4A6080", fontSize: "1.6vw", textWrap: "pretty" }}>of organizations experienced a software supply chain attack in 2025</div>
          </div>
          <div className="flex flex-col">
            <div className="font-display font-800 leading-none mb-[1.5vh]" style={{ color: "#0B1E3D", fontSize: "7vw" }}>742<span style={{ color: "#F59E0B", fontSize: "3vw" }}>K</span></div>
            <div className="w-[3vw] h-[0.3vh] mb-[1.5vh]" style={{ background: "#00C5D4" }} />
            <div className="font-body" style={{ color: "#4A6080", fontSize: "1.6vw", textWrap: "pretty" }}>malicious packages published to npm and PyPI registries in 2024</div>
          </div>
          <div className="flex flex-col">
            <div className="font-display font-800 leading-none mb-[1.5vh]" style={{ color: "#0B1E3D", fontSize: "7vw" }}>Jan<span style={{ color: "#F59E0B", fontSize: "3vw" }}>'26</span></div>
            <div className="w-[3vw] h-[0.3vh] mb-[1.5vh]" style={{ background: "#00C5D4" }} />
            <div className="font-body" style={{ color: "#4A6080", fontSize: "1.6vw", textWrap: "pretty" }}>US government SBOM mandate deadline for all software suppliers</div>
          </div>
        </div>

        <div className="mt-[5vh] p-[2.5vh_2.5vw] rounded-[0.6vw]" style={{ background: "rgba(11,30,61,0.06)", borderLeft: "0.4vw solid #00C5D4" }}>
          <div className="font-body font-500" style={{ color: "#0B1E3D", fontSize: "1.7vw", textWrap: "pretty" }}>Open-source maintainers carry the heaviest burden, and have had the fewest tools. Chainmail changes that.</div>
        </div>
      </div>
    </div>
  );
}
