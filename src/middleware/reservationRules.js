import { body, check, param, query, validationResult } from "express-validator"

export const reservationCreateRules = [
    body("data.id_user")
        .exists().withMessage("Debe proporcionar el ID del usuario (id_user)")
        .notEmpty().withMessage("El ID del usuario no puede estar vacío")
        .isInt({ min: 1 }).withMessage("El ID del usuario debe ser un número entero positivo"),

    body("data.id_service")
        .exists().withMessage("Debe proporcionar el ID del servicio (id_service)")
        .notEmpty().withMessage("El ID del servicio no puede estar vacío")
        .isInt({ min: 1 }).withMessage("El ID del servicio debe ser un número entero positivo"),

    body("data.id_schedule")
        .exists().withMessage("Debe proporcionar el ID del horario (id_schedule)")
        .notEmpty().withMessage("El ID del horario no puede estar vacío")
        .isInt({ min: 1 }).withMessage("El ID del horario debe ser un número entero positivo"),

    body("data.date")
        .exists().withMessage("Debe proporcionar una fecha (date)")
        .notEmpty().withMessage("La fecha no puede estar vacía")
        .isDate({ format: "YYYY-MM-DD", strictMode: true }).withMessage("Debe proporcionar una fecha válida en formato YYYY-MM-DD"),
];

export const reservationUpdateRules = [
    body("data.id_customer")
        .optional()
        .notEmpty().withMessage("El ID del cliente no puede estar vacío")
        .isInt({ min: 1 }).withMessage("El ID del cliente debe ser un número entero positivo"),

    body("data.id_service")
        .optional()
        .notEmpty().withMessage("El ID del servicio no puede estar vacío")
        .isInt({ min: 1 }).withMessage("El ID del servicio debe ser un número entero positivo"),

    body("data.id_schedule")
        .optional()
        .notEmpty().withMessage("El ID del horario no puede estar vacío")
        .isInt({ min: 1 }).withMessage("El ID del horario debe ser un número entero positivo"),

    body("data.state")
        .optional()
        .notEmpty().withMessage("El estado no puede estar vacío")
        .isIn(["RESERVADO", "FINALIZADO", "CANCELADO"]).withMessage("El estado debe ser 'RESERVADO', 'FINALIZADO' o 'CANCELADO'"),

    body("data.date")
        .optional()
        .notEmpty().withMessage("La fecha no puede estar vacía")
        .isDate({ format: "YYYY-MM-DD", strictMode: true }).withMessage("Debe proporcionar una fecha válida en formato YYYY-MM-DD"),
];


export const validate = (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ 
            errors: errors.array(), 
            message: "Errores de validación en la solicitud" 
        });
    }
    next();
}