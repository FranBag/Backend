import config from "./../config/config.json" assert { type: 'json' };
import { createOne, deleteOne, getAll, getOneByEmail, getOneByID, getUserRole, updateOne } from "../models/userModel.js";
import bc from "bcryptjs";
import jwt from 'jsonwebtoken';

const { compareSync } = bc;
const { sign } = jwt;


export const get_all_users = async (req, res) => {
    try {
        const users = await getAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const get_user = async (req, res) => {
    try {
        const id_user = req.params.id;
        const user = await getOneByID(id_user);
        if (user.length === 0) {
            res.status(404).json({ message: `No se ha encontrado un usuario con el ID ${id_user}` });
            return;
        }
        res.status(200).json(user); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const create_user = async (req, res) => {
    try {
        const new_user_data = req.body.data;
        const result = await createOne(new_user_data);
        if (result.affectedRows === 1) {
            res.status(201).json({ message: `Se ha creado el usuario ${new_user_data.name} con el ID ${result.insertId}` });
            return;
        }
        res.status(400).json({ message: "Ha ocurrido un error al crear el usuario" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const update_user = async (req, res) => {
    try {
        const id_user = req.params.id;
        const update_user_data = req.body.data;
        const result = await updateOne(id_user, update_user_data);
        if (result.affectedRows === 1) {
            res.status(200).json({ message: `Se ha modificado el usuario con ID ${id_user} correctamente` });
            return;
        }
        res.status(400).json({ message: "Ha ocurrido un error al modificar el usuario" }); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const delete_user = async (req, res) => {
    try {
        const id_user = req.params.id;
        const result = await deleteOne(id_user);
        if (result.affectedRows === 1) {
            res.status(200).json({ message: `Se ha eliminado el usuario con el ID ${id_user}` });
            return;
        }
        res.status(404).json({ message: `No se ha encontrado un usuario con el ID ${id_user}` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, pass } = req.body.data;
        const [result] = await getOneByEmail(email);
        if (!result) {
            res.status(404).json({ message: "Usuario no encontrado" }); // 404: Not Found
            return;
        }

        const isSame = compareSync(pass, result.pass);
        if (isSame) {
            const {role} = await getUserRole(result.id_user);

            const user = {
                id: result.id_user,
                name: result.name,
                email: result.email,
                role: role,
            };

            sign(user, config.encrypt_key, { expiresIn: "600s" }, (error, token) => {
                if (error) {
                    res.status(500).json({ message: error.message });
                } else {
                    res.status(200).json({ data: user, credentials: token });
                }
            });
        } else {
            res.status(401).json({ message: "Contraseña incorrecta" });
        }
    } catch (error) {
        console.error(error);

        if (error.message === "Illegal arguments: undefined, string") {
            res.status(400).json({ message: "La contraseña no puede estar indefinida" });
            return;
        }

        res.status(500).json({ message: error.message }); 
    }
};