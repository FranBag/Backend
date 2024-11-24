/////////////////////////////
///   SANITIZADOR FECHA   ///
/////////////////////////////

import db from "./../config/dbConection.js";
import { updateReservationManager } from "./../others/updateReservationManager.js"


// convertirFecha = (date) => {
//     const fecha = new Date(date);
//     const dia = fecha.getUTCDate().toString().padStart(2, '0');
//     const mes = (fecha.getUTCMonth() + 1).toString().padStart(2, '0');
//     const anio = fecha.getUTCFullYear();
//     return `${anio}-${mes}-${dia}`;
// }



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

export async function getOneByProfessional(id){
    try{
        const query = `SELECT reservation.id_customer, reservation.id_service, reservation.id_schedule, reservation.state, reservation.date
        FROM reservation
        INNER JOIN service ON reservation.id_service = service.id_service
        INNER JOIN professional ON service.id_service = professional.specialty WHERE professional.id_user = ?;`;
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

export async function updateOne(id, updatedData){
    try{
        const {updatedQuery, params} = updateReservationManager(updatedData); // Solo modifica el campo necesario.
        params.push(id)
        const query = `UPDATE reservation SET ${updatedQuery} WHERE id_reservation = ?`;
        const [result] = await db.execute(query, params);
        return result;
    }catch(error){
        console.log(error);
        throw new Error("Error al actualizar la reserva:" + error.code);
    }
}