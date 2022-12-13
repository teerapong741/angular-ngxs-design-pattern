import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosComponent } from './todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path: 'list', component: TodoListComponent },
    ],
  },
];

@NgModule({
  declarations: [TodosComponent, TodoListComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class TodosModule {}
