import Router from "express";
const router = Router();
import { delete_professional, get_all_proffesionals, update_specialty } from "../controllers/professionalController.js";

router.get("/", get_all_proffesionals);
router.put("/change/:id", update_specialty);
router.delete("/delete/:id", delete_professional);

export default router;