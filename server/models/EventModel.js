import pool from "../db.js";

export const getAllEvents = async () => {
  const [rows] = await pool.query("SELECT * FROM events");
  return rows;
};

export const getEventById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM events WHERE id=?", [id]);
  return rows[0];
};

export const createEvent = async (eventData) => {
  const { title, description, location, date, total_seats, available_seats, price, img_url } = eventData;
  const [result] = await pool.query(
    "INSERT INTO events (title, description, location, date, total_seats, available_seats, price, img_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [title, description, location, date, total_seats, available_seats, price, img_url]
  );
  return result.insertId;
};

export const updateEvent = async (id, eventData) => {
  const fields = [];
  const values = [];

  Object.entries(eventData).forEach(([key, value]) => {
    if (value !== undefined) {
      fields.push(`${key}=?`);
      values.push(value);
    }
  });

  if (fields.length === 0) {
    throw new Error("No fields to update");
  }

  const sql = `UPDATE events SET ${fields.join(", ")} WHERE id=?`;
  values.push(id);

  await pool.query(sql, values);
};

export const deleteEvent = async (id) => {
  await pool.query("DELETE FROM events WHERE id=?", [id]);
};
