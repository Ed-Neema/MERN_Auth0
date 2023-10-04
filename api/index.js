import express from "express"
import {connectDB} from "./utils/dbConnection.js";
import userRoutes from  "./routes/user.route.js"

const app = express();
const port = process.env.PORT || 5000;
connectDB();
app.use(express.json())
app.listen(port, ()=>{
    console.log("Server Listening on port: ", port)
})

app.use("/api/user",userRoutes);