import pool from "../db.js";

export const createBooking = async (event_id, user_id, quantity, total_amount) => {
  return pool.query(
    "INSERT INTO bookings (event_id, user_id, quantity, total_amount, status) VALUES (?, ?, ?, ?, 'confirmed')",
    [event_id, user_id, quantity, total_amount]
  );
};

// export const getBookingById = async (bookingId, userId) => {
//   const [rows] = await pool.query("SELECT * FROM bookings WHERE id=? AND user_id=?", [bookingId, userId]);
//   return rows[0];
// };

export const getBookingById = async (bookingId, userId) => {
  const [rows] = await pool.query(
    "SELECT id, event_id, user_id, quantity, status FROM bookings WHERE id=? AND user_id=?", 
    [bookingId, userId]
  );
  return rows[0];
};

export const cancelBookingById = async (bookingId) => {
  return pool.query("UPDATE bookings SET status='cancelled' WHERE id=?", [bookingId]);
};

// export const getUserBookings = async (userId) => {
//   const [rows] = await pool.query(
//     `SELECT b.id, e.title, e.date, b.quantity, b.total_amount, b.status 
//      FROM bookings b 
//      JOIN events e ON b.event_id = e.id 
//      WHERE b.user_id=?`,
//     [userId]
//   );
//   return rows;
// };

export const getUserBookings = async (userId) => {
  const [rows] = await pool.query(
    `SELECT 
        b.id, 
        e.title AS event_title, 
        e.date AS event_date, 
        e.img_url AS event_image,
        b.quantity, 
        b.total_amount, 
        b.status 
     FROM bookings b 
     JOIN events e ON b.event_id = e.id 
     WHERE b.user_id=? 
     ORDER BY b.booking_date DESC`,
    [userId]
  );

  // format date & time separately (so frontend can use b.event_date + b.event_time)
  return rows.map(r => {
    const d = new Date(r.event_date);
    return {
      ...r,
      event_date: d.toISOString().split("T")[0], // YYYY-MM-DD
      event_time: d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
  });
};

