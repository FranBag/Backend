import Router from "express";
const router = Router();
import { create_reservation, get_all_reservations, get_reservation_by_customer, get_reservation_by_id, get_reservation_by_service, update_reservation } from "../controllers/reservationController.js";

router.get("/", get_all_reservations);
router.get("/:id", get_reservation_by_id);
router.get("/customer/:id", get_reservation_by_customer);
router.get("/service/:id", get_reservation_by_service);
router.post("/create", create_reservation);
router.put("/update/:id", update_reservation);

export default router;