import express from "express";
import loginUser from "../controllers/auth.controller.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/login", loginUser);

router.get("/educator", roleMiddleware(["Educator"]), (req, res) => {
  res.json({
    message: "Educator data retrieved successfully!",
  });
});

router.get("/teacher", roleMiddleware(["Teacher"]), (req, res) => {
  res.json({
    message: "teacher data retrieved successfully!",
  });
});

router.get("/student", roleMiddleware(["Student"]), (req, res) => {
  res.json({
    message: "teacher data retrieved successfully!",
  });
});

export default router;
