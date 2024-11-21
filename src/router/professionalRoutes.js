import Router from "express";
const router = Router();
import { delete_professional, get_all_proffesionals, update_specialty } from "../controllers/professionalController.js";
import { professionalRules, validate } from "../middleware/professionalValidator.js";
import { idRules } from "../middleware/idValidator.js";

router.get("/", get_all_proffesionals);
router.put("/change/:id", [professionalRules, idRules], validate, update_specialty);
router.delete("/delete/:id", idRules, validate, delete_professional);

export default router;