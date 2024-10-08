import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  public id: string | null = "";
  public task: Task | undefined;
  public taskForm = new FormGroup({
    id: new FormControl({value: '', disabled: true}, {validators: [Validators.required]}),
    name: new FormControl('', {validators: [Validators.required]}),
  });

  constructor(
    private route: ActivatedRoute,
    private service: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getTaskById(this.id).subscribe((d: Task )=> {
      this.task = d;
      this.taskForm.get('id')?.setValue(this.task.id);
      this.taskForm.get('name')?.setValue(this.task.name);
    });
  }

  editTask() {
    const updatedTask: Task = {
      id: this.taskForm.controls.id.value,
      name: this.taskForm.controls.name.value
    };
    this.service.updateTask(updatedTask).subscribe((d: any) => {
      this.router.navigate(['']);
    })
  }


}
