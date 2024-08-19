import express from "express";
import cors from "cors";
import ClothesRoute from "./routes/ClothesRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(ClothesRoute);

app.listen(5000, ()=> console.log('Server up and running'));