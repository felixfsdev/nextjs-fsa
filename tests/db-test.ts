import { db } from "@/lib/db";

async function testConnection() {
  try {
    const result = await db.execute("SELECT 1 AS ok");
    console.log("Connection successful");
    console.log(result.rows);
  } catch (e) {
    console.log("Connection failed");
    console.log(e);
  }
}

testConnection();
