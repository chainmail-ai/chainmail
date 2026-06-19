import { pgTable, text, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { analysesTable } from "./analyses";

export const vexStatementStatusEnum = pgEnum("vex_statement_status", ["not_affected", "affected", "fixed", "under_investigation"]);

export const vexStatementsTable = pgTable("vex_statements", {
  id: text("id").primaryKey(),
  analysisId: text("analysis_id").notNull().references(() => analysesTable.id, { onDelete: "cascade" }),
  cveId: text("cve_id").notNull(),
  status: vexStatementStatusEnum("status").notNull(),
  justification: text("justification"),
  impactStatement: text("impact_statement"),
  actionStatement: text("action_statement"),
  author: text("author").notNull().default("maintainer"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertVexStatementSchema = createInsertSchema(vexStatementsTable);
export type InsertVexStatement = z.infer<typeof insertVexStatementSchema>;
export type VexStatement = typeof vexStatementsTable.$inferSelect;
