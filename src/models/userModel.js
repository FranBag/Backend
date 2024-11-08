import db from "./../config/dbConection.js";

export async function getAll(){
    try{
        const query = "SELECT * FROM user";
        const [rows] = await db.query(query);
        return rows;
    }catch(err){
        console.log(err) //ARREGLAR, TENGO QUE PREGUNTARME QUE ERROR ES, SI ES TAL DIGO TAL COSA, SI NO OTRA COSA.
    }
}