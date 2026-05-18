import { pgTable, text, timestamp, pgEnum, index } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

export const roleEnum = pgEnum("role", ["user", "admin"]);

export const userRoles = pgTable(
  "user_roles",
  {
    userId: text("user_id")
      .primaryKey()
      .references(() => user.id, { onDelete: "cascade" }),

    role: roleEnum("role").notNull().default("user"),

    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [index("user_roles_role_idx").on(table.role)],
);
