import { createOne, deleteOne, getAll, getOneByID, updateOne } from "../models/userModel.js";


// AGREGAR HTTP CODES 200, 404, 500, etc.

export const get_all_users = async(req, res) => {
	try {
		const users = await getAll();
		res.json(users);
	} catch (error) {
		res.json(error);
	}
}

export const get_user = async(req, res) => {
	try {
		const id_user = req.params.id;
		const user = await getOneByID(id_user);
		res.json(user);   
	} catch (error) {
		res.json(error);
	}
}

export const create_user = async(req, res) => {
	try {
		const new_user_data = req.body.data;
		const result = await createOne(new_user_data);
		res.json(result);
	} catch (error) {
		res.json(error);
	}
}

export const update_user = async(req, res) => {
	try {
		const update_user_data = req.body.data;
		const result = await updateOne(update_user_data);
		res.json(result);
	} catch (error) {
		res.json(error);
	}
}

export const delete_user = async(req, res) => {
	try {
		const id_user = req.params.id;
		const result = await deleteOne(id_user);
		res.json(user);   
	} catch (error) {
		res.json(error);
	}
}