import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskService } from './services/task.service';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskDeleteComponent } from './components/task-delete/task-delete.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskViewComponent,
    TaskEditComponent,
    TaskDeleteComponent,
    TaskCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
