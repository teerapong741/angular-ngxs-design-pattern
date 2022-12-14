import { RemoveTodo, RemoveTodoFailed, RemoveTodoSuccess } from '../actions';

import { Injectable } from '@angular/core';
import { StateContext } from '@ngxs/store';
import { TodosService } from './../../todos.service';
import { TodosStateModel } from '../models';

@Injectable({ providedIn: 'root' })
export class RemoveTodoEffect {
  constructor(private _todosService: TodosService) {}

  remove(ctx: StateContext<TodosStateModel>, { payload }: RemoveTodo) {
    ctx.patchState({ loading: true });
    return this._todosService.remove(payload, { delay: 2000 }).subscribe({
      next: (res) => ctx.dispatch(new RemoveTodoSuccess(res.data)),
      error: (err) => ctx.dispatch(new RemoveTodoFailed()),
      complete: () => ctx.patchState({ loading: false }),
    });
  }

  removeSuccess(
    ctx: StateContext<TodosStateModel>,
    { payload }: RemoveTodoSuccess
  ) {
    const { todos } = ctx.getState();
    return ctx.patchState({
      todos: todos.filter((todo) => todo.id !== payload.id),
    });
  }

  removeFailed(ctx: StateContext<TodosStateModel>) {
    return;
  }
}
