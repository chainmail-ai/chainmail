import { Router, type IRouter } from "express";
import { db, analysesTable, componentsTable, vulnerabilitiesTable } from "@workspace/db";
import { GetRiskScoreParams, GetRiskScoreResponse } from "@workspace/api-zod";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

router.get("/analyses/:id/risk", async (req, res) => {
  try {
    const { id } = GetRiskScoreParams.parse(req.params);
    const analysis = await db.select().from(analysesTable).where(eq(analysesTable.id, id)).then((r) => r[0]);
    if (!analysis) {
      res.status(404).json({ error: "Not found" });
      return;
    }

    const components = await db.select().from(componentsTable).where(eq(componentsTable.analysisId, id));
    const vulns = await db.select().from(vulnerabilitiesTable).where(eq(vulnerabilitiesTable.analysisId, id));

    const staleRatio = components.length > 0 ? components.filter((c) => c.isStale).length / components.length : 0;
    const criticalScore = Math.min(100, vulns.filter((v) => v.severity === "CRITICAL").length * 25);
    const highScore = Math.min(100, vulns.filter((v) => v.severity === "HIGH").length * 10);
    const staleScore = Math.round(staleRatio * 100);
    const licenseScore = Math.min(100, analysis.licenseConflicts * 15);
    const provenanceScore = analysis.provenanceVerified ? 10 : 60;

    const overall = Math.min(100, Math.round(
      criticalScore * 0.35 +
      highScore * 0.25 +
      staleScore * 0.15 +
      licenseScore * 0.15 +
      provenanceScore * 0.1,
    ));

    const grade =
      overall < 20 ? "A" :
      overall < 40 ? "B" :
      overall < 60 ? "C" :
      overall < 80 ? "D" : "F";

    const recs: string[] = [];
    if (criticalScore > 0) recs.push(`Patch ${vulns.filter((v) => v.severity === "CRITICAL").length} critical CVE(s) immediately`);
    if (highScore > 20) recs.push(`Address ${vulns.filter((v) => v.severity === "HIGH").length} high-severity vulnerabilities`);
    if (staleRatio > 0.2) recs.push(`Update ${components.filter((c) => c.isStale).length} stale dependencies`);
    if (licenseScore > 0) recs.push(`Resolve ${analysis.licenseConflicts} license conflicts`);
    if (!analysis.provenanceVerified) recs.push("Configure SLSA provenance attestation to improve supply chain trust");
    if (analysis.slsaLevel < 2) recs.push("Upgrade to SLSA Level 2 for verifiable build provenance");

    const data = GetRiskScoreResponse.parse({
      analysisId: id,
      overallScore: overall,
      grade,
      dimensions: [
        { name: "Critical Vulnerabilities", score: criticalScore, weight: 35, status: criticalScore > 50 ? "critical" : criticalScore > 0 ? "warning" : "good", detail: `${vulns.filter((v) => v.severity === "CRITICAL").length} critical CVEs found` },
        { name: "High Severity Vulns", score: highScore, weight: 25, status: highScore > 40 ? "critical" : highScore > 10 ? "warning" : "good", detail: `${vulns.filter((v) => v.severity === "HIGH").length} high-severity CVEs found` },
        { name: "Dependency Staleness", score: staleScore, weight: 15, status: staleRatio > 0.3 ? "critical" : staleRatio > 0.1 ? "warning" : "good", detail: `${components.filter((c) => c.isStale).length} of ${components.length} deps outdated` },
        { name: "License Risk", score: licenseScore, weight: 15, status: licenseScore > 30 ? "critical" : licenseScore > 0 ? "warning" : "good", detail: `${analysis.licenseConflicts} license conflicts detected` },
        { name: "Provenance & SLSA", score: provenanceScore, weight: 10, status: !analysis.provenanceVerified ? "warning" : "good", detail: `SLSA Level ${analysis.slsaLevel} — provenance ${analysis.provenanceVerified ? "verified" : "unverified"}` },
      ],
      slsaLevel: analysis.slsaLevel,
      recommendations: recs,
    });
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "risk score error");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
