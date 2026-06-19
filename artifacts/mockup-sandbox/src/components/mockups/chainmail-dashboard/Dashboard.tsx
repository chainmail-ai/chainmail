import React, { useState } from 'react';
import { 
  Shield, 
  Search, 
  UploadCloud, 
  Sun, 
  Moon, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle,
  ChevronRight,
  FileCode2,
  Lock,
  GitCommit,
  GitBranch,
  ShieldCheck,
  ShieldAlert,
  Info,
  Clock,
  Activity,
  FileText,
  Package,
  Layers,
  ChevronDown
} from 'lucide-react';

export function Dashboard() {
  const [isDark, setIsDark] = useState(true);

  const themeClass = isDark ? 'dark bg-slate-950 text-slate-50' : 'bg-slate-50 text-slate-900';
  const cardClass = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200';
  const textMutedClass = isDark ? 'text-slate-400' : 'text-slate-500';
  const borderClass = isDark ? 'border-slate-800' : 'border-slate-200';
  const inputClass = isDark ? 'bg-slate-950 border-slate-800 focus:border-cyan-500 text-slate-100 placeholder:text-slate-600' : 'bg-white border-slate-300 focus:border-blue-500 text-slate-900 placeholder:text-slate-400';
  const buttonPrimaryClass = isDark ? 'bg-cyan-600 hover:bg-cyan-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white';
  const buttonSecondaryClass = isDark ? 'bg-slate-800 hover:bg-slate-700 text-slate-200' : 'bg-slate-100 hover:bg-slate-200 text-slate-700';

  return (
    <div className={`min-h-screen w-full transition-colors duration-200 ${themeClass} font-sans`}>
      {/* Header */}
      <header className={`border-b ${borderClass} px-6 py-4 flex items-center justify-between sticky top-0 z-10 ${isDark ? 'bg-slate-950/80 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'}`}>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/__mockup/images/chainmail-logo.png" alt="Chainmail" className="h-8 w-8 object-contain" />
            <span className="font-semibold text-lg tracking-tight">Chainmail</span>
          </div>
          <div className={`h-4 w-px ${borderClass} mx-2`}></div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="#" className={isDark ? 'text-cyan-400' : 'text-blue-600'}>Workbench</a>
            <a href="#" className={`${textMutedClass} hover:text-current transition-colors`}>Projects</a>
            <a href="#" className={`${textMutedClass} hover:text-current transition-colors`}>Policies</a>
            <a href="#" className={`${textMutedClass} hover:text-current transition-colors`}>Settings</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-md ${buttonSecondaryClass} transition-colors`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <div className={`h-8 w-8 rounded-full bg-gradient-to-tr ${isDark ? 'from-cyan-600 to-blue-500' : 'from-blue-600 to-indigo-500'} flex items-center justify-center text-white font-medium text-sm shadow-sm ring-2 ring-transparent cursor-pointer hover:ring-current transition-all`}>
            JD
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        
        {/* Input Area */}
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-center">Analyze Supply Chain Risk</h1>
          <p className={`${textMutedClass} text-center mb-6`}>Enter a repository URL or upload a manifest to begin continuous analysis.</p>
          
          <div className="flex gap-2 relative shadow-sm group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center text-slate-400">
              <Search className="h-5 w-5" />
            </div>
            <input 
              type="text" 
              defaultValue="https://github.com/expressjs/express"
              className={`w-full pl-12 pr-4 py-3 rounded-lg border outline-none transition-all shadow-inner text-base font-medium ${inputClass}`}
            />
            <button className={`px-6 py-3 rounded-lg font-medium shadow-sm flex items-center gap-2 transition-colors ${buttonPrimaryClass}`}>
              Analyze
            </button>
            <button className={`px-4 py-3 rounded-lg border font-medium flex items-center gap-2 transition-colors ${borderClass} ${buttonSecondaryClass}`}>
              <UploadCloud className="h-5 w-5" />
            </button>
          </div>
          <div className="flex justify-center gap-4 text-xs font-medium">
            <span className={textMutedClass}>Recent:</span>
            <a href="#" className={`hover:underline ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>apache/kafka</a>
            <a href="#" className={`hover:underline ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>kubernetes/kubernetes</a>
            <a href="#" className={`hover:underline ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>nodejs/node</a>
          </div>
        </div>

        {/* Target Header */}
        <div className={`mt-12 p-6 rounded-xl border ${cardClass} flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm`}>
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-700'}`}>
              <GitBranch className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-xl font-bold">expressjs / express</h2>
                <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>v4.19.2</span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1 ${isDark ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-900/50' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
                  <Activity className="h-3 w-3" /> Active
                </span>
              </div>
              <div className={`flex items-center gap-4 text-sm ${textMutedClass}`}>
                <span className="flex items-center gap-1"><GitCommit className="h-4 w-4" /> 7a1b9c2</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> Scanned 2m ago</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${buttonSecondaryClass} ${borderClass}`}>
              Export SBOM
            </button>
            <button className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${buttonSecondaryClass} ${borderClass}`}>
              View Policies
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Col 1 & 2 */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Vulnerability & VEX */}
            <div className={`rounded-xl border ${cardClass} shadow-sm overflow-hidden flex flex-col`}>
              <div className={`px-6 py-4 border-b ${borderClass} flex items-center justify-between`}>
                <div className="flex items-center gap-2">
                  <ShieldAlert className={isDark ? 'text-amber-500' : 'text-amber-600'} />
                  <h3 className="font-semibold text-lg">Vulnerabilities & VEX</h3>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                  12 Total / 3 Actionable
                </span>
              </div>
              
              <div className="p-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className={`border-b ${borderClass} ${isDark ? 'bg-slate-900/50 text-slate-400' : 'bg-slate-50 text-slate-500'}`}>
                      <th className="px-6 py-3 text-left font-medium">CVE / ID</th>
                      <th className="px-6 py-3 text-left font-medium">Severity</th>
                      <th className="px-6 py-3 text-left font-medium">Package</th>
                      <th className="px-6 py-3 text-left font-medium">VEX Status</th>
                      <th className="px-6 py-3 text-right font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${borderClass}`}>
                    <tr className={`hover:${isDark ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
                      <td className="px-6 py-4 font-mono font-medium">CVE-2024-21345</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${isDark ? 'bg-red-950/50 text-red-400 border border-red-900' : 'bg-red-100 text-red-700 border border-red-200'}`}>CRITICAL</span>
                      </td>
                      <td className="px-6 py-4">path-to-regexp@0.1.7</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-amber-950/30 text-amber-400 border border-amber-900/50' : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
                          <AlertTriangle className="h-3.5 w-3.5" /> Affected
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className={`text-sm font-medium ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'}`}>Review</button>
                      </td>
                    </tr>
                    <tr className={`hover:${isDark ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
                      <td className="px-6 py-4 font-mono font-medium">CVE-2023-26159</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${isDark ? 'bg-amber-950/50 text-amber-400 border border-amber-900' : 'bg-amber-100 text-amber-700 border border-amber-200'}`}>HIGH</span>
                      </td>
                      <td className="px-6 py-4">follow-redirects@1.15.5</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>
                          <Clock className="h-3.5 w-3.5" /> Investigating
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className={`text-sm font-medium ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'}`}>Review</button>
                      </td>
                    </tr>
                    <tr className={`hover:${isDark ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
                      <td className="px-6 py-4 font-mono font-medium text-slate-500">CVE-2022-25883</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${isDark ? 'bg-amber-950/50 text-amber-400 border border-amber-900 opacity-50' : 'bg-amber-100 text-amber-700 border border-amber-200 opacity-60'}`}>HIGH</span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">semver@5.7.1</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-emerald-950/30 text-emerald-400 border border-emerald-900/50' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
                          <CheckCircle2 className="h-3.5 w-3.5" /> Not Affected
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className={textMutedClass}>Resolved</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* License & Compliance */}
            <div className={`rounded-xl border ${cardClass} shadow-sm overflow-hidden`}>
              <div className={`px-6 py-4 border-b ${borderClass} flex items-center justify-between`}>
                <div className="flex items-center gap-2">
                  <FileText className={isDark ? 'text-cyan-400' : 'text-blue-600'} />
                  <h3 className="font-semibold text-lg">License Compliance</h3>
                </div>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Matrix */}
                <div>
                  <h4 className="text-sm font-semibold mb-4 flex items-center gap-2">
                    <Layers className="h-4 w-4" /> Compatibility Matrix
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex items-center gap-2"><div className={`w-3 h-3 rounded-sm ${isDark ? 'bg-emerald-500' : 'bg-emerald-500'}`}></div> MIT, ISC, Apache-2.0</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex items-center gap-2"><div className={`w-3 h-3 rounded-sm ${isDark ? 'bg-blue-500' : 'bg-blue-500'}`}></div> BSD-2-Clause, BSD-3-Clause</span>
                      <span className="font-medium">7%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex items-center gap-2"><div className={`w-3 h-3 rounded-sm ${isDark ? 'bg-amber-500' : 'bg-amber-500'}`}></div> GPL-2.0, AGPL-3.0</span>
                      <span className="font-medium">1%</span>
                    </div>
                    
                    <div className={`w-full h-2 rounded-full flex overflow-hidden mt-2 ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                      <div className="h-full bg-emerald-500" style={{ width: '92%' }}></div>
                      <div className="h-full bg-blue-500" style={{ width: '7%' }}></div>
                      <div className="h-full bg-amber-500" style={{ width: '1%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Tree Snippet */}
                <div>
                  <h4 className="text-sm font-semibold mb-4">Dependency Tree Violations</h4>
                  <div className={`font-mono text-sm p-4 rounded-lg border ${borderClass} ${isDark ? 'bg-slate-950 text-slate-300' : 'bg-slate-50 text-slate-600'} overflow-x-auto`}>
                    <div className="mb-1">express@4.19.2 <span className="text-emerald-500 ml-2">MIT</span></div>
                    <div className="mb-1 pl-4 border-l border-slate-700">├── accepts@1.3.8 <span className="text-emerald-500 ml-2">MIT</span></div>
                    <div className="mb-1 pl-4 border-l border-slate-700">├── cookie-signature@1.0.6 <span className="text-emerald-500 ml-2">MIT</span></div>
                    <div className="mb-1 pl-4 border-l border-slate-700">└── <span className="font-bold underline decoration-amber-500 decoration-wavy">restrictive-pkg@2.0.1</span> <span className="text-amber-500 font-bold ml-2">GPL-3.0</span></div>
                    <div className="pl-8 border-l border-slate-700 text-slate-500">  └── sub-dep@1.0.0 MIT</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Col 3 */}
          <div className="space-y-6">
            
            {/* Supply Chain Score */}
            <div className={`rounded-xl border ${cardClass} shadow-sm p-6 flex flex-col items-center justify-center text-center relative overflow-hidden`}>
              <div className={`absolute top-0 w-full h-1 bg-gradient-to-r ${isDark ? 'from-emerald-500 via-cyan-500 to-blue-500' : 'from-emerald-400 via-blue-500 to-indigo-500'}`}></div>
              
              <h3 className="font-semibold text-lg w-full text-left mb-6">Supply Chain Score</h3>
              
              <div className="relative mb-6">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle cx="64" cy="64" r="56" className={isDark ? 'text-slate-800' : 'text-slate-100'} strokeWidth="12" stroke="currentColor" fill="none" />
                  <circle cx="64" cy="64" r="56" className={isDark ? 'text-cyan-500' : 'text-blue-600'} strokeWidth="12" strokeDasharray="351.8" strokeDashoffset={351.8 * (1 - 74/100)} strokeLinecap="round" stroke="currentColor" fill="none" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold">74</span>
                  <span className={`text-xs ${textMutedClass}`}>/ 100</span>
                </div>
              </div>

              <div className="w-full space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald-500" /> SLSA Level</span>
                  <span className="font-bold">Level 2</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-emerald-500" /> Provenance</span>
                  <span className="font-bold text-emerald-500">Verified</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5"><Activity className="h-4 w-4 text-amber-500" /> Freshness</span>
                  <span className="font-bold text-amber-500">Fair</span>
                </div>
              </div>
            </div>

            {/* SBOM Health */}
            <div className={`rounded-xl border ${cardClass} shadow-sm p-6`}>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Package className={isDark ? 'text-cyan-400' : 'text-blue-600'} /> SBOM Summary
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className={`p-4 rounded-lg border ${borderClass} ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
                  <div className={`text-xs uppercase tracking-wider font-semibold mb-1 ${textMutedClass}`}>Components</div>
                  <div className="text-2xl font-bold">142</div>
                </div>
                <div className={`p-4 rounded-lg border ${borderClass} ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
                  <div className={`text-xs uppercase tracking-wider font-semibold mb-1 ${textMutedClass}`}>Stale Deps</div>
                  <div className={`text-2xl font-bold ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>14</div>
                </div>
              </div>
              <p className={`text-sm ${textMutedClass} flex items-center justify-between`}>
                <span>Generated: CycloneDX 1.4</span>
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-700'}`}>JSON</span>
              </p>
            </div>

            {/* Hardening Playbook */}
            <div className={`rounded-xl border ${cardClass} shadow-sm p-6`}>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Shield className={isDark ? 'text-cyan-400' : 'text-blue-600'} /> Hardening Playbook
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold line-through opacity-70">Enable Dependabot</h4>
                    <p className={`text-xs mt-0.5 ${textMutedClass}`}>Automated PRs active.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 ${isDark ? 'border-slate-700' : 'border-slate-300'}`}></div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-amber-500">Pin GitHub Actions</h4>
                    <p className={`text-xs mt-0.5 ${textMutedClass}`}>Use commit hashes instead of tags.</p>
                    <button className={`mt-2 text-xs font-medium px-2.5 py-1 rounded border flex items-center gap-1 transition-colors ${buttonSecondaryClass} ${borderClass}`}>
                      Fix in 10 min <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 ${isDark ? 'border-slate-700' : 'border-slate-300'}`}></div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold">Setup Branch Protection</h4>
                    <p className={`text-xs mt-0.5 ${textMutedClass}`}>Require reviews for main branch.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
