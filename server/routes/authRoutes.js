import express from "express";
import { register, login } from "../controllers/authController.js";
import { body } from "express-validator";
import { validate } from "../middlewares/validateMiddleware.js";

const router = express.Router();

// Register
router.post(
  "/register",
  validate([
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ]),
  register
);

// Login
router.post(
  "/login",
  validate([
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ]),
  login
);

export default router;
