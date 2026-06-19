export default function Slide2TOC() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(150deg, #EBF4FF 0%, #F0F8FF 50%, #E8F3FF 100%)" }}>

      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <circle cx="1820" cy="-80" r="380" fill="none" stroke="#00C5D4" strokeWidth="1.5" opacity="0.15" />
          <circle cx="1820" cy="-80" r="260" fill="none" stroke="#00C5D4" strokeWidth="1" opacity="0.12" />
          <circle cx="-80" cy="1160" r="340" fill="none" stroke="#0B1E3D" strokeWidth="1.5" opacity="0.08" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5vh]" style={{ background: "linear-gradient(to right, #00C5D4, #F59E0B)" }} />

      <div className="absolute inset-0 flex">
        <div className="w-[42vw] flex flex-col justify-center px-[6vw]" style={{ background: "linear-gradient(135deg, #0B1E3D 0%, #0D2654 100%)" }}>
          <div className="absolute inset-0 overflow-hidden w-[42vw]">
            <svg width="100%" height="100%" viewBox="0 0 800 1080" preserveAspectRatio="xMidYMid slice" className="opacity-10">
              <circle cx="700" cy="100" r="250" fill="none" stroke="#00C5D4" strokeWidth="2" />
              <circle cx="700" cy="100" r="160" fill="none" stroke="#00C5D4" strokeWidth="1.5" />
              <circle cx="100" cy="980" r="200" fill="none" stroke="#00C5D4" strokeWidth="2" />
              <line x1="200" y1="300" x2="500" y2="500" stroke="#00C5D4" strokeWidth="1" opacity="0.5" />
              <line x1="500" y1="500" x2="700" y2="700" stroke="#00C5D4" strokeWidth="1" opacity="0.5" />
              <circle cx="200" cy="300" r="5" fill="#00C5D4" />
              <circle cx="500" cy="500" r="5" fill="#00C5D4" />
              <circle cx="700" cy="700" r="5" fill="#00C5D4" />
              <circle cx="350" cy="750" r="4" fill="#F59E0B" />
              <circle cx="600" cy="400" r="4" fill="#F59E0B" />
            </svg>
          </div>
          <div className="relative z-10">
            <div className="font-display font-800 text-white leading-tight mb-[2vh]" style={{ fontSize: "2vw" }}>The</div>
            <div className="font-display font-800 leading-none mb-[1vh]" style={{ color: "#00C5D4", fontSize: "4vw" }}>Supply Chain</div>
            <div className="font-display font-800 text-white leading-none mb-[4vh]" style={{ fontSize: "4vw" }}>Security</div>
            <div className="font-display font-800 text-white leading-none mb-[5vh]" style={{ fontSize: "4vw" }}>Playbook</div>
            <div className="w-[3.5vw] h-[0.3vh] mb-[3vh]" style={{ background: "#F59E0B" }} />
            <div className="font-body" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.5vw" }}>chainmail.saisravancherukuri.com</div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center px-[5vw]">
          <div className="font-display font-800 mb-[4vh]" style={{ color: "#0B1E3D", fontSize: "2.8vw" }}>Table of Contents</div>

          <div className="flex items-start gap-[2.5vw] mb-[3vh]">
            <div className="font-display font-800 w-[3vw] shrink-0" style={{ color: "#00C5D4", fontSize: "2.2vw" }}>01</div>
            <div>
              <div className="font-display font-700 mb-[0.3vh]" style={{ color: "#0B1E3D", fontSize: "1.8vw" }}>Introduction</div>
              <div className="font-body" style={{ color: "#4A6080", fontSize: "1.5vw" }}>The supply chain attack crisis</div>
            </div>
          </div>

          <div className="w-full h-[0.1vh] mb-[3vh]" style={{ background: "#D0E5F5" }} />

          <div className="flex items-start gap-[2.5vw] mb-[3vh]">
            <div className="font-display font-800 w-[3vw] shrink-0" style={{ color: "#00C5D4", fontSize: "2.2vw" }}>02</div>
            <div>
              <div className="font-display font-700 mb-[0.3vh]" style={{ color: "#0B1E3D", fontSize: "1.8vw" }}>The 8 Security Tools</div>
              <div className="font-body" style={{ color: "#4A6080", fontSize: "1.5vw" }}>What Chainmail provides, end-to-end</div>
            </div>
          </div>

          <div className="w-full h-[0.1vh] mb-[3vh]" style={{ background: "#D0E5F5" }} />

          <div className="flex items-start gap-[2.5vw] mb-[3vh]">
            <div className="font-display font-800 w-[3vw] shrink-0" style={{ color: "#00C5D4", fontSize: "2.2vw" }}>03</div>
            <div>
              <div className="font-display font-700 mb-[0.3vh]" style={{ color: "#0B1E3D", fontSize: "1.8vw" }}>Our Intellectual Property</div>
              <div className="font-body" style={{ color: "#4A6080", fontSize: "1.5vw" }}>Novel tools that exist nowhere else</div>
            </div>
          </div>

          <div className="w-full h-[0.1vh] mb-[3vh]" style={{ background: "#D0E5F5" }} />

          <div className="flex items-start gap-[2.5vw]">
            <div className="font-display font-800 w-[3vw] shrink-0" style={{ color: "#00C5D4", fontSize: "2.2vw" }}>04</div>
            <div>
              <div className="font-display font-700 mb-[0.3vh]" style={{ color: "#0B1E3D", fontSize: "1.8vw" }}>Implementation</div>
              <div className="font-body" style={{ color: "#4A6080", fontSize: "1.5vw" }}>Getting started in under an hour</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[5vh] right-[5vw] flex flex-col items-end gap-[1vh]">
        <div className="font-body font-600" style={{ color: "#0B1E3D", fontSize: "1.3vw" }}>Chainmail</div>
        <div className="font-body" style={{ color: "#4A6080", fontSize: "1.3vw" }}>Security Playbook 2026</div>
      </div>
    </div>
  );
}
