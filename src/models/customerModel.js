import db from "./../config/dbConection.js";

export async function getAll(){
    try{
        const query = "SELECT * FROM customer INNER JOIN `user` ON customer.id_customer = user.id_user";
        const [rows] = await db.query(query);
        return rows;
    }catch(error){
        console.log(error);
        throw new Error("Error al obtener los clientes:" + error.code);
    }
}

export async function deleteOne(id){
    try{
        const query = "DELETE FROM customer WHERE id_customer = ?"; // CAPAZ NO FUNCIONE POR LAS RELACIONES ENTRE TABLAS.
        const [result] = await db.execute(query, [id]);
        return result;
    }catch(error){
        console.log(error);
        throw new Error("Error al eliminar el cliente:" + error.code);
    }
}