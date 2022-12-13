import { EditTodoPayload } from './../models/payload.model';
import { Todo, TodosStateModel } from '..';
import { StateContext } from '@ngxs/store';

export class EditModeTodo {
  static readonly type = '[Todo] Edit Mode';
  constructor(public payload: Todo) {}
}

export class EditTodo {
  static readonly type = '[todo] Edit';
  constructor(public payload: EditTodoPayload) {}
}

export class EditTodoSuccess {
  static readonly type = '[todo] Edit Success';
  constructor(public payload: Todo) {}
}

export class EditTodoFailed {
  static readonly type = '[todo] Edit Failed';
}

export namespace EditTodoEffect {
  export function EditModeTodo(
    ctx: StateContext<TodosStateModel>,
    { payload }: EditModeTodo
  ) {
    return ctx.patchState({
      todo_selected: payload,
    });
  }
}
