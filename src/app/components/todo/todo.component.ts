import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../shared/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() t!: Todo;
  @Input() i: any;
  @Output() todoClicked: EventEmitter<void> = new EventEmitter
  @Output() editClicked: EventEmitter<void> = new EventEmitter
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter
  




 
 

  constructor() {
    

  }

  ngOnInit(): void {
    
  }

  

  onClickedEdit(){
    if(!this.t.completed) {
      this.editClicked.emit()
    }
    
  }

  onClickedDelete() {
    this.deleteClicked.emit()
  }

  onItemClick() {
    this.todoClicked.emit()
   
  }

  dragTodo(ev: DragEvent) {
   ev.dataTransfer?.setData("todo", JSON.stringify(this.t))
   
   
  }


}
