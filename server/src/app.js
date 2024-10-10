import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import trafficRoutes from './routes/traffic.routes.js';
import corsConfig from "./config/cors.config.js";
import { testDatabase } from '../database/databaseConfig.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(corsConfig);

testDatabase()

mongoose.connect(process.env.MONGODB_URI, {
   dbName: "test", 
 }).then(() => console.log("Connected to MongoDB"))
   .catch((err) => console.error("Failed to connect to MongoDB", err));
 

app.use('/', trafficRoutes);

app.listen(process.env.PORT || 3000, () => console.log("SERVER is running"));
