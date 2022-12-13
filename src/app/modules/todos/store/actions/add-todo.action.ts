import { map, asapScheduler, catchError, of, finalize } from 'rxjs';
import { AddTodoPayload } from './../models/payload.model';
import { Todo, TodosStateModel } from '..';
import { TodosService } from './../../todos.service';
import { Action, StateContext } from '@ngxs/store';

//** Actions */
export class AddTodo {
  static readonly type = '[todo] Add';
  constructor(public payload: AddTodoPayload) {}
}

export class AddTodoSuccess {
  static readonly type = '[todo] Add Success';
  constructor(public payload: Todo) {}
}

export class AddTodoFailed {
  static readonly type = '[todo] Add Failed';
}

//** Effect */
export namespace AddTodoEffect {
  export function addTodo(
    ctx: StateContext<TodosStateModel>,
    { payload }: AddTodo,
    _todosService: TodosService
  ) {
    ctx.patchState({ loading: true });
    return _todosService.add(payload).subscribe({
      next: (res) => ctx.dispatch(new AddTodoSuccess(res)),
      error: (err) => ctx.dispatch(new AddTodoFailed()),
      complete: () => ctx.patchState({ loading: false }),
    });
  }

  export function addSuccess(
    ctx: StateContext<TodosStateModel>,
    { payload }: AddTodoSuccess,
    _todosService: TodosService
  ) {
    const { todos } = ctx.getState();
    return ctx.patchState({
      todos: [...todos, payload],
    });
  }
}
