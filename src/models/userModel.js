import db from "./../config/dbConection.js";

async function getAll(){
    try{
        const query = "SELECT * FROM usuario";
        const rows = await db.query(query);
        return rows;
    }catch(err){
        console.log(err) //ARREGLAR, TENGO QUE PREGUNTARME QUE ERROR ES, SI ES TAL DIGO TAL COSA, SI NO OTRA COSA.
    }
}