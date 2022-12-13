import { TodosSelectors } from './store/selectors/todos.selectors';
import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import {
  catchError,
  interval,
  Observable,
  of,
  switchMap,
  take,
  throwError,
} from 'rxjs';
import { Todo } from './store';
import {
  AddTodoPayload,
  EditTodoPayload,
  RemoveTodoPayload,
} from './store/models/payload.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private store: Store) {}

  get(options?: { delay?: number; getError?: boolean }): Observable<Todo[]> {
    return interval(options?.delay || 0).pipe(
      take(1),
      catchError((err) => throwError(() => err)),
      switchMap(() => {
        const TO_DOS: Todo[] = [
          { id: '1', detail: '', is_complete: false, subject: 'test' },
        ];
        if (options?.getError) {
          return throwError(() => 'error');
        }

        return of(TO_DOS);
      })
    );
  }

  add(
    payload: AddTodoPayload,
    options?: { delay?: number; getError?: boolean }
  ): Observable<Todo> {
    return interval(options?.delay || 0).pipe(
      take(1),
      catchError((err) => throwError(() => err)),
      switchMap(() => {
        if (options?.getError) {
          return throwError(() => 'error');
        }

        const todoList = this.store.selectSnapshot(TodosSelectors.todoList);
        const newId = (todoList.length + 1).toString();
        return of({ id: newId, ...payload });
      })
    );
  }

  edit(
    payload: EditTodoPayload,
    options?: { delay?: number; getError?: boolean }
  ): Observable<Todo> {
    return interval(options?.delay || 0).pipe(
      take(1),
      catchError((err) => throwError(() => err)),
      switchMap(() => {
        const todoList = this.store.selectSnapshot(TodosSelectors.todoList);
        const todo = todoList.find((todo) => todo.id === payload.id);

        if (options?.getError || !todo) {
          return throwError(() => 'error');
        }

        return of({ ...todo, ...payload });
      })
    );
  }

  remove(
    payload: RemoveTodoPayload,
    options?: { delay?: number; getError?: boolean }
  ): Observable<Todo> {
    return interval(options?.delay || 0).pipe(
      take(1),
      catchError((err) => throwError(() => err)),
      switchMap(() => {
        const todoList = this.store.selectSnapshot(TodosSelectors.todoList);
        const todo = todoList.find((todo) => todo.id === payload.id);

        if (options?.getError || !todo) {
          return throwError(() => 'error');
        }

        return of(todo);
      })
    );
  }
}
