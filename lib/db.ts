import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle({ client: sql });

async function testConnection() {
  try {
    const result = await db.execute("SELECT NOW()");

    console.log("Database connected successfully");
    console.log(result.rows);
  } catch (error) {
    console.error("Database connection failed");
    console.error(error);
  }
}

testConnection();

export { db };
