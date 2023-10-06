import express from "express"
import {connectDB} from "./utils/dbConnection.js";
import userRoutes from  "./routes/user.route.js"
import authRoutes from  "./routes/auth.route.js"
// import cors from "cors"
const app = express();
const port = process.env.PORT || 5000;
connectDB();
// app.use(cors())
app.use(express.json())
app.listen(port, ()=>{
    console.log("Server Listening on port: ", port)
})

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode, 
    });
})