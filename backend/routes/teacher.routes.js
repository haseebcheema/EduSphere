import express from "express";
import {
  createTeacher,
  getTeacher,
  getAllTeachers,
  deleteTeacher,
} from "../controllers/teacher.controller.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();
router.post("/", roleMiddleware(["Educator"]), createTeacher);
router.get("/:id", roleMiddleware(["Educator"]), getTeacher);
router.get("/", roleMiddleware(["Educator"]), getAllTeachers);
router.delete("/:id", roleMiddleware(["Educator"]), deleteTeacher);

export default router;
