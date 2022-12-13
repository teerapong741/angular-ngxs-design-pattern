import {
  GetTodoList,
  GetTodoListFailed,
  GetTodoListSuccess,
} from './../store/actions/get-todo.action';
import { ViewTodo } from './../store/actions/view-todo.action';
import { filter, Observable, Subject, takeUntil } from 'rxjs';
import { TodosSelectors } from './../store/selectors/todos.selectors';
import { Component, OnDestroy } from '@angular/core';
import { Actions, ofActionCompleted, Select, Store } from '@ngxs/store';
import { Todo } from '../store';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.scss'],
})
export class ViewTodoComponent implements OnDestroy {
  @Select(TodosSelectors.todoSelected) todoSelected$!: Observable<Todo>;
  @Select(TodosSelectors.loading) loading$!: Observable<boolean>;

  subscription$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private actions$: Actions
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['./../'], { relativeTo: this.route });
      return;
    }

    this.actions$
      .pipe(takeUntil(this.subscription$), ofActionCompleted(GetTodoListFailed))
      .subscribe(() => {
        this.router.navigate(['./../'], { relativeTo: this.route });
      });

    this.actions$
      .pipe(takeUntil(this.subscription$), ofActionCompleted(ViewTodo))
      .subscribe(() => {
        const todo = this.store.selectSnapshot(TodosSelectors.todoSelected);
        if (!todo) this.router.navigate(['./../'], { relativeTo: this.route });
      });

    this.loading$
      .pipe(
        takeUntil(this.subscription$),
        filter((loading) => !loading)
      )
      .subscribe(() => {
        this.store.dispatch(new ViewTodo(id));
      });
  }

  ngOnDestroy(): void {
    this.subscription$.next();
    this.subscription$.complete();
  }
}
