import { TASK_ARRAY } from 'src/app/mock-tasks';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() task: Task = TASK_ARRAY[0];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onChangeReminderTask: EventEmitter<Task> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onChangeReminder(task: Task){
    this.onChangeReminderTask.emit(task);
  }
}
