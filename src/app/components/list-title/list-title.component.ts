import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../shared/todo.model';

@Component({
  selector: 'app-list-title',
  templateUrl: './list-title.component.html',
  styleUrls: ['./list-title.component.scss']
})
export class ListTitleComponent implements OnInit {
  @Input() changetxtColor = false;  //receive night mode emit
  @Output() setDay: EventEmitter<string> = new EventEmitter();
  showDay: string = "all";
  selectedDay!: String;
  todoDragged!: Todo;
  
  constructor() { }

  ngOnInit(): void {
  }

  currentDay(day: string) {
    if(this.showDay === day) {
      this.showDay = "all"
    } else {
    this.showDay = day;
    }
    this.setDay.emit(this.showDay)

  }



}
