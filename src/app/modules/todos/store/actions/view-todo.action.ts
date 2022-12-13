import { StateContext } from '@ngxs/store';
import { TodosStateModel } from '..';

//** Actions */
export class ViewTodo {
  static readonly type = '[Todo] View Selected';
  constructor(public payload: string) {}
}

//** Effect */
export namespace ViewTodoEffect {
  export function viewTodo(
    ctx: StateContext<TodosStateModel>,
    { payload }: ViewTodo
  ) {
    const { todos } = ctx.getState();
    return ctx.patchState({
      todo_selected: todos.find((todo) => todo.id === payload),
    });
  }
}
