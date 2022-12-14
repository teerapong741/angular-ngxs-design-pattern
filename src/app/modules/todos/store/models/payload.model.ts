import { Todo } from './todo.model';

export type EditModeTodoPayload = Todo;

export type ViewTodoPayload = string;

export type GetTodosResponse = Todo[];

export type AddTodoPayload = Omit<Todo, 'id'>;
export type AddTodoResponse = Todo;

export type EditTodoPayload = Required<Pick<Todo, 'id'>> & Partial<Todo>;
export type EditTodoResponse = Todo;

export type RemoveTodoPayload = Pick<Todo, 'id'>;
export type RemoveTodoResponse = Todo;
