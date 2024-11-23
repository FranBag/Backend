import Router from "express";
const router = Router();

import { isAutenticated } from "../middleware/userValidation.js";
import { idRules } from "../middleware/idValidator.js";
import { get_all_schedules, get_schedule_by_id, get_schedules_by_day } from "../controllers/scheduleController.js";
import { validate, validateSchedule } from "../middleware/scheduleValidator.js";


router.get("/", isAutenticated, get_all_schedules);
router.get("/:id", isAutenticated, idRules, validate, get_schedule_by_id);
router.get("/day/:day", isAutenticated, validateSchedule, validate, get_schedules_by_day);

export default router;