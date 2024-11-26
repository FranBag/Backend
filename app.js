import express, {json} from "express";
import cors from "cors";

const app = express();
app.use(cors());

import userRouter from "./src/router/userRoutes.js";
import professionalRoutes from "./src/router/professionalRoutes.js";
import customerRoutes from "./src/router/customerRoutes.js";
import serviceRoutes from "./src/router/serviceRoutes.js";
import reservationRoutes from "./src/router/reservationRoutes.js";
import scheduleRoutes from "./src/router/scheduleRoutes.js";

app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use("/user", userRouter);
app.use("/pro", professionalRoutes);
app.use("/customer", customerRoutes);
app.use("/service", serviceRoutes);
app.use("/reserv", reservationRoutes);
app.use("/schedule", scheduleRoutes);

app.use((req, res) => {
    res.status(404).send("Página no encontrada.");
});


export default app;