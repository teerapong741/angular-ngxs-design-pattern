export interface Todo {
  id: string;
  subject: string;
  detail: string;
  is_complete: boolean;
}

export interface TodosStateModel {
  todos: Todo[];
  loading: boolean;
}
