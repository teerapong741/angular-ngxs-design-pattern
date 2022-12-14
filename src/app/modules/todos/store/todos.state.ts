import { Action, State, StateContext } from '@ngxs/store';
import {
  AddTodo,
  AddTodoFailed,
  AddTodoSuccess,
  GetTodoList,
  GetTodoListFailed,
  GetTodoListSuccess,
  RemoveTodo,
} from './actions';
import {
  EditTodo,
  EditTodoFailed,
  EditTodoSuccess,
} from './actions/edit-todo.action';
import {
  RemoveTodoFailed,
  RemoveTodoSuccess,
} from './actions/remove-todo.action';

import { AddTodoEffect } from './effects';
import { EditTodoEffect } from './effects/edit-todo.effect';
import { GetTodoEffect } from './effects/get-todo.effect';
import { Injectable } from '@angular/core';
import { RemoveTodoEffect } from './effects/remove-todo.effect';
import { TodosService } from './../todos.service';
import { TodosStateModel } from './models/state.model';
import { ViewTodo } from './actions/view-todo.action';
import { ViewTodoEffect } from './effects/view-todo.effect';

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
  constructor(
    private _addTodoEffect: AddTodoEffect,
    private _editTodoEffect: EditTodoEffect,
    private _getTodoEffect: GetTodoEffect,
    private _removeTodoEffect: RemoveTodoEffect,
    private _viewTodoEffect: ViewTodoEffect,
    private _todosService: TodosService
  ) {}

  /**
   *
   * @GetTodo
   *
   * @action get list
   * @action get success
   * @action get failed
   *
   */
  @Action(GetTodoList)
  private getTodoList(ctx: StateContext<TodosStateModel>) {
    return this._getTodoEffect.get(ctx);
  }

  @Action(GetTodoListSuccess)
  private getTodoListSuccess(
    ctx: StateContext<TodosStateModel>,
    action: GetTodoListSuccess
  ) {
    return this._getTodoEffect.getSuccess(ctx, action);
  }

  @Action(GetTodoListFailed)
  private getTodoListFailed(ctx: StateContext<TodosStateModel>) {
    return this._getTodoEffect.getFailed(ctx);
  }

  /**
   *
   * @AddTodo
   *
   * @action add todo
   * @action add todo success
   * @action add todo failed
   *
   */
  @Action(AddTodo)
  private addTodo(ctx: StateContext<TodosStateModel>, action: AddTodo) {
    return this._addTodoEffect.addTodo(ctx, action);
  }

  @Action(AddTodoSuccess)
  private addTodoSuccess(
    ctx: StateContext<TodosStateModel>,
    action: AddTodoSuccess
  ) {
    return this._addTodoEffect.addSuccess(ctx, action);
  }

  @Action(AddTodoFailed)
  private addTodoFailed(ctx: StateContext<TodosStateModel>) {
    return;
  }

  /**
   *
   * @EditTodo
   *
   * @action edit todo
   * @action edit todo success
   * @action edit todo failed
   *
   */
  @Action(EditTodo)
  private editTodo(ctx: StateContext<TodosStateModel>, action: EditTodo) {
    return this._editTodoEffect.editTodo(ctx, action);
  }

  @Action(EditTodoSuccess)
  private editTodoSuccess(
    ctx: StateContext<TodosStateModel>,
    action: EditTodoSuccess
  ) {
    return this._editTodoEffect.editTodoSuccess(ctx, action);
  }

  @Action(EditTodoFailed)
  private editTodoFailed(ctx: StateContext<TodosStateModel>) {
    return;
  }

  /**
   *
   * @RemoveTodo
   *
   * @action remove todo
   * @action remove todo success
   * @action remove todo failed
   *
   */
  @Action(RemoveTodo)
  private removeTodo(ctx: StateContext<TodosStateModel>, action: RemoveTodo) {
    return this._removeTodoEffect.remove(ctx, action);
  }

  @Action(RemoveTodoSuccess)
  private removeTodoSuccess(
    ctx: StateContext<TodosStateModel>,
    action: RemoveTodoSuccess
  ) {
    return this._removeTodoEffect.removeSuccess(ctx, action);
  }

  @Action(RemoveTodoFailed)
  private removeTodoFailed(ctx: StateContext<TodosStateModel>) {
    return;
  }

  /**
   *
   * @ViewTodo
   *
   * @action view todo
   *
   */
  @Action(ViewTodo)
  private viewTodo(ctx: StateContext<TodosStateModel>, action: ViewTodo) {
    return this._viewTodoEffect.viewTodo(ctx, action);
  }
}
