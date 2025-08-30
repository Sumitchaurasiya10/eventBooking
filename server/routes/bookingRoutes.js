import express from "express";
import { makeBooking, cancelBooking, myBookings } from "../controllers/bookingController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Create booking
router.post("/", protect, makeBooking);

// Cancel booking
router.put("/:id/cancel", protect, cancelBooking);

// My bookings
router.get("/my", protect, myBookings);

export default router;
