import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Lock, CheckCircle2, Server, GitCompare, Network, ActivitySquare, ArrowRight, Copy, Check, Share2, Zap, TrendingUp, AlertTriangle, GitBranch, Database, FlaskConical, ExternalLink, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const BASE = import.meta.env.BASE_URL;

const attacks = [
  "⚡ SolarWinds 2020 — 18,000 organizations breached via poisoned software update",
  "🔴 XZ Utils 2024 — backdoor hidden in compression library for 2+ years",
  "🟠 Log4Shell 2021 — 93% of cloud environments exposed in 72 hours",
  "🔴 PyPI malware 2024 — 742,000 malicious packages published in a single year",
  "⚡ Codecov 2021 — CI/CD bash uploader compromised, thousands of secrets leaked",
  "🔴 npm protestware 2022 — maintainer pushed wiper to 22 million weekly downloads",
  "🟠 3CX 2023 — nation-state actors poisoned a legitimate desktop app installer",
  "⚡ Polyfill.io 2024 — CDN script injecting malware into 100,000+ websites",
];

function ThreatTicker() {
  const text = attacks.join("     ·     ");
  return (
    <div className="w-full overflow-hidden border-y border-red-500/20 bg-red-950/20 py-2.5">
      <motion.div
        className="flex whitespace-nowrap text-sm text-red-400/80 font-mono gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <span className="shrink-0">{text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}</span>
      </motion.div>
    </div>
  );
}

const phrases = [
  { text: "ZERO TRUST", color: "text-primary" },
  { text: "·", color: "text-border" },
  { text: "ZERO COST", color: "text-white" },
  { text: "·", color: "text-border" },
  { text: "SUPPLY CHAIN OS", color: "text-primary" },
  { text: "·", color: "text-border" },
  { text: "BUILT DIFFERENT", color: "text-white" },
  { text: "·", color: "text-border" },
  { text: "THE FULL PICTURE", color: "text-primary" },
  { text: "·", color: "text-border" },
  { text: "SEE EVERYTHING", color: "text-white" },
  { text: "·", color: "text-border" },
  { text: "MISS NOTHING", color: "text-primary" },
  { text: "·", color: "text-border" },
];

function PhrasesBanner() {
  const row1 = [...phrases, ...phrases];
  const row2 = [...phrases].reverse();
  const row2Full = [...row2, ...row2];
  return (
    <div className="w-full overflow-hidden py-8 bg-background border-y border-primary/10 select-none">
      {/* Row 1 — left to right */}
      <div className="mb-3">
        <motion.div
          className="flex items-center gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {row1.map((p, i) => (
            <span key={i} className={`text-5xl md:text-6xl font-black tracking-tighter shrink-0 ${p.color} opacity-80`}>
              {p.text}
            </span>
          ))}
        </motion.div>
      </div>
      {/* Row 2 — right to left */}
      <div>
        <motion.div
          className="flex items-center gap-6 whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {row2Full.map((p, i) => (
            <span key={i} className={`text-4xl md:text-5xl font-black tracking-tighter shrink-0 ${p.color} opacity-50`}>
              {p.text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const pipelineTools = [
  { title: "SBOM Health",        desc: "Full dependency picture — direct, transitive, stale.", icon: FileText,       color: "#00C5D4" },
  { title: "Vulnerabilities",    desc: "CVEs on your exact versions. VEX in 2 seconds.",       icon: Shield,         color: "#f97316" },
  { title: "License Compliance", desc: "Catch GPL violations before legal does.",               icon: Lock,           color: "#a855f7" },
  { title: "License Tree",       desc: "Copyleft propagation. No other tool shows this.",      icon: Network,        color: "#22c55e" },
  { title: "Risk Scoring",       desc: "A–F grade across five dimensions. Actionable.",        icon: ActivitySquare, color: "#f59e0b" },
  { title: "Provenance",         desc: "SLSA attestation. Sigstore. Prove your origin.",       icon: CheckCircle2,   color: "#00C5D4" },
  { title: "2026 Readiness",     desc: "CISA + EO 14028 tracker. Real data, not checkboxes.", icon: Server,         color: "#ef4444" },
  { title: "SBOM Diffing",       desc: "Version-to-version. Catch what snuck in.",             icon: GitCompare,     color: "#6366f1" },
];

function PipelineNode({
  tool, side, index,
}: {
  tool: typeof pipelineTools[0];
  side: "left" | "right";
  index: number;
}) {
  const Icon = tool.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative flex items-center gap-3 group"
      style={{ flexDirection: side === "left" ? "row-reverse" : "row" }}
    >
      {/* Connector beam */}
      <div className="flex-1 h-px relative overflow-hidden" style={{ minWidth: 32 }}>
        <div className="absolute inset-0" style={{ background: `linear-gradient(${side === "left" ? "to left" : "to right"}, transparent, ${tool.color}55)` }} />
        <motion.div
          className="absolute inset-y-0 w-16 rounded-full"
          style={{ background: `linear-gradient(90deg, transparent, ${tool.color}, transparent)` }}
          animate={{ x: side === "left" ? ["-100%", "200%"] : ["200%", "-100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
        />
      </div>
      {/* Card */}
      <motion.div
        className="rounded-xl border p-3 bg-card/80 backdrop-blur-sm w-48 shrink-0 cursor-default"
        style={{ borderColor: `${tool.color}40` }}
        whileHover={{ scale: 1.04, borderColor: tool.color }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${tool.color}55, 0 0 0 1px ${tool.color}`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "";
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: `${tool.color}20` }}>
            <Icon className="w-3.5 h-3.5" style={{ color: tool.color }} />
          </div>
          <span className="font-bold text-xs leading-tight">{tool.title}</span>
        </div>
        <p className="text-xs text-muted-foreground leading-snug">{tool.desc}</p>
      </motion.div>
    </motion.div>
  );
}

function PipelineSection() {
  const leftTools  = pipelineTools.slice(0, 4);
  const rightTools = pipelineTools.slice(4, 8);

  return (
    <section className="py-24 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.06)_0%,transparent_70%)]">
      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest mb-6 border border-primary/20">
            <Database className="w-3 h-3" /> THE PIPELINE
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-3">
            8 Lenses. <span className="text-primary">One Truth.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">See Everything. Miss Nothing.</p>
        </motion.div>
      </div>

      {/* Pipeline grid */}
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-center">

          {/* Left tools */}
          <div className="flex flex-col gap-4">
            {leftTools.map((tool, i) => (
              <PipelineNode key={tool.title} tool={tool} side="left" index={i} />
            ))}
          </div>

          {/* Center core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center mx-auto"
            style={{ width: 220, height: 220 }}
          >
            {/* Outer pulsing rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute rounded-full border border-primary/20"
                style={{ inset: -ring * 22 }}
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.15, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: ring * 0.5, ease: "easeInOut" }}
              />
            ))}
            {/* Core */}
            <div
              className="relative w-full h-full rounded-2xl border-2 border-primary/60 bg-card flex flex-col items-center justify-center text-center p-4 z-10"
              style={{ boxShadow: "0 0 60px hsl(var(--primary)/0.3), 0 0 120px hsl(var(--primary)/0.15), inset 0 0 40px hsl(var(--primary)/0.05)" }}
            >
              <img src={`${BASE}chainmail-logo.png`} alt="Chainmail" className="w-14 h-14 rounded-xl mb-3"
                style={{ boxShadow: "0 0 20px hsl(var(--primary)/0.5)" }} />
              <div className="text-xs font-bold tracking-widest text-primary/70 mb-1">CHAINMAIL ENGINE</div>
              <div className="text-lg font-black tracking-tight leading-tight">8 Lenses.<br /><span className="text-primary">One Truth.</span></div>
              <div className="text-xs text-muted-foreground mt-2 font-medium">See Everything.<br />Miss Nothing.</div>
              {/* Scanning line */}
              <motion.div
                className="absolute left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)/0.6), transparent)" }}
                animate={{ top: ["10%", "90%", "10%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Right tools */}
          <div className="flex flex-col gap-4">
            {rightTools.map((tool, i) => (
              <PipelineNode key={tool.title} tool={tool} side="right" index={i} />
            ))}
          </div>
        </div>

        {/* Bottom label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">Hover any tool to see it light up. Every node is live inside the workbench.</p>
        </motion.div>
      </div>
    </section>
  );
}

function GlowCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={`relative rounded-2xl border border-primary/20 bg-card p-6 group transition-all duration-300 ${className}`}
      style={{
        boxShadow: "0 0 0 1px hsl(var(--primary)/0.1), 0 4px 24px hsl(var(--primary)/0.05)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 0 1px hsl(var(--primary)/0.5), 0 0 30px hsl(var(--primary)/0.2), 0 0 60px hsl(var(--primary)/0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 0 1px hsl(var(--primary)/0.1), 0 4px 24px hsl(var(--primary)/0.05)";
      }}
    >
      {children}
    </motion.div>
  );
}

const grades = ["A", "B", "C", "D", "F"];
const gradeColors: Record<string, string> = {
  A: "#00C5D4", B: "#22c55e", C: "#f59e0b", D: "#f97316", F: "#ef4444",
};

function RiskGauge({ grade }: { grade: string }) {
  const idx = grades.indexOf(grade);
  const pct = idx === -1 ? 0 : (idx / (grades.length - 1));
  const angle = -135 + pct * 270;
  const color = gradeColors[grade] ?? "#00C5D4";
  return (
    <div className="flex flex-col items-center">
      <svg width="160" height="100" viewBox="0 0 160 100">
        <path d="M20 90 A70 70 0 0 1 140 90" fill="none" stroke="#1e293b" strokeWidth="12" strokeLinecap="round" />
        <path d="M20 90 A70 70 0 0 1 140 90" fill="none" stroke={color} strokeWidth="12"
          strokeLinecap="round" strokeDasharray="220" strokeDashoffset={220 - 220 * (1 - pct)} style={{ transition: "stroke-dashoffset 1s ease, stroke 0.5s" }} />
        <g transform={`rotate(${angle}, 80, 90)`}>
          <line x1="80" y1="90" x2="80" y2="30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="80" cy="90" r="5" fill="white" />
        </g>
        <text x="80" y="82" textAnchor="middle" fill={color} fontSize="28" fontWeight="900" fontFamily="monospace">{grade}</text>
      </svg>
    </div>
  );
}

const demoPackages = [
  { name: "lodash", version: "4.17.11", grade: "C", cves: 4, licenses: 1, age: "5 yrs" },
  { name: "express", version: "4.17.1",  grade: "B", cves: 1, licenses: 0, age: "3 yrs" },
  { name: "axios",   version: "0.21.0",  grade: "D", cves: 6, licenses: 0, age: "4 yrs" },
  { name: "react",   version: "18.2.0",  grade: "A", cves: 0, licenses: 0, age: "1 yr"  },
];

function ScannerDemo() {
  const [input, setInput] = useState("");
  const [scanning, setScanning] = useState(false);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const steps = ["Fetching dependency manifest…", "Resolving transitive tree…", "Scanning CVE database…", "Running license graph…", "Scoring risk dimensions…"];

  function runScan() {
    if (scanning || done) { setDone(false); setStep(0); return; }
    setScanning(true);
    setDone(false);
    let s = 0;
    const tick = setInterval(() => {
      s++;
      setStep(s);
      if (s >= steps.length) { clearInterval(tick); setScanning(false); setDone(true); }
    }, 700);
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="github.com/your-org/your-repo  or  npm:lodash"
          className="flex-1 bg-card border border-border/60 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
          onKeyDown={(e) => e.key === "Enter" && runScan()}
        />
        <button
          onClick={runScan}
          className="px-6 py-3 rounded-xl font-bold text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all flex items-center gap-2"
          style={{ boxShadow: "0 0 20px hsl(var(--primary)/0.4)" }}
        >
          <Zap className="w-4 h-4" />
          {done ? "Scan Again" : "Scan"}
        </button>
      </div>

      {(scanning || done) && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-border/40 bg-card/60 p-5 font-mono text-sm">
          {steps.slice(0, step).map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 mb-1.5 text-green-400">
              <Check className="w-3.5 h-3.5 shrink-0" /> {s}
            </motion.div>
          ))}
          {scanning && (
            <div className="flex items-center gap-2 text-primary">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} className="w-3.5 h-3.5 border-2 border-primary border-t-transparent rounded-full shrink-0" />
              {steps[step] ?? "Processing…"}
            </div>
          )}
          {done && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 border-t border-border/30 pt-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {demoPackages.map((pkg, i) => (
                  <motion.div key={pkg.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
                    className="rounded-xl border border-border/40 bg-background p-3 text-center"
                    style={{ boxShadow: `0 0 16px ${gradeColors[pkg.grade]}33` }}>
                    <div className="font-bold text-xs text-muted-foreground mb-1">{pkg.name}@{pkg.version}</div>
                    <div className="text-2xl font-black mb-1" style={{ color: gradeColors[pkg.grade] }}>{pkg.grade}</div>
                    <div className="text-xs text-muted-foreground">{pkg.cves} CVEs · {pkg.age} old</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>4 packages · 11 CVEs found · 1 license conflict</span>
                <Link href="/workbench"><span className="text-primary font-medium cursor-pointer hover:underline">Full report →</span></Link>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
}

function BeforeAfter() {
  const before = { grade: "F", cves: 23, conflicts: 5, slsa: 0, age: "4.2 yrs avg" };
  const after  = { grade: "A", cves: 0,  conflicts: 0, slsa: 3, age: "0.8 yrs avg" };
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {[{ label: "Before Chainmail", data: before, bad: true }, { label: "After Chainmail", data: after, bad: false }].map(({ label, data, bad }) => (
        <GlowCard key={label}>
          <div className={`text-xs font-bold tracking-widest mb-4 ${bad ? "text-red-400" : "text-green-400"}`}>{label.toUpperCase()}</div>
          <RiskGauge grade={data.grade} />
          <div className="mt-4 space-y-2 text-sm">
            {[
              ["CVEs", data.cves === 0 ? "None" : `${data.cves} unpatched`],
              ["License conflicts", data.conflicts === 0 ? "Clean" : `${data.conflicts} violations`],
              ["SLSA level", `Level ${data.slsa}`],
              ["Avg dep age", data.age],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-border/20 pb-1.5">
                <span className="text-muted-foreground">{k}</span>
                <span className={`font-semibold ${bad ? "text-red-400" : "text-primary"}`}>{v}</span>
              </div>
            ))}
          </div>
        </GlowCard>
      ))}
    </div>
  );
}

function BadgeGenerator() {
  const [copied, setCopied] = useState(false);
  const badge = `[![Chainmail Security](https://img.shields.io/badge/Chainmail-Secured-00C5D4?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTTggMTIgQzggOSAxMCA3IDEyIDcgQzE0IDcgMTYgOSAxNiAxMiBDMTYgOSAxOCA3IDIwIDcgQzIyIDcgMjQgOSAyNCAxMiBDMjQgMTUgMjIgMTcgMjAgMTcgQzE4IDE3IDE2IDE1IDE2IDEyIEMxNiAxNSAxNCAxNyAxMiAxNyBDMTAgMTcgOCAxNSA4IDEyWiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNOCAyMCBDOCAxNyAxMCAxNSAxMiAxNSBDMTQgMTUgMTYgMTcgMTYgMjAgQzE2IDE3IDE4IDE1IDIwIDE1IEMyMiAxNSAyNCAxNyAyNCAyMCBDMjQgMjMgMjIgMjUgMjAgMjUgQzE4IDI1IDE2IDIzIDE2IDIwIEMxNiAyMyAxNCAyNSAxMiAyNSBDMTAgMjUgOCAyMyA4IDIwWiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=)](https://chainmail.saisravancherukuri.com)`;

  function copy() {
    navigator.clipboard.writeText(badge);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <GlowCard className="max-w-3xl mx-auto">
      <div className="flex items-start justify-between mb-4 gap-4">
        <div>
          <h3 className="font-bold text-lg mb-1">Add a badge to your README</h3>
          <p className="text-sm text-muted-foreground">Let your community know your project is secured with Chainmail.</p>
        </div>
        <div className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/30">
          Chainmail Secured
        </div>
      </div>
      <div className="bg-background rounded-xl p-4 font-mono text-xs text-muted-foreground break-all border border-border/30 mb-4">
        {badge}
      </div>
      <button onClick={copy} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 transition-all">
        {copied ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy Markdown</>}
      </button>
    </GlowCard>
  );
}

function ShareScore() {
  const url = "https://chainmail.saisravancherukuri.com";
  const text = "Just secured my supply chain with Chainmail — free, open-source, enterprise-grade. Check it out:";
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border/40 text-sm font-medium hover:border-primary/40 hover:bg-primary/5 transition-all">
        <Share2 className="w-4 h-4" /> Share on X
      </a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border/40 text-sm font-medium hover:border-primary/40 hover:bg-primary/5 transition-all">
        <Share2 className="w-4 h-4" /> Share on LinkedIn
      </a>
    </div>
  );
}

const stats = [
  { label: "npm packages benchmarked", display: "500+", value: 500 },
  { label: "more license conflicts found", display: "23%", value: 23 },
  { label: "risk grade correlation", display: "ρ = 0.81", value: 81 },
  { label: "VEX generation time", display: "< 2s", value: 2 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">

      {/* NAV */}
      <nav className="border-b border-border/40 backdrop-blur-md sticky top-0 z-50 bg-background/80">
        <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={`${BASE}chainmail-logo.png`} alt="Chainmail" className="w-8 h-8 rounded" />
            <span className="font-black text-xl tracking-tighter text-primary">CHAINMAIL</span>
          </div>
          <Link href="/workbench">
            <Button data-testid="button-nav-workbench" variant="default" className="font-bold tracking-tight"
              style={{ boxShadow: "0 0 16px hsl(var(--primary)/0.35)" }}>
              Open Workbench
            </Button>
          </Link>
        </div>
      </nav>

      {/* THREAT TICKER */}
      <ThreatTicker />

      <main>

        {/* HERO */}
        <section className="py-24 md:py-32 container max-w-6xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
              <AlertTriangle className="w-3.5 h-3.5" /> 742,000 malicious packages published in 2024 alone
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
              Your supply chain<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
                has a target on it.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Chainmail gives every open-source maintainer the security tools that used to cost $40,000 a year. Eight tools. One workbench. Zero dollars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/workbench">
                <Button data-testid="button-hero-start" size="lg" className="h-14 px-8 text-lg font-bold gap-2"
                  style={{ boxShadow: "0 0 30px hsl(var(--primary)/0.4)" }}>
                  Open Workbench <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="/chainmail-playbook/" className="inline-flex items-center justify-center h-14 px-8 text-lg font-bold gap-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all">
                Read the Playbook
              </a>
            </div>

            {/* Research pill */}
            <motion.a
              href="https://zenodo.org/records/19936090"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full group transition-all duration-300"
              style={{
                border: "1px solid rgba(139,92,246,0.45)",
                background: "rgba(139,92,246,0.08)",
                boxShadow: "0 0 24px rgba(139,92,246,0.18), 0 0 0 1px rgba(139,92,246,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(139,92,246,0.4), 0 0 0 1px rgba(139,92,246,0.5)";
                (e.currentTarget as HTMLElement).style.background = "rgba(139,92,246,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(139,92,246,0.18), 0 0 0 1px rgba(139,92,246,0.1)";
                (e.currentTarget as HTMLElement).style.background = "rgba(139,92,246,0.08)";
              }}
            >
              <FlaskConical className="w-4 h-4 shrink-0" style={{ color: "#a78bfa" }} />
              <span className="text-sm font-semibold" style={{ color: "#c4b5fd" }}>
                The <span className="font-black tracking-wide" style={{ color: "#a78bfa" }}>algorithms</span> powering this are peer-reviewed
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full" style={{ background: "rgba(139,92,246,0.2)", color: "#a78bfa" }}>
                Zenodo · 2026
              </span>
              <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: "#a78bfa" }} />
            </motion.a>
          </motion.div>
        </section>

        {/* STATS */}
        <section className="py-12 border-y border-border/30 bg-card/20">
          <div className="container max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-4xl font-black text-primary mb-1">{s.display}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PHRASES BANNER */}
        <PhrasesBanner />

        {/* LIVE SCANNER */}
        <section className="py-24 container max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest mb-4 border border-primary/20">
              <Zap className="w-3 h-3" /> TRY IT NOW
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Scan any repo.<br /><span className="text-primary">Right now.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Drop in a GitHub URL or npm package name and watch Chainmail tear through it in seconds.
            </p>
            <ScannerDemo />
          </motion.div>
        </section>

        {/* PIPELINE */}
        <PipelineSection />

        {/* BEFORE / AFTER */}
        <section className="py-24 container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest mb-4 border border-primary/20">
              <TrendingUp className="w-3 h-3" /> THE TRANSFORMATION
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              From exposed<br /><span className="text-primary">to locked down.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
              This is a real project going through Chainmail. The before is embarrassingly common. The after is what every maintainer deserves.
            </p>
            <BeforeAfter />
          </div>
        </section>

        {/* BADGE GENERATOR */}
        <section className="py-12 bg-card/20 border-y border-border/30">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest mb-4 border border-primary/20">
                <GitBranch className="w-3 h-3" /> README BADGE
              </div>
              <h2 className="text-3xl font-black tracking-tight mb-2">Wear it with pride.</h2>
              <p className="text-muted-foreground max-w-md mx-auto">Show your community that your project takes security seriously.</p>
            </div>
            <BadgeGenerator />
          </div>
        </section>

        {/* FOUNDER */}
        <section className="py-24 container max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full animate-pulse"
                style={{ boxShadow: "0 0 0 6px hsl(var(--primary)/0.25), 0 0 40px hsl(var(--primary)/0.5), 0 0 80px hsl(var(--primary)/0.2)" }} />
              <img src={`${BASE}founder.jpeg`} alt="Sai Sravan Cherukuri"
                className="relative w-36 h-36 rounded-full border-4 border-primary/60 object-cover"
                style={{ boxShadow: "0 0 0 4px hsl(var(--primary)/0.2), 0 0 30px hsl(var(--primary)/0.45), 0 0 60px hsl(var(--primary)/0.15)" }} />
            </div>
          </div>

          <h2 className="text-4xl font-black mb-1 tracking-tight">
            One mind. <span className="text-primary">Eight breakthroughs.</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-10">
            Sai Sravan Cherukuri &nbsp;·&nbsp; Cybersecurity and Quantum Computing enthusiast
          </p>

          <div className="max-w-2xl mx-auto space-y-5 text-left mb-10">
            <p className="text-muted-foreground leading-relaxed italic text-lg">
              "At the intersection of security engineering and open-source philosophy lives a rare kind of thinker, one who sees not just the problem, but the elegant, inevitable solution three steps ahead."
            </p>
            <p className="text-muted-foreground leading-relaxed italic">
              "Each of Chainmail's eight tools solves a problem the industry accepted as unsolvable, or worse, never noticed at all. The creativity is quiet. The impact is not."
            </p>
            <GlowCard>
              <p className="text-foreground leading-relaxed">
                <span className="font-bold text-primary">My core belief:</span> Security knowledge should not be locked behind enterprise paywalls. When we share tools, share research, and grow together, we strengthen the entire ecosystem — not just our own corner of it. Chainmail exists because that is the only way open-source survives.
              </p>
              <p className="text-right text-sm font-semibold text-muted-foreground mt-4">— Sai Sravan Cherukuri</p>
            </GlowCard>
          </div>

          {/* Research card */}
          <motion.a
            href="https://zenodo.org/records/19936090"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block max-w-2xl mx-auto mb-10 rounded-2xl text-left group cursor-pointer transition-all duration-300 overflow-hidden"
            style={{
              border: "1px solid rgba(139,92,246,0.35)",
              background: "linear-gradient(135deg, rgba(139,92,246,0.07) 0%, rgba(0,0,0,0) 60%)",
              boxShadow: "0 0 0 1px rgba(139,92,246,0.12), 0 8px 40px rgba(139,92,246,0.1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px rgba(139,92,246,0.6), 0 0 50px rgba(139,92,246,0.25), 0 0 100px rgba(139,92,246,0.1)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.7)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px rgba(139,92,246,0.12), 0 8px 40px rgba(139,92,246,0.1)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.35)";
            }}
          >
            {/* Top accent bar */}
            <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #7c3aed, #a78bfa, #7c3aed)" }} />

            <div className="p-6">
              {/* Label row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(139,92,246,0.2)" }}>
                    <FlaskConical className="w-4 h-4" style={{ color: "#a78bfa" }} />
                  </div>
                  <span className="text-xs font-bold tracking-widest" style={{ color: "#a78bfa" }}>UNDER THE HOOD</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full font-semibold" style={{ background: "rgba(139,92,246,0.15)", color: "#c4b5fd" }}>
                    Peer-Reviewed
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full" style={{ background: "rgba(139,92,246,0.1)", color: "#a78bfa" }}>
                    Zenodo · 2026
                  </span>
                </div>
              </div>

              {/* Paper title */}
              <h3 className="text-lg font-black tracking-tight mb-3 leading-snug group-hover:text-white transition-colors" style={{ color: "#e9d5ff" }}>
                Chainmail: A Unified Open-Source Security Workbench<br />for Software Supply Chain Integrity
              </h3>

              {/* Algorithm abstract teaser */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(196,181,253,0.7)" }}>
                Every scan Chainmail runs is grounded in documented, reproducible <span className="font-bold" style={{ color: "#c4b5fd" }}>algorithms</span> — from Spearman-ranked risk scoring and CVSS aggregation to provenance attestation and SLSA compliance mapping. Nothing is a black box. Everything is explained.
              </p>

              {/* Metadata row */}
              <div className="flex flex-wrap items-center gap-4 text-xs mb-5" style={{ color: "rgba(167,139,250,0.7)" }}>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  Sai Sravan Cherukuri · Independent Researcher
                </span>
                <span className="font-mono" style={{ color: "rgba(139,92,246,0.8)" }}>
                  doi: 10.5281/zenodo.19934776
                </span>
              </div>

              {/* CTA row */}
              <div className="flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: "#a78bfa" }}>
                <span>Read the full algorithm breakdown</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </motion.a>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/chainmail-playbook/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-all"
              style={{ boxShadow: "0 0 12px hsl(var(--primary)/0.15)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              Read the Security Playbook
            </a>
          </div>

          <div className="border-t border-border/30 pt-8">
            <p className="text-sm text-muted-foreground mb-4">Found it useful? Tell someone.</p>
            <ShareScore />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-12 bg-card">
        <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={`${BASE}chainmail-logo.png`} alt="Chainmail Logo" className="w-10 h-10 rounded-lg"
              style={{ boxShadow: "0 0 12px hsl(var(--primary)/0.3)" }} />
            <span className="text-lg font-black tracking-tight text-primary">CHAINMAIL</span>
          </div>
          <p className="text-sm text-muted-foreground">Open Source Security Workbench · CC BY 4.0 · <a href="mailto:saisravan@gmail.com" className="hover:text-primary transition-colors">saisravan@gmail.com</a></p>
        </div>
      </footer>
    </div>
  );
}
