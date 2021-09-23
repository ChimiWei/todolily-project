import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../../shared/todo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent implements OnInit {
  validationErrors: boolean = false;
  painelToggle: boolean = false;

  constructor(public dialogRef: MatDialogRef<EditTodoDialogComponent>, @Inject(MAT_DIALOG_DATA) public todo: Todo) { }

  ngOnInit(): void {
  }

  OnFormSubmit(form: NgForm) {

    if(form.invalid) {
      this.validationErrors = true
      return 
    }

    const updatedtodo = {
      ...this.todo, ...form.value
    }

    this.dialogRef.close(updatedtodo)
  }

  close() {
    this.dialogRef.close()

  }

}
