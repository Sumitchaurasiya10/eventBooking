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
  uploadImage
} from "../controllers/eventController.js";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

// ================== Public routes ==================
router.get("/", getEvents);
router.get("/:id", getEventDetails);

// ================== Admin only routes ==================

// 🔹 Add event with optional image
router.post("/", protect, adminOnly, upload.single("img"), addEvent);

// 🔹 Update event with optional new image
router.put("/:id", protect, adminOnly, upload.single("img"), editEvent);

// 🔹 Delete event
router.delete("/:id", protect, adminOnly, removeEvent);

// 🔹 Separate image upload API (for admin dashboard use only)
router.post("/upload", protect, adminOnly, upload.single("img"), uploadImage);

export default router;
