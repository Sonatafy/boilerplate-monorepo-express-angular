import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import healthRoutes from './routes/health';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api', healthRoutes);

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Welcome to the Express TypeScript API' });
});

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  });
});

// Handle 404
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    message: 'Not Found'
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Health check available at: http://localhost:${port}/api/healthz`);
});
