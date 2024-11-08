import express, {json} from "express";
const app = express();
const router = express.Router();

import config from "./src/config/config.json"

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// import de routes

// app.use();



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
