import { deleteOne, getAll, updatespecialty } from "../models/professionalModel.js";


export const get_all_proffesionals = async (req, res) => {
    try {
        const professionals = await getAll();
        res.status(200).json(professionals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const update_specialty = async (req, res) => {
    try {
        const id_professional = req.params.id;
        const update_specialty = req.body.data;
        const result = await updatespecialty(id_professional, update_specialty);

        if (result.affectedRows === 1) {
            res.status(200).json({ message: `Se ha modificado la especialidad del profesional con ID ${id_professional} correctamente` });
            return;
        }

        res.status(404).json({ message: `No se ha encontrado un profesional con el ID ${id_professional}` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const delete_professional = async (req, res) => {
    try {
        const id_professional = req.params.id;
        const result = await deleteOne(id_professional);

        if (result.affectedRows === 1) {
            res.status(200).json({ message: `Se ha eliminado el profesional con el ID ${id_professional}` });
            return;
        }

        res.status(404).json({ message: `No se ha encontrado un profesional con el ID ${id_professional}` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
