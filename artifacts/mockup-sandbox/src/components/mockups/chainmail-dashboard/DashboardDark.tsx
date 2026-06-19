import React, { useState } from 'react';
import {
  Shield, Search, UploadCloud, Sun,
  CheckCircle2, AlertTriangle, ChevronRight,
  Lock, GitCommit, GitBranch,
  ShieldCheck, ShieldAlert, Clock, Activity,
  FileText, Package, Zap
} from 'lucide-react';

export function DashboardDark() {
  const [isDark, setIsDark] = useState(true);

  if (!isDark) {
    return (
      <div className="min-h-screen w-full bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-slate-500">Switched to Light Mode</p>
          <button onClick={() => setIsDark(true)} className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">Back to Dark</button>
        </div>
      </div>
    );
  }

  const cyanGlow = { boxShadow: '0 0 0 1px rgba(6,182,212,0.2), 0 4px 32px rgba(6,182,212,0.12), inset 0 1px 0 rgba(6,182,212,0.08)' };
  const redGlow = { boxShadow: '0 0 0 1px rgba(239,68,68,0.2), 0 4px 32px rgba(239,68,68,0.1), inset 0 1px 0 rgba(239,68,68,0.05)' };
  const amberGlow = { boxShadow: '0 0 0 1px rgba(245,158,11,0.2), 0 4px 32px rgba(245,158,11,0.08), inset 0 1px 0 rgba(245,158,11,0.05)' };
  const blueGlow = { boxShadow: '0 0 0 1px rgba(99,102,241,0.25), 0 8px 40px rgba(99,102,241,0.15), inset 0 1px 0 rgba(99,102,241,0.08)' };
  const btnGlow = { boxShadow: '0 0 20px rgba(6,182,212,0.4), 0 2px 8px rgba(6,182,212,0.3)' };

  return (
    <div className="min-h-screen w-full font-sans text-slate-100" style={{ background: 'linear-gradient(145deg, #05090f 0%, #0a1020 50%, #060d1a 100%)' }}>

      {/* Header */}
      <header className="px-8 py-4 flex items-center justify-between sticky top-0 z-10 backdrop-blur-xl"
        style={{ background: 'rgba(5,9,15,0.85)', borderBottom: '1px solid rgba(6,182,212,0.1)', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <img src="/__mockup/images/chainmail-logo.png" alt="Chainmail" className="h-9 w-9 object-contain brightness-200 contrast-150" />
            <span className="font-black text-xl tracking-tight text-white">Chainmail</span>
          </div>
          <div className="h-6 w-px mx-1" style={{ background: 'rgba(6,182,212,0.2)' }} />
          <nav className="flex items-center gap-7 text-sm font-medium">
            <a href="#" className="font-black relative" style={{ color: '#22d3ee', textShadow: '0 0 12px rgba(6,182,212,0.6)' }}>
              Workbench
              <span className="absolute -bottom-1 left-0 w-full h-0.5 rounded" style={{ background: '#22d3ee', boxShadow: '0 0 6px rgba(6,182,212,0.8)' }} />
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Projects</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Policies</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Settings</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsDark(false)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-400 transition-colors"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Sun className="h-4 w-4 text-amber-400" /> Light Mode
          </button>
          <div className="h-9 w-9 rounded-full flex items-center justify-center text-slate-950 font-black text-sm"
            style={{ background: 'linear-gradient(135deg, #22d3ee, #3b82f6)', boxShadow: '0 0 0 2px rgba(6,182,212,0.3), 0 0 16px rgba(6,182,212,0.3)' }}>JD</div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-10 space-y-8">

        {/* Hero Input */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-2"
            style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)', color: '#22d3ee', boxShadow: '0 0 12px rgba(6,182,212,0.1)' }}>
            <Zap className="h-3.5 w-3.5" /> Supply Chain Intelligence
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white leading-tight">
            Know what's in<br />
            <span style={{ color: '#22d3ee', textShadow: '0 0 24px rgba(6,182,212,0.4)' }}>your software.</span>
          </h1>
          <p className="text-slate-500 text-lg">Enter a repo URL or upload a manifest for instant deep analysis.</p>
          <div className="flex gap-2 mt-5">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
              <input type="text" defaultValue="https://github.com/expressjs/express"
                className="w-full pl-12 pr-4 py-4 rounded-2xl text-slate-100 text-base font-medium outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(6,182,212,0.2)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
                onFocus={e => e.target.style.borderColor = 'rgba(6,182,212,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(6,182,212,0.2)'} />
            </div>
            <button className="px-7 py-4 rounded-2xl font-black text-slate-950 text-base transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #22d3ee, #3b82f6)', ...btnGlow }}>
              Analyze
            </button>
            <button className="px-4 py-4 rounded-2xl text-slate-400 hover:text-cyan-400 transition-colors"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <UploadCloud className="h-5 w-5" />
            </button>
          </div>
          <div className="flex justify-center gap-5 text-sm">
            <span className="text-slate-600">Recent:</span>
            {['apache/kafka', 'kubernetes/kubernetes', 'nodejs/node'].map(r => (
              <a key={r} href="#" className="font-medium hover:underline" style={{ color: '#22d3ee' }}>{r}</a>
            ))}
          </div>
        </div>

        {/* Repo Banner */}
        <div className="p-6 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-5"
          style={{ background: 'rgba(255,255,255,0.03)', ...cyanGlow }}>
          <div className="flex items-center gap-5">
            <div className="p-3.5 rounded-2xl" style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', boxShadow: '0 0 16px rgba(6,182,212,0.15)' }}>
              <GitBranch className="h-6 w-6" style={{ color: '#22d3ee' }} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-black text-white">expressjs / express</h2>
                <span className="text-sm px-3 py-1 rounded-full font-bold text-slate-400" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>v4.19.2</span>
                <span className="text-sm px-3 py-1 rounded-full font-bold flex items-center gap-1.5 text-emerald-400" style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', textShadow: '0 0 8px rgba(16,185,129,0.4)' }}>
                  <Activity className="h-3.5 w-3.5" /> Active
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-1.5"><GitCommit className="h-4 w-4" /> 7a1b9c2</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> Scanned 2 min ago</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {['Export SBOM', 'View Policies'].map(label => (
              <button key={label} className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-300 hover:text-cyan-400 transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>{label}</button>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">

            {/* Vulns */}
            <div className="rounded-3xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.025)', ...redGlow }}>
              <div className="px-7 py-5 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(239,68,68,0.15)', background: 'linear-gradient(135deg, rgba(239,68,68,0.06), transparent)' }}>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl" style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', boxShadow: '0 0 14px rgba(239,68,68,0.2)' }}>
                    <ShieldAlert className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-white">Vulnerabilities & VEX</h3>
                    <p className="text-xs text-slate-500 font-medium">3 require immediate action</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-full text-sm font-black text-red-300" style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', textShadow: '0 0 8px rgba(239,68,68,0.5)' }}>3 Critical</span>
                  <span className="px-3 py-1.5 rounded-full text-sm font-bold text-amber-300" style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)' }}>9 High</span>
                </div>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-slate-500 text-xs uppercase tracking-widest font-black" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)' }}>
                    <th className="px-7 py-3.5 text-left">CVE ID</th>
                    <th className="px-7 py-3.5 text-left">Severity</th>
                    <th className="px-7 py-3.5 text-left">Package</th>
                    <th className="px-7 py-3.5 text-left">VEX Status</th>
                    <th className="px-7 py-3.5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cve: 'CVE-2024-21345', sev: 'CRITICAL', sevColor: '#f87171', sevBg: 'rgba(239,68,68,0.15)', sevBorder: 'rgba(239,68,68,0.3)', sevGlow: '0 0 8px rgba(239,68,68,0.4)', pkg: 'path-to-regexp@0.1.7', status: 'Affected', statColor: '#fbbf24', statBg: 'rgba(245,158,11,0.1)', statBorder: 'rgba(245,158,11,0.25)' },
                    { cve: 'CVE-2023-26159', sev: 'HIGH', sevColor: '#fb923c', sevBg: 'rgba(249,115,22,0.12)', sevBorder: 'rgba(249,115,22,0.25)', sevGlow: '0 0 8px rgba(249,115,22,0.3)', pkg: 'follow-redirects@1.15.5', status: 'Investigating', statColor: '#94a3b8', statBg: 'rgba(148,163,184,0.08)', statBorder: 'rgba(148,163,184,0.15)' },
                    { cve: 'CVE-2022-25883', sev: 'HIGH', sevColor: '#475569', sevBg: 'rgba(71,85,105,0.2)', sevBorder: 'rgba(71,85,105,0.3)', sevGlow: 'none', pkg: 'semver@5.7.1', status: 'Not Affected', statColor: '#34d399', statBg: 'rgba(52,211,153,0.08)', statBorder: 'rgba(52,211,153,0.2)' },
                  ].map(row => (
                    <tr key={row.cve} className="transition-colors" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(6,182,212,0.04)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                      <td className="px-7 py-4 font-mono font-bold text-base text-slate-200">{row.cve}</td>
                      <td className="px-7 py-4">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-black" style={{ color: row.sevColor, background: row.sevBg, border: `1px solid ${row.sevBorder}`, boxShadow: row.sevGlow }}>{row.sev}</span>
                      </td>
                      <td className="px-7 py-4 font-mono text-sm text-slate-500">{row.pkg}</td>
                      <td className="px-7 py-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold" style={{ color: row.statColor, background: row.statBg, border: `1px solid ${row.statBorder}` }}>
                          {row.status === 'Affected' && <AlertTriangle className="h-3.5 w-3.5" />}
                          {row.status === 'Not Affected' && <CheckCircle2 className="h-3.5 w-3.5" />}
                          {row.status === 'Investigating' && <Clock className="h-3.5 w-3.5" />}
                          {row.status}
                        </span>
                      </td>
                      <td className="px-7 py-4 text-right">
                        <button className="text-sm font-black flex items-center gap-1 ml-auto" style={{ color: '#22d3ee' }}>Review <ChevronRight className="h-4 w-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* License */}
            <div className="rounded-3xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.025)', ...amberGlow }}>
              <div className="px-7 py-5 flex items-center gap-3"
                style={{ borderBottom: '1px solid rgba(245,158,11,0.15)', background: 'linear-gradient(135deg, rgba(245,158,11,0.06), transparent)' }}>
                <div className="p-2 rounded-xl" style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', boxShadow: '0 0 12px rgba(6,182,212,0.15)' }}>
                  <FileText className="h-5 w-5" style={{ color: '#22d3ee' }} />
                </div>
                <div>
                  <h3 className="font-black text-lg text-white">License Compliance</h3>
                  <p className="text-xs text-slate-500 font-medium">1 copyleft conflict detected</p>
                </div>
              </div>
              <div className="p-7 grid grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-600 mb-5">License Distribution</h4>
                  <div className="space-y-4">
                    {[
                      { label: 'MIT · ISC · Apache-2.0', pct: '92%', w: '92%', color: '#10b981', glow: '0 0 8px rgba(16,185,129,0.6)' },
                      { label: 'BSD-2 · BSD-3', pct: '7%', w: '7%', color: '#3b82f6', glow: '0 0 8px rgba(59,130,246,0.6)' },
                      { label: 'GPL-2.0 · AGPL-3.0', pct: '1%', w: '1%', color: '#f59e0b', glow: '0 0 8px rgba(245,158,11,0.7)' },
                    ].map(item => (
                      <div key={item.label}>
                        <div className="flex justify-between items-center text-sm mb-2">
                          <span className="flex items-center gap-2.5 font-semibold text-slate-400">
                            <div className="w-3 h-3 rounded-sm" style={{ background: item.color, boxShadow: item.glow }} />
                            {item.label}
                          </span>
                          <span className="font-black text-white">{item.pct}</span>
                        </div>
                        <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                          <div className="h-full rounded-full" style={{ width: item.w, background: item.color, boxShadow: item.glow }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-600 mb-5">Dependency Violations</h4>
                  <div className="font-mono text-sm p-5 rounded-2xl leading-relaxed" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(245,158,11,0.25)', boxShadow: '0 0 20px rgba(245,158,11,0.08)' }}>
                    <div className="text-slate-400">express@4.19.2 <span className="font-bold ml-2" style={{ color: '#10b981' }}>MIT</span></div>
                    <div className="pl-5 mt-1.5 text-slate-500" style={{ borderLeft: '2px solid rgba(255,255,255,0.08)' }}>├── accepts@1.3.8 <span className="font-bold ml-2" style={{ color: '#10b981' }}>MIT</span></div>
                    <div className="pl-5 text-slate-500" style={{ borderLeft: '2px solid rgba(255,255,255,0.08)' }}>├── cookie-sig@1.0.6 <span className="font-bold ml-2" style={{ color: '#10b981' }}>MIT</span></div>
                    <div className="pl-5" style={{ borderLeft: '2px solid rgba(245,158,11,0.4)' }}>└── <span className="font-black underline decoration-wavy" style={{ color: '#fbbf24', textDecorationColor: '#f59e0b', textShadow: '0 0 8px rgba(245,158,11,0.4)' }}>restrictive-pkg@2.0.1</span> <span className="font-black ml-2 text-red-400">GPL-3.0</span></div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm font-bold text-amber-400" style={{ textShadow: '0 0 8px rgba(245,158,11,0.3)' }}>
                    <AlertTriangle className="h-4 w-4" /> 1 copyleft infection path
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">

            {/* Score */}
            <div className="rounded-3xl p-7 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.025)', ...blueGlow }}>
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, #22d3ee, #3b82f6, #a855f7)', boxShadow: '0 0 12px rgba(6,182,212,0.5)' }} />
              <h3 className="font-black text-xl text-white mb-6">Supply Chain Score</h3>
              <div className="flex items-center justify-center mb-7">
                <div className="relative">
                  <svg className="w-36 h-36 -rotate-90">
                    <circle cx="72" cy="72" r="60" strokeWidth="12" fill="none" stroke="rgba(255,255,255,0.07)" />
                    <circle cx="72" cy="72" r="60" strokeWidth="12" fill="none"
                      stroke="url(#scoreGradDark)" strokeDasharray="376.9" strokeDashoffset={376.9 * (1 - 74 / 100)} strokeLinecap="round"
                      style={{ filter: 'drop-shadow(0 0 8px rgba(6,182,212,0.7))' }} />
                    <defs>
                      <linearGradient id="scoreGradDark" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-black text-white" style={{ letterSpacing: '-2px', textShadow: '0 0 20px rgba(6,182,212,0.3)' }}>74</span>
                    <span className="text-sm text-slate-500 font-bold">/ 100</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />, label: 'SLSA Level', value: 'Level 2', valStyle: { color: '#fff', fontWeight: 900 } },
                  { icon: <Lock className="h-5 w-5 text-emerald-400" />, label: 'Provenance', value: 'Verified', valStyle: { color: '#34d399', fontWeight: 900, textShadow: '0 0 8px rgba(52,211,153,0.4)' } },
                  { icon: <Activity className="h-5 w-5 text-amber-400" />, label: 'Freshness', value: 'Fair', valStyle: { color: '#fbbf24', fontWeight: 900 } },
                  { icon: <GitBranch className="h-5 w-5" style={{ color: '#22d3ee' }} />, label: 'Maintainers', value: '4 active', valStyle: { color: '#fff', fontWeight: 900 } },
                ].map(row => (
                  <div key={row.label} className="flex items-center justify-between p-3.5 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span className="flex items-center gap-2.5 text-sm font-semibold text-slate-500">{row.icon}{row.label}</span>
                    <span className="text-sm" style={row.valStyle}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SBOM */}
            <div className="rounded-3xl p-7" style={{ background: 'rgba(255,255,255,0.025)', ...cyanGlow }}>
              <h3 className="font-black text-xl text-white mb-5 flex items-center gap-2.5">
                <Package className="h-5 w-5" style={{ color: '#22d3ee' }} /> SBOM Summary
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: 'Components', value: '142', valStyle: { color: '#fff' }, bg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.07)' },
                  { label: 'Stale Deps', value: '14', valStyle: { color: '#fbbf24', textShadow: '0 0 10px rgba(245,158,11,0.4)' }, bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.2)' },
                  { label: 'Licenses', value: '8', valStyle: { color: '#fff' }, bg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.07)' },
                  { label: 'Direct', value: '37', valStyle: { color: '#22d3ee', textShadow: '0 0 10px rgba(6,182,212,0.4)' }, bg: 'rgba(6,182,212,0.06)', border: 'rgba(6,182,212,0.2)' },
                ].map(s => (
                  <div key={s.label} className="p-4 rounded-2xl" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
                    <div className="text-xs font-black uppercase tracking-widest text-slate-600 mb-1.5">{s.label}</div>
                    <div className="text-3xl font-black" style={s.valStyle}>{s.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm font-semibold text-slate-600 px-4 py-2.5 rounded-xl" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span>CycloneDX 1.4</span>
                <span className="px-2.5 py-1 rounded-lg text-xs font-black" style={{ background: 'rgba(6,182,212,0.12)', color: '#22d3ee', border: '1px solid rgba(6,182,212,0.25)' }}>JSON</span>
              </div>
            </div>

            {/* Playbook */}
            <div className="rounded-3xl p-7" style={{ background: 'rgba(255,255,255,0.025)', ...cyanGlow }}>
              <h3 className="font-black text-xl text-white mb-5 flex items-center gap-2.5">
                <Shield className="h-5 w-5" style={{ color: '#22d3ee' }} /> Hardening Playbook
              </h3>
              <div className="space-y-3.5">
                {[
                  { done: true, title: 'Enable Dependabot' },
                  { done: false, title: 'Pin GitHub Actions', note: 'Use commit SHAs, not tags.', warn: true },
                  { done: false, title: 'Branch Protection Rules', note: 'Require PR reviews on main.' },
                  { done: true, title: 'SECURITY.md Present' },
                  { done: false, title: 'Sign Releases (cosign)', note: 'No signed artifacts found.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-3.5 p-3.5 rounded-xl transition-all"
                    style={{
                      background: item.done ? 'rgba(52,211,153,0.05)' : item.warn ? 'rgba(245,158,11,0.06)' : 'rgba(255,255,255,0.03)',
                      border: item.done ? '1px solid rgba(52,211,153,0.2)' : item.warn ? '1px solid rgba(245,158,11,0.2)' : '1px solid rgba(255,255,255,0.06)'
                    }}>
                    {item.done
                      ? <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-emerald-400" style={{ filter: 'drop-shadow(0 0 5px rgba(52,211,153,0.6))' }} />
                      : <div className="w-5 h-5 rounded-full border-2 shrink-0 mt-0.5" style={{ borderColor: item.warn ? '#f59e0b' : 'rgba(255,255,255,0.15)' }} />
                    }
                    <div className="flex-1">
                      <div className="font-bold text-sm" style={{ color: item.done ? 'rgba(148,163,184,0.4)' : item.warn ? '#fbbf24' : '#e2e8f0', textDecoration: item.done ? 'line-through' : 'none' }}>{item.title}</div>
                      {!item.done && item.note && (
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-slate-600">{item.note}</span>
                          <button className="text-xs font-black flex items-center gap-0.5" style={{ color: '#22d3ee' }}>Fix now <ChevronRight className="h-3.5 w-3.5" /></button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
