export interface Todo {
  id: string;
  subject: string;
  detail: string;
  is_complete: boolean;
}

export interface TodosStateModel {
  todos: Todo[];
  todo_selected: Todo | null;
  loading: boolean;
}
