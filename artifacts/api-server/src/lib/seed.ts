import { db, analysesTable, componentsTable, vulnerabilitiesTable, vexStatementsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";

const LICENSES = ["MIT", "Apache-2.0", "ISC", "BSD-3-Clause", "GPL-2.0", "GPL-3.0", "LGPL-2.1", "LGPL-3.0", "MPL-2.0", "AGPL-3.0", "CC0-1.0", "Unlicense"];
const PERMISSIVE = new Set(["MIT", "Apache-2.0", "ISC", "BSD-3-Clause", "CC0-1.0", "Unlicense"]);

const NPM_PACKAGES = [
  { name: "express", versions: ["4.18.2", "4.19.2", "5.0.0"], license: "MIT" },
  { name: "lodash", versions: ["4.17.21"], license: "MIT" },
  { name: "react", versions: ["18.2.0", "18.3.1"], license: "MIT" },
  { name: "typescript", versions: ["5.4.5", "5.5.3"], license: "Apache-2.0" },
  { name: "axios", versions: ["1.6.8", "1.7.2"], license: "MIT" },
  { name: "moment", versions: ["2.29.4"], license: "MIT" },
  { name: "webpack", versions: ["5.91.0"], license: "MIT" },
  { name: "babel-core", versions: ["7.24.5"], license: "MIT" },
  { name: "eslint", versions: ["8.57.0"], license: "MIT" },
  { name: "jest", versions: ["29.7.0"], license: "MIT" },
  { name: "postgres", versions: ["3.4.4"], license: "MIT" },
  { name: "jsonwebtoken", versions: ["9.0.2", "8.5.1"], license: "MIT" },
  { name: "bcrypt", versions: ["5.1.1"], license: "MIT" },
  { name: "dotenv", versions: ["16.4.5"], license: "BSD-3-Clause" },
  { name: "nodemon", versions: ["3.1.4"], license: "MIT" },
  { name: "multer", versions: ["1.4.5-lts.1"], license: "MIT" },
  { name: "socket.io", versions: ["4.7.5"], license: "MIT" },
  { name: "redis", versions: ["4.6.13"], license: "MIT" },
  { name: "mongoose", versions: ["8.4.3"], license: "MIT" },
  { name: "sequelize", versions: ["6.37.3"], license: "MIT" },
  { name: "passport", versions: ["0.7.0"], license: "MIT" },
  { name: "helmet", versions: ["7.1.0"], license: "MIT" },
  { name: "morgan", versions: ["1.10.0"], license: "MIT" },
  { name: "compression", versions: ["1.7.4"], license: "MIT" },
  { name: "node-fetch", versions: ["3.3.2"], license: "MIT" },
  { name: "uuid", versions: ["9.0.1"], license: "MIT" },
  { name: "minimist", versions: ["1.2.8"], license: "MIT" },
  { name: "yargs", versions: ["17.7.2"], license: "MIT" },
  { name: "chalk", versions: ["5.3.0"], license: "MIT" },
  { name: "semver", versions: ["7.6.2"], license: "ISC" },
  { name: "cross-env", versions: ["7.0.3"], license: "MIT" },
  { name: "rimraf", versions: ["5.0.7"], license: "ISC" },
  { name: "debug", versions: ["4.3.5"], license: "MIT" },
  { name: "glob", versions: ["10.4.1"], license: "ISC" },
  { name: "path-to-regexp", versions: ["6.2.2"], license: "MIT" },
  { name: "node-gyp", versions: ["10.1.0"], license: "MIT" },
  { name: "acorn", versions: ["8.11.3"], license: "MIT" },
  { name: "caniuse-lite", versions: ["1.0.30001634"], license: "CC-BY-4.0" },
  { name: "browserify", versions: ["17.0.0"], license: "MIT" },
  { name: "tap", versions: ["18.8.0"], license: "ISC" },
  { name: "handlebars", versions: ["4.7.8"], license: "MIT" },
  { name: "qs", versions: ["6.12.1"], license: "BSD-3-Clause" },
  { name: "mime", versions: ["3.0.0"], license: "MIT" },
  { name: "form-data", versions: ["4.0.0"], license: "MIT" },
  { name: "formidable", versions: ["3.5.1"], license: "MIT" },
  { name: "pg", versions: ["8.11.5"], license: "MIT" },
  { name: "graceful-fs", versions: ["4.2.11"], license: "ISC" },
  { name: "inflight", versions: ["1.0.6"], license: "ISC" },
  { name: "readable-stream", versions: ["4.5.2"], license: "MIT" },
  { name: "lru-cache", versions: ["10.2.2"], license: "ISC" },
];

const CVE_POOL = [
  { id: "CVE-2023-44487", title: "HTTP/2 Rapid Reset Attack", severity: "HIGH" as const, cvss: 7.5 },
  { id: "CVE-2024-21626", title: "Container Breakout via runc", severity: "HIGH" as const, cvss: 8.6 },
  { id: "CVE-2023-46589", title: "Prototype Pollution in lodash", severity: "HIGH" as const, cvss: 7.4 },
  { id: "CVE-2024-29896", title: "ReDoS in path-to-regexp", severity: "HIGH" as const, cvss: 7.5 },
  { id: "CVE-2023-28155", title: "SSRF in node-fetch redirect handling", severity: "MEDIUM" as const, cvss: 5.3 },
  { id: "CVE-2024-4068", title: "braces ReDoS vulnerability", severity: "HIGH" as const, cvss: 7.5 },
  { id: "CVE-2023-26159", title: "URL Redirection in follow-redirects", severity: "MEDIUM" as const, cvss: 6.1 },
  { id: "CVE-2024-37890", title: "Memory Corruption in ws", severity: "HIGH" as const, cvss: 7.5 },
  { id: "CVE-2023-45133", title: "Arbitrary Code Execution in @babel/traverse", severity: "CRITICAL" as const, cvss: 9.8 },
  { id: "CVE-2024-24758", title: "Proxy-Authorization header leak", severity: "LOW" as const, cvss: 3.1 },
  { id: "CVE-2023-39017", title: "Remote Code Execution in quartz-scheduler", severity: "CRITICAL" as const, cvss: 9.1 },
  { id: "CVE-2024-28849", title: "Sensitive info leak in follow-redirects", severity: "MEDIUM" as const, cvss: 6.5 },
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickN<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

export async function seedAnalysis(analysisId: string): Promise<void> {
  const pkgCount = 30 + Math.floor(Math.random() * 40);
  const pkgs = pickN(NPM_PACKAGES, Math.min(pkgCount, NPM_PACKAGES.length));

  const components = pkgs.map((pkg) => {
    const versionIdx = Math.floor(Math.random() * pkg.versions.length);
    const isStale = versionIdx < pkg.versions.length - 1 || Math.random() < 0.15;
    return {
      id: randomUUID(),
      analysisId,
      name: pkg.name,
      version: pkg.versions[versionIdx],
      license: pkg.license,
      isDirect: Math.random() < 0.3,
      isStale,
      latestVersion: pkg.versions[pkg.versions.length - 1],
      vulnerabilityCount: 0,
      publishedAt: new Date(Date.now() - Math.floor(Math.random() * 365 * 2) * 86400000),
    };
  });

  await db.insert(componentsTable).values(components);

  const numVulns = 3 + Math.floor(Math.random() * 8);
  const vulnCves = pickN(CVE_POOL, Math.min(numVulns, CVE_POOL.length));
  const vexOptions: Array<"not_affected" | "affected" | "under_investigation" | "fixed"> = ["not_affected", "affected", "under_investigation", "fixed"];

  const vulnerabilities = vulnCves.map((cve, i) => {
    const pkg = components[i % components.length];
    return {
      id: randomUUID(),
      analysisId,
      cveId: cve.id,
      severity: cve.severity,
      cvssScore: cve.cvss,
      packageName: pkg.name,
      packageVersion: pkg.version,
      title: cve.title,
      description: `Security vulnerability affecting ${pkg.name}@${pkg.version}. ${cve.title}.`,
      vexStatus: pick(vexOptions),
      fixedIn: Math.random() > 0.4 ? pkg.latestVersion ?? null : null,
      publishedAt: new Date(Date.now() - Math.floor(Math.random() * 180) * 86400000),
    };
  });

  if (vulnerabilities.length > 0) {
    await db.insert(vulnerabilitiesTable).values(vulnerabilities);
  }

  const criticalCount = vulnerabilities.filter((v) => v.severity === "CRITICAL").length;
  const highCount = vulnerabilities.filter((v) => v.severity === "HIGH").length;
  const staleCount = components.filter((c) => c.isStale).length;
  const nonPermissiveCount = components.filter((c) => !PERMISSIVE.has(c.license)).length;

  const riskScore = Math.min(
    100,
    criticalCount * 20 + highCount * 10 + staleCount * 2 + nonPermissiveCount * 3 + Math.floor(Math.random() * 15),
  );

  await db
    .update(analysesTable)
    .set({
      criticalCount,
      highCount,
      componentCount: components.length,
      licenseConflicts: nonPermissiveCount,
      riskScore,
      status: "complete",
    })
    .where(eq(analysesTable.id, analysisId));
}
