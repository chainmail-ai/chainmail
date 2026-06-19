const base = import.meta.env.BASE_URL;

export default function Slide1Cover() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1E3D 0%, #0D2654 55%, #0A3060 100%)" }}>

      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="opacity-[0.07]">
          <circle cx="1600" cy="150" r="320" fill="none" stroke="#00C5D4" strokeWidth="2" />
          <circle cx="1600" cy="150" r="200" fill="none" stroke="#00C5D4" strokeWidth="1.5" />
          <circle cx="1600" cy="150" r="100" fill="none" stroke="#00C5D4" strokeWidth="1" />
          <circle cx="200" cy="900" r="260" fill="none" stroke="#00C5D4" strokeWidth="2" />
          <circle cx="200" cy="900" r="160" fill="none" stroke="#00C5D4" strokeWidth="1.5" />
          <line x1="400" y1="80" x2="800" y2="400" stroke="#00C5D4" strokeWidth="1" />
          <line x1="800" y1="400" x2="1200" y2="200" stroke="#00C5D4" strokeWidth="1" />
          <line x1="1200" y1="200" x2="1500" y2="600" stroke="#00C5D4" strokeWidth="1" />
          <circle cx="400" cy="80" r="6" fill="#00C5D4" />
          <circle cx="800" cy="400" r="6" fill="#00C5D4" />
          <circle cx="1200" cy="200" r="6" fill="#00C5D4" />
          <circle cx="1500" cy="600" r="6" fill="#00C5D4" />
          <circle cx="600" cy="700" r="4" fill="#F59E0B" />
          <circle cx="1000" cy="850" r="4" fill="#F59E0B" />
          <circle cx="1350" cy="420" r="4" fill="#F59E0B" />
          <line x1="600" y1="700" x2="1000" y2="850" stroke="#F59E0B" strokeWidth="0.8" opacity="0.5" />
          <line x1="1000" y1="850" x2="1350" y2="420" stroke="#F59E0B" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-[45vw] h-full overflow-hidden">
        <img
          src={`${base}cover-hero.png`}
          crossOrigin="anonymous"
          alt="Supply chain security visualization"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0B1E3D 0%, transparent 40%)" }} />
      </div>

      <div className="absolute top-[6vh] left-[6vw] right-[6vw] flex items-center justify-between">
        <div className="flex items-center gap-[1.2vw]">
          <img src={`${base}chainmail-logo.png`} alt="Chainmail Logo" style={{ width: "3vw", height: "3vw", borderRadius: "0.4vw", objectFit: "cover" }} />
          <span className="font-display font-800 text-white tracking-tight" style={{ fontSize: "1.8vw" }}>CHAINMAIL</span>
        </div>
        <div className="font-body text-white opacity-50" style={{ fontSize: "1.4vw" }}>2026 Edition</div>
      </div>

      <div className="absolute left-[6vw] top-0 bottom-0 flex flex-col justify-center" style={{ maxWidth: "52vw" }}>
        <div className="font-body font-600 mb-[2vh]" style={{ color: "#00C5D4", fontSize: "1.6vw", letterSpacing: "0.15em" }}>OPEN-SOURCE MAINTAINER WORKBENCH</div>
        <div className="font-display font-800 leading-none tracking-tight text-white mb-[1.5vh]" style={{ fontSize: "2.2vw", textWrap: "balance" }}>The</div>
        <div className="font-display font-800 leading-none tracking-tight mb-[1.5vh]" style={{ color: "#00C5D4", fontSize: "5.5vw", textWrap: "balance" }}>Supply Chain</div>
        <div className="font-display font-800 leading-none tracking-tight text-white mb-[4vh]" style={{ fontSize: "5.5vw", textWrap: "balance" }}>Security Playbook</div>
        <div className="w-[5vw] h-[0.3vh] mb-[3vh]" style={{ background: "#F59E0B" }} />
        <div className="font-body" style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.7vw", textWrap: "pretty" }}>A practical guide to protecting your open-source projects with enterprise-grade tooling, at zero cost.</div>
      </div>

      <div className="absolute bottom-[5vh] left-[6vw] flex items-center gap-[2vw]">
        <div className="font-body" style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.4vw" }}>chainmail.saisravancherukuri.com</div>
        <div className="w-[0.1vw] h-[2.5vh]" style={{ background: "rgba(255,255,255,0.2)" }} />
        <div className="font-body" style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.4vw" }}>April 2026</div>
        <div className="w-[0.1vw] h-[2.5vh]" style={{ background: "rgba(255,255,255,0.2)" }} />
        <div className="font-body" style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.4vw" }}>© 2026 Sai Sravan Cherukuri · CC BY 4.0</div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5vh]" style={{ background: "linear-gradient(to right, #00C5D4, #F59E0B)" }} />
    </div>
  );
}
