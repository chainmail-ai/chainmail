import React, { useState } from 'react';
import {
  Shield, Search, UploadCloud, Moon,
  CheckCircle2, AlertTriangle, ChevronRight,
  Lock, GitCommit, GitBranch,
  ShieldCheck, ShieldAlert, Clock, Activity,
  FileText, Package, Zap
} from 'lucide-react';

export function DashboardLight() {
  const [isDark, setIsDark] = useState(false);

  if (isDark) {
    return (
      <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-slate-400">Switched to Dark Mode</p>
          <button onClick={() => setIsDark(false)} className="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">Back to Light</button>
        </div>
      </div>
    );
  }

  const cardGlow = {
    boxShadow: '0 0 0 1px rgba(59,130,246,0.15), 0 4px 24px rgba(59,130,246,0.08), 0 1px 3px rgba(0,0,0,0.06)'
  };
  const cardGlowWarn = {
    boxShadow: '0 0 0 1px rgba(245,158,11,0.2), 0 4px 24px rgba(245,158,11,0.08), 0 1px 3px rgba(0,0,0,0.06)'
  };
  const cardGlowDanger = {
    boxShadow: '0 0 0 1px rgba(239,68,68,0.2), 0 4px 24px rgba(239,68,68,0.1), 0 1px 3px rgba(0,0,0,0.06)'
  };
  const cardGlowScore = {
    boxShadow: '0 0 0 1px rgba(99,102,241,0.2), 0 8px 32px rgba(99,102,241,0.12), 0 1px 3px rgba(0,0,0,0.06)'
  };
  const btnGlow = {
    boxShadow: '0 0 16px rgba(59,130,246,0.35), 0 2px 8px rgba(59,130,246,0.25)'
  };

  return (
    <div className="min-h-screen w-full font-sans bg-gradient-to-br from-slate-50 via-white to-blue-50/40 text-slate-900">

      {/* Header */}
      <header className="border-b border-slate-200/80 px-8 py-4 flex items-center justify-between sticky top-0 z-10 bg-white/80 backdrop-blur-xl"
        style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.06), 0 2px 12px rgba(59,130,246,0.06)' }}>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <img src="/__mockup/images/chainmail-logo.png" alt="Chainmail" className="h-9 w-9 object-contain" />
            <span className="font-black text-xl tracking-tight text-slate-900">Chainmail</span>
          </div>
          <div className="h-6 w-px bg-slate-200 mx-1" />
          <nav className="flex items-center gap-7 text-sm font-medium">
            <a href="#" className="text-blue-600 font-bold relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded">Workbench</a>
            <a href="#" className="text-slate-500 hover:text-slate-800 transition-colors">Projects</a>
            <a href="#" className="text-slate-500 hover:text-slate-800 transition-colors">Policies</a>
            <a href="#" className="text-slate-500 hover:text-slate-800 transition-colors">Settings</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsDark(true)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 transition-colors">
            <Moon className="h-4 w-4" /> Dark Mode
          </button>
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm"
            style={{ boxShadow: '0 0 0 3px rgba(59,130,246,0.2)' }}>JD</div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-10 space-y-8">

        {/* Hero Input */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-2">
            <Zap className="h-3.5 w-3.5" /> Supply Chain Intelligence
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 leading-tight">
            Know what's in<br />
            <span className="text-blue-600">your software.</span>
          </h1>
          <p className="text-slate-500 text-lg">Enter a repo URL or upload a manifest for instant deep analysis.</p>
          <div className="flex gap-2 mt-5">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input type="text" defaultValue="https://github.com/expressjs/express"
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-200 bg-white text-slate-900 text-base font-medium outline-none focus:border-blue-400 transition-all"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }} />
            </div>
            <button className="px-7 py-4 rounded-2xl font-bold text-white text-base transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #2563eb, #4f46e5)', ...btnGlow }}>
              Analyze
            </button>
            <button className="px-4 py-4 rounded-2xl border-2 border-slate-200 bg-white text-slate-500 hover:border-blue-300 transition-colors">
              <UploadCloud className="h-5 w-5" />
            </button>
          </div>
          <div className="flex justify-center gap-5 text-sm">
            <span className="text-slate-400">Recent:</span>
            {['apache/kafka', 'kubernetes/kubernetes', 'nodejs/node'].map(r => (
              <a key={r} href="#" className="text-blue-600 font-medium hover:underline">{r}</a>
            ))}
          </div>
        </div>

        {/* Repo Banner */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-5" style={cardGlow}>
          <div className="flex items-center gap-5">
            <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600" style={{ boxShadow: '0 0 12px rgba(59,130,246,0.15)' }}>
              <GitBranch className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-black text-slate-900">expressjs / express</h2>
                <span className="text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 font-bold">v4.19.2</span>
                <span className="text-sm px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold flex items-center gap-1.5">
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
            <button className="px-5 py-2.5 rounded-xl border-2 border-slate-200 text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-all bg-white">Export SBOM</button>
            <button className="px-5 py-2.5 rounded-xl border-2 border-slate-200 text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-all bg-white">View Policies</button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">

            {/* Vulns */}
            <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden" style={cardGlowDanger}>
              <div className="px-7 py-5 border-b border-slate-100 flex items-center justify-between"
                style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #ffffff 60%)' }}>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-red-50 border border-red-100" style={{ boxShadow: '0 0 10px rgba(239,68,68,0.2)' }}>
                    <ShieldAlert className="text-red-500 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-slate-900">Vulnerabilities & VEX</h3>
                    <p className="text-xs text-slate-500 font-medium">3 require immediate action</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-full text-sm font-black bg-red-500 text-white">3 Critical</span>
                  <span className="px-3 py-1.5 rounded-full text-sm font-bold bg-orange-100 text-orange-700">9 High</span>
                </div>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-xs uppercase tracking-widest font-bold">
                    <th className="px-7 py-3.5 text-left">CVE ID</th>
                    <th className="px-7 py-3.5 text-left">Severity</th>
                    <th className="px-7 py-3.5 text-left">Package</th>
                    <th className="px-7 py-3.5 text-left">VEX Status</th>
                    <th className="px-7 py-3.5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cve: 'CVE-2024-21345', sev: 'CRITICAL', sevCls: 'bg-red-500 text-white', pkg: 'path-to-regexp@0.1.7', status: 'Affected', statusCls: 'bg-red-50 text-red-700 border-red-200' },
                    { cve: 'CVE-2023-26159', sev: 'HIGH', sevCls: 'bg-orange-500 text-white', pkg: 'follow-redirects@1.15.5', status: 'Investigating', statusCls: 'bg-amber-50 text-amber-700 border-amber-200' },
                    { cve: 'CVE-2022-25883', sev: 'HIGH', sevCls: 'bg-slate-200 text-slate-500', pkg: 'semver@5.7.1', status: 'Not Affected', statusCls: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                  ].map(row => (
                    <tr key={row.cve} className="border-b border-slate-100 hover:bg-blue-50/30 transition-colors">
                      <td className="px-7 py-4 font-mono font-bold text-base text-slate-800">{row.cve}</td>
                      <td className="px-7 py-4">
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-black ${row.sevCls}`}>{row.sev}</span>
                      </td>
                      <td className="px-7 py-4 font-mono text-sm text-slate-600">{row.pkg}</td>
                      <td className="px-7 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${row.statusCls}`}>
                          {row.status === 'Affected' && <AlertTriangle className="h-3.5 w-3.5" />}
                          {row.status === 'Not Affected' && <CheckCircle2 className="h-3.5 w-3.5" />}
                          {row.status === 'Investigating' && <Clock className="h-3.5 w-3.5" />}
                          {row.status}
                        </span>
                      </td>
                      <td className="px-7 py-4 text-right">
                        <button className="text-sm font-black text-blue-600 hover:text-blue-800 flex items-center gap-1 ml-auto">Review <ChevronRight className="h-4 w-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* License */}
            <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden" style={cardGlowWarn}>
              <div className="px-7 py-5 border-b border-slate-100 flex items-center gap-3"
                style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 60%)' }}>
                <div className="p-2 rounded-xl bg-blue-50 border border-blue-100" style={{ boxShadow: '0 0 10px rgba(59,130,246,0.2)' }}>
                  <FileText className="text-blue-600 h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-slate-900">License Compliance</h3>
                  <p className="text-xs text-slate-500 font-medium">1 copyleft conflict detected</p>
                </div>
              </div>
              <div className="p-7 grid grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-5">License Distribution</h4>
                  <div className="space-y-4">
                    {[
                      { label: 'MIT · ISC · Apache-2.0', pct: '92%', w: '92%', color: 'bg-emerald-500', shadow: '0 0 8px rgba(16,185,129,0.4)' },
                      { label: 'BSD-2 · BSD-3', pct: '7%', w: '7%', color: 'bg-blue-500', shadow: '0 0 8px rgba(59,130,246,0.4)' },
                      { label: 'GPL-2.0 · AGPL-3.0', pct: '1%', w: '1%', color: 'bg-amber-500', shadow: '0 0 8px rgba(245,158,11,0.5)' },
                    ].map(item => (
                      <div key={item.label}>
                        <div className="flex justify-between items-center text-sm mb-1.5">
                          <span className="flex items-center gap-2.5 font-semibold text-slate-700">
                            <div className={`w-3 h-3 rounded-sm ${item.color}`} style={{ boxShadow: item.shadow }} />
                            {item.label}
                          </span>
                          <span className="font-black text-slate-900">{item.pct}</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div className={`h-full rounded-full ${item.color}`} style={{ width: item.w, boxShadow: item.shadow }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-5">Dependency Violations</h4>
                  <div className="font-mono text-sm p-5 rounded-2xl border-2 border-amber-200 bg-amber-50/50 text-slate-600 leading-relaxed"
                    style={{ boxShadow: '0 0 16px rgba(245,158,11,0.12)' }}>
                    <div>express@4.19.2 <span className="text-emerald-600 font-bold ml-2">MIT</span></div>
                    <div className="pl-5 border-l-2 border-slate-200 mt-1.5">├── accepts@1.3.8 <span className="text-emerald-600 font-bold ml-2">MIT</span></div>
                    <div className="pl-5 border-l-2 border-slate-200">├── cookie-sig@1.0.6 <span className="text-emerald-600 font-bold ml-2">MIT</span></div>
                    <div className="pl-5 border-l-2 border-amber-300">└── <span className="font-black text-amber-600 underline decoration-wavy">restrictive-pkg@2.0.1</span> <span className="text-red-600 font-black ml-2">GPL-3.0</span></div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm font-bold text-amber-600">
                    <AlertTriangle className="h-4 w-4" /> 1 copyleft infection path found
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">

            {/* Score */}
            <div className="rounded-3xl bg-white border border-indigo-200 p-7 relative overflow-hidden" style={cardGlowScore}>
              <div className="absolute top-0 left-0 w-full h-1.5 rounded-t-3xl" style={{ background: 'linear-gradient(90deg, #3b82f6, #6366f1, #a855f7)' }} />
              <h3 className="font-black text-xl text-slate-900 mb-6">Supply Chain Score</h3>
              <div className="flex items-center justify-center mb-7">
                <div className="relative">
                  <svg className="w-36 h-36 -rotate-90">
                    <circle cx="72" cy="72" r="60" stroke="#e2e8f0" strokeWidth="12" fill="none" />
                    <circle cx="72" cy="72" r="60" stroke="url(#scoreGradLight)" strokeWidth="12"
                      strokeDasharray="376.9" strokeDashoffset={376.9 * (1 - 74 / 100)} strokeLinecap="round" fill="none" />
                    <defs>
                      <linearGradient id="scoreGradLight" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-black text-slate-900" style={{ letterSpacing: '-2px' }}>74</span>
                    <span className="text-sm text-slate-400 font-bold">/ 100</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3.5">
                {[
                  { icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />, label: 'SLSA Level', value: 'Level 2', valCls: 'text-slate-900 font-black' },
                  { icon: <Lock className="h-5 w-5 text-emerald-500" />, label: 'Provenance', value: 'Verified', valCls: 'text-emerald-600 font-black' },
                  { icon: <Activity className="h-5 w-5 text-amber-500" />, label: 'Freshness', value: 'Fair', valCls: 'text-amber-600 font-black' },
                  { icon: <GitBranch className="h-5 w-5 text-blue-500" />, label: 'Maintainers', value: '4 active', valCls: 'text-slate-900 font-black' },
                ].map(row => (
                  <div key={row.label} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="flex items-center gap-2.5 text-sm font-semibold text-slate-600">{row.icon}{row.label}</span>
                    <span className={`text-sm ${row.valCls}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SBOM */}
            <div className="rounded-3xl bg-white border border-slate-200 p-7" style={cardGlow}>
              <h3 className="font-black text-xl text-slate-900 mb-5 flex items-center gap-2.5">
                <Package className="text-blue-600 h-5 w-5" /> SBOM Summary
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: 'Components', value: '142', cls: 'text-slate-900', bg: 'bg-slate-50 border-slate-200' },
                  { label: 'Stale Deps', value: '14', cls: 'text-amber-600', bg: 'bg-amber-50 border-amber-200', glow: '0 0 14px rgba(245,158,11,0.15)' },
                  { label: 'Licenses', value: '8', cls: 'text-slate-900', bg: 'bg-slate-50 border-slate-200' },
                  { label: 'Direct', value: '37', cls: 'text-blue-600', bg: 'bg-blue-50 border-blue-200', glow: '0 0 14px rgba(59,130,246,0.12)' },
                ].map(s => (
                  <div key={s.label} className={`p-4 rounded-2xl border-2 ${s.bg}`} style={s.glow ? { boxShadow: s.glow } : {}}>
                    <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1.5">{s.label}</div>
                    <div className={`text-3xl font-black ${s.cls}`}>{s.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm font-semibold text-slate-500 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200">
                <span>CycloneDX 1.4</span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-700 text-xs font-black">JSON</span>
              </div>
            </div>

            {/* Playbook */}
            <div className="rounded-3xl bg-white border border-slate-200 p-7" style={cardGlow}>
              <h3 className="font-black text-xl text-slate-900 mb-5 flex items-center gap-2.5">
                <Shield className="text-blue-600 h-5 w-5" /> Hardening Playbook
              </h3>
              <div className="space-y-4">
                {[
                  { done: true, title: 'Enable Dependabot', note: '' },
                  { done: false, title: 'Pin GitHub Actions', note: 'Use commit SHAs, not tags.', warn: true },
                  { done: false, title: 'Branch Protection Rules', note: 'Require PR reviews on main.' },
                  { done: true, title: 'SECURITY.md Present', note: '' },
                  { done: false, title: 'Sign Releases (cosign)', note: 'No signed artifacts found.' },
                ].map(item => (
                  <div key={item.title} className={`flex items-start gap-3.5 p-3.5 rounded-xl border transition-all ${item.done ? 'bg-emerald-50 border-emerald-200' : item.warn ? 'bg-amber-50 border-amber-200' : 'bg-slate-50 border-slate-200'}`}
                    style={item.warn ? { boxShadow: '0 0 10px rgba(245,158,11,0.1)' } : {}}>
                    {item.done
                      ? <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" style={{ filter: 'drop-shadow(0 0 4px rgba(16,185,129,0.5))' }} />
                      : <div className={`w-5 h-5 rounded-full border-2 shrink-0 mt-0.5 ${item.warn ? 'border-amber-400' : 'border-slate-300'}`} />
                    }
                    <div className="flex-1">
                      <div className={`font-bold text-sm ${item.done ? 'line-through text-slate-400' : item.warn ? 'text-amber-700' : 'text-slate-800'}`}>{item.title}</div>
                      {!item.done && (
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-slate-500">{item.note}</span>
                          <button className="text-xs font-black text-blue-600 flex items-center gap-0.5 hover:text-blue-800">Fix now <ChevronRight className="h-3.5 w-3.5" /></button>
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
