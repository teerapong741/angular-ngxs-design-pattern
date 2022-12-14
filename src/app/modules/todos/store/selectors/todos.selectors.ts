import { Selector } from '@ngxs/store';
import { TodosState } from './../todos.state';
import { TodosStateModel } from '../models/state.model';

export class TodosSelectors {
  @Selector([TodosState])
  static todoList(state: TodosStateModel) {
    return state.todos;
  }

  @Selector([TodosState])
  static todoSelected(state: TodosStateModel) {
    return state.todo_selected;
  }

  @Selector([TodosState])
  static loading(state: TodosStateModel) {
    return state.loading;
  }
}
