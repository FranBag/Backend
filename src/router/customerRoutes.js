import Router from "express";
import { delete_customer, get_all_customers } from "../controllers/customerController.js";
import { idRules, validate } from "../middleware/idValidator.js";
import { isAutenticated } from "../middleware/userValidation.js";
const router = Router();

router.get("/", isAutenticated, get_all_customers);
router.delete("/delete/:id", isAutenticated, idRules, validate, delete_customer);

export default router;