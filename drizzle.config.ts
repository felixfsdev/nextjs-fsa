import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });

export default defineConfig({
  schema: "./db/schema", // Either a single schema file or a folder containing multiple schema files
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
