import pool from "../db.js";
import { createBooking, getBookingById, cancelBookingById, getUserBookings } from "../models/BookingModel.js";
import { getEventById } from "../models/EventModel.js";

export const makeBooking = async (req, res) => {
  const { event_id, quantity } = req.body;
  const userId = req.user.id;

  try {
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    const event = await getEventById(event_id);
    if (!event) {
      conn.release();
      return res.status(404).json({ message: "Event not found" });
    }

    if (event.available_seats < quantity) {
      conn.release();
      return res.status(400).json({ message: "Not enough seats available" });
    }

    const total_amount = quantity * event.price;

    await createBooking(event_id, userId, quantity, total_amount);
    await conn.query("UPDATE events SET available_seats = available_seats - ? WHERE id=?", [quantity, event_id]);

    await conn.commit();
    conn.release();

    res.json({ message: "Booking successful", total_amount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const cancelBooking = async (req, res) => {
  const bookingId = req.params.id;
  const userId = req.user.id;

  try {
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    const booking = await getBookingById(bookingId, userId);
    if (!booking) {
      conn.release();
      return res.status(404).json({ message: "Booking not found" });
    }

    if (booking.status === "cancelled") {
      conn.release();
      return res.status(400).json({ message: "Already cancelled" });
    }

    await cancelBookingById(bookingId);
    await conn.query("UPDATE events SET available_seats = available_seats + ? WHERE id=?", [booking.quantity, booking.event_id]);

    await conn.commit();
    conn.release();

    res.json({ message: "Booking cancelled successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const myBookings = async (req, res) => {
  try {
    const bookings = await getUserBookings(req.user.id);
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
