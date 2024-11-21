import Router from "express";
import { delete_customer, get_all_customers } from "../controllers/customerController.js";
import { idRules, validate } from "../middleware/idValidator.js";
const router = Router();

router.get("/", get_all_customers);
router.delete("/delete/:id", idRules, validate, delete_customer);

export default router;