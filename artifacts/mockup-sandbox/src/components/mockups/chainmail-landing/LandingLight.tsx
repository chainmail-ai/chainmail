import React, { useState } from 'react';
import {
  Shield, Moon, ChevronRight, Zap, BookOpen,
  GitBranch, FileText, Package, Lock, Activity,
  CheckCircle2, Star, Users, Globe, Heart,
  ArrowRight, Layers, ShieldCheck, Code2, Sparkles
} from 'lucide-react';

const btnGlow = { boxShadow: '0 0 24px rgba(59,130,246,0.45), 0 2px 8px rgba(59,130,246,0.3)' };
const cardGlow = { boxShadow: '0 0 0 1px rgba(59,130,246,0.12), 0 8px 32px rgba(59,130,246,0.08)' };

const tools = [
  { icon: <Shield className="h-7 w-7" />, color: '#3b82f6', glow: 'rgba(59,130,246,0.3)', title: 'SBOM Health Dashboard', desc: 'Real-time visibility into every component. Know your software inside-out.' },
  { icon: <FileText className="h-7 w-7" />, color: '#8b5cf6', glow: 'rgba(139,92,246,0.3)', title: 'License Checker', desc: 'Detect copyleft conflicts before they hit production. Stay compliant, always.' },
  { icon: <Activity className="h-7 w-7" />, color: '#ef4444', glow: 'rgba(239,68,68,0.3)', title: 'Supply Chain Risk Scorer', desc: 'Quantify your exposure with an actionable, weighted risk score.' },
  { icon: <ShieldCheck className="h-7 w-7" />, color: '#10b981', glow: 'rgba(16,185,129,0.3)', title: 'VEX Statement Generator', desc: 'Produce machine-readable exploitability statements in minutes, not days.' },
  { icon: <Lock className="h-7 w-7" />, color: '#f59e0b', glow: 'rgba(245,158,11,0.3)', title: 'Provenance Wizard', desc: 'Step-by-step guidance to achieve signed, verifiable artifact provenance.' },
  { icon: <GitBranch className="h-7 w-7" />, color: '#06b6d4', glow: 'rgba(6,182,212,0.3)', title: 'SBOM Diff Tool', desc: 'Compare releases side-by-side and surface new risks before you ship.' },
  { icon: <CheckCircle2 className="h-7 w-7" />, color: '#6366f1', glow: 'rgba(99,102,241,0.3)', title: '2026 Readiness Checklist', desc: "Is your project ready for the government's upcoming SBOM mandates?" },
  { icon: <Layers className="h-7 w-7" />, color: '#ec4899', glow: 'rgba(236,72,153,0.3)', title: 'License Inheritance Viz', desc: 'Interactive tree showing how open-source licenses propagate upstream.' },
];

const stats = [
  { value: '142K+', label: 'SBOMs Analyzed' },
  { value: '8', label: 'Integrated Tools' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '2026', label: 'NIST Ready' },
];

export function LandingLight() {
  const [isDark, setIsDark] = useState(false);

  if (isDark) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-slate-400">Switched to Dark</p>
          <button onClick={() => setIsDark(false)} className="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">Back to Light</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans text-slate-900" style={{ background: 'linear-gradient(160deg, #f8faff 0%, #ffffff 40%, #f0f4ff 100%)' }}>

      {/* Nav */}
      <nav className="px-10 py-5 flex items-center justify-between sticky top-0 z-50 bg-white/80 backdrop-blur-xl"
        style={{ borderBottom: '1px solid rgba(59,130,246,0.1)', boxShadow: '0 2px 20px rgba(59,130,246,0.06)' }}>
        <div className="flex items-center gap-3">
          <img src="/__mockup/images/chainmail-logo.png" alt="Chainmail" className="h-10 w-10 object-contain" />
          <span className="font-black text-2xl tracking-tight text-slate-900">Chainmail</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
          {['Tools', 'Docs', 'Community', 'Blog'].map(l => (
            <a key={l} href="#" className="hover:text-blue-600 transition-colors">{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsDark(true)} className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors border border-slate-200">
            <Moon className="h-4 w-4" />
          </button>
          <button className="px-5 py-2.5 rounded-xl text-sm font-black text-white transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #2563eb, #4f46e5)', ...btnGlow }}>
            Get Started Free
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-10 pt-24 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.3) 0%, transparent 70%)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-8 text-sm font-black uppercase tracking-widest"
            style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', color: '#2563eb', boxShadow: '0 0 20px rgba(59,130,246,0.1)' }}>
            <Sparkles className="h-4 w-4" /> Open Source · Free Forever
          </div>
          <h1 className="text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6 text-slate-900">
            Your Software<br />
            <span style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Supply Chain
            </span><br />
            Secured.
          </h1>
          <p className="text-xl lg:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Chainmail is the open-source maintainer workbench that brings SBOM intelligence, license compliance, vulnerability context, and provenance verification into one powerful place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 rounded-2xl font-black text-white text-lg transition-all hover:scale-105 flex items-center gap-3 justify-center"
              style={{ background: 'linear-gradient(135deg, #2563eb, #4f46e5)', boxShadow: '0 0 40px rgba(37,99,235,0.4), 0 4px 16px rgba(37,99,235,0.3)' }}>
              <Zap className="h-5 w-5" /> Analyze Your Repo
            </button>
            <button className="px-10 py-5 rounded-2xl font-black text-slate-700 text-lg border-2 border-slate-200 hover:border-blue-300 hover:text-blue-700 transition-all flex items-center gap-3 justify-center bg-white"
              style={cardGlow}>
              <Code2 className="h-5 w-5" /> View on GitHub
            </button>
          </div>
          <div className="mt-12 grid grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map(s => (
              <div key={s.label} className="p-5 rounded-2xl bg-white border border-slate-200 text-center" style={cardGlow}>
                <div className="text-3xl font-black text-blue-600 mb-1">{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{s.label}</div>
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
              style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', color: '#4f46e5' }}>
              8 Integrated Tools
            </div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Everything you need.<br /><span className="text-blue-600">Nothing you don't.</span></h2>
            <p className="text-xl text-slate-500 mt-4 font-medium max-w-xl mx-auto">One workbench for the entire supply chain security lifecycle.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map((tool) => (
              <div key={tool.title}
                className="group p-7 rounded-3xl bg-white border border-slate-200 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-blue-200"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 1px ${tool.glow}, 0 12px 40px ${tool.glow.replace('0.3', '0.12')}`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'; }}>
                <div className="p-3.5 rounded-2xl w-fit mb-5 transition-all"
                  style={{ background: `${tool.color}15`, border: `1px solid ${tool.color}30`, color: tool.color, boxShadow: `0 0 12px ${tool.glow}` }}>
                  {tool.icon}
                </div>
                <h3 className="font-black text-base text-slate-900 mb-2 leading-tight">{tool.title}</h3>
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
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.4) 0%, transparent 70%)' }} />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.4) 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4"
              style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#dc2626' }}>
              <Heart className="h-3.5 w-3.5 fill-current" /> Built with Passion
            </div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">By the Community,<br /><span className="text-blue-600">For the Community.</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Card */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[3rem] opacity-30 blur-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.4), rgba(139,92,246,0.4))' }} />
              <div className="relative p-8 rounded-3xl bg-white border border-slate-200" style={{ boxShadow: '0 0 0 1px rgba(99,102,241,0.15), 0 20px 60px rgba(99,102,241,0.1)' }}>
                <div className="flex items-start gap-6 mb-8">
                  <div className="relative shrink-0">
                    <div className="absolute -inset-1 rounded-full opacity-60"
                      style={{ background: 'linear-gradient(135deg, #3b82f6, #7c3aed)', filter: 'blur(4px)' }} />
                    <img src="/__mockup/images/founder.jpeg" alt="Founder" className="relative h-24 w-24 rounded-full object-cover object-top border-4 border-white"
                      style={{ boxShadow: '0 0 0 3px rgba(99,102,241,0.3), 0 8px 24px rgba(99,102,241,0.2)' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Founder & Maintainer</h3>
                    <p className="text-blue-600 font-bold text-lg mt-1">Chainmail Open Source Project</p>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {['SBOM Expert', 'Supply Chain Security', 'Open Source Advocate'].map(tag => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full font-bold text-indigo-700 border border-indigo-200 bg-indigo-50">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-xl font-semibold text-slate-700 leading-relaxed mb-6 italic border-l-4 border-blue-500 pl-5"
                  style={{ borderImageSource: 'linear-gradient(to bottom, #3b82f6, #7c3aed)', borderImageSlice: 1 }}>
                  "Supply chain security is not just a compliance checkbox — it's about trust. I built Chainmail because every maintainer deserves enterprise-grade tools, free and in the open."
                </blockquote>
                <div className="grid grid-cols-3 gap-4">
                  {[{ n: '15+', l: 'Years in OSS' }, { n: '200+', l: 'Talks Given' }, { n: '50K+', l: 'Developers Reached' }].map(s => (
                    <div key={s.l} className="text-center p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                      <div className="text-2xl font-black text-blue-600">{s.n}</div>
                      <div className="text-xs font-bold text-slate-500 mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Community Values */}
            <div className="space-y-5">
              <h3 className="text-3xl font-black text-slate-900 mb-8">Passionate about<br />
                <span style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  sharing knowledge.
                </span>
              </h3>
              {[
                { icon: <BookOpen className="h-6 w-6" />, color: '#3b82f6', title: 'Free Learning Resources', desc: 'Comprehensive guides, walkthroughs, and tutorials — all free. Because great security starts with great education.' },
                { icon: <Globe className="h-6 w-6" />, color: '#10b981', title: 'Global Community', desc: 'Join thousands of maintainers, security engineers, and open source enthusiasts helping each other build safer software.' },
                { icon: <Users className="h-6 w-6" />, color: '#8b5cf6', title: 'Open Collaboration', desc: 'Every feature is driven by the community. File issues, submit PRs, shape the roadmap — your voice matters here.' },
                { icon: <Star className="h-6 w-6" />, color: '#f59e0b', title: 'No Paywalls. Ever.', desc: 'Core tools will always be 100% free and open source. Chainmail exists to raise the security floor for everyone.' },
              ].map(item => (
                <div key={item.title} className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-200 group hover:-translate-y-0.5 transition-all"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 1px ${item.color}30, 0 8px 24px ${item.color}12`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'; }}>
                  <div className="p-3 rounded-2xl h-fit shrink-0" style={{ background: `${item.color}15`, color: item.color, boxShadow: `0 0 12px ${item.color}30` }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-slate-900 mb-1">{item.title}</h4>
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
          style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #4f46e5 50%, #7c3aed 100%)', boxShadow: '0 0 80px rgba(37,99,235,0.3), 0 20px 60px rgba(99,102,241,0.2)' }}>
          <div className="absolute inset-0 pointer-events-none opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative">
            <div className="text-5xl mb-4">⛓️</div>
            <h2 className="text-5xl font-black text-white mb-4 tracking-tight">Ready to secure<br />your supply chain?</h2>
            <p className="text-blue-200 text-xl mb-10 font-medium">Start in seconds. No signup required. Just paste your repo URL.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 rounded-2xl font-black text-blue-900 text-lg flex items-center gap-3 justify-center bg-white hover:scale-105 transition-all"
                style={{ boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}>
                <Zap className="h-5 w-5" /> Analyze a Repo
              </button>
              <button className="px-10 py-5 rounded-2xl font-black text-white text-lg border-2 border-white/30 hover:border-white/60 transition-all flex items-center gap-3 justify-center">
                <BookOpen className="h-5 w-5" /> Read the Docs <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-10 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/__mockup/images/chainmail-logo.png" alt="Chainmail" className="h-7 w-7 object-contain" />
            <span className="font-black text-slate-700">Chainmail</span>
            <span className="text-slate-400 text-sm">Open Source Supply Chain Security</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
            <Heart className="h-4 w-4 text-red-400 fill-current" /> Built with passion for the OSS community
          </div>
        </div>
      </footer>

    </div>
  );
}
