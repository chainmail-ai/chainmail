# Chainmail

**The unified, open-source security workbench for software supply chain integrity.**

Chainmail turns fragmented software supply chain evidence into one connected view of risk. It brings SBOM analysis, vulnerability triage, license intelligence, provenance verification, compliance readiness, and release comparison into a single workbench—so engineering and security teams can move from “what is in this build?” to “what should we fix first?” without stitching together eight separate tools.

![License: MIT](https://img.shields.io/badge/License-MIT-00C5D4?style=flat)
[![Live Demo](https://img.shields.io/badge/Live-Demo-00C5D4?style=flat)](https://chainmail.saisravancherukuri.com)
[![Research Paper](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.19934776-a78bfa?style=flat)](https://doi.org/10.5281/zenodo.19934776)

[Explore the live demo](https://chainmail.saisravancherukuri.com) · [Read the research paper](https://doi.org/10.5281/zenodo.19934776) · [View the security playbook](https://chainmail.saisravancherukuri.com/chainmail-playbook/)

## Why Chainmail?

Modern applications inherit risk from thousands of packages, build systems, registries, and upstream maintainers. The evidence needed to understand that risk usually lives in disconnected scanners, spreadsheets, policy portals, and CI logs.

Chainmail treats supply chain security as one connected analysis problem. A single analysis becomes the shared context for dependency health, vulnerabilities, licenses, risk, provenance, compliance, and changes between releases. Instead of another isolated scanner, Chainmail is a workbench for investigating the whole picture.

It is designed for:

- Security engineers triaging dependency and release risk.
- Platform teams building secure-by-default delivery workflows.
- Developers who need specific, actionable remediation context.
- Compliance teams preparing evidence for CISA and Executive Order 14028 requirements.
- Researchers studying transparent and reproducible supply chain risk analysis.

## One Analysis, Eight Lenses

| Lens | What it helps answer |
|---|---|
| **SBOM Health** | What direct and transitive components are present, and which dependencies are stale? |
| **Vulnerabilities** | Which CVEs affect the exact component versions in this analysis, and what is their VEX status? |
| **License Compliance** | Which licenses introduce policy, attribution, or copyleft concerns? |
| **License Tree** | Where does copyleft enter the dependency graph, and how can its obligations propagate? |
| **Risk Scoring** | What is the overall A–F posture across five risk dimensions, and what should be remediated first? |
| **Provenance** | Can the build's origin be supported by SLSA attestations and Sigstore verification? |
| **2026 Readiness** | Which CISA and EO 14028 expectations are satisfied, missing, or need evidence? |
| **SBOM Diffing** | What components and risks changed between two analyzed versions? |

These views share the same analysis context. Teams can begin with the overall risk picture, drill into the underlying evidence, and compare releases without losing the thread between findings.

## Product Workflow

1. **Create an analysis** for a repository and version in the workbench.
2. **Inspect the inventory** to understand the SBOM and dependency health.
3. **Triage exposure** through vulnerability and VEX views.
4. **Review obligations** with license reporting and the license dependency tree.
5. **Prioritize work** using the multidimensional risk score and remediation guidance.
6. **Verify trust** through provenance and signing evidence.
7. **Measure readiness** against supply chain security requirements.
8. **Compare releases** to see what was added, removed, or changed.

## What Makes It Different

- **Connected evidence:** findings are organized around a common analysis rather than isolated tool output.
- **Decision-oriented views:** the workbench connects raw findings to risk, remediation, and readiness.
- **Dependency-aware licensing:** the license tree shows where obligations originate and propagate.
- **Release intelligence:** SBOM diffing makes supply chain change visible between versions.
- **Transparent foundations:** the API contract, schemas, algorithms, paper, and implementation live together.
- **Open source:** Chainmail is MIT-licensed and can be inspected, extended, and self-hosted.

## Architecture

Chainmail is a TypeScript monorepo with a React workbench, an Express API, a PostgreSQL data model, generated API clients, an interactive security playbook, and a companion research-paper experience.

| Layer | Technology |
|---|---|
| Monorepo | pnpm workspaces |
| Runtime | Node.js 24 |
| Language | TypeScript 5.9 |
| Frontend | React 19, Vite, Tailwind CSS |
| Data fetching | TanStack Query |
| Backend | Express 5 |
| Database | PostgreSQL, Drizzle ORM |
| Validation | Zod, drizzle-zod |
| API contract | OpenAPI, Orval-generated clients |

```text
chainmail/
├── artifacts/
│   ├── chainmail/           # Main React workbench
│   ├── api-server/          # Express API
│   ├── chainmail-playbook/  # Interactive security playbook
│   ├── chainmail-paper/     # Research-paper experience
│   └── mockup-sandbox/      # Product design mockups
├── lib/
│   ├── db/                  # PostgreSQL schema and data access
│   ├── api-spec/            # OpenAPI contract and code generation
│   ├── api-zod/             # Generated validation schemas
│   └── api-client-react/    # Generated React Query client
└── scripts/                 # Shared workspace utilities
```

## Getting Started

### Prerequisites

- Node.js 24+
- pnpm 11+
- PostgreSQL for API and persistence features

Enable pnpm through Corepack if it is not already available:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

### Install and verify

```bash
pnpm install
pnpm run typecheck
pnpm run build
```

### Run the product

Start the API and web workbench in separate terminals:

```bash
# Terminal 1: API server
pnpm --filter @workspace/api-server run dev

# Terminal 2: main Chainmail workbench
pnpm --filter @workspace/chainmail run dev
```

The web workbench is available at [http://localhost:5173](http://localhost:5173) by default.

Additional experiences can be launched independently:

```bash
pnpm --filter @workspace/chainmail-playbook run dev
pnpm --filter @workspace/chainmail-paper run dev
pnpm --filter @workspace/mockup-sandbox run dev
```

The frontend can also be explored on its own. API-backed analysis data requires the API server and a configured PostgreSQL connection.

### Environment

Set the API server's database connection in your environment:

```text
DATABASE_URL=postgresql://user:password@localhost:5432/chainmail
```

The server accepts `PORT` when a custom port is needed. Vite applications accept `PORT` and `BASE_PATH`; otherwise they default to port `5173` and base path `/`.

### Database and API code generation

```bash
# Push the development schema
pnpm --filter @workspace/db run push

# Regenerate clients and schemas from the OpenAPI contract
pnpm --filter @workspace/api-spec run codegen
```

## Research and Security Playbook

Chainmail's methodology is documented in the companion paper:

> **Chainmail: A Unified Open-Source Security Workbench for Software Supply Chain Integrity**<br>
> Sai Sravan Cherukuri · Independent Researcher<br>
> Zenodo · May 2026 · [doi:10.5281/zenodo.19934776](https://doi.org/10.5281/zenodo.19934776)

The repository also includes an interactive security playbook that explains the threat landscape, the eight-tool model, and the project's roadmap.

## Contributing

Issues and pull requests are welcome. Before submitting a change, run:

```bash
pnpm run typecheck
pnpm run build
```

When changing the OpenAPI specification, regenerate the API clients and validation schemas before committing.

## Author

**Sai Sravan Cherukuri**<br>
Cybersecurity and quantum computing enthusiast<br>
[saisravan@gmail.com](mailto:saisravan@gmail.com)

## License

The software is available under the MIT License. The research paper is published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
