import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
   dbName: "quebra-molasdb",
}).then(() => console.log("Connected to MongoDB"))
   .catch((err) => console.error("Failed to connect to MongoDB", err));

app.listen(process.env.PORT || 3000, () => console.log("SERVER is running"));