import { getAll } from "../models/userModel.js";

export const get_all = async(req, res)=>{
        const personas = await getAll();
        res.json(personas);
}