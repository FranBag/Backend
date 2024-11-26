import { updateUserManager } from "../others/updateUserManager.js";
import db from "./../config/dbConection.js";

export async function getAll(){
    try{
        const query = "SELECT * FROM user";
        const [rows] = await db.query(query);
        return rows;
    }catch(error){
        console.log(error);
        throw new Error("Error al obtener los usuarios:" + error.code);
    }
}

export async function getOneByID(id){
    try{
        const query = "SELECT * FROM user WHERE id_user = ?";
        const [rows] = await db.execute(query, [id]);
        return rows;
    } catch(error){
        console.log(error);
        throw new Error("Error al obtener el usuario: " + error.code);
    }
}

export async function getOneByEmail(email){
    try{
        if(email){
            const query = "SELECT * FROM user WHERE email = ?";
            const [rows] = await db.execute(query, [email]);
            if(rows.length == 0){
                throw new Error(`No se ha encontrado un usuario con el email ${email}`);
            }
            return rows;
        }else{
            throw new Error(`El email no puede ser indefinido`);
        }

    } catch(error){
        console.log(error);
        throw new Error("Error al obtener el usuario: " + error);
    }
}


export async function getUserRole(id_user){
    try{
        const query1 = "SELECT id_customer FROM customer WHERE id_user = ?";
        const [customer] = await db.execute(query1, [id_user]);
        if(customer.length > 0) {
            return {
                role:"customer",
                customer:customer[0].id_customer
            };
        }

        const query2 = "SELECT id_professional FROM professional WHERE id_user = ?";
        const [professional] = await db.execute(query2, [id_user]);
        if(professional.length > 0) {
            return {
                role:"professional",
                customer:professional
            };
        }

        throw new Error("El usuario no existe o no tiene rol");
    }catch(error){
        console.log(error);
        throw new Error("Error al determinar el rol del usuario: " + error.message);
    }
}

export async function createOne(data){
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
        console.log(error);
        if(error.code == "ER_DUP_ENTRY"){
            throw new Error("Ya existe un usuario con el email " + params[1]);
        }
        throw new Error("Error al crear el usuario:" + error.code);
    }
}

export async function updateOne(id, updatedData){
    try{
        const {updatedQuery, params} = updateUserManager(updatedData); // Solo modifica el campo necesario.
        params.push(id)
        const query = `UPDATE \`user\` SET ${updatedQuery} WHERE id_user = ?`;
        const [result] = await db.execute(query, params);
        return result;
    }catch(error){
        console.log(error); 
        if(error.code == "ER_DUP_ENTRY"){
            throw new Error(`El email ${updatedData.email} ya está en uso, pruebe con un email diferente`);    
        }
        throw new Error("Error al actualizar el usuario:" + error.code);
    }
}

export async function deleteOne(id){
    try{
        const query = "DELETE FROM user WHERE id_user = ?"; 
        const [result] = await db.execute(query, [id]);
        return result;
    }catch(error){
        console.log(error);
        throw new Error("Error al eliminar el usuario:" + error.code);
    }
}