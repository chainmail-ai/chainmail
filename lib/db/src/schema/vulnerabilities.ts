import { pgTable, text, real, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { analysesTable } from "./analyses";

export const severityEnum = pgEnum("severity", ["CRITICAL", "HIGH", "MEDIUM", "LOW", "INFO"]);
export const vexStatusEnum = pgEnum("vex_status", ["not_affected", "affected", "fixed", "under_investigation"]);

export const vulnerabilitiesTable = pgTable("vulnerabilities", {
  id: text("id").primaryKey(),
  analysisId: text("analysis_id").notNull().references(() => analysesTable.id, { onDelete: "cascade" }),
  cveId: text("cve_id").notNull(),
  severity: severityEnum("severity").notNull(),
  cvssScore: real("cvss_score").notNull().default(0),
  packageName: text("package_name").notNull(),
  packageVersion: text("package_version").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  vexStatus: vexStatusEnum("vex_status").notNull().default("under_investigation"),
  fixedIn: text("fixed_in"),
  publishedAt: timestamp("published_at"),
});

export const insertVulnerabilitySchema = createInsertSchema(vulnerabilitiesTable);
export type InsertVulnerability = z.infer<typeof insertVulnerabilitySchema>;
export type Vulnerability = typeof vulnerabilitiesTable.$inferSelect;
