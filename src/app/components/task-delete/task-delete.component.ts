import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {

  public id: string | null = "";
  public message: string = "";

  constructor(private route: ActivatedRoute, private service: TaskService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.deleteTask(this.id).subscribe((_: any )=> {
      this.message = this.id + " deleted successfully";
    });
  }


}
