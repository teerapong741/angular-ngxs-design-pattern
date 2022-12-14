import { Injectable } from '@angular/core';
import { StateContext } from '@ngxs/store';
import { TodosStateModel } from '../models';
import { ViewTodo } from '../actions';

@Injectable({ providedIn: 'root' })
export class ViewTodoEffect {
  constructor() {}

  viewTodo(ctx: StateContext<TodosStateModel>, { payload }: ViewTodo) {
    const { todos } = ctx.getState();
    return ctx.patchState({
      todo_selected: todos.find((todo) => todo.id === payload),
    });
  }
}
