import Router from "express";
const router = Router();

import {create_user, delete_user, get_all_users, get_user, update_user, login } from "../controllers/userController.js";
import { isAutenticated, userCreateRules, userLoginRules, userUpdateRules, validate } from "../middleware/userValidation.js";
import { idRules } from "../middleware/idValidator.js";

router.get("/", isAutenticated, get_all_users);
router.get("/:id", isAutenticated, idRules, validate, get_user);

router.post("/create", isAutenticated, userCreateRules, validate, create_user);
router.post('/login', userLoginRules, validate, login);

router.put("/update/:id", isAutenticated, [userUpdateRules, idRules], validate, update_user);

router.delete("/delete/:id", isAutenticated, idRules, validate, delete_user);

export default router;