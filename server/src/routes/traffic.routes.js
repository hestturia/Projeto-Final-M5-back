import express from 'express';
import { getAllTrafficData, getTrafficDataByMunicipio, getTrafficDataByUf } from '../controllers/traffic.controller.js';

const router = express.Router();

router.get('/traffic', getAllTrafficData);
router.get('/traffic/uf/:uf', getTrafficDataByUf);
router.get('/traffic/municipio/:municipio', getTrafficDataByMunicipio);

export default router;
