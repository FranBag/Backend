import db from "./../config/dbConection.js";
import { updateReservationManager } from "./../others/updateReservationManager.js"


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

export async function getByCustomer(id){
    try{
        const query = `SELECT 
            r.id_reservation,
            r.id_customer,
            s.\`name\` AS service,
            sch.start_hour AS \`schedule\`,
            r.state,
            r.\`date\`
            FROM reservation r
            INNER JOIN customer c ON r.id_customer = c.id_customer
            INNER JOIN \`user\` u ON c.id_user = u.id_user
            INNER JOIN service s ON r.id_service = s.id_service
            INNER JOIN schedules sch ON r.id_schedule = sch.id_schedule
            WHERE r.id_customer = ?`;

        const [rows] = await db.execute(query, [id]);
        return rows;
    } catch(error){
        console.log(error);
        throw new Error("Error al obtener la reserva: " + error.code);
    }
}

export async function getByProfessional(id){
    try{
        const query = `SELECT
            r.id_reservation,
            r.id_customer,
            r.id_service,
            r.id_schedule,
            r.state,
            r.\`date\`
            FROM reservation r
            INNER JOIN service s ON r.id_service = s.id_service
            INNER JOIN professional p ON s.id_service = p.specialty
            WHERE p.id_user = 2`;
            
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