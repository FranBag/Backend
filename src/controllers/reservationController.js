import { createOne, getAll, getOneByCustomer, getOneByID, getOneByProfessional, updateOne } from "../models/reservationModel.js";


export const get_all_reservations = async (req, res) => {
    try {
        const reservations = await getAll();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const get_reservation_by_id = async (req, res) => {
    try {
        const id_reservation = req.params.id;
        const reservation = await getOneByID(id_reservation);
        if (reservation.length === 0) {
            res.status(404).json({ message: `No se ha encontrado una reserva con el ID ${id_reservation}` }); // 404: Not Found
            return;
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const get_reservation_by_customer = async (req, res) => {
    try {
        const id_customer = req.params.id;
        const reservation = await getOneByCustomer(id_customer);
        if (reservation.length === 0) {
            res.status(404).json({ message: "No se ha encontrado una reserva del cliente" });
            return;
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const get_reservation_by_professional = async (req, res) => {
    try {
        const id_service = req.params.id;
        const reservation = await getOneByProfessional(id_service);
        if (reservation.length === 0) {
            res.status(404).json({ message: "No se ha encontrado una reserva con el profesional especificado" });
            return;
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const create_reservation = async (req, res) => {
    try {
        const new_reservation_data = req.body.data;
        const result = await createOne(new_reservation_data);
        if (result.affectedRows === 1) {
            res.status(201).json({ message: `Se ha creado la reserva con el ID ${result.insertId}` });
            return;
        }
        res.status(400).json({ message: "Ha ocurrido un error al crear la reserva" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const update_reservation = async (req, res) => {
    try {
        const id_reservation = req.params.id;
        const update_reservation_data = req.body.data;
        const result = await updateOne(id_reservation, update_reservation_data);
        if (result.affectedRows === 1) {
            res.status(200).json({ message: `Se ha modificado la reserva con ID ${id_reservation} correctamente` });
            return;
        }
        res.status(400).json({ message: "Ha ocurrido un error al modificar la reserva" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
