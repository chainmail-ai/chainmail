import { Router, type IRouter } from "express";
import { db, analysesTable } from "@workspace/db";
import {
  ListAnalysesResponse,
  CreateAnalysisBody,
  GetAnalysisResponse,
  GetAnalysisParams,
} from "@workspace/api-zod";
import { eq, desc } from "drizzle-orm";
import { randomUUID } from "crypto";
import { seedAnalysis } from "../lib/seed";

const router: IRouter = Router();

router.get("/analyses", async (req, res) => {
  try {
    const rows = await db.select().from(analysesTable).orderBy(desc(analysesTable.createdAt));
    const data = ListAnalysesResponse.parse(
      rows.map((r) => ({
        id: r.id,
        repo: r.repo,
        version: r.version ?? undefined,
        commitSha: r.commitSha ?? undefined,
        status: r.status,
        riskScore: r.riskScore,
        criticalCount: r.criticalCount,
        highCount: r.highCount,
        componentCount: r.componentCount,
        licenseConflicts: r.licenseConflicts,
        scannedAt: r.scannedAt.toISOString(),
        createdAt: r.createdAt.toISOString(),
        slsaLevel: r.slsaLevel,
        provenanceVerified: r.provenanceVerified,
        sbomFormat: r.sbomFormat,
        sbomVersion: r.sbomVersion,
      })),
    );
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "list analyses error");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/analyses", async (req, res) => {
  try {
    const body = CreateAnalysisBody.parse(req.body);
    const id = randomUUID();
    const slsaLevel = Math.floor(Math.random() * 3);
    const provenanceVerified = slsaLevel >= 2;

    await db.insert(analysesTable).values({
      id,
      repo: body.repoUrl,
      version: body.branch ?? "latest",
      commitSha: null,
      status: "running",
      riskScore: 0,
      criticalCount: 0,
      highCount: 0,
      componentCount: 0,
      licenseConflicts: 0,
      slsaLevel,
      provenanceVerified,
      sbomFormat: "CycloneDX",
      sbomVersion: "1.4",
    });

    await seedAnalysis(id);

    const row = await db.select().from(analysesTable).where(eq(analysesTable.id, id)).then((r) => r[0]);
    if (!row) {
      res.status(404).json({ error: "Not found" });
      return;
    }

    const data = GetAnalysisResponse.parse({
      id: row.id,
      repo: row.repo,
      version: row.version ?? undefined,
      commitSha: row.commitSha ?? undefined,
      status: row.status,
      riskScore: row.riskScore,
      criticalCount: row.criticalCount,
      highCount: row.highCount,
      componentCount: row.componentCount,
      licenseConflicts: row.licenseConflicts,
      scannedAt: row.scannedAt.toISOString(),
      createdAt: row.createdAt.toISOString(),
      slsaLevel: row.slsaLevel,
      provenanceVerified: row.provenanceVerified,
      sbomFormat: row.sbomFormat,
      sbomVersion: row.sbomVersion,
    });
    res.status(201).json(data);
  } catch (err) {
    req.log.error({ err }, "create analysis error");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/analyses/:id", async (req, res) => {
  try {
    const { id } = GetAnalysisParams.parse(req.params);
    const row = await db.select().from(analysesTable).where(eq(analysesTable.id, id)).then((r) => r[0]);
    if (!row) {
      res.status(404).json({ error: "Not found" });
      return;
    }
    const data = GetAnalysisResponse.parse({
      id: row.id,
      repo: row.repo,
      version: row.version ?? undefined,
      commitSha: row.commitSha ?? undefined,
      status: row.status,
      riskScore: row.riskScore,
      criticalCount: row.criticalCount,
      highCount: row.highCount,
      componentCount: row.componentCount,
      licenseConflicts: row.licenseConflicts,
      scannedAt: row.scannedAt.toISOString(),
      createdAt: row.createdAt.toISOString(),
      slsaLevel: row.slsaLevel,
      provenanceVerified: row.provenanceVerified,
      sbomFormat: row.sbomFormat,
      sbomVersion: row.sbomVersion,
    });
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "get analysis error");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
