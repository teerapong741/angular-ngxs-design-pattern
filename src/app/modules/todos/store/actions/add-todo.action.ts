import { AddTodoPayload } from '../models/payload.model';
import { AddTodoResponse } from './../models/payload.model';

export class AddTodo {
  static readonly type = '[todo] Add';
  constructor(public payload: AddTodoPayload) {}
}
export class AddTodoSuccess {
  static readonly type = '[todo] Add Success';
  constructor(public payload: AddTodoResponse) {}
}
export class AddTodoFailed {
  static readonly type = '[todo] Add Failed';
}
