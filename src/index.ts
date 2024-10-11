import express from "express";
import petsRouter from "./routes/petsRoute";


const app = express();
const port = 3000;

app.use(petsRouter)

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
