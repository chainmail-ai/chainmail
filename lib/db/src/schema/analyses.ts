import { pgTable, text, serial, real, integer, boolean, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const analysisStatusEnum = pgEnum("analysis_status", ["pending", "running", "complete", "failed"]);

export const analysesTable = pgTable("analyses", {
  id: text("id").primaryKey(),
  repo: text("repo").notNull(),
  version: text("version"),
  commitSha: text("commit_sha"),
  status: analysisStatusEnum("status").notNull().default("pending"),
  riskScore: real("risk_score").notNull().default(0),
  criticalCount: integer("critical_count").notNull().default(0),
  highCount: integer("high_count").notNull().default(0),
  componentCount: integer("component_count").notNull().default(0),
  licenseConflicts: integer("license_conflicts").notNull().default(0),
  slsaLevel: integer("slsa_level").notNull().default(0),
  provenanceVerified: boolean("provenance_verified").notNull().default(false),
  sbomFormat: text("sbom_format").notNull().default("CycloneDX"),
  sbomVersion: text("sbom_version").notNull().default("1.4"),
  scannedAt: timestamp("scanned_at").notNull().defaultNow(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertAnalysisSchema = createInsertSchema(analysesTable);
export type InsertAnalysis = z.infer<typeof insertAnalysisSchema>;
export type Analysis = typeof analysesTable.$inferSelect;
