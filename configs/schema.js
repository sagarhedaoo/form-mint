const { serial, text, pgTable, varchar } = require("drizzle-orm/pg-core");

export const JsonForms = pgTable("jsonForms", {
  id: serial("id").primaryKey(),
  jsonform: text("jsonform").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdDate: varchar("createdDate").notNull(),
});
