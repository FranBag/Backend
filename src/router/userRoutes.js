import Router from "express";
const router = Router();
import {create_user, delete_user, get_all_users, get_user, update_user } from "../controllers/userController.js";

router.get("/", get_all_users);
router.get("/:id", get_user);
router.post("/create", create_user);
router.put("/update/:id", update_user);
router.delete("/delete/:id", delete_user);

export default router;