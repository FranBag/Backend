import { param, validationResult } from "express-validator"

const weekDays = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO"];


export const validateSchedule = [
    param("day")
        .exists().withMessage("Debe proporcionar un dia de la semana")
        .notEmpty().withMessage("Debe proporcionar un dia de la semana no vacío")
        .custom((value) => weekDays.includes(value.toUpperCase()))
        .withMessage(`El día debe ser uno de los siguientes: ${weekDays.join(", ")}`)
];

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            message: errors.array()
        });
    }
    next();
};