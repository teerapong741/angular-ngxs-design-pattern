import { GetTodoListFailed, GetTodoListSuccess } from '../actions';

import { Injectable } from '@angular/core';
import { StateContext } from '@ngxs/store';
import { TodosService } from './../../todos.service';
import { TodosStateModel } from '../models';

@Injectable({ providedIn: 'root' })
export class GetTodoEffect {
  constructor(private _todosService: TodosService) {}

  get(ctx: StateContext<TodosStateModel>) {
    ctx.patchState({
      loading: true,
    });
    return this._todosService.get({ delay: 2000 }).subscribe({
      next: (res) => ctx.dispatch(new GetTodoListSuccess(res.data)),
      error: (err) => ctx.dispatch(new GetTodoListFailed()),
      complete: () => ctx.patchState({ loading: false }),
    });
  }

  getSuccess(
    ctx: StateContext<TodosStateModel>,
    { payload }: GetTodoListSuccess
  ) {
    return ctx.patchState({
      todos: payload,
    });
  }

  getFailed(ctx: StateContext<TodosStateModel>) {
    return;
  }
}
