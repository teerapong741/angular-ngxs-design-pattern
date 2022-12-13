import { Action, State, StateContext } from '@ngxs/store';
import {
  AddTodo,
  AddTodoEffect,
  AddTodoFailed,
  AddTodoSuccess,
  GetTodoEffect,
  GetTodoList,
  GetTodoListFailed,
  GetTodoListSuccess,
  RemoveTodo,
  RemoveTodoEffect,
} from './actions';
import {
  RemoveTodoFailed,
  RemoveTodoSuccess,
} from './actions/remove-todo.action';
import { ViewTodo, ViewTodoEffect } from './actions/view-todo.action';

import { Injectable } from '@angular/core';
import { TodosService } from './../todos.service';
import { TodosStateModel } from './models/todos.model';

const initial: TodosStateModel = {
  todos: [],
  todo_selected: null,
  loading: false,
};

@State<TodosStateModel>({
  name: 'todos',
  defaults: initial,
})
@Injectable()
export class TodosState {
  constructor(private _todosService: TodosService) {}

  @Action(GetTodoList)
  private getTodoList(ctx: StateContext<TodosStateModel>) {
    return GetTodoEffect.get(ctx, this._todosService);
  }

  @Action(GetTodoListSuccess)
  private getTodoListSuccess(
    ctx: StateContext<TodosStateModel>,
    action: GetTodoListSuccess
  ) {
    return GetTodoEffect.getSuccess(ctx, action, this._todosService);
  }

  @Action(GetTodoListFailed)
  private getTodoListFailed(ctx: StateContext<TodosStateModel>) {
    return GetTodoEffect.getFailed(ctx, this._todosService);
  }

  @Action(AddTodo)
  private addTodo(ctx: StateContext<TodosStateModel>, action: AddTodo) {
    return AddTodoEffect.addTodo(ctx, action, this._todosService);
  }

  @Action(AddTodoSuccess)
  private addTodoSuccess(
    ctx: StateContext<TodosStateModel>,
    action: AddTodoSuccess
  ) {
    return AddTodoEffect.addSuccess(ctx, action, this._todosService);
  }

  @Action(AddTodoFailed)
  private addTodoFailed(ctx: StateContext<TodosStateModel>) {
    return;
  }

  @Action(RemoveTodo)
  private removeTodo(ctx: StateContext<TodosStateModel>, action: RemoveTodo) {
    return RemoveTodoEffect.remove(ctx, action, this._todosService);
  }

  @Action(RemoveTodoSuccess)
  private removeTodoSuccess(
    ctx: StateContext<TodosStateModel>,
    action: RemoveTodoSuccess
  ) {
    return RemoveTodoEffect.removeSuccess(ctx, action, this._todosService);
  }

  @Action(RemoveTodoFailed)
  private removeTodoFailed(ctx: StateContext<TodosStateModel>) {
    return;
  }

  @Action(ViewTodo)
  private viewTodo(ctx: StateContext<TodosStateModel>, action: ViewTodo) {
    return ViewTodoEffect.viewTodo(ctx, action);
  }
}
