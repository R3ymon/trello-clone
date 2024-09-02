import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faClock,
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from '../btn/btn.component';
import { ToDo } from '../../models/todo.model';

interface Data {
  todo: ToDo;
}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [FontAwesomeModule, BtnComponent],
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent {
  todo: ToDo;
  constructor(
    private Dialogref: DialogRef<Data>,
    @Inject(DIALOG_DATA) data: Data
  ) {
    this.todo = data.todo;
  }

  close() {
    this.Dialogref.close();
  }
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faClock = faClock;
  faCheckSquare = faCheckSquare;
}
