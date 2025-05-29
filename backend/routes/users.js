import express from 'express';
const router = express.Router();
import supabase from '../supabaseClient.js'


// GET /users
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('users')
    .select('*');

  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
});

// POST /users
router.post('/', async (req, res) => {
  const { nome, email,senha } = req.body;

  const { data, error } = await supabase
    .from('users')
    .insert([{ nome, email,senha }])
    .select();

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json(data);
});

export default router;
