import express from 'express';
const router = express.Router();
import supabase from '@supabase/supabase-js'

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
  const { name, email } = req.body;

  const { data, error } = await supabase
    .from('users')
    .insert([{ name, email }])
    .select();

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json(data);
});

export default router;
