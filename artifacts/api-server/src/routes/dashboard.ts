import { Router, type IRouter } from "express";
import { db, analysesTable, componentsTable, vulnerabilitiesTable } from "@workspace/db";
import { GetDashboardResponse } from "@workspace/api-zod";
import { desc } from "drizzle-orm";

const router: IRouter = Router();

router.get("/dashboard", async (req, res) => {
  try {
    const [analyses, allComponents, allVulns] = await Promise.all([
      db.select().from(analysesTable).orderBy(desc(analysesTable.createdAt)).limit(100),
      db.select({ id: componentsTable.id }).from(componentsTable),
      db.select({ severity: vulnerabilitiesTable.severity }).from(vulnerabilitiesTable),
    ]);

    const complete = analyses.filter((a) => a.status === "complete");
    const totalVulns = allVulns.length;
    const criticalVulns = allVulns.filter((v) => v.severity === "CRITICAL").length;
    const totalLicenseConflicts = complete.reduce((s, a) => s + a.licenseConflicts, 0);
    const avgRisk = complete.length > 0
      ? Math.round(complete.reduce((sum, a) => sum + a.riskScore, 0) / complete.length)
      : 0;

    const recentAnalyses = analyses.slice(0, 5).map((a) => ({
      id: a.id,
      repo: a.repo,
      version: a.version ?? undefined,
      commitSha: a.commitSha ?? undefined,
      status: a.status,
      riskScore: a.riskScore,
      criticalCount: a.criticalCount,
      highCount: a.highCount,
      componentCount: a.componentCount,
      licenseConflicts: a.licenseConflicts,
      scannedAt: a.scannedAt,
      createdAt: a.createdAt,
    }));

    const topRiskyRepos = [...complete]
      .sort((a, b) => b.riskScore - a.riskScore)
      .slice(0, 3)
      .map((a) => ({ repo: a.repo, score: a.riskScore, criticalCount: a.criticalCount }));

    const data = GetDashboardResponse.parse({
      totalAnalyses: analyses.length,
      totalComponents: allComponents.length,
      totalVulnerabilities: totalVulns,
      criticalVulnerabilities: criticalVulns,
      licenseConflicts: totalLicenseConflicts,
      averageRiskScore: avgRisk,
      recentAnalyses,
      topRiskyRepos,
    });
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "dashboard error");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
