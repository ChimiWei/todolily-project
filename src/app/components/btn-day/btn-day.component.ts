import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Todo } from '../../shared/todo.model';

@Component({
  selector: 'app-btn-day',
  templateUrl: './btn-day.component.html',
  styleUrls: ['./btn-day.component.scss']
})
export class BtnDayComponent implements OnInit {
  @Input() day!: string;
  @Input() activeDay!: string;
  @Output() setDay: EventEmitter<string> = new EventEmitter();
  todoDragged!: Todo;
    constructor(private dataService: DataService) { }
  
    ngOnInit(): void {
    }
  
    emitDay(){
      this.setDay.emit(this.day)
    }
  
   
  
  updatetodoDay(todo: Todo) {
      todo.day = this.day
      const id = todo.id
      this.dataService.updateTodo(id, todo)
  
  }
  
  drop(event: DragEvent) {
    event.preventDefault();
   const todo = JSON.parse(event.dataTransfer?.getData("todo")!)
   this.todoDragged = todo
   this.updatetodoDay(this.todoDragged)
   
  }
  
  
  allowDrop(event: Event) {
    event.preventDefault();
  
  
  }
  
  
  
  }
  