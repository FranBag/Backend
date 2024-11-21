import { createOne, getAll, getOneByCustomer, getOneByID, getOneByService, updateOne } from "../models/reservationModel.js";


export const get_all_reservations = async(req, res) => {
	try {
		const reservations = await getAll();
		res.json(reservations);
	} catch (error) {
		res.json(error.message);
	}
}

export const get_reservation_by_id = async(req, res) => {
	try {
		const id_reservation = req.params.id;
		const reservation = await getOneByID(id_reservation);
		if(JSON.stringify(reservation) == "[]"){
			res.json(`No se ha encontrado una reserva con el id ${id_reservation}`);
			return;
		}
		res.json(reservation);
	} catch (error) {
		res.json(error.message);
	}
}

export const get_reservation_by_customer = async(req, res) => {
	try {
		const id_customer= req.params.id;
		const reservation = await getOneByCustomer(id_customer);
		if(JSON.stringify(reservation) == "[]"){
			res.json(`No se ha encontrado una reserva del cliente`);
			return;
		}
		res.json(reservation);
	} catch (error) {
		res.json(error.message);
	}
}

export const get_reservation_by_service = async(req, res) => {
	try {
		const id_service = req.params.id;
		const reservation = await getOneByService(id_service);
		if(JSON.stringify(reservation) == "[]"){
			res.json(`No se ha encontrado una reserva con el servicio especificado`);
			return;
		}
		res.json(reservation);
	} catch (error) {
		res.json(error.message);
	}
}

export const create_reservation = async(req, res) => {
	try {
		const new_reservation_data = req.body.data;
		const result = await createOne(new_reservation_data);
		if(result.affectedRows == 1){
			res.json(`Se ha creado la reserva con el ID ${result.insertId}`);
			return;
		}
		res.json("Ha ocurrido un error al crear la reserva")
	} catch (error) {
		res.json(error.message);
	}
}

export const update_reservation = async(req, res) => {
	try {
		const id_reservation = req.params.id;
		const update_reservation_data = req.body.data;
		const result = await updateOne(id_reservation, update_reservation_data);
		if(result.affectedRows == 1){
			res.json(`Se ha modificado la reserva con ID ${id_reservation} correctamente`);
			return;
		}
		res.json("Ha ocurrido un error al modificar la reserva")
	} catch (error) {
		res.json(error.message);
	}
}