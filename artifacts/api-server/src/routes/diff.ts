import { Router, type IRouter } from "express";
import { db, componentsTable, vulnerabilitiesTable, analysesTable } from "@workspace/db";
import { CreateDiffBody, CreateDiffResponse } from "@workspace/api-zod";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

router.post("/diff", async (req, res) => {
  try {
    const body = CreateDiffBody.parse(req.body);
    const { baseAnalysisId, headAnalysisId } = body;

    const [baseComponents, headComponents, baseVulns, headVulns, baseAnalysis, headAnalysis] = await Promise.all([
      db.select().from(componentsTable).where(eq(componentsTable.analysisId, baseAnalysisId)),
      db.select().from(componentsTable).where(eq(componentsTable.analysisId, headAnalysisId)),
      db.select().from(vulnerabilitiesTable).where(eq(vulnerabilitiesTable.analysisId, baseAnalysisId)),
      db.select().from(vulnerabilitiesTable).where(eq(vulnerabilitiesTable.analysisId, headAnalysisId)),
      db.select().from(analysesTable).where(eq(analysesTable.id, baseAnalysisId)).then((r) => r[0]),
      db.select().from(analysesTable).where(eq(analysesTable.id, headAnalysisId)).then((r) => r[0]),
    ]);

    const baseMap = new Map(baseComponents.map((c) => [c.name, c]));
    const headMap = new Map(headComponents.map((c) => [c.name, c]));
    const baseVulnSet = new Set(baseVulns.map((v) => v.cveId));
    const headVulnSet = new Set(headVulns.map((v) => v.cveId));

    const added = headComponents
      .filter((c) => !baseMap.has(c.name))
      .map((c) => ({
        id: c.id,
        name: c.name,
        version: c.version,
        license: c.license,
        isDirect: c.isDirect,
        isStale: c.isStale,
        latestVersion: c.latestVersion ?? undefined,
        vulnerabilityCount: c.vulnerabilityCount,
        publishedAt: c.publishedAt ?? undefined,
      }));

    const removed = baseComponents
      .filter((c) => !headMap.has(c.name))
      .map((c) => ({
        id: c.id,
        name: c.name,
        version: c.version,
        license: c.license,
        isDirect: c.isDirect,
        isStale: c.isStale,
        latestVersion: c.latestVersion ?? undefined,
        vulnerabilityCount: c.vulnerabilityCount,
        publishedAt: c.publishedAt ?? undefined,
      }));

    const updated = headComponents
      .filter((c) => baseMap.has(c.name) && baseMap.get(c.name)!.version !== c.version)
      .slice(0, 10)
      .map((c) => {
        const old = baseMap.get(c.name)!;
        const oldVulns = baseVulns.filter((v) => v.packageName === c.name);
        const newVulnsForPkg = headVulns.filter((v) => v.packageName === c.name);
        return {
          component: {
            id: c.id,
            name: c.name,
            version: c.version,
            license: c.license,
            isDirect: c.isDirect,
            isStale: c.isStale,
            latestVersion: c.latestVersion ?? undefined,
            vulnerabilityCount: c.vulnerabilityCount,
            publishedAt: c.publishedAt ?? undefined,
          },
          oldVersion: old.version,
          newVulnerabilities: newVulnsForPkg.filter((v) => !oldVulns.some((ov) => ov.cveId === v.cveId)).length,
          removedVulnerabilities: oldVulns.filter((v) => !newVulnsForPkg.some((nv) => nv.cveId === v.cveId)).length,
        };
      });

    const newVulnerabilities = headVulns
      .filter((v) => !baseVulnSet.has(v.cveId))
      .map((v) => ({
        id: v.id,
        cveId: v.cveId,
        severity: v.severity,
        cvssScore: v.cvssScore,
        packageName: v.packageName,
        packageVersion: v.packageVersion,
        title: v.title,
        description: v.description ?? undefined,
        vexStatus: v.vexStatus,
        fixedIn: v.fixedIn ?? undefined,
        publishedAt: v.publishedAt ?? undefined,
      }));

    const resolvedVulnerabilities = baseVulns
      .filter((v) => !headVulnSet.has(v.cveId))
      .map((v) => ({
        id: v.id,
        cveId: v.cveId,
        severity: v.severity,
        cvssScore: v.cvssScore,
        packageName: v.packageName,
        packageVersion: v.packageVersion,
        title: v.title,
        description: v.description ?? undefined,
        vexStatus: v.vexStatus,
        fixedIn: v.fixedIn ?? undefined,
        publishedAt: v.publishedAt ?? undefined,
      }));

    const baseCritical = baseVulns.filter((v) => v.severity === "CRITICAL").length;
    const headCritical = headVulns.filter((v) => v.severity === "CRITICAL").length;
    const riskDelta = headCritical - baseCritical;

    const data = CreateDiffResponse.parse({
      baseAnalysisId,
      headAnalysisId,
      baseRepo: baseAnalysis?.repo,
      headRepo: headAnalysis?.repo,
      added,
      removed,
      updated,
      newVulnerabilities,
      resolvedVulnerabilities,
      riskDelta,
    });
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "diff error");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
