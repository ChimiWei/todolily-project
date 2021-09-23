import { Injectable } from '@angular/core';
import { Todo } from './todo.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  todo: Todo[] =  [];

  modo!: boolean;

  constructor() { }

  //saving night mode on local storage
  getNightMode() {
    if(localStorage.getItem('mode')) {
      this.modo = JSON.parse(localStorage.getItem('mode')!)
      return this.modo
    }
    return false
  }

  setNightMode(modoNoturno: boolean) {
    localStorage.setItem('mode', JSON.stringify(modoNoturno))
  }

// Todos Data managment

  getAllTodos() {
    if(localStorage.getItem('todo')) {
      this.todo = JSON.parse(localStorage.getItem('todo')!)
    }

    
  }
  

  addTodo(Todo: Todo) {
    JSON.parse(localStorage.getItem('todo')!) 
    this.todo.push(Todo)
    localStorage.setItem('todo', JSON.stringify(this.todo)) 

    
  }

  updateTodo(id: number, updatedTodo: Todo) {
    this.todo[this.todo.findIndex(Todo => Todo.id === id)] = updatedTodo
    localStorage.setItem('todo', JSON.stringify(this.todo))
  }
  
  deleteTodo(id: number) {

    this.todo.splice(this.todo.findIndex(Todo => Todo.id === id), 1)
    localStorage.setItem('todo', JSON.stringify(this.todo))

    console.log(this.todo)
    
  }



}
