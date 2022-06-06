import { Injectable } from '@angular/core';
import { TASK_ARRAY } from 'src/app/mock-tasks';
import { Observable, observable, of } from 'rxjs';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getAllTasks(): Observable<Task[]> {
    const tasks = of(TASK_ARRAY);
    return tasks;
  }
}
