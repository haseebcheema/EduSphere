import express from "express";
import {
  createSchool,
  getSchool,
  updateSchool,
  deleteSchool,
  getAllSchools,
} from "../controllers/school.controller.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/", roleMiddleware(["Educator"]), createSchool);
router.get("/", roleMiddleware(["Educator"]), getAllSchools);
router.get("/:id", roleMiddleware(["Educator"]), getSchool);
router.put("/:id", roleMiddleware(["Educator"]), updateSchool);
router.delete("/:id", roleMiddleware(["Educator"]), deleteSchool);

export default router;
