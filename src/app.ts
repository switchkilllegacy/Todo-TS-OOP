import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';

import todoRoutes from './routes/todos.js';

const app = express();

app.use(json({ type: ['application/json', 'text/plain'] }));

app.use('/todos', todoRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({ message: error.message });
});

app.listen(3011, () => {
  console.log('Server is running on http://localhost:3011');
});
