import express from "express";
import path from "path";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/product.route.js";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

const __dirname = path.resolve();

//middlewares
app.use(express.json());

//routes
app.use("/api/products", productRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

//Database connection and server start
app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at port: ${PORT}.`);
});
