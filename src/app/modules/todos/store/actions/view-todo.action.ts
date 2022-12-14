import { ViewTodoPayload } from '..';

export class ViewTodo {
  static readonly type = '[Todo] View Selected';
  constructor(public payload: ViewTodoPayload) {}
}
