import { EditTodoPayload } from './../models/payload.model';
import { Todo } from '..';

export class EditTodo {
  static readonly type = '[todo] Edit';
  constructor(public payload: EditTodoPayload) {}
}

export class EditTodoSuccess {
  static readonly type = '[todo] Edit Success';
  constructor(public payload: Todo) {}
}

export class EditTodoFailed {
  static readonly type = '[todo] Edit Failed';
}
