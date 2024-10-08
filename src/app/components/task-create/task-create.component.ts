import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  public taskForm = new FormGroup({
    name: new FormControl('', {validators: [Validators.required]}),
  });

  constructor(private service: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  createTask() {
    this.service.createTask(this.taskForm.controls.name.value).subscribe((d: any) => {
      this.router.navigate(['']);
    });
  }

}
