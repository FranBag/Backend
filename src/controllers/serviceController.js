import { createOne, deleteOne, getAll, getOneByID, updateOne } from "../models/serviceModel.js";


export const get_all_services = async (req, res) => {
    try {
        const services = await getAll();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const get_service = async (req, res) => {
    try {
        const id_service = req.params.id;
        const service = await getOneByID(id_service);
        if (service.length === 0) {
            res.status(404).json({ message: `No se ha encontrado un servicio con el ID ${id_service}` });
            return;
        }
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const create_service = async (req, res) => {
    try {
        const new_service_data = req.body.data;
        const result = await createOne(new_service_data);
        if (result.affectedRows === 1) {
            res.status(201).json({ message: `Se ha creado el servicio ${new_service_data.name} con el ID ${result.insertId}` });
            return;
        }
        res.status(400).json({ message: "Ha ocurrido un error al crear el servicio" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const update_service = async (req, res) => {
    try {
        const id_service = req.params.id;
        const update_service_data = req.body.data;
        const result = await updateOne(id_service, update_service_data);
        if (result.affectedRows === 1) {
            res.status(200).json({ message: `Se ha modificado el servicio con ID ${id_service} correctamente` });
            return;
        }
        res.status(400).json({ message: "Ha ocurrido un error al modificar el servicio" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const delete_service = async (req, res) => {
    try {
        const id_service = req.params.id;
        const result = await deleteOne(id_service);
        if (result.affectedRows === 1) {
            res.status(200).json({ message: `Se ha eliminado el servicio con el ID ${id_service}` });
            return;
        }
        res.status(404).json({ message: `No se ha encontrado un servicio con el ID ${id_service}` }); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

