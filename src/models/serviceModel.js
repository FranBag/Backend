import db from "./../config/dbConection.js";
import {updateServiceManager} from "./../others/updateServiceManager.js"
export async function getAll(){
    try{
        const query = "SELECT * FROM service";
        const [rows] = await db.query(query);
        return rows;
    }catch(error){
        console.log(error);
        throw new Error("Error al obtener los servicios:" + error.code);
    }
}

export async function getOneByID(id){
    try{
        const query = "SELECT * FROM service WHERE id_service = ?";
        const [rows] = await db.execute(query, [id]);
        return rows;
    } catch(error){
        console.log(error);
        throw new Error("Error al obtener el servicio: " + error.code);
    }
}

export async function createOne(data){
    const params = [
        data.name,
        data.description,
        data.price,
        data.duration
    ];

    try{
        const query = "INSERT INTO service(name, description, price, duration) VALUES (?, ?, ?, ?)";
        const [result] = await db.execute(query, params)
        return result;
    }catch(error){
        console.log(error);
        throw new Error("Error al crear el servicio:" + error.code);
    }
}

export async function updateOne(id, updatedData){
    try{
        const {updatedQuery, params} = updateServiceManager(updatedData); // Solo modifica el campo necesario.
        params.push(id)
        const query = `UPDATE service SET ${updatedQuery} WHERE id_service = ?`;
        const [result] = await db.execute(query, params);
        return result;
    }catch(error){
        console.log(error); //ARREGLAR, TENGO QUE PREGUNTARME QUE ERROR ES, SI ES TAL DIGO TAL COSA, SI NO OTRA COSA.
        if(error.code == "WARN_DATA_TRUNCATED"){
            throw new Error("Datos ingresados inválidos:");
        }
        throw new Error("Error al actualizar el usuario:" + error.code);
    }
}

export async function deleteOne(id){
    try{
        const query = "DELETE FROM service WHERE id_service = ?"; // CAPAZ NO FUNCIONE POR LAS RELACIONES ENTRE TABLAS.
        const [result] = await db.execute(query, [id]);
        return result;
    }catch(error){
        console.log(error);
        throw new Error("Error al eliminar el servicio:" + error.code);
    }
}