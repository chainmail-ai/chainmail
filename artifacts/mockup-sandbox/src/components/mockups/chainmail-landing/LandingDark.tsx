import React, { useState } from 'react';
import {
  Shield, Sun, ChevronRight, Zap, BookOpen,
  GitBranch, FileText, Package, Lock, Activity,
  CheckCircle2, Star, Users, Globe, Heart,
  ArrowRight, Layers, ShieldCheck, Code2, Sparkles
} from 'lucide-react';

const tools = [
  { icon: <Shield className="h-7 w-7" />, color: '#3b82f6', glow: 'rgba(59,130,246,0.5)', title: 'SBOM Health Dashboard', desc: 'Real-time visibility into every component. Know your software inside-out.' },
  { icon: <FileText className="h-7 w-7" />, color: '#a855f7', glow: 'rgba(168,85,247,0.5)', title: 'License Checker', desc: 'Detect copyleft conflicts before they hit production. Stay compliant, always.' },
  { icon: <Activity className="h-7 w-7" />, color: '#ef4444', glow: 'rgba(239,68,68,0.5)', title: 'Supply Chain Risk Scorer', desc: 'Quantify your exposure with an actionable, weighted risk score.' },
  { icon: <ShieldCheck className="h-7 w-7" />, color: '#10b981', glow: 'rgba(16,185,129,0.5)', title: 'VEX Statement Generator', desc: 'Produce machine-readable exploitability statements in minutes, not days.' },
  { icon: <Lock className="h-7 w-7" />, color: '#f59e0b', glow: 'rgba(245,158,11,0.5)', title: 'Provenance Wizard', desc: 'Step-by-step guidance to achieve signed, verifiable artifact provenance.' },
  { icon: <GitBranch className="h-7 w-7" />, color: '#22d3ee', glow: 'rgba(6,182,212,0.5)', title: 'SBOM Diff Tool', desc: 'Compare releases side-by-side and surface new risks before you ship.' },
  { icon: <CheckCircle2 className="h-7 w-7" />, color: '#6366f1', glow: 'rgba(99,102,241,0.5)', title: '2026 Readiness Checklist', desc: "Is your project ready for the government's upcoming SBOM mandates?" },
  { icon: <Layers className="h-7 w-7" />, color: '#ec4899', glow: 'rgba(236,72,153,0.5)', title: 'License Inheritance Viz', desc: 'Interactive tree showing how open-source licenses propagate upstream.' },
];

const stats = [
  { value: '142K+', label: 'SBOMs Analyzed', color: '#22d3ee' },
  { value: '8', label: 'Integrated Tools', color: '#a855f7' },
  { value: '99.9%', label: 'Uptime SLA', color: '#10b981' },
  { value: '2026', label: 'NIST Ready', color: '#f59e0b' },
];

export function LandingDark() {
  const [isDark, setIsDark] = useState(true);

  if (!isDark) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-slate-500">Switched to Light</p>
          <button onClick={() => setIsDark(true)} className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">Back to Dark</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans text-slate-100" style={{ background: 'linear-gradient(160deg, #030712 0%, #060d1a 40%, #080f1e 100%)' }}>

      {/* Nav */}
      <nav className="px-10 py-5 flex items-center justify-between sticky top-0 z-50 backdrop-blur-xl"
        style={{ background: 'rgba(3,7,18,0.85)', borderBottom: '1px solid rgba(6,182,212,0.1)', boxShadow: '0 4px 30px rgba(0,0,0,0.5)' }}>
        <div className="flex items-center gap-3">
          <img src="/__mockup/images/chainmail-logo.png" alt="Chainmail" className="h-10 w-10 object-contain brightness-200 contrast-150" />
          <span className="font-black text-2xl tracking-tight text-white">Chainmail</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
          {['Tools', 'Docs', 'Community', 'Blog'].map(l => (
            <a key={l} href="#" className="hover:text-cyan-400 transition-colors">{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsDark(false)} className="p-2.5 rounded-xl transition-colors text-amber-400"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Sun className="h-4 w-4" />
          </button>
          <button className="px-5 py-2.5 rounded-xl text-sm font-black text-slate-950 transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #22d3ee, #3b82f6)', boxShadow: '0 0 24px rgba(6,182,212,0.4), 0 2px 8px rgba(6,182,212,0.3)' }}>
            Get Started Free
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-10 pt-24 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.4) 0%, rgba(99,102,241,0.2) 50%, transparent 70%)' }} />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10"
            style={{ background: 'radial-gradient(ellipse, rgba(168,85,247,0.5) 0%, transparent 70%)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-8 text-sm font-black uppercase tracking-widest"
            style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)', color: '#22d3ee', boxShadow: '0 0 24px rgba(6,182,212,0.15)' }}>
            <Sparkles className="h-4 w-4" style={{ filter: 'drop-shadow(0 0 4px rgba(6,182,212,0.8))' }} />
            Open Source · Free Forever
          </div>
          <h1 className="text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6 text-white">
            Your Software<br />
            <span style={{ background: 'linear-gradient(135deg, #22d3ee, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 20px rgba(6,182,212,0.3))' }}>
              Supply Chain
            </span><br />
            Secured.
          </h1>
          <p className="text-xl lg:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Chainmail is the open-source maintainer workbench that brings SBOM intelligence, license compliance, vulnerability context, and provenance verification into one powerful place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 rounded-2xl font-black text-slate-950 text-lg transition-all hover:scale-105 flex items-center gap-3 justify-center"
              style={{ background: 'linear-gradient(135deg, #22d3ee, #3b82f6)', boxShadow: '0 0 50px rgba(6,182,212,0.5), 0 4px 16px rgba(6,182,212,0.3)' }}>
              <Zap className="h-5 w-5" /> Analyze Your Repo
            </button>
            <button className="px-10 py-5 rounded-2xl font-black text-slate-300 text-lg transition-all flex items-center gap-3 justify-center hover:text-white"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 0 20px rgba(6,182,212,0.05)' }}>
              <Code2 className="h-5 w-5" /> View on GitHub
            </button>
          </div>
          <div className="mt-12 grid grid-cols-4 gap-5 max-w-3xl mx-auto">
            {stats.map(s => (
              <div key={s.label} className="p-5 rounded-2xl text-center"
                style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${s.color}25`, boxShadow: `0 0 20px ${s.color}10` }}>
                <div className="text-3xl font-black mb-1" style={{ color: s.color, textShadow: `0 0 16px ${s.color}60` }}>{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="px-10 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4"
              style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', color: '#a5b4fc' }}>
              8 Integrated Tools
            </div>
            <h2 className="text-5xl font-black text-white tracking-tight">Everything you need.<br />
              <span style={{ color: '#22d3ee', textShadow: '0 0 30px rgba(6,182,212,0.4)' }}>Nothing you don't.</span>
            </h2>
            <p className="text-xl text-slate-500 mt-4 font-medium max-w-xl mx-auto">One workbench for the entire supply chain security lifecycle.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map((tool) => (
              <div key={tool.title}
                className="group p-7 rounded-3xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = `${tool.color}08`;
                  el.style.border = `1px solid ${tool.color}30`;
                  el.style.boxShadow = `0 0 0 1px ${tool.color}20, 0 12px 40px ${tool.color}10`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = 'rgba(255,255,255,0.03)';
                  el.style.border = '1px solid rgba(255,255,255,0.07)';
                  el.style.boxShadow = 'none';
                }}>
                <div className="p-3.5 rounded-2xl w-fit mb-5" style={{ background: `${tool.color}15`, border: `1px solid ${tool.color}30`, color: tool.color, boxShadow: `0 0 14px ${tool.glow}` }}>
                  {tool.icon}
                </div>
                <h3 className="font-black text-base text-white mb-2 leading-tight">{tool.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{tool.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-black opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: tool.color }}>
                  Explore <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovators / Founder */}
      <section className="px-10 py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.6) 0%, transparent 70%)' }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-08"
            style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.4) 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4"
              style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#f87171', boxShadow: '0 0 12px rgba(239,68,68,0.1)' }}>
              <Heart className="h-3.5 w-3.5 fill-current" style={{ filter: 'drop-shadow(0 0 4px rgba(239,68,68,0.6))' }} /> Built with Passion
            </div>
            <h2 className="text-5xl font-black text-white tracking-tight">By the Community,<br />
              <span style={{ color: '#22d3ee', textShadow: '0 0 30px rgba(6,182,212,0.4)' }}>For the Community.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Card */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] opacity-25 blur-3xl"
                style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.5), rgba(139,92,246,0.5))' }} />
              <div className="relative p-8 rounded-3xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(6,182,212,0.2)', boxShadow: '0 0 0 1px rgba(6,182,212,0.1), 0 20px 60px rgba(6,182,212,0.08)' }}>
                <div className="flex items-start gap-6 mb-8">
                  <div className="relative shrink-0">
                    <div className="absolute -inset-1 rounded-full opacity-70"
                      style={{ background: 'linear-gradient(135deg, #22d3ee, #7c3aed)', filter: 'blur(6px)' }} />
                    <img src="/__mockup/images/founder.jpeg" alt="Founder" className="relative h-24 w-24 rounded-full object-cover object-top border-2"
                      style={{ borderColor: 'rgba(6,182,212,0.5)', boxShadow: '0 0 0 3px rgba(6,182,212,0.15), 0 0 24px rgba(6,182,212,0.3)' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">Founder & Maintainer</h3>
                    <p className="font-bold text-lg mt-1" style={{ color: '#22d3ee', textShadow: '0 0 10px rgba(6,182,212,0.4)' }}>Chainmail Open Source Project</p>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {['SBOM Expert', 'Supply Chain Security', 'Open Source Advocate'].map(tag => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full font-bold text-indigo-300"
                          style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-xl font-semibold text-slate-300 leading-relaxed mb-6 italic pl-5"
                  style={{ borderLeft: '3px solid', borderImageSource: 'linear-gradient(to bottom, #22d3ee, #7c3aed)', borderImageSlice: 1 }}>
                  "Supply chain security is not just a compliance checkbox — it's about trust. I built Chainmail because every maintainer deserves enterprise-grade tools, free and in the open."
                </blockquote>
                <div className="grid grid-cols-3 gap-4">
                  {[{ n: '15+', l: 'Years in OSS', c: '#22d3ee' }, { n: '200+', l: 'Talks Given', c: '#a855f7' }, { n: '50K+', l: 'Developers Reached', c: '#10b981' }].map(s => (
                    <div key={s.l} className="text-center p-4 rounded-2xl" style={{ background: `${s.c}08`, border: `1px solid ${s.c}20` }}>
                      <div className="text-2xl font-black mb-1" style={{ color: s.c, textShadow: `0 0 12px ${s.c}60` }}>{s.n}</div>
                      <div className="text-xs font-bold text-slate-600 mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Community Values */}
            <div className="space-y-5">
              <h3 className="text-3xl font-black text-white mb-8">Passionate about<br />
                <span style={{ background: 'linear-gradient(135deg, #22d3ee, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 12px rgba(6,182,212,0.3))' }}>
                  sharing knowledge.
                </span>
              </h3>
              {[
                { icon: <BookOpen className="h-6 w-6" />, color: '#3b82f6', title: 'Free Learning Resources', desc: 'Comprehensive guides, walkthroughs, and tutorials — all free. Because great security starts with great education.' },
                { icon: <Globe className="h-6 w-6" />, color: '#10b981', title: 'Global Community', desc: 'Join thousands of maintainers, security engineers, and open source enthusiasts helping each other build safer software.' },
                { icon: <Users className="h-6 w-6" />, color: '#a855f7', title: 'Open Collaboration', desc: 'Every feature is driven by the community. File issues, submit PRs, shape the roadmap — your voice matters here.' },
                { icon: <Star className="h-6 w-6" />, color: '#f59e0b', title: 'No Paywalls. Ever.', desc: 'Core tools will always be 100% free and open source. Chainmail exists to raise the security floor for everyone.' },
              ].map(item => (
                <div key={item.title} className="flex gap-5 p-6 rounded-2xl transition-all duration-300 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = `${item.color}08`;
                    el.style.border = `1px solid ${item.color}25`;
                    el.style.boxShadow = `0 0 20px ${item.color}08`;
                    el.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = 'rgba(255,255,255,0.03)';
                    el.style.border = '1px solid rgba(255,255,255,0.07)';
                    el.style.boxShadow = 'none';
                    el.style.transform = 'translateY(0)';
                  }}>
                  <div className="p-3 rounded-2xl h-fit shrink-0" style={{ background: `${item.color}15`, color: item.color, boxShadow: `0 0 16px ${item.color}40`, border: `1px solid ${item.color}25` }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-white mb-1">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-10 py-16">
        <div className="max-w-5xl mx-auto p-14 rounded-[2.5rem] relative overflow-hidden text-center"
          style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(99,102,241,0.12) 50%, rgba(168,85,247,0.12) 100%)', border: '1px solid rgba(6,182,212,0.2)', boxShadow: '0 0 80px rgba(6,182,212,0.1), 0 0 0 1px rgba(6,182,212,0.1)' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(6,182,212,0.05) 1px, transparent 1px), radial-gradient(circle at 70% 50%, rgba(168,85,247,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full blur-3xl opacity-20"
            style={{ background: 'linear-gradient(90deg, #22d3ee, #a855f7)' }} />
          <div className="relative">
            <div className="text-5xl mb-4" style={{ filter: 'drop-shadow(0 0 20px rgba(6,182,212,0.5))' }}>⛓️</div>
            <h2 className="text-5xl font-black text-white mb-4 tracking-tight">Ready to secure<br />your supply chain?</h2>
            <p className="text-xl mb-10 font-medium text-slate-400">Start in seconds. No signup required. Just paste your repo URL.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 rounded-2xl font-black text-slate-950 text-lg flex items-center gap-3 justify-center hover:scale-105 transition-all"
                style={{ background: 'linear-gradient(135deg, #22d3ee, #6366f1)', boxShadow: '0 0 40px rgba(6,182,212,0.4)' }}>
                <Zap className="h-5 w-5" /> Analyze a Repo
              </button>
              <button className="px-10 py-5 rounded-2xl font-black text-slate-300 text-lg transition-all flex items-center gap-3 justify-center hover:text-white"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <BookOpen className="h-5 w-5" /> Read the Docs <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-10" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/__mockup/images/chainmail-logo.png" alt="Chainmail" className="h-7 w-7 object-contain brightness-200" />
            <span className="font-black text-white">Chainmail</span>
            <span className="text-slate-600 text-sm">Open Source Supply Chain Security</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
            <Heart className="h-4 w-4 text-red-500 fill-current" style={{ filter: 'drop-shadow(0 0 4px rgba(239,68,68,0.5))' }} />
            Built with passion for the OSS community
          </div>
        </div>
      </footer>

    </div>
  );
}
