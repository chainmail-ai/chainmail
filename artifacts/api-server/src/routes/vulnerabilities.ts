import { Router, type IRouter } from "express";
import { db, vulnerabilitiesTable, vexStatementsTable } from "@workspace/db";
import {
  GetVulnerabilitiesParams,
  GetVulnerabilitiesResponse,
  ListVexStatementsParams,
  ListVexStatementsResponse,
  CreateVexStatementParams,
  CreateVexStatementBody,
} from "@workspace/api-zod";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";

const router: IRouter = Router();

router.get("/analyses/:id/vulnerabilities", async (req, res) => {
  try {
    const { id } = GetVulnerabilitiesParams.parse(req.params);
    const vulns = await db
      .select()
      .from(vulnerabilitiesTable)
      .where(eq(vulnerabilitiesTable.analysisId, id));

    const data = GetVulnerabilitiesResponse.parse(
      vulns.map((v) => ({
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
        publishedAt: v.publishedAt ? v.publishedAt.toISOString() : undefined,
      })),
    );
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "vulnerabilities error");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/analyses/:id/vex", async (req, res) => {
  try {
    const { id } = ListVexStatementsParams.parse(req.params);
    const statements = await db
      .select()
      .from(vexStatementsTable)
      .where(eq(vexStatementsTable.analysisId, id));

    const data = ListVexStatementsResponse.parse(
      statements.map((s) => ({
        id: s.id,
        analysisId: s.analysisId,
        cveId: s.cveId,
        status: s.status,
        justification: s.justification ?? undefined,
        impactStatement: s.impactStatement ?? undefined,
        actionStatement: s.actionStatement ?? undefined,
        author: s.author,
        createdAt: s.createdAt.toISOString(),
      })),
    );
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "list vex error");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/analyses/:id/vex", async (req, res) => {
  try {
    const { id } = CreateVexStatementParams.parse(req.params);
    const body = CreateVexStatementBody.parse(req.body);
    const stmtId = randomUUID();

    await db.insert(vexStatementsTable).values({
      id: stmtId,
      analysisId: id,
      cveId: body.cveId,
      status: body.status,
      justification: body.justification ?? null,
      impactStatement: body.impactStatement ?? null,
      actionStatement: body.actionStatement ?? null,
      author: "maintainer",
    });

    await db
      .update(vulnerabilitiesTable)
      .set({ vexStatus: body.status })
      .where(eq(vulnerabilitiesTable.cveId, body.cveId));

    const stmt = await db
      .select()
      .from(vexStatementsTable)
      .where(eq(vexStatementsTable.id, stmtId))
      .then((r) => r[0]);

    if (!stmt) {
      res.status(404).json({ error: "Not found" });
      return;
    }

    res.status(201).json({
      id: stmt.id,
      analysisId: stmt.analysisId,
      cveId: stmt.cveId,
      status: stmt.status,
      justification: stmt.justification ?? undefined,
      impactStatement: stmt.impactStatement ?? undefined,
      actionStatement: stmt.actionStatement ?? undefined,
      author: stmt.author,
      createdAt: stmt.createdAt.toISOString(),
    });
  } catch (err) {
    req.log.error({ err }, "create vex error");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
