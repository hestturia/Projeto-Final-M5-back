import express from 'express';
import { getAllTrafficData, getTrafficDataById } from '../controllers/traffic.controller.js';

const router = express.Router();

router.get('/traffic', getAllTrafficData);  // Rota para buscar todos os dados
router.get('/traffic/:id', getTrafficDataById);  // Rota para buscar dados por ID

export default router;
