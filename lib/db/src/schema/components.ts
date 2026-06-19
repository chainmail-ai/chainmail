import { pgTable, text, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { analysesTable } from "./analyses";

export const componentsTable = pgTable("components", {
  id: text("id").primaryKey(),
  analysisId: text("analysis_id").notNull().references(() => analysesTable.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  version: text("version").notNull(),
  license: text("license").notNull(),
  isDirect: boolean("is_direct").notNull().default(false),
  isStale: boolean("is_stale").notNull().default(false),
  publishedAt: timestamp("published_at"),
  latestVersion: text("latest_version"),
  vulnerabilityCount: integer("vulnerability_count").notNull().default(0),
});

export const insertComponentSchema = createInsertSchema(componentsTable);
export type InsertComponent = z.infer<typeof insertComponentSchema>;
export type Component = typeof componentsTable.$inferSelect;
