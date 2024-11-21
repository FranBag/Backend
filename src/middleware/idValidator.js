import { param, validationResult } from "express-validator"

export const idRules = [
    param("id")
        .exists().withMessage("Debe proporcionar un id")
        .notEmpty().withMessage("Debe proporcionar un número de id no vacío")
        .isDecimal().withMessage("Debe proporcionar un número de id"),
];

export const validate = (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.json({ errors: errors.array() });
    }
    next();
}