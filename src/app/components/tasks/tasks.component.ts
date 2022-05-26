import { Component, Input, OnInit } from '@angular/core';
import { TASK_ARRAY } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = TASK_ARRAY
  @Input() task: Task = TASK_ARRAY[0]

  constructor() { }

  ngOnInit(): void {
  }

}
