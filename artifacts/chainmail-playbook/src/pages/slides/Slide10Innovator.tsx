const base = import.meta.env.BASE_URL;

export default function Slide10Innovator() {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0B1E3D 0%, #0D2654 55%, #091A36 100%)" }}
    >
      {/* Background geometric decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="opacity-[0.06]">
          <circle cx="1750" cy="540" r="500" fill="none" stroke="#00C5D4" strokeWidth="1.5" />
          <circle cx="1750" cy="540" r="360" fill="none" stroke="#00C5D4" strokeWidth="1" />
          <circle cx="1750" cy="540" r="220" fill="none" stroke="#F59E0B" strokeWidth="0.8" />
          <circle cx="160"  cy="200"  r="260" fill="none" stroke="#00C5D4" strokeWidth="1.5" />
          <circle cx="160"  cy="200"  r="160" fill="none" stroke="#00C5D4" strokeWidth="1" />
          <line x1="200" y1="900" x2="700" y2="600" stroke="#00C5D4" strokeWidth="0.8" />
          <line x1="700" y1="600" x2="1100" y2="750" stroke="#F59E0B" strokeWidth="0.8" />
          <circle cx="200"  cy="900" r="5" fill="#00C5D4" />
          <circle cx="700"  cy="600" r="5" fill="#00C5D4" />
          <circle cx="1100" cy="750" r="5" fill="#F59E0B" />
        </svg>
      </div>

      {/* Top-left label */}
      <div
        className="absolute top-[5vh] left-[6vw] font-display font-600 tracking-[0.25em] uppercase"
        style={{ color: "#00C5D4", fontSize: "0.9vw", letterSpacing: "0.22em" }}
      >
        The Visionary
      </div>

      {/* Top-right branding */}
      <div className="absolute top-[5vh] right-[5vw] text-right">
        <div className="font-display font-600 text-white" style={{ fontSize: "1vw" }}>Chainmail</div>
        <div className="font-body" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85vw" }}>Security Playbook 2026</div>
      </div>

      {/* Main layout — two halves */}
      <div className="absolute inset-0 flex items-center">

        {/* LEFT — portrait */}
        <div className="flex-none w-[46vw] flex flex-col items-center justify-center">

          {/* Outer ambient glow rings */}
          <div className="relative flex items-center justify-center">
            {/* Outermost glow halo */}
            <div
              className="absolute rounded-full"
              style={{
                width: "30vw",
                height: "30vw",
                background: "radial-gradient(circle, rgba(0,197,212,0.18) 0%, rgba(0,197,212,0.06) 45%, transparent 72%)",
              }}
            />
            {/* Mid amber ring pulse */}
            <div
              className="absolute rounded-full"
              style={{
                width: "24vw",
                height: "24vw",
                background: "radial-gradient(circle, transparent 48%, rgba(245,158,11,0.22) 62%, transparent 75%)",
              }}
            />
            {/* Cyan inner ring */}
            <div
              className="absolute rounded-full"
              style={{
                width: "20vw",
                height: "20vw",
                background: "radial-gradient(circle, transparent 50%, rgba(0,197,212,0.35) 65%, transparent 80%)",
              }}
            />

            {/* Portrait frame */}
            <div
              className="relative rounded-full overflow-hidden flex-shrink-0"
              style={{
                width: "17vw",
                height: "17vw",
                boxShadow: [
                  "0 0 0 0.25vw rgba(0,197,212,0.9)",
                  "0 0 2.5vw 0.8vw rgba(0,197,212,0.45)",
                  "0 0 5vw 1.5vw rgba(0,197,212,0.2)",
                  "0 0 8vw 2vw rgba(245,158,11,0.12)",
                ].join(", "),
              }}
            >
              <img
                src={`${base}innovator-portrait.png`}
                alt="Tool Innovator"
                className="w-full h-full object-cover object-center"
                crossOrigin="anonymous"
              />
              {/* Subtle top-left specular */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(135deg, rgba(0,197,212,0.12) 0%, transparent 50%)",
                }}
              />
            </div>
          </div>

          {/* Email badge */}
          <div
            className="mt-[3vh] px-[1.5vw] py-[0.7vh] rounded-full font-body flex items-center gap-[0.6vw]"
            style={{
              background: "rgba(0,197,212,0.12)",
              border: "1px solid rgba(0,197,212,0.35)",
              color: "#00C5D4",
              fontSize: "1vw",
              boxShadow: "0 0 1.2vw rgba(0,197,212,0.2)",
            }}
          >
            <svg viewBox="0 0 20 20" fill="none" style={{ width: "1.1vw", height: "1.1vw" }}>
              <rect x="1.5" y="4" width="17" height="12" rx="2.5" stroke="#00C5D4" strokeWidth="1.4" />
              <path d="M1.5 6.5L10 11.5L18.5 6.5" stroke="#00C5D4" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            saisravan@gmail.com
          </div>
        </div>

        {/* RIGHT — text content */}
        <div className="flex-1 flex flex-col justify-center pr-[8vw] pl-[1vw]">

          <div
            className="font-display font-700 uppercase tracking-[0.18em] mb-[2.5vh]"
            style={{ color: "#00C5D4", fontSize: "0.9vw" }}
          >
            Behind the Workbench
          </div>

          <h2
            className="font-display font-800 text-white leading-[1.08] mb-[3vh] tracking-tight"
            style={{ fontSize: "3.8vw", textWrap: "balance" }}
          >
            One mind.<br />
            <span style={{ color: "#00C5D4" }}>Eight breakthroughs.</span>
          </h2>

          <div className="w-[4vw] h-[0.3vh] mb-[4vh]" style={{ background: "#F59E0B" }} />

          <div className="space-y-[2.2vh]">
            <p
              className="font-body leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.35vw", maxWidth: "34vw", textWrap: "pretty" }}
            >
              At the intersection of security engineering and open-source philosophy lives a rare kind of thinker, one who sees not just the problem, but the elegant, inevitable solution three steps ahead.
            </p>
            <p
              className="font-body leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.2vw", maxWidth: "32vw", textWrap: "pretty" }}
            >
              Each of Chainmail's eight tools solves a problem the industry accepted as unsolvable, or worse, never noticed at all. The creativity is quiet. The impact is not.
            </p>
          </div>

          {/* Intrigue footer */}
          <div
            className="mt-[5vh] pt-[2.5vh] flex items-center gap-[1.2vw]"
            style={{ borderTop: "1px solid rgba(0,197,212,0.2)" }}
          >
            <div
              className="w-[0.5vw] h-[0.5vw] rounded-full animate-pulse"
              style={{ background: "#00C5D4", boxShadow: "0 0 0.8vw #00C5D4" }}
            />
            <span className="font-body italic" style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.05vw" }}>
              The questions you haven't thought to ask yet, already answered.
            </span>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[0.5vh]"
        style={{ background: "linear-gradient(to right, #00C5D4, #F59E0B)" }}
      />
    </div>
  );
}
