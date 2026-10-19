import { Router } from 'express';
import { createTodo } from '../controllers/todos.js';

const router = Router();

router.post('/', createTodo);
router.get('/', (req, res) => {
  res.send('OK');
});
router.patch('/:id', (req, res) => {
  res.send('OK');
});
router.delete('/:id', (req, res) => {
  res.send('OK');
});

export default router;
