import { EditModeTodoPayload, EditTodoResponse } from '../models/payload.model';

import { EditTodoPayload } from '../models/payload.model';

export class EditModeTodo {
  static readonly type = '[Todo] Edit Mode';
  constructor(public payload: EditModeTodoPayload) {}
}

export class EditTodo {
  static readonly type = '[todo] Edit';
  constructor(public payload: EditTodoPayload) {}
}

export class EditTodoSuccess {
  static readonly type = '[todo] Edit Success';
  constructor(public payload: EditTodoResponse) {}
}

export class EditTodoFailed {
  static readonly type = '[todo] Edit Failed';
}
