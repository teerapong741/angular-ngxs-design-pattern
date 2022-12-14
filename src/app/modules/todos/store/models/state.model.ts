import { Todo } from './todo.model';

export interface TodosStateModel {
  todos: Todo[];
  todo_selected: Todo | null;
  loading: boolean;
}
