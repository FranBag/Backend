import Router from "express";
const router = Router();
import { delete_professional, get_all_proffesionals, update_specialty } from "../controllers/professionalController.js";
import { professionalRules, validate } from "../middleware/professionalValidator.js";
import { idRules } from "../middleware/idValidator.js";
import { isAutenticated } from "../middleware/userValidation.js";

router.get("/", isAutenticated, get_all_proffesionals);

router.put("/change/:id", isAutenticated, [professionalRules, idRules], validate, update_specialty);

router.delete("/delete/:id", isAutenticated, idRules, validate, delete_professional);

export default router;