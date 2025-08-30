import pool from "../db.js";

// Create user
export const createUser = async (name, email, hashedPassword) => {
  return pool.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );
};

// Find user by email
export const findUserByEmail = async (email) => {
  const [rows] = await pool.query("SELECT * FROM users WHERE email=?", [email]);
  return rows[0]; // return single user
};

// Find user by id
export const findUserById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM users WHERE id=?", [id]);
  return rows[0];
};
