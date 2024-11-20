import { createOne, deleteOne, getAll, getOneByID, updateOne } from "../models/serviceModel.js";


export const get_all_services = async(req, res) => {
	try {
		const services = await getAll();
		res.json(services);
	} catch (error) {
		res.json(error.message);
	}
}

export const get_service = async(req, res) => {
	try {
		const id_service = req.params.id;
		const service = await getOneByID(id_service);
		if(JSON.stringify(service) == "[]"){
			res.json(`No se ha encontrado un servicio con el id ${id_service}`);
			return;
		}
		res.json(service);
	} catch (error) {
		res.json(error.message);
	}
}


export const create_service = async(req, res) => {
	try {
		const new_service_data = req.body.data;
		const result = await createOne(new_service_data);
		if(result.affectedRows == 1){
			res.json(`Se ha creado el servicio ${new_service_data.name} con el ID ${result.insertId}`);
			return;
		}
		res.json("Ha ocurrido un error al crear el servicio")
	} catch (error) {
		res.json(error.message);
	}
}

export const update_service = async(req, res) => {
	try {
		const id_service = req.params.id;
		const update_service_data = req.body.data;
		const result = await updateOne(id_service, update_service_data);
		if(result.affectedRows == 1){
			res.json(`Se ha modificado el servicio con ID ${id_service} correctamente`);
			return;
		}
		res.json("Ha ocurrido un error al modificar el servicio")
	} catch (error) {
		res.json(error.message);
	}
}

export const delete_service = async(req, res) => {
	try {
		const id_service = req.params.id;
		const result = await deleteOne(id_service);
		if(result.affectedRows == 1){
			res.json(`Se ha eliminado el servicio con el ID ${id_service}`);
			return;
		}
		res.json(`No se ha encontrado un servicio con el ID ${id_service}`);
	} catch (error) {
		res.json(error.message);
	}
}