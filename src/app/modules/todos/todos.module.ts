import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosComponent } from './todos.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path: 'list', component: TodoListComponent },
      { path: ':id', component: ViewTodoComponent },
    ],
  },
];

@NgModule({
  declarations: [TodosComponent, TodoListComponent, ViewTodoComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class TodosModule {}
