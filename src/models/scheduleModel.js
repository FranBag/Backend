import db from "./../config/dbConection.js";

export async function getAll(){
    try{
        const query = "SELECT * FROM schedules";
        const [rows] = await db.query(query);
        return rows;
    }catch(error){
        console.log(error);
        throw new Error("Error al obtener los horarios:" + error.code);
    }
}

export async function getOneByID(id){
    try{
        const query = "SELECT * FROM schedules WHERE id_schedule = ?";
        const [rows] = await db.execute(query, [id]);
        return rows;
    } catch(error){
        console.log(error);
        throw new Error("Error al obtener el horario: " + error.code);
    }
}

export async function getOneByDay(id){
    try{
        const query = "SELECT * FROM schedules WHERE week_days = ?";
        const [rows] = await db.execute(query, [id]);
        return rows;
    } catch(error){
        console.log(error);
        throw new Error("Error al obtener el horario: " + error.code);
    }
}