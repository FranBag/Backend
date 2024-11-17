import { updateManager } from "../others/updateManager.js";
import db from "./../config/dbConection.js";
import validator from "express-validator";

export async function getAll(){
    try{
        const query = "SELECT * FROM user";
        const [rows] = await db.query(query);
        return rows;
    }catch(error){
        console.log(error); //ARREGLAR, TENGO QUE PREGUNTARME QUE ERROR ES, SI ES TAL DIGO TAL COSA, SI NO OTRA COSA.
    }
}

export async function getOneByID(id){
    try{
        const query = "SELECT * FROM user WHERE id_user = ?";
        const [rows] = await db.execute(query, [id]);
        return rows;
    } catch(error){
        console.log(error); //ARREGLAR, TENGO QUE PREGUNTARME QUE ERROR ES, SI ES TAL DIGO TAL COSA, SI NO OTRA COSA.
    }
}

export async function createOne(data){ //CONTRASEÑA TIENE QUE ESTAR ENCRIPTADA
    const params = [
        data.name,
        data.email,
        data.phone_number,
        data.pass
    ];

    try{
        const query = "INSERT INTO \`user\`(name, email, phone_number, pass) VALUES (?, ?, ?, ?)";
        const [result] = await db.execute(query, params)
        return result;
    }catch(error){
        console.log(error); //ARREGLAR, TENGO QUE PREGUNTARME QUE ERROR ES, SI ES TAL DIGO TAL COSA, SI NO OTRA COSA.
    }
}

export async function updateOne(id, updatedData){//PARAMS ES UN OBJETO{}
    const {updatedQuery, params} = updateManager();
    try{
        const query = `UPDATE \`user\` SET ${updatedQuery}`;
        const [result] = await db.execute(query, [params]);
        return result;
    }catch(error){
        console.log(error); //ARREGLAR, TENGO QUE PREGUNTARME QUE ERROR ES, SI ES TAL DIGO TAL COSA, SI NO OTRA COSA.
    }
}

export async function deleteOne(id){
    try{
        const query = "DELETE FROM user WHERE id_user = ?"; // CAPAZ NO FUNCIONE POR LAS RELACIONES ENTRE TABLAS.
        const [result] = await db.execute(query, [id]);
    }catch(error){
        console.log(error); //ARREGLAR, TENGO QUE PREGUNTARME QUE ERROR ES, SI ES TAL DIGO TAL COSA, SI NO OTRA COSA.
    }
}