import { Request, Response, NextFunction } from 'express';
import { Todo } from '../models/todo.js';

export class TodosController {
  todos: Todo[] = [];

  createTodo = (req: Request, res: Response, next: NextFunction) => {
    try {
      const task = (req.body as { task: string }).task;
      const newTodo = new Todo(Math.random().toString(), task);
      this.todos.push(newTodo);
      res.status(201).json({
        message: 'Created new todo',
        createdTask: newTodo,
      });
    } catch (error) {
      next(error);
    }
  };

  getTodos = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).json({
        tasks: this.todos,
      });
    } catch (error) {
      next(error);
    }
  };

  updateTodo = (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoId = req.params.id;
      const updatedTask = (req.body as { task: string }).task;
      const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);

      if (todoIndex < 0 || !this.todos[todoIndex]) {
        throw new Error('Could not find todo with such id');
      }

      this.todos[todoIndex] = new Todo(this.todos[todoIndex].id, updatedTask);

      res.status(201).json({
        message: 'Todo is updated!',
        updatedTask: this.todos[todoIndex],
      });
    } catch (error) {
      next(error);
    }
  };

  deleteTodo = (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoId = req.params.id;
      const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);

      if (todoIndex < 0) {
        throw new Error('Could not find todo with such id');
      }

      this.todos.splice(todoIndex, 1);

      res.status(201).json({
        message: 'Todo is deleted!',
      });
    } catch (error) {
      next(error);
    }
  };
}
