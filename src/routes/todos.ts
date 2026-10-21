import { Router } from 'express';
import { TodosController } from '../controllers/todos.js';

const router = Router();
const todosController = new TodosController();

router.post('/', todosController.createTodo);
router.get('/', todosController.getTodos);
router.patch('/:id', todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);

export default router;
