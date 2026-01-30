import express from 'express';
import { matchRecipes } from '../controllers/recipeController';

const router = express.Router();

// POST /api/recipes/match
router.post('/match', matchRecipes);

export default router;
