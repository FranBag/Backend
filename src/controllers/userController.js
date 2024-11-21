import config from "./../config/config.json" assert { type: 'json' };;
import { createOne, deleteOne, getAll, getOneByEmail, getOneByID, getUserRole, updateOne } from "../models/userModel.js";
import bc from "bcryptjs";
import jwt from 'jsonwebtoken';

const { compareSync } = bc;
const { sign } = jwt;

import validator, { param } from "express-validator";

// AGREGAR HTTP CODES 200, 404, 500, etc.

export const get_all_users = async(req, res) => {
	try {
		const users = await getAll();
		res.json(users);
	} catch (error) {
		res.json(error.message);
	}
}

export const get_user = async(req, res) => {
	try {
		const id_user = req.params.id;
		const user = await getOneByID(id_user);
		if(user.length == 0){
			res.json(`No se ha encontrado un usuario con el id ${id_user}`);
			return;
		}
		res.json(user);
	} catch (error) {
		res.json(error.message);
	}
}

export const create_user = async(req, res) => {
	try {
		const new_user_data = req.body.data;
		const result = await createOne(new_user_data);
		if(result.affectedRows == 1){
			res.json(`Se ha creado el usuario ${new_user_data.name} con el ID ${result.insertId}`);
			return;
		}
		res.json("Ha ocurrido un error al crear el usuario")
	} catch (error) {
		res.json(error.message);
	}
}

export const update_user = async(req, res) => {
	try {
		const id_user = req.params.id;
		const update_user_data = req.body.data;
		const result = await updateOne(id_user, update_user_data);
		if(result.affectedRows == 1){
			res.json(`Se ha modificado el usuario con ID ${id_user} correctamente`);
			return;
		}
		res.json("Ha ocurrido un error al modificar el usuario")
	} catch (error) {
		res.json(error.message);
	}
}

export const delete_user = async(req, res) => {
	try {
		const id_user = req.params.id;
		const result = await deleteOne(id_user);
		if(result.affectedRows == 1){
			res.json(`Se ha eliminado el usuario con el ID ${id_user}`);
			return;
		}
		res.json(`No se ha encontrado un usuario con el ID ${id_user}`);
	} catch (error) {
		res.json(error.message);
	}
}

export const login = async(req,res) => {
	try {
		const {email, pass} = req.body.data;
		const [result] = await getOneByEmail(email);
		const isSame = compareSync(pass, result.pass);
		if(isSame){

			const role = await getUserRole(result.id_user);

			let user = {
				email: result.email,
				role: role
			}
			sign(user, config.encrypt_key, {expiresIn: "600s"}, (error, token) => {
				if(error){
					res.json(error.message);
				}else{
					res.json({data: user, credentials: token});
				}
			})		
		}else{
			res.json("Contraseña incorrecta");
		}
	} catch (error) {
		console.log(error);
		if(error.message == "Illegal arguments: undefined, string"){
			res.json("La contraseña no puede estar indefinida")
			return;
		}
		res.json(error.message);
	}
}