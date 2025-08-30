// server/routes/uploadRoutes.js
import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

// Storage config
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

const upload = multer({ storage });

// POST /api/upload
router.post("/", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // Return a consistent key `url` 👇
  res.json({
    url: `/uploads/${req.file.filename}`,
  });
});

export default router;
