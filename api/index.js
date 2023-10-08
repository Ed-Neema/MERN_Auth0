import express from "express"
import {connectDB} from "./utils/dbConnection.js";
import userRoutes from  "./routes/user.route.js"
import authRoutes from  "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import path from "path"
// import cors from "cors"
const app = express();
// find the directory name that our app will run on in our server
const __dirname = path.resolve() //find the dynamic director name

app.use(express.static(path.join(__dirname,'/client/dist'))) //serve static files from the specified directory
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html")); //for any GET request that doesn't match the static files in the 'client/dist' directory, it will serve the 'index.html' file.
});
const port = process.env.PORT || 5000;
connectDB();
// app.use(cors())
app.use(cookieParser())
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