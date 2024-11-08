import express from "express";
import loginUser from "../controllers/auth.controller.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/login", loginUser);

router.get("/educator", roleMiddleware(["Educator"]), (req, res) => {
  // At this point, req should be defined
  console.log(req.body);
  res.json({
    message: "Educator data retrieved successfully!",
    user: req.user,
  });
});

// Example route for teachers to view their data
router.get("/teacher", roleMiddleware(["Teacher"]), (req, res) => {
  res.json({
    message: "teacher data retrieved successfully!",
    user: req.user,
  });
});

// Example route for students to view their data
router.get("/student", roleMiddleware(["Student"]), (req, res) => {
  // Code to get student profile data
});

export default router;
