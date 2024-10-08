import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {

  public tasks: Observable<Task[]> | undefined;

  constructor(private service: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.service.getAllTasks()
  }

}
