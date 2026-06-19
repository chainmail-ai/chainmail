import { Router, type IRouter } from "express";
import { db, analysesTable, componentsTable } from "@workspace/db";
import { GetSbomSummaryParams, GetSbomSummaryResponse } from "@workspace/api-zod";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

router.get("/analyses/:id/sbom", async (req, res) => {
  try {
    const { id } = GetSbomSummaryParams.parse(req.params);
    const analysis = await db.select().from(analysesTable).where(eq(analysesTable.id, id)).then((r) => r[0]);
    if (!analysis) {
      res.status(404).json({ error: "Not found" });
      return;
    }
    const components = await db.select().from(componentsTable).where(eq(componentsTable.analysisId, id));

    const staleCount = components.filter((c) => c.isStale).length;
    const directCount = components.filter((c) => c.isDirect).length;
    const transientCount = components.length - directCount;

    const uniqueLicenses = new Set(components.map((c) => c.license)).size;
    const data = GetSbomSummaryResponse.parse({
      analysisId: id,
      format: analysis.sbomFormat,
      formatVersion: analysis.sbomVersion,
      totalComponents: components.length,
      directDependencies: directCount,
      transitiveDependencies: transientCount,
      staleComponents: staleCount,
      uniqueLicenses,
      components: components.slice(0, 100).map((c) => ({
        id: c.id,
        name: c.name,
        version: c.version,
        license: c.license,
        isDirect: c.isDirect,
        isStale: c.isStale,
        latestVersion: c.latestVersion ?? undefined,
        vulnerabilityCount: c.vulnerabilityCount,
        publishedAt: c.publishedAt ? c.publishedAt.toISOString() : undefined,
      })),
    });
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "sbom summary error");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
