export default function Slide6IP1() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(150deg, #EBF4FF 0%, #F0F8FF 100%)" }}>

      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <circle cx="1860" cy="1060" r="340" fill="none" stroke="#00C5D4" strokeWidth="1.5" opacity="0.1" />
          <circle cx="60" cy="60" r="260" fill="none" stroke="#0B1E3D" strokeWidth="1.5" opacity="0.06" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5vh]" style={{ background: "linear-gradient(to right, #00C5D4, #F59E0B)" }} />
      <div className="absolute top-0 left-0 right-0 h-[0.5vh]" style={{ background: "#0B1E3D" }} />

      <div className="absolute inset-0 flex flex-col px-[6vw] pt-[6vh] pb-[5vh]">
        <div className="font-body font-600 mb-[1vh]" style={{ color: "#00C5D4", fontSize: "1.5vw", letterSpacing: "0.12em" }}>CHAPTER 03: INTELLECTUAL PROPERTY</div>
        <div className="font-display font-800 mb-[4vh] tracking-tight" style={{ color: "#0B1E3D", fontSize: "3.2vw" }}>Tools that exist nowhere else in open-source</div>

        <div className="grid gap-[3vw]" style={{ gridTemplateColumns: "1fr 1fr", flex: 1 }}>
          <div className="flex flex-col" style={{ borderTop: "0.3vh solid #00C5D4", paddingTop: "2.5vh" }}>
            <div className="font-display font-800 mb-[0.5vh]" style={{ color: "#00C5D4", fontSize: "1.6vw", letterSpacing: "0.1em" }}>VEX STATEMENT GENERATOR</div>
            <div className="font-display font-700 mb-[2vh]" style={{ color: "#0B1E3D", fontSize: "2.2vw" }}>From CVE to CISA compliance in one click</div>
            <div className="font-body mb-[2.5vh]" style={{ color: "#4A6080", fontSize: "1.6vw", textWrap: "pretty" }}>Open-source tooling has never handled VEX (Vulnerability Exploitability eXchange). Chainmail generates CISA-format statements directly from scan results, letting maintainers document exploitability status without learning new standards.</div>
            <div className="flex flex-col gap-[1.2vh]">
              <div className="flex items-center gap-[1vw]">
                <div className="w-[0.8vw] h-[0.8vw] rounded-full shrink-0" style={{ background: "#00C5D4" }} />
                <div className="font-body" style={{ color: "#0B1E3D", fontSize: "1.5vw" }}>Statuses: Not Affected, Affected, Fixed, Investigating</div>
              </div>
              <div className="flex items-center gap-[1vw]">
                <div className="w-[0.8vw] h-[0.8vw] rounded-full shrink-0" style={{ background: "#00C5D4" }} />
                <div className="font-body" style={{ color: "#0B1E3D", fontSize: "1.5vw" }}>Linked directly to CVEs from vulnerability scans</div>
              </div>
              <div className="flex items-center gap-[1vw]">
                <div className="w-[0.8vw] h-[0.8vw] rounded-full shrink-0" style={{ background: "#00C5D4" }} />
                <div className="font-body" style={{ color: "#0B1E3D", fontSize: "1.5vw" }}>Required by upcoming federal procurement rules</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col" style={{ borderTop: "0.3vh solid #F59E0B", paddingTop: "2.5vh" }}>
            <div className="font-display font-800 mb-[0.5vh]" style={{ color: "#F59E0B", fontSize: "1.6vw", letterSpacing: "0.1em" }}>2026 READINESS TRACKER</div>
            <div className="font-display font-700 mb-[2vh]" style={{ color: "#0B1E3D", fontSize: "2.2vw" }}>Real-time compliance against government mandates</div>
            <div className="font-body mb-[2.5vh]" style={{ color: "#4A6080", fontSize: "1.6vw", textWrap: "pretty" }}>No other tool tracks live project compliance against EO 14028 and NTIA SBOM requirements. Chainmail maps actual project data to each mandate item with a pass/fail checklist, and shows what deadline is next.</div>
            <div className="flex flex-col gap-[1.2vh]">
              <div className="flex items-center gap-[1vw]">
                <div className="w-[0.8vw] h-[0.8vw] rounded-full shrink-0" style={{ background: "#F59E0B" }} />
                <div className="font-body" style={{ color: "#0B1E3D", fontSize: "1.5vw" }}>Four categories: SBOM, Vulnerability, Provenance, License</div>
              </div>
              <div className="flex items-center gap-[1vw]">
                <div className="w-[0.8vw] h-[0.8vw] rounded-full shrink-0" style={{ background: "#F59E0B" }} />
                <div className="font-body" style={{ color: "#0B1E3D", fontSize: "1.5vw" }}>Scored against real analysis data, not self-reported</div>
              </div>
              <div className="flex items-center gap-[1vw]">
                <div className="w-[0.8vw] h-[0.8vw] rounded-full shrink-0" style={{ background: "#F59E0B" }} />
                <div className="font-body" style={{ color: "#0B1E3D", fontSize: "1.5vw" }}>Actionable guidance with "Read Docs" links per item</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
