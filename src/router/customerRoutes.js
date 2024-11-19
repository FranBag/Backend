import Router from "express";
import { delete_customer, get_all_customers } from "../controllers/customerController.js";
const router = Router();

router.get("/", get_all_customers);
router.delete("/delete/:id", delete_customer);

export default router;