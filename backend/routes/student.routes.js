import express from "express";
import {
  createStudent,
  getStudent,
  getAllStudents,
  deleteStudent,
} from "../controllers/student.controller.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/", roleMiddleware(["Educator"]), createStudent);
router.get("/:id", roleMiddleware(["Educator"]), getStudent);
router.get("/", roleMiddleware(["Educator"]), getAllStudents);
router.delete("/:id", roleMiddleware(["Educator"]), deleteStudent);

export default router;
