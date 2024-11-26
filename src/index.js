import app from "../app.js";
import config from "./config/config.js";

app.listen(config.server.port, (err) => {
    if(err){
        console.log(err);
        return;
    }else{
        console.log("Servidor funcionando en el puerto " + config.server.port);
    }
});

