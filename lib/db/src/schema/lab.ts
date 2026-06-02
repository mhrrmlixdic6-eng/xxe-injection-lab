import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const labSessionsTable = pgTable("lab_sessions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  startedAt: timestamp("started_at").defaultNow().notNull(),
  completedAt: timestamp("completed_at"),
});

export const insertLabSessionSchema = createInsertSchema(labSessionsTable).omit({ id: true, startedAt: true, completedAt: true });
export type InsertLabSession = z.infer<typeof insertLabSessionSchema>;
export type LabSession = typeof labSessionsTable.$inferSelect;

export const flagCapturesTable = pgTable("flag_captures", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").notNull().references(() => labSessionsTable.id),
  flagNumber: integer("flag_number").notNull(),
  capturedAt: timestamp("captured_at").defaultNow().notNull(),
});

export const insertFlagCaptureSchema = createInsertSchema(flagCapturesTable).omit({ id: true, capturedAt: true });
export type InsertFlagCapture = z.infer<typeof insertFlagCaptureSchema>;
export type FlagCapture = typeof flagCapturesTable.$inferSelect;
