import { Todo } from '../types';
import { client } from '../utils';

export const USER_ID = 10389;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const addTodo = (title: string) => {
  return client.post<Todo>('/todos', {
    userId: USER_ID,
    completed: false,
    title,
  });
};

export const deleteTodo = (todoId: number) => {
  return client.delete((`/todos/${todoId}`));
};

// Add more methods here
