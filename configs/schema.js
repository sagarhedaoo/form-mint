const {
  serial,
  text,
  pgTable,
  varchar,
  integer,
  boolean,
} = require("drizzle-orm/pg-core");

export const JsonForms = pgTable("jsonForms", {
  id: serial("id").primaryKey(),
  jsonform: text("jsonform").notNull(),
  theme: varchar("theme"),
  background: varchar("background"),
  style: varchar("style"),
  createdBy: varchar("createdBy").notNull(),
  createdDate: varchar("createdDate").notNull(),
  enableSignIn: boolean("enabledSign").default(false),
});

export const userResponses = pgTable("userResponses", {
  id: serial("id").primaryKey(),
  jsonResponse: text("jsonResponse").notNull(),
  createdBy: varchar("createdBy"),
  createdDate: varchar("createdDate").notNull(),
  formRef: integer("formRef").references(() => JsonForms.id),
});
