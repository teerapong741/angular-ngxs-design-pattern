import { RemoveTodoPayload, RemoveTodoResponse } from '../models/payload.model';

export class RemoveTodo {
  static readonly type = '[todo] Remove';
  constructor(public payload: RemoveTodoPayload) {}
}

export class RemoveTodoSuccess {
  static readonly type = '[todo] Remove Success';
  constructor(public payload: RemoveTodoResponse) {}
}

export class RemoveTodoFailed {
  static readonly type = '[todo] Remove Failed';
}
