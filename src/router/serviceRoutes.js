import Router from "express";
const router = Router();
import { create_service, delete_service, get_all_services, get_service, update_service } from "../controllers/serviceController.js";
import { idRules } from "../middleware/idValidator.js";
import { serviceCreateRules, serviceUpdateRules, validate } from "../middleware/serviceValidator.js";

router.get("/", get_all_services);
router.get("/:id", idRules, validate, get_service);

router.post("/create", serviceCreateRules, validate, create_service);

router.put("/update/:id", [serviceUpdateRules, idRules], validate, update_service);

router.delete("/delete/:id", idRules, validate, delete_service);

export default router;