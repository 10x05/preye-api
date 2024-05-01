import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoute from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import authRoute from "./routes/authRoutes.js";
import usersRoute from "./routes/usersRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());

const database = process.env.DATABASE_LINK;
const port = process.env.PORT;

app.use(
  cors({
    origin: ["https://may-mart.vercel.app", "http://localhost:5173/"],
    credentials: true,
    // methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/products", productRoute);
app.use("/categories", categoryRoutes);
app.use("/auth", authRoute);
app.use("/users", usersRoute);

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
