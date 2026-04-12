import db from '../db/database.js';

const recevoirDonnees = async (req, res) => {
     const { device_id, flamme, fumee, status } = req.body;

  if (!device_id || !flamme || fumee === undefined || !status) {
    return res.status(400).json({ error: 'Données manquantes' });
  }

  try {
    const result = await db.query(
      `INSERT INTO alertes (device_id, flamme, fumee, status)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [device_id, flamme, fumee, status]
    );

    console.log(`device: ${device_id} | flamme: ${flamme} | fumée: ${fumee} | status: ${status}`);

    res.status(201).json({
      success: true,
      data: result.rows[0]
    });

  } catch (err) {
    console.error('Erreur insertion :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

const recupToutesAlertes = async (req, res) => {
    try {
    const result = await db.query(
      'SELECT * FROM alertes ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

export {recevoirDonnees, recupToutesAlertes};