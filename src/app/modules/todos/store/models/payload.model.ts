import { Todo } from './todos.model';

export type AddTodoPayload = Omit<Todo, 'id'>;
export type EditTodoPayload = Required<Pick<Todo, 'id'>> & Partial<Todo>;
export type RemoveTodoPayload = Pick<Todo, 'id'>;
