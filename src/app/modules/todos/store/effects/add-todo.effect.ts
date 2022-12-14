import { AddTodo, AddTodoFailed, AddTodoSuccess } from '../actions';

import { Injectable } from '@angular/core';
import { StateContext } from '@ngxs/store';
import { TodosService } from '../../todos.service';
import { TodosStateModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AddTodoEffect {
  constructor(private todosService: TodosService) {}

  addTodo(ctx: StateContext<TodosStateModel>, { payload }: AddTodo) {
    ctx.patchState({ loading: true });
    return this.todosService.add(payload, { delay: 2000 }).subscribe({
      next: (res) => ctx.dispatch(new AddTodoSuccess(res.data)),
      error: (err) => ctx.dispatch(new AddTodoFailed()),
      complete: () => ctx.patchState({ loading: false }),
    });
  }

  addSuccess(ctx: StateContext<TodosStateModel>, { payload }: AddTodoSuccess) {
    const { todos } = ctx.getState();
    return ctx.patchState({
      todos: [...todos, payload],
    });
  }
}
