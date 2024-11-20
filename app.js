import express, {json} from "express";
const app = express();

import config from "./src/config/config.json" assert { type: 'json' };
import userRouter from "./src/router/userRoutes.js";
import professionalRoutes from "./src/router/professionalRoutes.js";
import customerRoutes from "./src/router/customerRoutes.js";
import serviceRoutes from "./src/router/serviceRoutes.js";
import reservationRoutes from "./src/router/reservationRoutes.js";

app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use("/user", userRouter);
app.use("/pro", professionalRoutes);
app.use("/customer", customerRoutes);
app.use("/service", serviceRoutes);
app.use("/reserv", reservationRoutes);



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

