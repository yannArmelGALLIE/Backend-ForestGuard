import express from 'express';
import {recevoirDonnees, recupToutesAlertes} from '../controllers/alertes.controller.js';

const router = express.Router();

// POST /api/data <- reçoit les données de l'ESP32
router.post('/data', recevoirDonnees);

// GET /api/alertes <- récupère toutes les alertes
router.get('/alertes', recupToutesAlertes);

export default router;