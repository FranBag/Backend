import express from express;
import config from "./config.json";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.user((req, res) => {
    res.status(404).send("La página no ha sido encontrada.");
});

app.listen(config.server.port, (err) => {
    if(err){
        console.log(err);
        return;
    }else{
        console.log("Tu servidor anda perfe my brother.")
    }
});
