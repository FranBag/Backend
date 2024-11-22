import { body, validationResult } from "express-validator"
import jwt from 'jsonwebtoken';
import config from "./../config/config.json" assert { type: 'json' };

export const userCreateRules = [
    body("data.name")
        .exists().withMessage("Debe proporcionar un nombre(name)")
        .notEmpty().withMessage("Debe proporcionar un nombre no vacío")
        .isAlpha('es-ES', { ignore: ' ' }).withMessage("El nombre solo puede contener letras")
        .isLength({min:4, max: 45}).withMessage("El nombre debe tener entre 4 y 45 caracteres de largo")
        .trim(),
    body("data.email")
        .exists().withMessage("Debe proporcionar un email(email)")
        .notEmpty().withMessage("Debe proporcionar un email no vacío")
        .isEmail().withMessage("Debe proporcionar un email válido")
        .normalizeEmail(),
    body("data.phone_number")
        .exists().withMessage("Debe proporcionar un número de telefono(phone_number)")
        .notEmpty().withMessage("Debe proporcionar un número de telefono no vacío")
        .isDecimal().withMessage("Debe proporcionar un número de telefono decimal")
        .trim(),
    body("data.pass")
        .exists().withMessage("Debe proporcionar una contraseña(pass)")
        .notEmpty().withMessage("Debe proporcionar una contraseña no vacía")
];

export const userLoginRules = [
    body("data.email")
        .exists().withMessage("Debe proporcionar un email(email)")
        .notEmpty().withMessage("Debe proporcionar un email no vacío")
        .isEmail().withMessage("Debe proporcionar un email válido")
        .normalizeEmail(),
    body("data.pass")
        .exists().withMessage("Debe proporcionar una contraseña(pass)")
        .notEmpty().withMessage("Debe proporcionar una contraseña no vacía")
]

export const userUpdateRules = [
    body("data.name")
        .optional()
        .notEmpty().withMessage("Debe proporcionar un nombre no vacío")
        .isAlpha('es-ES', { ignore: ' ' }).withMessage("El nombre solo puede contener letras")
        .isLength({min:4, max: 45}).withMessage("El nombre debe tener entre 4 y 45 caracteres de largo")
        .trim(),
    body("data.email")
        .optional()
        .notEmpty().withMessage("Debe proporcionar un email no vacío")
        .isEmail().withMessage("Debe proporcionar un email válido")
        .normalizeEmail(),
    body("data.phone_number")
        .optional()
        .notEmpty().withMessage("Debe proporcionar un número de telefono no vacío")
        .isDecimal().withMessage("Debe proporcionar un número de telefono decimal")
        .trim(),
    body("data.pass")
        .optional()
        .notEmpty().withMessage("Debe proporcionar una contraseña no vacía")
];

export const validate = (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.json({ errors: errors.array() });
    }
    next();
}

export const isAutenticated = (req, res, next) => {
    if(req.headers["authorization"]){
        try{
            const token = req.headers["authorization"];
            const verified = jwt.verify(token, config.encrypt_key);
            if(verified){
                next();
            }else{
                res.json("Token inválido");
            }
        }catch(error){
            res.json(error.message);
        }
    }else{
        return res.json("Necesitas un token de autorización, porfavor logueate");
    }
}