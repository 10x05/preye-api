import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoute from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

const database = process.env.DATABASE_LINK;
const port = process.env.PORT;

app.use("/products", productRoute);
app.use("/categories", categoryRoutes);

mongoose
  .connect(database)
  .then(() => {
    console.log("connected to database, yay!!");
    app.listen(port, () => {
      console.log(`Hey, server is running on ${port}`);
    });
  })
  .catch(() => {
    console.log("Sorry, Failed to connect to the database");
  });
