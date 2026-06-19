const base = import.meta.env.BASE_URL;

export default function Slide9Closing() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1E3D 0%, #0D2654 55%, #0A3060 100%)" }}>

      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="opacity-[0.07]">
          <circle cx="1700" cy="150" r="360" fill="none" stroke="#00C5D4" strokeWidth="2" />
          <circle cx="1700" cy="150" r="240" fill="none" stroke="#00C5D4" strokeWidth="1.5" />
          <circle cx="1700" cy="150" r="130" fill="none" stroke="#00C5D4" strokeWidth="1" />
          <circle cx="220" cy="920" r="290" fill="none" stroke="#00C5D4" strokeWidth="2" />
          <circle cx="220" cy="920" r="180" fill="none" stroke="#00C5D4" strokeWidth="1.5" />
          <line x1="450" y1="100" x2="820" y2="380" stroke="#00C5D4" strokeWidth="1" />
          <line x1="820" y1="380" x2="1180" y2="220" stroke="#00C5D4" strokeWidth="1" />
          <line x1="1180" y1="220" x2="1480" y2="600" stroke="#00C5D4" strokeWidth="1" />
          <circle cx="450" cy="100" r="6" fill="#00C5D4" />
          <circle cx="820" cy="380" r="6" fill="#00C5D4" />
          <circle cx="1180" cy="220" r="6" fill="#00C5D4" />
          <circle cx="1480" cy="600" r="6" fill="#F59E0B" />
          <circle cx="680" cy="720" r="4" fill="#F59E0B" />
          <circle cx="1050" cy="880" r="4" fill="#F59E0B" />
          <line x1="680" y1="720" x2="1050" y2="880" stroke="#F59E0B" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <img
          src={`${base}cover-hero.png`}
          crossOrigin="anonymous"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.12, position: "absolute", top: 0, right: "-20%", width: "70%" }}
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-[10vw] text-center">
        <div className="flex items-center gap-[1.5vw] mb-[5vh]">
          <img src={`${base}chainmail-logo.png`} alt="Chainmail Logo" style={{ width: "4vw", height: "4vw", borderRadius: "0.6vw", objectFit: "cover" }} />
          <span className="font-display font-800 text-white tracking-tight" style={{ fontSize: "2.5vw" }}>CHAINMAIL</span>
        </div>

        <div className="font-display font-800 text-white mb-[2vh] tracking-tight" style={{ fontSize: "4.5vw", textWrap: "balance" }}>Enterprise-grade security.</div>
        <div className="font-display font-800 mb-[4vh] tracking-tight" style={{ color: "#00C5D4", fontSize: "4.5vw", textWrap: "balance" }}>Open-source access.</div>

        <div className="w-[6vw] h-[0.3vh] mb-[4vh]" style={{ background: "#F59E0B" }} />

        <div className="font-body mb-[5vh]" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.8vw", textWrap: "pretty", maxWidth: "55vw" }}>The supply chain is under attack. Maintainers deserve the same tools that protect Fortune 500 infrastructure, without the price tag. Chainmail is that tool.</div>

        <div className="font-display font-700 mb-[2vh]" style={{ color: "#00C5D4", fontSize: "2vw" }}>chainmail.saisravancherukuri.com</div>
        <div className="font-body" style={{ color: "rgba(255,255,255,0.3)", fontSize: "1.1vw" }}>© 2026 Sai Sravan Cherukuri · Licensed under CC BY 4.0 · Free to share and adapt with attribution</div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5vh]" style={{ background: "linear-gradient(to right, #00C5D4, #F59E0B)" }} />
    </div>
  );
}
