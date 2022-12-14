import {
  AddTodoPayload,
  AddTodoResponse,
  EditTodoPayload,
  EditTodoResponse,
  GetTodosResponse,
  RemoveTodoPayload,
  RemoveTodoResponse,
} from './store/models/payload.model';
import {
  Observable,
  catchError,
  interval,
  of,
  switchMap,
  take,
  throwError,
} from 'rxjs';

import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { TodosSelectors } from './store/selectors/todos.selectors';
import { Response } from 'src/app/shared/interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private store: Store) {}

  get(options?: {
    delay?: number;
    getError?: boolean;
  }): Observable<Response<GetTodosResponse>> {
    return interval(options?.delay || 0).pipe(
      take(1),
      catchError((err) => throwError(() => err)),
      switchMap(() => {
        const TO_DOS: GetTodosResponse = [
          { id: '1', detail: '', is_complete: false, subject: 'test' },
        ];
        if (options?.getError) {
          return throwError(() => 'error');
        }

        return of({
          code_status: '200',
          message: 'SUCCESS',
          data: TO_DOS,
        });
      })
    );
  }

  add(
    payload: AddTodoPayload,
    options?: { delay?: number; getError?: boolean }
  ): Observable<Response<AddTodoResponse>> {
    return interval(options?.delay || 0).pipe(
      take(1),
      catchError((err) => throwError(() => err)),
      switchMap(() => {
        if (options?.getError) {
          return throwError(() => 'error');
        }

        const todoList = this.store.selectSnapshot(TodosSelectors.todoList);
        const newId = (todoList.length + 1).toString();
        return of({
          code_status: '200',
          message: 'SUCCESS',
          data: { id: newId, ...payload },
        });
      })
    );
  }

  edit(
    payload: EditTodoPayload,
    options?: { delay?: number; getError?: boolean }
  ): Observable<Response<EditTodoResponse>> {
    return interval(options?.delay || 0).pipe(
      take(1),
      catchError((err) => throwError(() => err)),
      switchMap(() => {
        const todoList = this.store.selectSnapshot(TodosSelectors.todoList);
        const todo = todoList.find((todo) => todo.id === payload.id);

        if (options?.getError || !todo) {
          return throwError(() => 'error');
        }

        return of({
          code_status: '200',
          message: 'SUCCESS',
          data: { ...todo, ...payload },
        });
      })
    );
  }

  remove(
    payload: RemoveTodoPayload,
    options?: { delay?: number; getError?: boolean }
  ): Observable<Response<RemoveTodoResponse>> {
    return interval(options?.delay || 0).pipe(
      take(1),
      catchError((err) => throwError(() => err)),
      switchMap(() => {
        const todoList = this.store.selectSnapshot(TodosSelectors.todoList);
        const todo = todoList.find((todo) => todo.id === payload.id);

        if (options?.getError || !todo) {
          return throwError(() => 'error');
        }

        return of({
          code_status: '200',
          message: 'SUCCESS',
          data: todo,
        });
      })
    );
  }
}
