import express from "express";
import {
  createBranch,
  getBranch,
  updateBranch,
  deleteBranch,
  getAllBranches,
} from "../controllers/branch.controller.js";
import roleMiddleware from "../middlewares/role.middleware.js";
const router = express.Router();

router.post("/", roleMiddleware(["Educator"]), createBranch);
router.get("/", roleMiddleware(["Educator"]), getAllBranches);
router.get("/:id", roleMiddleware(["Educator"]), getBranch);
router.put("/:id", roleMiddleware(["Educator"]), updateBranch);
router.delete("/:id", roleMiddleware(["Educator"]), deleteBranch);

export default router;
