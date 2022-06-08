import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  id: number = 0;
  text: string = '';
  date: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.text.length === 0) {
      alert('ASI NO');
      return;
    }
    const { id, text, date, reminder } = this;
    const newTask = { id, text, date, reminder };

    this.onAddTask.emit(newTask);
  }
}
