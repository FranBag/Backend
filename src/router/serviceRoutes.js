import Router from "express";
const router = Router();
import { create_service, delete_service, get_all_services, get_service, update_service } from "../controllers/serviceController.js";

router.get("/", get_all_services);
router.get("/:id", get_service);
router.post("/create", create_service);
router.put("/update/:id", update_service);
router.delete("/delete/:id", delete_service);

export default router;