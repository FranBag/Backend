import Router from "express";
const router = Router();
import { create_reservation, get_all_reservations, get_reservation_by_customer, get_reservation_by_id, get_reservation_by_service, update_reservation } from "../controllers/reservationController.js";
import { idRules } from "../middleware/idValidator.js";
import { reservationCreateRules, reservationUpdateRules, validate } from "../middleware/reservationRules.js";
import { isAutenticated } from "../middleware/userValidation.js";

router.get("/",isAutenticated, get_all_reservations);
router.get("/:id", isAutenticated, idRules, validate, get_reservation_by_id);
router.get("/customer/:id", isAutenticated, idRules, validate, get_reservation_by_customer);
router.get("/service/:id", isAutenticated, idRules, validate, get_reservation_by_service);
router.post("/create", isAutenticated, reservationCreateRules, validate, create_reservation);
router.put("/update/:id", isAutenticated, reservationUpdateRules, validate, update_reservation);

export default router;