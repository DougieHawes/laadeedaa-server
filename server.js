import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import blogRoute from "./routes/blogRoutes.js";
import productRoute from "./routes/productRoutes.js";
import userRoute from "./routes/userRoutes.js";

dotenv.config();

const app = express();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`server running on port:${PORT}`));

app.use("/blog", blogRoute);
app.use("/product", productRoute);
app.use("/user", userRoute);

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("mongodb connected"))
  .catch((e) => console.log(e));
