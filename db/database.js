import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config({ path: './env/.env' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // ← obligatoire pour Railway
});

pool.connect()
  .then(() => console.log('PostgreSQL Railway connecté !'))
  .catch(err => console.error('Erreur connexion DB :', err));

export default pool;