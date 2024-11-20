import db from "./../config/dbConection.js";

export async function getAll(){
    try{
        const query = "SELECT * FROM professional INNER JOIN `user` ON professional.id_user = user.id_user";
        const [rows] = await db.query(query);
        return rows;
    }catch(error){
        console.log(error);
        throw new Error("Error al obtener los profesionales:" + error.code);
    }
}

export async function updatespecialty(id, updatedspecialty){
    try{
        const query = `UPDATE professional SET specialty = ? WHERE id_professional = ?`;
        const [result] = await db.execute(query, [updatedspecialty.specialty, id]);
        return result;
    }catch(error){
        console.log(error); //ARREGLAR, TENGO QUE PREGUNTARME QUE ERROR ES, SI ES TAL DIGO TAL COSA, SI NO OTRA COSA.
        if(error.code == "ER_TRUNCATED_WRONG_VALUE_FOR_FIELD"){
            throw new Error("Especialidad no válida, pruebe con un id de servicio correcto");
        }
        throw new Error("Error al actualizar la especialidad del profesional:" + error.code);
    }
}

export async function deleteOne(id){
    try{
        const query = "DELETE FROM professional WHERE id_professional = ?"; // CAPAZ NO FUNCIONE POR LAS RELACIONES ENTRE TABLAS.
        const [result] = await db.execute(query, [id]);
        return result;
    }catch(error){
        console.log(error);
        throw new Error("Error al eliminar el profesional:" + error.code);
    }
}