import express, {json} from "express";
const app = express();

import config from "./src/config/config.json" assert { type: 'json' };
import userRouter from "./src/router/userRoutes.js";

app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use("/user", userRouter);



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

