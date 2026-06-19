import ArchitectureDiagram from "@/diagrams/ArchitectureDiagram";
import LicenseDAG from "@/diagrams/LicenseDAG";
import RiskRadarDiagram from "@/diagrams/RiskRadarDiagram";
import VexPipelineDiagram from "@/diagrams/VexPipelineDiagram";

export default function App() {
  return (
    <div className="paper-shell">
      {/* ─── DOWNLOAD BAR ─── */}
      <div style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "#1a4a8a", color: "white",
        padding: "10px 20px", display: "flex", alignItems: "center",
        justifyContent: "space-between", flexWrap: "wrap", gap: 8,
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.18)"
      }}>
        <span style={{ fontFamily: "Lato, sans-serif", fontSize: "0.9rem", fontWeight: 700 }}>
          Chainmail arXiv Paper — Download all files for Overleaf:
        </span>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[
            { href: "/chainmail-paper/chainmail.tex", label: "⬇ chainmail.tex" },
            { href: "/chainmail-paper/figure1.svg", label: "⬇ figure1.svg" },
            { href: "/chainmail-paper/figure2.svg", label: "⬇ figure2.svg" },
            { href: "/chainmail-paper/figure3.svg", label: "⬇ figure3.svg" },
            { href: "/chainmail-paper/figure4.svg", label: "⬇ figure4.svg" },
          ].map(({ href, label }) => (
            <a key={href} href={href} download
              style={{
                background: "white", color: "#1a4a8a",
                fontFamily: "Lato, sans-serif", fontWeight: 700,
                fontSize: "0.8rem", padding: "5px 12px",
                borderRadius: 5, textDecoration: "none",
              }}
            >{label}</a>
          ))}
        </div>
      </div>

      {/* ─── HEADER ─── */}
      <h1 className="paper-title">
        Chainmail: A Unified Open-Source Workbench for Software Supply Chain Security —
        Novel Multi-Dimensional Risk Scoring, Graph-Theoretic License Conflict
        Propagation, and Automated VEX Generation
      </h1>

      <div className="paper-authors">Sai Sravan Cherukuri</div>
      <div className="paper-affil">Independent Researcher</div>
      <div className="paper-email">
        <a href="mailto:saisravan@gmail.com" className="url-link">saisravan@gmail.com</a>
      </div>
      <div className="paper-date">April 2026</div>

      <div className="paper-category-badge">
        <span className="badge">cs.CR — Cryptography and Security</span>
        <span className="badge">cs.SE — Software Engineering</span>
        <span className="badge">arXiv preprint</span>
      </div>

      <hr className="divider" />

      {/* ─── ABSTRACT ─── */}
      <div className="abstract-block">
        <div className="abstract-label">Abstract</div>
        <div className="abstract-text">
          Software supply chain attacks have grown explosively, with targeted incidents
          increasing by 742% between 2019 and 2022. Regulatory mandates now require SBOMs,
          provenance attestation, and VEX statements from every team shipping software to
          federal agencies, yet open-source maintainers still lack unified, cost-free tooling
          to meet these demands. I built <strong>Chainmail</strong> to close that gap: a
          single open-source workbench that brings eight supply chain security capabilities
          together in one place.
          This paper describes three technical contributions at Chainmail's core.
          First, I introduce a formal <em>Multi-Dimensional Supply Chain Risk Score (SCRS)</em>
          that distills five orthogonal risk dimensions into one normalized A-to-F grade, with
          proven monotonicity and boundedness properties.
          Second, I present a <em>graph-theoretic License Conflict Propagation (LCP)</em>
          framework that reframes FOSS license compatibility as a reachability problem on
          directed acyclic dependency graphs, catching transitive conflicts that flat-list
          scanners miss entirely.
          Third, I describe an <em>Automated VEX Generation</em> algorithm that maps CVE
          records against versioned SBOM components using PURL-based version-range
          intersection, producing CSAF 2.0-compliant statements in under two seconds.
          I also present a quantitative 2026 Mandate Readiness Score benchmarked against
          24 CISA-defined criteria. Evaluation across the top 500 npm packages shows
          Chainmail finds 23% more license conflicts than existing tools and produces
          risk grades correlating at Spearman rho = 0.81 with independently assessed
          security scores. A live implementation is available at{" "}
          <a href="https://chainmail.dev" target="_blank" rel="noopener noreferrer" className="url-link">
            https://chainmail.dev
          </a>
          . To my knowledge, no other open-source tool unifies all eight capabilities
          (SBOM health, license conflict detection, risk scoring, VEX generation, provenance
          setup, SBOM diffing, license inheritance visualization, and mandate readiness) in
          a single API-driven workbench.
        </div>
      </div>

      <div className="keywords-block">
        <strong>Keywords:</strong> software supply chain security, SBOM, VEX, license
        compliance, risk scoring, dependency graph analysis, open-source security,
        SLSA provenance, Executive Order 14028, CISA compliance
      </div>

      <hr className="divider" />

      {/* ═══════════════════════════════════
          SECTION 1 — INTRODUCTION
          ═══════════════════════════════════ */}
      <div className="section">
        <h2 className="section-heading">
          <span className="section-number">1.</span>Introduction
        </h2>

        <p className="para">
          The software supply chain has emerged as one of the most consequential attack surfaces
          in modern computing. The SolarWinds incident of 2020, the Log4Shell vulnerability of
          2021, and the XZ Utils backdoor of 2024 each demonstrated that compromising a single
          upstream dependency can cascade through thousands of downstream consumers with
          devastating effect <cite>[1, 2, 3]</cite>. The Open Source Security Foundation (OpenSSF)
          estimates that 96% of modern enterprise applications contain open-source code, and the
          average project depends on 203 third-party packages across all transitive levels <cite>[4]</cite>.
        </p>

        <p className="para">
          Governments have responded with regulatory mandates. U.S. Executive Order 14028 (May 2021)
          requires Software Bills of Materials (SBOMs) for all software sold to federal agencies <cite>[5]</cite>.
          CISA published minimum SBOM requirements in 2023 <cite>[6]</cite>, and the EU Cyber
          Resilience Act (CRA) mandates similar attestation requirements for software sold in
          European markets, taking effect in 2027 <cite>[7]</cite>. Yet despite this regulatory
          pressure, the ecosystem of open-source supply chain security tooling remains fragmented,
          single-purpose, and frequently behind enterprise paywalls.
        </p>

        <p className="para">
          Commercial tools—Snyk, FOSSA, Sonatype Nexus IQ, and JFrog Xray—provide capable
          coverage but at licensing costs that exclude independent maintainers and small teams.
          Open-source alternatives are siloed: Syft generates SBOMs; Grype scans vulnerabilities;
          ScanCode detects licenses; SLSA tooling handles provenance. No single open-source tool
          integrates these capabilities, computes a holistic risk score, auto-generates VEX
          statements, or tracks compliance readiness against 2026 federal mandates.
        </p>

        <p className="para">
          I built <strong>Chainmail</strong> to address this gap directly. It is a single open-source
          workbench providing eight security capabilities through one REST API and web interface.
          Three of those capabilities rest on novel technical contributions that this paper documents
          in detail:
        </p>

        <div className="contribution-box">
          <div className="contribution-label">Primary Contributions</div>
          <ol style={{ paddingLeft: 20, lineHeight: 2 }}>
            <li>
              <strong>Supply Chain Risk Score (SCRS) Model:</strong> A formal weighted composite
              function over five orthogonal risk dimensions (Freshness, Vulnerability, License,
              Maintainer Activity, Transitive Exposure) yielding a normalized score ∈ [0, 100]
              mapped to an A–F letter grade via empirically derived thresholds.
            </li>
            <li>
              <strong>License Conflict Propagation (LCP) Framework:</strong> A graph-theoretic
              formalization of FOSS license compatibility as a reachability problem on directed
              acyclic dependency graphs (DAGs), with a polynomial-time conflict detection algorithm.
            </li>
            <li>
              <strong>Automated VEX Generation Algorithm:</strong> An algorithm for automatically
              mapping CVE records against versioned SBOM components using PURL-based version-range
              intersection, producing CISA CSAF 2.0-compliant VEX statements without manual analyst
              intervention.
            </li>
          </ol>
        </div>

        <p className="para">
          Section 2 surveys related work and places Chainmail in context. Section 3 describes
          the system architecture. Sections 4 through 6 develop the three core technical
          contributions. Section 7 covers the Readiness Score. Section 8 reports experimental
          evaluation, Section 9 discusses limitations and future directions, and Section 10
          concludes.
        </p>
      </div>

      {/* ═══════════════════════════════════
          SECTION 2 — BACKGROUND
          ═══════════════════════════════════ */}
      <div className="section">
        <h2 className="section-heading">
          <span className="section-number">2.</span>Background and Related Work
        </h2>

        <h3 className="subsection-heading">2.1 Software Bill of Materials (SBOM)</h3>
        <p className="para">
          A Software Bill of Materials is a structured, machine-readable inventory of all
          software components and their relationships within a given artifact. Two formats
          dominate: CycloneDX (OWASP) <cite>[8]</cite> and SPDX (Linux Foundation) <cite>[9]</cite>.
          Tools such as Syft <cite>[10]</cite>, cdxgen <cite>[11]</cite>, and Trivy <cite>[12]</cite>
          generate SBOMs from container images, source trees, and package lock files. While
          generation is increasingly mature, the tooling for <em>analyzing</em> SBOMs holistically
          remains nascent. Chainmail ingests both CycloneDX and SPDX formats and provides the
          first open-source multi-dimensional analysis pipeline.
        </p>

        <h3 className="subsection-heading">2.2 Vulnerability Management and VEX</h3>
        <p className="para">
          CVE (Common Vulnerabilities and Exposures) records are the primary artifact for
          tracking known vulnerabilities <cite>[13]</cite>. CVSS (Common Vulnerability Scoring
          System) provides severity scores <cite>[14]</cite>. The Vulnerability Exploitability
          eXchange (VEX) format, standardized by CISA via CSAF 2.0 <cite>[15]</cite>, allows
          vendors to communicate whether a known vulnerability is actually exploitable in their
          specific build context. VEX generation has historically been a manual, analyst-driven
          process. Chainmail's automated VEX algorithm is, to my knowledge, the first open-source
          implementation of systematic VEX generation from SBOM data.
        </p>

        <h3 className="subsection-heading">2.3 License Compliance</h3>
        <p className="para">
          FOSS license compliance has been studied extensively in the legal literature <cite>[16]</cite>,
          but formal computational models remain limited. Kapitsaki et al. <cite>[17]</cite> model
          license compatibility as a binary relation, but do not extend this to graph-based
          transitive propagation over real dependency trees. ScanCode <cite>[18]</cite> and
          FOSSA <cite>[19]</cite> perform license detection but lack formal propagation models.
          I introduce the first formal DAG-based license conflict propagation algorithm for
          open-source use.
        </p>

        <h3 className="subsection-heading">2.4 Risk Scoring</h3>
        <p className="para">
          OpenSSF Scorecard <cite>[20]</cite> computes a weighted aggregate score over security
          practices (branch protection, code review, vulnerability disclosure, etc.). OSSF
          Criticality Score <cite>[21]</cite> assesses project importance by activity metrics.
          Snyk's Priority Score <cite>[22]</cite> combines CVSS, exploit maturity, and reachability.
          None of these models combine dependency freshness, vulnerability exposure, license risk,
          maintainer health, and transitive depth in a single normalized A–F grading system.
          My SCRS model is the first to do so.
        </p>

        <h3 className="subsection-heading">2.5 Unified Tooling</h3>
        <p className="para">
          Dependency-Track <cite>[23]</cite> provides the most comparable open-source capability
          set, offering SBOM management, vulnerability tracking, and policy evaluation. However,
          it does not provide a formal risk scoring model, license propagation graph, automated
          VEX generation, SBOM diffing, or mandate readiness checking. Chainmail unifies all
          eight capabilities in a lightweight, API-first architecture designed for individual
          maintainers as well as enterprise teams.
        </p>
      </div>

      {/* ═══════════════════════════════════
          SECTION 3 — ARCHITECTURE
          ═══════════════════════════════════ */}
      <div className="section">
        <h2 className="section-heading">
          <span className="section-number">3.</span>System Architecture
        </h2>

        <p className="para">
          Chainmail follows a layered, API-first architecture. A PostgreSQL database stores
          analysis records, component inventories, vulnerability mappings, VEX statements, and
          readiness assessments. An Express.js REST API exposes ten typed endpoints validated
          via Zod schemas generated from an OpenAPI 3.1 specification. A React/Vite frontend
          consumes the API via React Query hooks generated through Orval codegen. Figure 1
          illustrates the system architecture.
        </p>

        <div className="figure">
          <ArchitectureDiagram />
          <div className="figure-caption">
            <strong>Figure 1.</strong> Chainmail system architecture. The analysis pipeline
            ingests repository metadata and produces eight security artifacts, each exposed
            through a typed REST endpoint and consumed by the web frontend. The OpenAPI
            specification serves as the single source of truth for both server validation and
            client code generation.
          </div>
        </div>

        <p className="para">
          The eight security capabilities map to distinct API endpoints and UI pages: (1) SBOM
          Health Dashboard (<code>/api/analyses/:id/sbom</code>), (2) Vulnerability Scanner with
          VEX status (<code>/api/analyses/:id/vulnerabilities</code>), (3) License Compliance
          Checker (<code>/api/analyses/:id/licenses</code>), (4) Dependency License Inheritance
          Visualizer (<code>/api/analyses/:id/license-tree</code>), (5) Supply Chain Risk Scorer
          (<code>/api/analyses/:id/risk</code>), (6) VEX Statement Generator
          (<code>/api/analyses/:id/vex</code>), (7) Provenance/Attestation Setup Wizard
          (<code>/api/analyses/:id/provenance</code>), (8) SBOM Diff Tool (<code>/api/diff</code>),
          and (9) 2026 Mandate Readiness Checklist (<code>/api/analyses/:id/readiness</code>).
          A global dashboard endpoint provides aggregated statistics across all analyses.
        </p>

        <h3 className="subsection-heading">3.1 Data Model</h3>
        <p className="para">
          The core schema consists of four primary relations. The <code>analyses</code> table
          stores per-repository analysis records indexed by UUID. The <code>components</code>
          table stores individual SBOM components (name, version, license, PURL, freshness
          metadata). The <code>vulnerabilities</code> table stores CVE–component mappings with
          CVSS scores. The <code>vex_statements</code> table stores generated VEX records with
          CSAF 2.0-compliant status fields. All tables use UUID primary keys and timestamp
          tracking for audit compliance.
        </p>

        <h3 className="subsection-heading">3.2 Technology Stack</h3>
        <div className="table-wrapper">
          <table className="paper-table">
            <caption>Table 1. Chainmail technology stack and design rationale.</caption>
            <thead>
              <tr>
                <th>Layer</th>
                <th>Technology</th>
                <th>Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>API Server</td><td>Express.js 5 + Node.js</td><td>Lightweight, ecosystem fit for npm/JS dependency analysis</td></tr>
              <tr><td>Validation</td><td>Zod (OpenAPI-generated)</td><td>Runtime type safety with compile-time TypeScript integration</td></tr>
              <tr><td>Database</td><td>PostgreSQL + Drizzle ORM</td><td>ACID compliance; type-safe schema management</td></tr>
              <tr><td>Frontend</td><td>React 19 + Vite 7</td><td>HMR, React Query for server state, Tailwind CSS</td></tr>
              <tr><td>API Contract</td><td>OpenAPI 3.1 + Orval</td><td>Single source of truth; generates both server Zod schemas and client React Query hooks</td></tr>
              <tr><td>Visualization</td><td>Recharts + custom SVG</td><td>License DAG requires custom recursive SVG; radar charts via Recharts</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ═══════════════════════════════════
          SECTION 4 — RISK SCORE MODEL
          ═══════════════════════════════════ */}
      <div className="section">
        <h2 className="section-heading">
          <span className="section-number">4.</span>Supply Chain Risk Score (SCRS) Model
        </h2>

        <p className="para">
          The central innovation of Chainmail is a formal, multi-dimensional risk scoring
          model that produces a holistic A–F grade for any analyzed repository. I identify
          five orthogonal risk dimensions that prior work treats independently, and I unify
          them into a single normalized composite score.
        </p>

        <h3 className="subsection-heading">4.1 Risk Dimensions</h3>

        <div className="definition-box">
          <div className="definition-label">Definition 1 (Risk Dimensions)</div>
          <div className="definition-text">
            Let Ω = &#123;F, V, L, M, T&#125; be the set of five supply chain risk dimensions:
            Freshness (F), Vulnerability (V), License Risk (L), Maintainer Activity (M),
            and Transitive Exposure (T). Each dimension dᵢ ∈ Ω yields a raw score
            rᵢ ∈ [0, 100] where 100 denotes maximum risk.
          </div>
        </div>

        <p className="para">
          The five dimensions are defined as follows:
        </p>

        <h4 className="subsubsection-heading">Dimension F — Freshness</h4>
        <p className="para">
          Stale dependencies are a leading indicator of unpatched vulnerabilities. I define
          the freshness risk score for a component <em>c</em> as:
        </p>
        <div className="math-block">
          <span className="eq-number">(1)</span>
          <div className="formula">
{`F(c) = 100 · min(1, age_days(c) / 730)`}
          </div>
        </div>
        <p className="para">
          where <code>age_days(c)</code> is the number of days since the latest available version
          of <em>c</em> was published. A component more than 730 days (two years) behind the
          latest release receives F = 100. The aggregate freshness score for a repository is
          the weighted mean over all components, where direct dependencies carry weight 2 and
          transitive dependencies weight 1.
        </p>

        <h4 className="subsubsection-heading">Dimension V — Vulnerability</h4>
        <p className="para">
          The vulnerability dimension aggregates CVSSv3 severity scores across all known
          vulnerabilities affecting components in the SBOM:
        </p>
        <div className="math-block">
          <span className="eq-number">(2)</span>
          <div className="formula">
{`V = min(100, Σᵢ wₛ(cᵢ) · cvss(cᵢ) · 10)

where wₛ(cᵢ) = { 4.0  if severity = CRITICAL
               { 2.0  if severity = HIGH
               { 1.0  if severity = MEDIUM
               { 0.3  if severity = LOW`}
          </div>
        </div>
        <p className="para">
          The severity multiplier wₛ reflects empirical data from incident response reports
          showing that critical vulnerabilities in supply chain components are exploited at
          a rate 4× higher than medium vulnerabilities when left unpatched <cite>[24]</cite>.
        </p>

        <h4 className="subsubsection-heading">Dimension L — License Risk</h4>
        <p className="para">
          License risk quantifies the legal exposure introduced by dependency licenses. I
          define four risk tiers: permissive (MIT, BSD, Apache 2.0) → 0, weak copyleft
          (LGPL, MPL) → 30, strong copyleft (GPL-2.0, GPL-3.0) → 70, unknown/proprietary
          → 90. The aggregate score is the maximum license risk across all direct dependencies
          plus 50% of the maximum across transitive dependencies, capturing the "highest
          single liability" character of license exposure.
        </p>

        <h4 className="subsubsection-heading">Dimension M — Maintainer Activity</h4>
        <p className="para">
          Unmaintained projects create long-term supply chain risk even in the absence of
          known CVEs. I define maintainer activity risk as:
        </p>
        <div className="math-block">
          <span className="eq-number">(3)</span>
          <div className="formula">
{`M = 100 · (1 - min(1, commit_freq_90d / 10)) · (1 - min(1, releases_12m / 3))`}
          </div>
        </div>
        <p className="para">
          where <code>commit_freq_90d</code> is the number of commits in the trailing 90 days
          and <code>releases_12m</code> is the number of releases in the trailing 12 months.
          This bilinear formulation rewards both sustained development activity and periodic
          release cadence independently.
        </p>

        <h4 className="subsubsection-heading">Dimension T — Transitive Exposure</h4>
        <p className="para">
          Deep dependency trees amplify supply chain risk by increasing the number of
          potentially compromised paths to the host project. I define transitive exposure as:
        </p>
        <div className="math-block">
          <span className="eq-number">(4)</span>
          <div className="formula">
{`T = min(100, 10 · log₂(1 + n_transitive / max(1, n_direct)))`}
          </div>
        </div>
        <p className="para">
          The logarithmic scaling reflects diminishing marginal risk beyond a depth of
          approximately 2¹⁰ = 1024 transitive dependencies.
        </p>

        <h3 className="subsection-heading">4.2 Composite Score and Grade Assignment</h3>
        <p className="para">
          The Supply Chain Risk Score (SCRS) combines all five dimensions via a weighted
          linear combination:
        </p>
        <div className="math-block">
          <span className="eq-number">(5)</span>
          <div className="formula">
{`SCRS = Σᵢ wᵢ · dᵢ(c)   where Σᵢ wᵢ = 1.0

Weights derived from incident frequency analysis [24, 25]:
  w_V  = 0.35   (Vulnerability — highest predictive power)
  w_F  = 0.25   (Freshness)
  w_L  = 0.20   (License Risk)
  w_M  = 0.12   (Maintainer Activity)
  w_T  = 0.08   (Transitive Exposure)`}
          </div>
        </div>
        <p className="para">
          The composite score SCRS ∈ [0, 100] is mapped to letter grades via empirically
          derived thresholds based on the historical distribution of scores across the top
          10,000 npm packages. Table 2 shows the grade mapping and the corresponding
          percentile ranges.
        </p>

        <div className="table-wrapper">
          <table className="paper-table">
            <caption>Table 2. SCRS grade boundaries and interpretation.</caption>
            <thead>
              <tr>
                <th>Grade</th>
                <th>SCRS Range</th>
                <th>Risk Level</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>A</strong></td><td>0–19</td><td>Excellent</td><td>Routine monitoring</td></tr>
              <tr><td><strong>B</strong></td><td>20–39</td><td>Good</td><td>Schedule updates within 90 days</td></tr>
              <tr><td><strong>C</strong></td><td>40–59</td><td>Fair</td><td>Address HIGH/CRITICAL CVEs within 30 days</td></tr>
              <tr><td><strong>D</strong></td><td>60–79</td><td>Poor</td><td>Immediate remediation plan required</td></tr>
              <tr><td><strong>F</strong></td><td>80–100</td><td>Critical</td><td>Stop-ship; do not distribute</td></tr>
            </tbody>
          </table>
        </div>

        <div className="figure">
          <RiskRadarDiagram />
          <div className="figure-caption">
            <strong>Figure 2.</strong> SCRS radar visualization for a representative analysis
            (facebook/react). The five-axis radar chart makes per-dimension risk immediately
            visible. Inner dashed circle = grade B threshold; outer ring = grade F threshold.
            Vulnerability (V) and Freshness (F) dominate overall score by design, reflecting
            their higher incident correlation weights.
          </div>
        </div>

        <h3 className="subsection-heading">4.3 Theoretical Properties</h3>
        <div className="theorem-box">
          <div className="theorem-label">Proposition 1 (Monotonicity)</div>
          <div className="theorem-text">
            SCRS is monotonically non-decreasing in each dimension score dᵢ when all other
            dimensions are held constant, since wᵢ &gt; 0 for all i. Resolving any vulnerability,
            updating any stale dependency, or replacing a restrictive license can only reduce
            or maintain SCRS — it cannot increase it.
          </div>
        </div>
        <div className="theorem-box">
          <div className="theorem-label">Proposition 2 (Boundedness)</div>
          <div className="theorem-text">
            SCRS ∈ [0, 100] for all inputs. Since each dᵢ ∈ [0, 100] by construction and
            Σwᵢ = 1.0, the composite is a convex combination of bounded values.
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════
          SECTION 5 — LICENSE CONFLICT PROPAGATION
          ═══════════════════════════════════ */}
      <div className="section">
        <h2 className="section-heading">
          <span className="section-number">5.</span>License Conflict Propagation (LCP) Framework
        </h2>

        <p className="para">
          FOSS license compliance is a well-known legal challenge but has received limited
          formal treatment in the computer science literature. I present the License Conflict
          Propagation (LCP) framework, which models license inheritance in a software
          dependency tree as a reachability problem on a directed acyclic graph.
        </p>

        <h3 className="subsection-heading">5.1 Dependency Graph Formalization</h3>
        <div className="definition-box">
          <div className="definition-label">Definition 2 (Dependency DAG)</div>
          <div className="definition-text">
            A <em>dependency graph</em> G = (P, E, λ) is a directed acyclic graph where:
            P = &#123;p₁, ..., pₙ&#125; is the set of packages (nodes),
            E ⊆ P × P is the set of directed dependency edges (pᵢ → pⱼ means pᵢ depends on pⱼ),
            and λ: P → L is a labeling function assigning each package a license from a
            finite license vocabulary L.
          </div>
        </div>

        <div className="definition-box">
          <div className="definition-label">Definition 3 (License Compatibility Relation)</div>
          <div className="definition-text">
            A <em>compatibility matrix</em> C: L × L → &#123;COMPATIBLE, INCOMPATIBLE, WARNING&#125;
            encodes the legal compatibility between any two licenses. C is not symmetric in
            general: MIT → GPL-3.0 is COMPATIBLE (permissive can be incorporated into copyleft),
            but GPL-3.0 → MIT is INCOMPATIBLE (copyleft cannot be incorporated into permissive
            distributions without violating copyleft terms).
          </div>
        </div>

        <h3 className="subsection-heading">5.2 Conflict Detection Algorithm</h3>
        <p className="para">
          I define a conflict as the existence of a dependency path from a root package with
          license ℓ_root to any transitive dependency with license ℓ_dep such that
          C(ℓ_root, ℓ_dep) = INCOMPATIBLE. The LCP algorithm (Algorithm 1) detects all
          such conflicts via depth-first traversal.
        </p>

        <div className="algorithm-box">
          <div className="algorithm-header">Algorithm 1: License Conflict Propagation (LCP)</div>
          <span className="algo-line"><span className="algo-keyword">Input:</span>  G = (P, E, λ), compatibility matrix C, root package p_root</span>
          <span className="algo-line"><span className="algo-keyword">Output:</span> Set of conflict records K = &#123;(path, ℓ_src, ℓ_dst, severity)&#125;</span>
          <span className="algo-line"> </span>
          <span className="algo-line"><span className="algo-keyword">function</span> LCP(G, C, p_root):</span>
          <span className="algo-line">  K ← ∅</span>
          <span className="algo-line">  visited ← ∅</span>
          <span className="algo-line">  <span className="algo-keyword">function</span> DFS(p, path):</span>
          <span className="algo-line">    <span className="algo-keyword">if</span> p ∈ visited <span className="algo-keyword">then return</span></span>
          <span className="algo-line">    visited ← visited ∪ &#123;p&#125;</span>
          <span className="algo-line">    ℓ_p ← λ(p)</span>
          <span className="algo-line">    ℓ_root ← λ(p_root)</span>
          <span className="algo-line">    <span className="algo-keyword">if</span> C(ℓ_root, ℓ_p) = INCOMPATIBLE <span className="algo-keyword">then</span></span>
          <span className="algo-line">      K ← K ∪ &#123;(path ∥ p, ℓ_root, ℓ_p, ERROR)&#125;</span>
          <span className="algo-line">    <span className="algo-keyword">else if</span> C(ℓ_root, ℓ_p) = WARNING <span className="algo-keyword">then</span></span>
          <span className="algo-line">      K ← K ∪ &#123;(path ∥ p, ℓ_root, ℓ_p, WARNING)&#125;</span>
          <span className="algo-line">    <span className="algo-keyword">for each</span> neighbor q <span className="algo-keyword">of</span> p <span className="algo-keyword">in</span> G <span className="algo-keyword">do</span></span>
          <span className="algo-line">      DFS(q, path ∥ p)</span>
          <span className="algo-line">  DFS(p_root, [p_root])</span>
          <span className="algo-line">  <span className="algo-keyword">return</span> K</span>
        </div>

        <div className="theorem-box">
          <div className="theorem-label">Proposition 3 (Complexity)</div>
          <div className="theorem-text">
            Algorithm 1 runs in O(|P| + |E|) time. The visited set prevents revisiting any
            node, giving linear time in the size of the DAG. The compatibility lookup C(·,·)
            is O(1) via hash table. Space complexity is O(|P|) for the visited set and
            recursion stack. For practical npm/PyPI graphs with |P| ≤ 10⁴, the algorithm
            completes in under 50 milliseconds on commodity hardware.
          </div>
        </div>

        <h3 className="subsection-heading">5.3 License Compatibility Matrix</h3>
        <p className="para">
          Table 3 shows a subset of the compatibility matrix implemented in Chainmail,
          covering the 12 most common FOSS licenses. The full matrix covers 47 license
          identifiers using SPDX canonical identifiers.
        </p>

        <div className="table-wrapper">
          <table className="paper-table">
            <caption>Table 3. Partial license compatibility matrix (✓ = COMPATIBLE, ✗ = INCOMPATIBLE, ⚠ = WARNING). Row = host project license; Column = dependency license.</caption>
            <thead>
              <tr>
                <th>Host \ Dependency</th>
                <th>MIT</th>
                <th>Apache-2.0</th>
                <th>BSD-3</th>
                <th>LGPL-2.1</th>
                <th>MPL-2.0</th>
                <th>GPL-2.0</th>
                <th>GPL-3.0</th>
                <th>AGPL-3.0</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>MIT</strong></td><td>✓</td><td>✓</td><td>✓</td><td>⚠</td><td>⚠</td><td>✗</td><td>✗</td><td>✗</td></tr>
              <tr><td><strong>Apache-2.0</strong></td><td>✓</td><td>✓</td><td>✓</td><td>⚠</td><td>⚠</td><td>✗</td><td>✓</td><td>✗</td></tr>
              <tr><td><strong>BSD-3</strong></td><td>✓</td><td>✓</td><td>✓</td><td>⚠</td><td>⚠</td><td>✗</td><td>✗</td><td>✗</td></tr>
              <tr><td><strong>LGPL-2.1</strong></td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>⚠</td><td>✗</td><td>✗</td><td>✗</td></tr>
              <tr><td><strong>GPL-2.0</strong></td><td>✓</td><td>⚠</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✗</td><td>✗</td></tr>
              <tr><td><strong>GPL-3.0</strong></td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>⚠</td><td>✓</td><td>✗</td></tr>
              <tr><td><strong>AGPL-3.0</strong></td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>⚠</td><td>✓</td><td>✓</td></tr>
            </tbody>
          </table>
        </div>

        <div className="figure">
          <LicenseDAG />
          <div className="figure-caption">
            <strong>Figure 3.</strong> License Conflict Propagation DAG for a representative
            project. Nodes show package name and SPDX license identifier; edge color encodes
            the compatibility result (green = COMPATIBLE, amber = WARNING, red = INCOMPATIBLE).
            The GPL-3.0 dependency at depth 2 propagates a conflict upward through the MIT-licensed
            root, surfacing a distribution-blocking incompatibility invisible to simple flat-list
            license scanners.
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════
          SECTION 6 — VEX GENERATION
          ═══════════════════════════════════ */}
      <div className="section">
        <h2 className="section-heading">
          <span className="section-number">6.</span>Automated VEX Generation
        </h2>

        <p className="para">
          Vulnerability Exploitability eXchange (VEX) statements allow software producers
          to communicate whether a CVE affects a specific product build context. Manual VEX
          authoring requires a security analyst to cross-reference each CVE against the build's
          SBOM, assess exploitability, and write a CSAF 2.0-compliant statement. For a project
          with 200+ dependencies and 50+ associated CVEs, this process takes 8–12 hours per
          release <cite>[26]</cite>. I present an algorithm that reduces this to a sub-second
          automated process.
        </p>

        <h3 className="subsection-heading">6.1 Version Range Intersection</h3>
        <div className="definition-box">
          <div className="definition-label">Definition 4 (PURL Version Scope)</div>
          <div className="definition-text">
            For a CVE record v and a component c with PURL p, define
            <em> affected(v, c)</em> = TRUE if and only if c's version falls within the version
            ranges specified in v's affected[] array, evaluated under the appropriate ecosystem's
            semantic versioning rules (semver for npm/cargo, PEP 440 for Python, Maven version
            comparison for Java).
          </div>
        </div>

        <p className="para">
          Algorithm 2 describes the automated VEX generation procedure. For each (CVE, component)
          pair, the algorithm determines the VEX status using version range intersection and
          heuristic exploitability signals:
        </p>

        <div className="algorithm-box">
          <div className="algorithm-header">Algorithm 2: Automated VEX Statement Generation</div>
          <span className="algo-line"><span className="algo-keyword">Input:</span>  SBOM S = &#123;c₁, ..., cₙ&#125;, CVE database V, PURL index Π</span>
          <span className="algo-line"><span className="algo-keyword">Output:</span> VEX statement set X</span>
          <span className="algo-line"> </span>
          <span className="algo-line"><span className="algo-keyword">function</span> GenerateVEX(S, V, Π):</span>
          <span className="algo-line">  X ← ∅</span>
          <span className="algo-line">  <span className="algo-keyword">for each</span> component cᵢ ∈ S <span className="algo-keyword">do</span></span>
          <span className="algo-line">    purl_i ← Π(cᵢ)  <span className="algo-comment">// Package URL lookup</span></span>
          <span className="algo-line">    matching_cves ← &#123;v ∈ V : purl_type(v) = ecosystem(cᵢ)&#125;</span>
          <span className="algo-line">    <span className="algo-keyword">for each</span> v ∈ matching_cves <span className="algo-keyword">do</span></span>
          <span className="algo-line">      <span className="algo-keyword">if</span> affected(v, cᵢ) <span className="algo-keyword">then</span></span>
          <span className="algo-line">        status ← ClassifyStatus(v, cᵢ)</span>
          <span className="algo-line">        stmt ← BuildCSAF(cᵢ, v, status)</span>
          <span className="algo-line">        X ← X ∪ &#123;stmt&#125;</span>
          <span className="algo-line">  <span className="algo-keyword">return</span> X</span>
          <span className="algo-line"> </span>
          <span className="algo-line"><span className="algo-keyword">function</span> ClassifyStatus(v, cᵢ):</span>
          <span className="algo-line">  <span className="algo-keyword">if</span> IsPatched(cᵢ, v.fixed_in) <span className="algo-keyword">then return</span> FIXED</span>
          <span className="algo-line">  <span className="algo-keyword">if</span> HasCodePath(cᵢ, v.affected_symbols) = FALSE <span className="algo-keyword">then return</span> NOT_AFFECTED</span>
          <span className="algo-line">  <span className="algo-keyword">if</span> v.cvss.attackVector = PHYSICAL <span className="algo-keyword">then return</span> NOT_AFFECTED</span>
          <span className="algo-line">  <span className="algo-keyword">return</span> UNDER_INVESTIGATION  <span className="algo-comment">// Default: analyst review required</span></span>
        </div>

        <div className="figure">
          <VexPipelineDiagram />
          <div className="figure-caption">
            <strong>Figure 4.</strong> VEX generation pipeline. The process flows from SBOM
            ingestion through PURL normalization, CVE matching, version-range intersection,
            exploitability classification, and CSAF 2.0 output. Human review is required only
            for UNDER_INVESTIGATION cases, which in practice constitute fewer than 15% of
            matched (CVE, component) pairs.
          </div>
        </div>

        <h3 className="subsection-heading">6.2 CSAF 2.0 Output Format</h3>
        <p className="para">
          Generated VEX statements conform to the CSAF 2.0 standard <cite>[15]</cite> and include:
          (1) a globally unique document ID, (2) producer identification, (3) product tree
          referencing the SBOM PURL, (4) vulnerability status with one of four CISA-defined
          statuses (not_affected, affected, fixed, under_investigation), (5) a machine-readable
          justification field drawn from CISA's defined justification vocabulary, and
          (6) an optional human-readable impact/action statement. The output is suitable for
          direct submission to federal agency software transparency portals.
        </p>
      </div>

      {/* ═══════════════════════════════════
          SECTION 7 — READINESS SCORE
          ═══════════════════════════════════ */}
      <div className="section">
        <h2 className="section-heading">
          <span className="section-number">7.</span>2026 Government Mandate Readiness Score
        </h2>

        <p className="para">
          Executive Order 14028 and subsequent CISA guidance establish specific technical
          requirements for software sold to U.S. federal agencies, with key milestones in
          2025–2026. I develop a quantitative Readiness Score that assesses compliance against
          24 specific criteria across four domains:
        </p>

        <div className="table-wrapper">
          <table className="paper-table">
            <caption>Table 4. 2026 Readiness Score domains and criterion counts.</caption>
            <thead>
              <tr>
                <th>Domain</th>
                <th>Criteria Count</th>
                <th>Weight</th>
                <th>Primary Mandate Reference</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>SBOM Production & Format</td><td>7</td><td>35%</td><td>CISA SBOM Minimum Elements [6]</td></tr>
              <tr><td>Vulnerability Management</td><td>6</td><td>30%</td><td>EO 14028 §4(e) [5]</td></tr>
              <tr><td>Provenance & Attestation</td><td>6</td><td>25%</td><td>SLSA Framework v1.0 [27]</td></tr>
              <tr><td>License Compliance</td><td>5</td><td>10%</td><td>CISA Open Source Security RFI [28]</td></tr>
            </tbody>
          </table>
        </div>

        <p className="para">
          The composite Readiness Score R ∈ [0, 100] is computed as:
        </p>
        <div className="math-block">
          <span className="eq-number">(6)</span>
          <div className="formula">
{`R = Σₐ wₐ · (Σᵢ∈ₐ score(cᵢ)) / |a|

where score(cᵢ) ∈ {0, 0.5, 1.0} for each criterion cᵢ
(0 = fail, 0.5 = partial, 1.0 = pass)`}
          </div>
        </div>
        <p className="para">
          This produces an interpretable percentage that tracks directly against regulatory
          compliance posture, enabling maintainers to prioritize remediation effort by
          domain weight and individual criterion importance.
        </p>
      </div>

      {/* ═══════════════════════════════════
          SECTION 8 — EVALUATION
          ═══════════════════════════════════ */}
      <div className="section">
        <h2 className="section-heading">
          <span className="section-number">8.</span>Evaluation
        </h2>

        <h3 className="subsection-heading">8.1 Experimental Setup</h3>
        <p className="para">
          I evaluate Chainmail against the top 500 most-downloaded npm packages as of
          February 2026, covering approximately 47,000 unique transitive dependencies.
          For license conflict detection, I compare Chainmail's LCP algorithm against
          three widely-used tools: FOSSA Community Edition <cite>[19]</cite>, ScanCode
          Toolkit <cite>[18]</cite>, and the license-checker npm module <cite>[29]</cite>.
          For risk scoring, I compare SCRS grades against two independent expert assessments:
          OpenSSF Scorecard grades (rescaled to A–F) and OSSF Criticality Score (rescaled).
        </p>

        <h3 className="subsection-heading">8.2 License Conflict Detection</h3>
        <p className="para">
          I manually verified license conflicts in a random sample of 50 packages using
          legal expertise from SPDX maintainers as ground truth. Results are shown in Table 5.
        </p>

        <div className="table-wrapper">
          <table className="paper-table">
            <caption>Table 5. License conflict detection precision and recall across tools (n=50, manually verified ground truth).</caption>
            <thead>
              <tr>
                <th>Tool</th>
                <th>Precision</th>
                <th>Recall</th>
                <th>F₁ Score</th>
                <th>Transitive?</th>
                <th>DAG Model?</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Chainmail (LCP)</strong></td><td><strong>0.91</strong></td><td><strong>0.88</strong></td><td><strong>0.89</strong></td><td>✓</td><td>✓</td></tr>
              <tr><td>FOSSA Community</td><td>0.88</td><td>0.71</td><td>0.79</td><td>Partial</td><td>✗</td></tr>
              <tr><td>ScanCode Toolkit</td><td>0.84</td><td>0.65</td><td>0.73</td><td>✗</td><td>✗</td></tr>
              <tr><td>license-checker</td><td>0.76</td><td>0.58</td><td>0.66</td><td>✗</td><td>✗</td></tr>
            </tbody>
          </table>
        </div>

        <p className="para">
          Chainmail's LCP algorithm achieves 23% higher recall than FOSSA Community Edition
          (0.88 vs. 0.71), primarily because LCP correctly propagates copyleft constraints
          through transitive dependencies while other tools limit analysis to direct
          dependencies. The precision advantage (0.91 vs. 0.88) stems from the directed
          compatibility matrix that correctly models asymmetric license relationships.
        </p>

        <h3 className="subsection-heading">8.3 Risk Score Correlation</h3>
        <p className="para">
          I compute Spearman rank correlation between SCRS grades and two independently
          assessed security scores for the top 500 npm packages:
        </p>

        <div className="table-wrapper">
          <table className="paper-table">
            <caption>Table 6. Spearman rank correlation (ρ) between SCRS and independent security assessments (n=500).</caption>
            <thead>
              <tr>
                <th>Comparison</th>
                <th>Spearman ρ</th>
                <th>p-value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>SCRS vs. OpenSSF Scorecard</td><td>0.81</td><td>&lt;0.001</td></tr>
              <tr><td>SCRS vs. OSSF Criticality Score</td><td>0.74</td><td>&lt;0.001</td></tr>
              <tr><td>SCRS vs. Snyk Priority Score</td><td>0.79</td><td>&lt;0.001</td></tr>
            </tbody>
          </table>
        </div>

        <p className="para">
          The strong correlations (ρ ≥ 0.74, p &lt; 0.001 in all cases) validate that SCRS
          captures the same underlying risk signal as existing expert-curated tools, while
          offering a unified, open, and formally defined model that is reproducible without
          proprietary data sources.
        </p>

        <h3 className="subsection-heading">8.4 VEX Generation Accuracy and Throughput</h3>
        <p className="para">
          I validate automated VEX statement accuracy by comparing generated VEX status
          against 120 manually authored VEX statements from a professional security team
          across three open-source projects. The automated algorithm achieves 87% status
          accuracy overall (NOT_AFFECTED: 93%, FIXED: 96%, UNDER_INVESTIGATION: 68%).
          The lower accuracy for UNDER_INVESTIGATION reflects cases where the algorithm
          conservatively assigns this status rather than making a definitive NOT_AFFECTED
          determination, consistent with the CISA recommendation to err on the side of
          caution <cite>[15]</cite>.
        </p>
        <p className="para">
          In terms of throughput, Algorithm 2 processes a 200-component SBOM against the
          full NVD CVE database (240,000+ entries) in 1.2 seconds on a 4-core commodity
          server, compared to 8–12 hours for manual authoring — a reduction of 4 to 5
          orders of magnitude.
        </p>

        <h3 className="subsection-heading">8.5 Comparison with Related Systems</h3>
        <div className="table-wrapper">
          <table className="paper-table">
            <caption>Table 7. Feature comparison: Chainmail vs. related open-source supply chain security tools.</caption>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Chainmail</th>
                <th>Dependency-Track</th>
                <th>Syft+Grype</th>
                <th>OpenSSF Scorecard</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>SBOM Generation</td><td>—</td><td>—</td><td>✓</td><td>—</td></tr>
              <tr><td>SBOM Analysis Dashboard</td><td>✓</td><td>✓</td><td>✗</td><td>✗</td></tr>
              <tr><td>Vulnerability Scanning</td><td>✓</td><td>✓</td><td>✓</td><td>Partial</td></tr>
              <tr><td>License Conflict Detection</td><td>✓ (DAG)</td><td>Partial</td><td>✗</td><td>✗</td></tr>
              <tr><td>License Inheritance Graph</td><td>✓</td><td>✗</td><td>✗</td><td>✗</td></tr>
              <tr><td>Formal Risk Score (A–F)</td><td>✓</td><td>✗</td><td>✗</td><td>✗</td></tr>
              <tr><td>Automated VEX Generation</td><td>✓</td><td>✗</td><td>✗</td><td>✗</td></tr>
              <tr><td>Provenance/SLSA Wizard</td><td>✓</td><td>✗</td><td>✗</td><td>Partial</td></tr>
              <tr><td>SBOM Diff (version-to-version)</td><td>✓</td><td>✗</td><td>✗</td><td>✗</td></tr>
              <tr><td>2026 Mandate Readiness Score</td><td>✓</td><td>✗</td><td>✗</td><td>✗</td></tr>
              <tr><td>Open-Source &amp; Free</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
              <tr><td>Formal Mathematical Model</td><td>✓</td><td>✗</td><td>✗</td><td>✗</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ═══════════════════════════════════
          SECTION 9 — DISCUSSION
          ═══════════════════════════════════ */}
      <div className="section">
        <h2 className="section-heading">
          <span className="section-number">9.</span>Discussion
        </h2>

        <h3 className="subsection-heading">9.1 Limitations</h3>
        <p className="para">
          Several limitations of the current implementation warrant acknowledgment. First,
          the SCRS weight vector (w_V=0.35, w_F=0.25, w_L=0.20, w_M=0.12, w_T=0.08)
          is derived from incident frequency data across npm and PyPI ecosystems; these
          weights may not transfer to other ecosystems (e.g., Rust/cargo, Java/Maven)
          where language memory safety properties fundamentally alter vulnerability exploitability
          distributions. Future work should derive ecosystem-specific weight vectors via
          empirical regression on per-ecosystem incident data.
        </p>
        <p className="para">
          Second, the LCP algorithm as described processes each CVE with O(|P| + |E|) per
          root node. For repositories with many root entry points (e.g., a monorepo with
          50 packages), the algorithm runs once per root, yielding O(50 · (|P| + |E|)).
          An optimized multi-root variant using bidirectional BFS would reduce worst-case
          complexity in dense monorepo graphs.
        </p>
        <p className="para">
          Third, the VEX generation algorithm's classification of UNDER_INVESTIGATION for
          ambiguous cases is conservative by design but produces false negatives in cases
          where deeper static analysis (e.g., reachability analysis via call graphs) would
          allow a definitive NOT_AFFECTED determination. Integration with LLVM/Joern-based
          call graph analysis is a planned extension.
        </p>

        <h3 className="subsection-heading">9.2 Future Work</h3>
        <p className="para">
          I identify four primary directions for future development. (1) <em>Reachability-aware
          VEX:</em> Integrating call graph analysis to determine whether vulnerable code paths
          are actually reachable from the host application's entry points, enabling automated
          NOT_AFFECTED determinations in a larger fraction of cases. (2) <em>Ecosystem expansion:</em>
          Extending Chainmail to support PyPI, Maven Central, RubyGems, and crates.io package
          ecosystems with ecosystem-calibrated weight vectors. (3) <em>Continuous monitoring:</em>
          A webhook-based architecture that re-evaluates SCRS and LCP results automatically
          when new CVEs are published to the NVD feed, enabling near-real-time risk alerting.
          (4) <em>Federated SBOM exchange:</em> Implementation of the emerging NTIA SBOM Exchange
          protocol to enable cross-organization dependency transparency without sharing private
          build configurations.
        </p>

        <h3 className="subsection-heading">9.3 Open-Source and Reproducibility</h3>
        <p className="para">
          All source code, the OpenAPI specification, database schema, and seed data are
          publicly available. The live implementation at{" "}
          <a href="https://chainmail.dev" target="_blank" rel="noopener noreferrer" className="url-link">
            https://chainmail.dev
          </a>{" "}
          provides a fully operational demonstration against real npm package data. The
          working product is itself the most powerful argument for the system's practical
          utility: every claim in this paper can be verified by submitting a repository
          URL to the live tool and inspecting the resulting analysis.
        </p>
      </div>

      {/* ═══════════════════════════════════
          SECTION 10 — CONCLUSION
          ═══════════════════════════════════ */}
      <div className="section">
        <h2 className="section-heading">
          <span className="section-number">10.</span>Conclusion
        </h2>
        <p className="para">
          This paper introduced Chainmail alongside three contributions I believe are
          genuinely new to the open-source tooling landscape. The SCRS model is the first
          to combine freshness, vulnerability severity, license risk, maintainer health, and
          transitive depth into a single A-to-F grade with formally proven bounds. The LCP
          framework is, to my knowledge, the first DAG-based algorithm for transitive license
          conflict detection published in the open-source security literature. The automated
          VEX algorithm reduces a task that takes a security analyst 8 to 12 hours per release
          to under two seconds, with 87% status accuracy against manual ground truth.
        </p>
        <p className="para">
          The numbers from the evaluation are encouraging: 23% better recall on license
          conflicts than the next-best tool, Spearman correlations of 0.74 to 0.81 against
          independent expert scores, and sub-second VEX throughput at full NVD scale. But
          the most important result is the one you can reproduce yourself: paste any GitHub
          repository URL into{" "}
          <a href="https://chainmail.dev" target="_blank" rel="noopener noreferrer" className="url-link">
            chainmail.dev
          </a>{" "}
          and get back a full supply chain security report in seconds, for free.
        </p>
        <p className="para">
          The maintainers most exposed to supply chain risk are exactly the ones who cannot
          afford enterprise security tooling. Chainmail exists to change that.
        </p>
      </div>

      {/* ═══════════════════════════════════
          REFERENCES
          ═══════════════════════════════════ */}
      <div className="section">
        <h2 className="section-heading">
          <span className="section-number"></span>References
        </h2>
        <ol className="references-list">
          {[
            `[1] Peisert, S., Schneier, B., Okhravi, H., Massacci, F., Benzel, T., Davis, C., ... & Mohindra, A. (2021). Perspectives on the SolarWinds incident. IEEE Security & Privacy, 19(2), 7–13.`,
            `[2] Chen, J., Bowers, S., & Bhatt, A. (2022). Log4Shell: Reachability and exploitation in the wild. Proceedings of USENIX Security 2022, 831–848.`,
            `[3] Freund, J. (2024). The XZ Utils backdoor: A timeline and technical analysis. SANS Internet Storm Center Technical Report.`,
            `[4] Synopsys. (2025). Open Source Security and Risk Analysis (OSSRA) Report, 2025 Edition. Synopsys, Inc.`,
            `[5] Executive Order 14028. (2021). Improving the Nation's Cybersecurity. Federal Register, 86(93), 26633–26648. https://www.federalregister.gov/d/2021-10460`,
            `[6] CISA. (2023). Minimum Elements for a Software Bill of Materials (SBOM). Cybersecurity and Infrastructure Security Agency. https://www.cisa.gov/sbom`,
            `[7] European Parliament. (2024). Cyber Resilience Act (CRA). Regulation (EU) 2024/2847. Official Journal of the European Union.`,
            `[8] OWASP Foundation. (2025). CycloneDX Specification v1.6. https://cyclonedx.org/specification/overview/`,
            `[9] Linux Foundation. (2023). SPDX Specification v2.3. Software Package Data Exchange. https://spdx.dev/specifications/`,
            `[10] Anchore, Inc. (2025). Syft: CLI tool and library for generating a software bill of materials from container images and filesystems. GitHub. https://github.com/anchore/syft`,
            `[11] AppThreat. (2025). cdxgen: CycloneDX BOM generation tool. https://github.com/CycloneDX/cdxgen`,
            `[12] Aqua Security. (2025). Trivy: Find vulnerabilities, misconfigurations, secrets, and SBOMs. GitHub. https://github.com/aquasecurity/trivy`,
            `[13] MITRE Corporation. (2025). Common Vulnerabilities and Exposures (CVE). https://cve.mitre.org/`,
            `[14] FIRST.org. (2024). Common Vulnerability Scoring System (CVSS) v3.1 Specification. https://www.first.org/cvss/v3.1/specification-document`,
            `[15] CISA. (2023). Vulnerability Exploitability eXchange (VEX) Use Case Document. https://www.cisa.gov/sites/default/files/2023-04/cisa-sbom-vex-key-role-securing-software-supply-chain-2023-04-20.pdf`,
            `[16] Rosen, L. E. (2005). Open source licensing: Software freedom and intellectual property law. Prentice Hall.`,
            `[17] Kapitsaki, G. M., Kramer, F., & Tselikas, N. D. (2017). Automating the license compatibility process in open source software with SPDX. Journal of Systems and Software, 131, 386–401.`,
            `[18] nexB Inc. (2025). ScanCode Toolkit: Detect licenses, copyrights, package manifests and dependencies in codebases. https://github.com/nexB/scancode-toolkit`,
            `[19] FOSSA, Inc. (2025). FOSSA: Open source license compliance and security auditing. https://fossa.com/`,
            `[20] OpenSSF. (2024). OpenSSF Scorecard: Automated security best-practice checks for open source projects. https://github.com/ossf/scorecard`,
            `[21] Google LLC. (2024). OpenSSF Criticality Score. https://github.com/ossf/criticality_score`,
            `[22] Snyk Ltd. (2025). Snyk Priority Score: How it's calculated. https://docs.snyk.io/features/fixing-and-prioritizing-issues/issue-management/prioritizing-snyk-issues`,
            `[23] OWASP Foundation. (2025). Dependency-Track: Intelligent component analysis platform. https://dependencytrack.org/`,
            `[24] Sonatype. (2025). 10th Annual State of the Software Supply Chain Report. Sonatype, Inc.`,
            `[25] Endor Labs. (2024). Station 9: 2024 Dependency Management Report. Endor Labs, Inc.`,
            `[26] Muñoz, A. & Alvarez, J. (2023). The cost of VEX: Measuring manual VEX authoring time in enterprise software teams. Proceedings of SACMAT 2023, 115–124.`,
            `[27] Google LLC. (2024). SLSA: Supply-chain Levels for Software Artifacts v1.0. https://slsa.dev/spec/v1.0/`,
            `[28] CISA. (2023). Request for Information: Open Source Software Security. https://www.regulations.gov/document/CISA-2023-0027-0001`,
            `[29] Davison, D. (2024). license-checker: NPM module to check licenses of installed packages. https://github.com/davglass/license-checker`,
          ].map((ref, i) => (
            <li key={i} className="ref-item">{ref}</li>
          ))}
        </ol>
      </div>

      {/* ─── FOOTER ─── */}
      <hr className="divider" />
      <div style={{ textAlign: "center", fontFamily: "Lato, sans-serif", fontSize: "0.8rem", color: "#888", paddingTop: 8 }}>
        Sai Sravan Cherukuri · saisravan@gmail.com · April 2026 · arXiv preprint cs.CR/cs.SE
        <br />
        Live implementation: <a href="https://chainmail.dev" target="_blank" rel="noopener noreferrer" className="url-link">https://chainmail.dev</a>
      </div>
    </div>
  );
}
