import { EditModeTodo, EditTodo, EditTodoSuccess } from '../actions';

import { Injectable } from '@angular/core';
import { StateContext } from '@ngxs/store';
import { TodosService } from './../../todos.service';
import { TodosStateModel } from '../models';

@Injectable({ providedIn: 'root' })
export class EditTodoEffect {
  constructor(private _todosService: TodosService) {}

  editModeTodo(ctx: StateContext<TodosStateModel>, { payload }: EditModeTodo) {
    return ctx.patchState({
      todo_selected: payload,
    });
  }

  editTodo(ctx: StateContext<TodosStateModel>, { payload }: EditTodo) {
    ctx.patchState({ loading: true });
    return this._todosService.edit(payload, { delay: 2000 }).subscribe({
      next: (res) => ctx.dispatch(new EditTodoSuccess(res.data)),
      error: (err) => {},
      complete: () => ctx.patchState({ loading: false }),
    });
  }

  editTodoSuccess(
    ctx: StateContext<TodosStateModel>,
    { payload }: EditTodoSuccess
  ) {
    const { todos } = ctx.getState();
    const todoIndex = todos.findIndex((todo) => todo.id === payload.id);
    if (todoIndex == -1) return;
    todos[todoIndex] = payload;

    ctx.patchState({ todos });
  }
}
