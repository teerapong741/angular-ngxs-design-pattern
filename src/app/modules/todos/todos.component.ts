import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetTodoList } from './store/actions';

@Component({
  selector: 'todos-module',
  template: ` <router-outlet></router-outlet> `,
})
export class TodosComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetTodoList());
  }
}
