import mysql from "mysql2";
import config from "./config.json";

const db = mysql.createConnection(config.database);

db.connect((err)=>{
    err ? console.log(err) : console.log("Base de datos conectada.")
})

export default db;