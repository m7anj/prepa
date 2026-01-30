import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import recipeRoutes from './routes/recipes';

dotenv.config({ path: './backend/.env' });

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Routes
app.use('/api/recipes', recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});