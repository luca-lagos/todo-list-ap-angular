import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTasks: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddTask(): void {
    this.showAddTasks = !this.showAddTasks;
    this.subject.next(this.showAddTasks);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
