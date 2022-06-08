import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output() toggleAddTask = new EventEmitter();
  @Input() text: string = '';
  @Input() formActive: string = '';
  constructor() {}

  ngOnInit(): void {}

  buttonAddTask() {
    this.toggleAddTask.emit();
  }
}
