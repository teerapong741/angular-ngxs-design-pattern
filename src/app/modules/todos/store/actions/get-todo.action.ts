import { GetTodosResponse } from '..';

export class GetTodoList {
  static readonly type = '[todo] Get List';
}

export class GetTodoListSuccess {
  static readonly type = '[todo] Get List Success';
  constructor(public payload: GetTodosResponse) {}
}

export class GetTodoListFailed {
  static readonly type = '[todo] Get List Failed';
}
