/////////////////////////////
/// TERMINAR PONER UPDATE ///
/////////////////////////////

import db from "./../config/dbConection.js";


export async function getAll(){
    try{
        const query = "SELECT * FROM reservation";
        const [rows] = await db.query(query);
        return rows;
    }catch(error){
        console.log(error);
        throw new Error("Error al obtener las reservas:" + error.code);
    }
}

export async function getOneByID(id){
    try{
        const query = "SELECT * FROM reservation WHERE id_reservation = ?";
        const [rows] = await db.execute(query, [id]);
        return rows;
    } catch(error){
        console.log(error);
        throw new Error("Error al obtener la reserva: " + error.code);
    }
}

export async function getOneByCustomer(id){
    try{
        const query = "SELECT * FROM reservation WHERE id_customer = ?";
        const [rows] = await db.execute(query, [id]);
        return rows;
    } catch(error){
        console.log(error);
        throw new Error("Error al obtener la reserva: " + error.code);
    }
}

export async function getOneByService(id){
    try{
        const query = "SELECT * FROM reservation WHERE id_service = ?";
        const [rows] = await db.execute(query, [id]);
        return rows;
    } catch(error){
        console.log(error);
        throw new Error("Error al obtener la reserva: " + error.code);
    }
}

export async function createOne(data){
    const params = [
        data.id_customer,
        data.id_service,
        data.id_schedule,
        data.date
    ];

    try{
        const query = "INSERT INTO reservation(id_customer, id_service, id_schedule, date) VALUES (?, ?, ?, ?)";
        const [result] = await db.execute(query, params)
        return result;
    }catch(error){
        console.log(error);
        if(error.code == "ER_NO_REFERENCED_ROW_2"){
            throw new Error("Datos ingresados incorrectos, por favor intente nuevamente con datos correctos");
        } 
        throw new Error("Error al crear la reserva:" + error.code);
    }
}