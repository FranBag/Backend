import express, {json} from "express";
const app = express();
const router = express.Router();

import config from "./src/config/config.json" assert { type: 'json' };

import {get_all} from "./src/controllers/userController.js"

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// import de routes


// app.use();
app.get("/api/hola", get_all);



app.use((req, res) => {
    res.status(404).send("Página no encontrada.");
});

app.listen(config.server.port, (err) => {
    if(err){
        console.log(err);
        return;
    }else{
        console.log("Servidor funcionando en el puerto " + config.server.port);
    }
});

