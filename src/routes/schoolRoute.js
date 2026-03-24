import { Router } from "express";
import * as schoolController from "../controllers/schoolController.js";

const router = Router();

router.post("/addSchools", schoolController.addSchool);
router.get("/listSchools", schoolController.listSchools);

export default router;
