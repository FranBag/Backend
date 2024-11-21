import { body, validationResult } from "express-validator"

export const serviceCreateRules = [
    body("data.name")
        .exists().withMessage("Debe proporcionar un nombre(name)")
        .notEmpty().withMessage("Debe proporcionar un nombre no vacío")
        .isAlpha('es-ES', { ignore: ' ' }).withMessage("El nombre solo puede contener letras")
        .isLength({min:4, max: 60}).withMessage("El nombre debe tener entre 4 y 60 caracteres de largo")
        .trim(),
    body("data.description")
        .optional()
        .isString().withMessage("La descripción debe ser un texto")
        .isLength({ max: 500 }).withMessage("La descripción no puede superar los 500 caracteres")
        .trim(),
    body("data.price")
        .exists().withMessage("Debe proporcionar un precio (price)")
        .notEmpty().withMessage("Debe proporcionar un precio no vacío")
        .isInt({ min: 0 }).withMessage("El precio debe ser un número entero positivo"),
    body("data.duration")
        .exists().withMessage("Debe proporcionar una duración (duration)")
        .notEmpty().withMessage("Debe proporcionar una duración no vacía")
        .isInt({ min: 1, max: 50}).withMessage("La duración debe ser un número entero entre 1 y 50(unidades de turno 1 = 30 minutos)")
];

export const serviceUpdateRules = [
    body("data.name")
        .optional()
        .notEmpty().withMessage("Debe proporcionar un nombre no vacío")
        .isAlpha('es-ES', { ignore: ' ' }).withMessage("El nombre solo puede contener letras")
        .isLength({min:4, max: 60}).withMessage("El nombre debe tener entre 4 y 60 caracteres de largo")
        .trim(),
    body("data.description")
        .optional()
        .isString().withMessage("La descripción debe ser un texto")
        .isLength({ max: 500 }).withMessage("La descripción no puede superar los 500 caracteres")
        .trim(),
    body("data.price")
        .optional()
        .notEmpty().withMessage("Debe proporcionar un precio no vacío")
        .isInt({ min: 0 }).withMessage("El precio debe ser un número entero positivo"),
    body("data.duration")
        .optional()
        .notEmpty().withMessage("Debe proporcionar una duración no vacía")
        .isInt({ min: 1, max: 50}).withMessage("La duración debe ser un número entero entre 1 y 50(unidades de turno 1 = 30 minutos)")
];

export const validate = (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.json({ errors: errors.array() });
    }
    next();
}