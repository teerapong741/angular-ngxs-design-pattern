import { ActivatedRoute, Router } from '@angular/router';
import {
  AddTodoPayload,
  RemoveTodoPayload,
} from '../store/models/payload.model';
import { EditModeTodo, RemoveTodo, Todo } from '../store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';

import { AddTodo } from './../store/actions/add-todo.action';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosSelectors } from '../store/selectors/todos.selectors';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Select(TodosSelectors.todoList) todoList$!: Observable<Todo[]>;
  @Select(TodosSelectors.loading) loading$!: Observable<boolean>;

  form: FormGroup = new FormGroup({
    subject: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    detail: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  //** Logic Functions */
  view(id: string): void {
    this.router.navigate(['./../', id], { relativeTo: this.route });
  }

  edit(item: Todo): void {
    this.store.dispatch(new EditModeTodo(item));
  }

  remove(id: string): void {
    const payload: RemoveTodoPayload = {
      id,
    };
    this.store.dispatch(new RemoveTodo(payload));
  }

  //** Form Functions */
  submit(): void {
    if (this.form.invalid) return;
    const payload: AddTodoPayload = {
      ...this.form.value,
      is_complete: false,
    };
    this.store.dispatch(new AddTodo(payload));
    this.form.reset();
  }

  //** Get Set */
  get subject(): FormControl {
    return this.form.get('subject') as FormControl;
  }

  get detail(): FormControl {
    return this.form.get('detail') as FormControl;
  }
}
