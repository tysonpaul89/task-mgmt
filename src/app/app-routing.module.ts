import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskDeleteComponent } from './components/task-delete/task-delete.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';

const routes: Routes = [
  {path: "", component: TaskListComponent},
  {path: "view/:id", component: TaskViewComponent},
  {path: "edit/:id", component: TaskEditComponent},
  {path: "delete/:id", component: TaskDeleteComponent},
  {path: "create", component: TaskCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
