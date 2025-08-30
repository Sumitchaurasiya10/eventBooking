// import express from "express";
// import { getEvents, getEventDetails, addEvent, editEvent, removeEvent } from "../controllers/eventController.js";
// import { protect, adminOnly } from "../middlewares/authMiddleware.js";

// const router = express.Router();

// // Public
// router.get("/", getEvents);
// router.get("/:id", getEventDetails);

// // Admin only
// router.post("/", protect, adminOnly, addEvent);
// router.put("/:id", protect, adminOnly, editEvent);
// router.delete("/:id", protect, adminOnly, removeEvent);

// export default router;
import express from "express";
import { 
  getEvents, 
  getEventDetails, 
  addEvent, 
  editEvent, 
  removeEvent, 
  upload,
  uploadImage // 👈 import new controller
} from "../controllers/eventController.js";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/", getEvents);
router.get("/:id", getEventDetails);

// Admin only
// 🔹 Add event with optional image
router.post("/", protect, adminOnly, upload.single("img"), addEvent);

// 🔹 Update event with optional new image
router.put("/:id", protect, adminOnly, upload.single("img"), editEvent);

// 🔹 Delete event
router.delete("/:id", protect, adminOnly, removeEvent);

// 🔹 Image upload only (for admin dashboard)
router.post("/upload", protect, adminOnly, upload.single("image"), uploadImage);

export default router;
