import { Todo, TodosStateModel } from '..';

import { StateContext } from '@ngxs/store';
import { TodosService } from '../../todos.service';

//** Actions */
export class GetTodoList {
  static readonly type = '[todo] Get List';
}

export class GetTodoListSuccess {
  static readonly type = '[todo] Get List Success';
  constructor(public payload: Todo[]) {}
}

export class GetTodoListFailed {
  static readonly type = '[todo] Get List Failed';
}

//** Effect */
export namespace GetTodoEffect {
  export function get(
    ctx: StateContext<TodosStateModel>,
    _todosService: TodosService
  ) {
    ctx.patchState({
      loading: true,
    });
    return _todosService.get({ delay: 2000 }).subscribe({
      next: (res) => ctx.dispatch(new GetTodoListSuccess(res)),
      error: (err) => ctx.dispatch(new GetTodoListFailed()),
      complete: () => ctx.patchState({ loading: false }),
    });
  }

  export function getSuccess(
    ctx: StateContext<TodosStateModel>,
    { payload }: GetTodoListSuccess,
    _todosService: TodosService
  ) {
    return ctx.patchState({
      todos: payload,
    });
  }

  export function getFailed(
    ctx: StateContext<TodosStateModel>,
    _todosService: TodosService
  ) {
    return;
  }
}
