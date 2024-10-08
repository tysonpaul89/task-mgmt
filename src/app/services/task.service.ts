import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private domain: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getAllTasks() {
    return this.http.get<Task[]>(this.domain + "/tasks");
  }

  getTaskById(id: string | null) {
    return this.http.get<Task>(this.domain  + "/tasks/" + id)
  }

  updateTask(task: Task) {
    return this.http.put(this.domain  + "/tasks/" + task.id, JSON.stringify({name: task.name}))
  }

  deleteTask(id: string | null) {
    return this.http.delete(this.domain  + "/tasks/" + id)
  }

  createTask(name: string | null) {
    return this.http.post(this.domain  + "/tasks", JSON.stringify({name: name, id: ""}))
  }
}
