import { Selector } from '@ngxs/store';
import { TodosState } from './../todos.state';
import { TodosStateModel } from './../models/todos.model';

export class TodosSelectors {
  @Selector([TodosState])
  static todoList(state: TodosStateModel) {
    return state.todos;
  }

  @Selector([TodosState])
  static loading(state: TodosStateModel) {
    return state.loading;
  }
}
