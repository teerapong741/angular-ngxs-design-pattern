import { StateContext } from '@ngxs/store';
import { RemoveTodoPayload } from './../models/payload.model';
import { Todo, TodosStateModel } from '..';
import { TodosService } from '../../todos.service';

//** Actions */
export class RemoveTodo {
  static readonly type = '[todo] Remove';
  constructor(public payload: RemoveTodoPayload) {}
}

export class RemoveTodoSuccess {
  static readonly type = '[todo] Remove Success';
  constructor(public payload: Todo) {}
}

export class RemoveTodoFailed {
  static readonly type = '[todo] Remove Failed';
}

//** Effect */
export namespace RemoveTodoEffect {
  export function remove(
    ctx: StateContext<TodosStateModel>,
    { payload }: RemoveTodo,
    _todosService: TodosService
  ) {
    ctx.patchState({ loading: true });
    return _todosService.remove(payload).subscribe({
      next: (res) => ctx.dispatch(new RemoveTodoSuccess(res)),
      error: (err) => ctx.dispatch(new RemoveTodoFailed()),
      complete: () => ctx.patchState({ loading: false }),
    });
  }

  export function removeSuccess(
    ctx: StateContext<TodosStateModel>,
    { payload }: RemoveTodoSuccess,
    _todosService: TodosService
  ) {
    const { todos } = ctx.getState();
    return ctx.patchState({
      todos: todos.filter((todo) => todo.id !== payload.id),
    });
  }

  export function removeFailed(
    ctx: StateContext<TodosStateModel>,
    _todosService: TodosService
  ) {
    return;
  }
}
