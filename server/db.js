import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

// Test connection
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ Database connected successfully!");
    console.log(`Connected to database: ${process.env.DB_NAME}`);
    connection.release(); // release back to pool
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
})();

export default pool;
