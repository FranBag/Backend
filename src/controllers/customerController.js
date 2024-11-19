import { deleteOne, getAll } from "../models/customerModel.js";


export const get_all_customers = async(req, res) => {
	try {
		const customers = await getAll();
		res.json(customers);
	} catch (error) {
		res.json(error.message);
	}
}

export const delete_customer = async(req, res) => {
	try {
		const id_customer = req.params.id;
		const result = await deleteOne(id_customer);
		if(result.affectedRows == 1){
			res.json(`Se ha eliminado el cliente con el ID ${id_customer}`);
			return;
		}
		res.json(`No se ha encontrado un cliente con el ID ${id_customer}`);
	} catch (error) {
		res.json(error.message);
	}
}