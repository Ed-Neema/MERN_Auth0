import express from "express"
import {connectDB} from "./utils/dbConnection.js";


const app = express();
const port = process.env.PORT || 5000;
connectDB();
app.listen(port, ()=>{
    console.log("Server Listening on port: ", port)
})