import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { DataService } from '../../shared/data.service';
import { Todo } from '../../shared/todo.model';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() period!: string;
  @Input() showDay!: string;
  @Input() icons!: string;
  @Input() painelId!: string;
  @Input() setDarkMode!: boolean;
  

  setClass = false;
  todo!: Todo[];
  todoFiltered!: Todo[];
  todoDragged!: Todo;


  constructor(private dataService: DataService, private dialog: MatDialog) {
    this.dataService.getAllTodos()

  }

  ngOnInit(): void {
    this.todo = this.dataService.todo
  
  


  }

  

  filterPeriod(todo: Todo, periodo: string) {
    if (todo.period === periodo)  {
      return true
    } else {
      return false
    }
  }

  filterDay(todo: Todo, day: string) {
    if(day === "all") {
      return true
    } else {
      if (todo.day === day || todo.day === "all" || todo.day === null || todo.day === undefined )  {
        return true
      } else {
        return false
      }
    }
    
  }

  sortCompleted(a: Todo, b: Todo) {
   if (a.completed === false){
    return -1
   } else { if (a.completed === true) {
    return 1
   } else {
     return 0
   }
    
   }
  
  } 

  sortUrgent(a: Todo, b: Todo) {
    if (a.urgent === false){
     return -1
    } else { if (a.urgent === true) {
     return 1
    } else {
      return 0
    }
     
    }
   
   } 

 

  // Change Todo's completed state 
  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
    const id = todo.id
    this.dataService.updateTodo(id, todo)
    
  }
  // Edit Todo
  editTodo(todo: Todo) {
    
   
    const id = todo.id
    // Setting up daylog
    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '700px',
      data: todo
    });
  
    // Get the push from the daylog
    dialogRef.afterClosed().subscribe((result: Todo) => {
      if(result) {
        this.dataService.updateTodo(id, result)
      }
    })
   

  }

  deleteTodo(todo: Todo) {
    const id = todo.id

    this.dataService.deleteTodo(id)

    console.log(todo.id)
  }

  updateTodoPeriodo(todo: Todo) {
    console.log(todo)
    todo.period = this.period
    const id = todo.id
    this.dataService.updateTodo(id, todo)

  }

  drop(event: DragEvent) {
      event.preventDefault();
     const todo = JSON.parse(event.dataTransfer?.getData("todo")!)
     this.todoDragged = todo
     this.updateTodoPeriodo(this.todoDragged)
     
 }

  allowDrop(event: Event) {
    event.preventDefault();


}




  }
