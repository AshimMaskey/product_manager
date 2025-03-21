import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/product.route.js"

dotenv.config();
const PORT=process.env.PORT || 8000;
const app=express();

//middlewares
app.use(express.json());

//routes
app.use("/api/products", productRoute);

//Database connection and server start
app.listen(PORT,()=>{
	connectDB();
	console.log(`Server started at port: ${PORT}.`);
})