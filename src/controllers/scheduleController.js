import { getAll, getOneByDay, getOneByID } from "../models/scheduleModel.js";

export const get_all_schedules = async (req, res) => {
    try {
        const schedules = await getAll();
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const get_schedule_by_id = async (req, res) => {
    try {
        const id_schedule = req.params.id;
        const schedule = await getOneByID(id_schedule);
        if (schedule.length === 0) {
            res.status(404).json({ message: `No se ha encontrado un horario con el ID ${id_schedule}` });
            return;
        }
        res.status(200).json(schedule); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const get_schedules_by_day = async (req, res) => {
    try {
        const day = req.params.day;
        const schedule = await getOneByDay(day);
        if (schedule.length === 0) {
            res.status(404).json({ message: `No se han encontrado los horarios del dia ${day}` });
            return;
        }
        res.status(200).json(schedule); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};