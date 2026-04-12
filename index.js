import dotenv from 'dotenv';
dotenv.config({ path: './env/.env' });

import express from 'express';
import cors from 'cors';
import db from './db/database.js';
import app from './app.js';
import routeAlertes from "./routes/index.route.js";

const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  methods: ['GET', 'POST'],
}));
app.use(express.json());

app.use('/api', routeAlertes);

app.get('/', async (req, res) => {
  const result = await db.query('SELECT NOW()');
  res.json({ message: 'ForestGuard API running !', time: result.rows[0] });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});




