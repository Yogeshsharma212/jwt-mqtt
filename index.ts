import { Router } from "express";
import express from "express"
import router from './routers/routes'
import createConnection from "./models/connection";
createConnection()
const app = express();
app.use(express.json())

app.use(router)


app.listen(9000,()=>{
     console.log("HELLO  !  You are listning at the port 9000");
})

