import { Router, type IRouter } from "express";
import { db, componentsTable } from "@workspace/db";
import {
  GetLicenseReportParams,
  GetLicenseReportResponse,
  GetLicenseTreeParams,
  GetLicenseTreeResponse,
} from "@workspace/api-zod";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

const LICENSE_CATEGORIES: Record<string, string> = {
  MIT: "permissive",
  "Apache-2.0": "permissive",
  ISC: "permissive",
  "BSD-3-Clause": "permissive",
  "BSD-2-Clause": "permissive",
  "CC0-1.0": "permissive",
  Unlicense: "permissive",
  "LGPL-2.1": "weak_copyleft",
  "LGPL-3.0": "weak_copyleft",
  "MPL-2.0": "weak_copyleft",
  "CDDL-1.0": "weak_copyleft",
  "GPL-2.0": "strong_copyleft",
  "GPL-3.0": "strong_copyleft",
  "AGPL-3.0": "strong_copyleft",
};

function getLicenseCategory(license: string): string {
  return LICENSE_CATEGORIES[license] ?? "unknown";
}

const CONFLICT_TYPES = ["copyleft_with_proprietary", "incompatible_licenses", "license_unknown", "license_restriction"];

router.get("/analyses/:id/licenses", async (req, res) => {
  try {
    const { id } = GetLicenseReportParams.parse(req.params);
    const components = await db.select().from(componentsTable).where(eq(componentsTable.analysisId, id));

    const licenseMap = new Map<string, number>();
    for (const c of components) {
      licenseMap.set(c.license, (licenseMap.get(c.license) ?? 0) + 1);
    }

    const total = components.length || 1;
    const distribution = Array.from(licenseMap.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([license, count]) => ({
        license,
        count,
        percentage: Math.round((count / total) * 100 * 10) / 10,
        category: getLicenseCategory(license),
      }));

    const conflicts = components
      .filter((c) => !["MIT", "Apache-2.0", "ISC", "BSD-3-Clause", "BSD-2-Clause", "CC0-1.0", "Unlicense"].includes(c.license))
      .slice(0, 5)
      .map((c) => ({
        id: c.id,
        packageName: c.name,
        packageVersion: c.version,
        license: c.license,
        conflictType: CONFLICT_TYPES[Math.floor(Math.random() * CONFLICT_TYPES.length)],
        severity: ["GPL-3.0", "AGPL-3.0"].includes(c.license) ? "error" as const : "warning" as const,
        description: `Package ${c.name} uses ${c.license} which may be incompatible with your project license.`,
      }));

    const hasConflicts = conflicts.length > 0;

    const data = GetLicenseReportResponse.parse({
      analysisId: id,
      distribution,
      conflicts,
      compatibility: hasConflicts && conflicts.some((c) => c.severity === "error") ? "conflicts" : hasConflicts ? "warnings" : "clean",
    });
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "license report error");
    res.status(500).json({ error: "Internal server error" });
  }
});

function buildTree(components: Array<{ id: string; name: string; version: string; license: string; isDirect: boolean }>) {
  const direct = components.filter((c) => c.isDirect);
  const indirect = components.filter((c) => !c.isDirect);

  return direct.map((c, i) => ({
    name: c.name,
    version: c.version,
    license: c.license,
    licenseCategory: getLicenseCategory(c.license),
    hasConflict: !["MIT", "Apache-2.0", "ISC", "BSD-3-Clause", "BSD-2-Clause", "CC0-1.0", "Unlicense"].includes(c.license),
    children: indirect.slice(i * 3, i * 3 + 3).map((ic) => ({
      name: ic.name,
      version: ic.version,
      license: ic.license,
      licenseCategory: getLicenseCategory(ic.license),
      hasConflict: !["MIT", "Apache-2.0", "ISC", "BSD-3-Clause", "BSD-2-Clause", "CC0-1.0", "Unlicense"].includes(ic.license),
      children: [],
    })),
  }));
}

router.get("/analyses/:id/license-tree", async (req, res) => {
  try {
    const { id } = GetLicenseTreeParams.parse(req.params);
    const components = await db.select().from(componentsTable).where(eq(componentsTable.analysisId, id));

    const subTree = buildTree(components);

    const data = GetLicenseTreeResponse.parse({
      name: "root",
      version: "0.0.0",
      license: "Mixed",
      licenseCategory: "unknown",
      hasConflict: subTree.some((n) => n.hasConflict),
      children: subTree,
    });
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "license tree error");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
