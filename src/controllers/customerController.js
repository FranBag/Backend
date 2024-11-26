import { deleteOne, getAll, getOneByID } from "../models/customerModel.js";


export const get_all_customers = async (req, res) => {
    try {
        const customers = await getAll();
        res.status(200).json(customers); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const get_customer = async (req, res) => {
    try {
        const id_customer = req.params.id;
        const customer = await getOneByID(id_customer);
        if (customer.length === 0) {
            res.status(404).json({ message: `No se ha encontrado un cliente con el ID ${id_customer}` });
            return;
        }
        res.status(200).json(customer); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const delete_customer = async (req, res) => {
    try {
        const id_customer = req.params.id;
        const result = await deleteOne(id_customer);

        if (result.affectedRows === 1) {
            res.status(200).json({ message: `Se ha eliminado el cliente con el ID ${id_customer}` });
            return;
        }
        res.status(404).json({ message: `No se ha encontrado un cliente con el ID ${id_customer}` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
