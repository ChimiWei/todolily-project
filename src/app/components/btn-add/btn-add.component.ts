import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../shared/data.service';
import { Todo } from '../../shared/todo.model';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-btn-add',
  templateUrl: './btn-add.component.html',
  styleUrls: ['./btn-add.component.scss']
})
export class BtnAddComponent implements OnInit {
  @ViewChild('acc') accordionComponent!: NgbAccordion;  //Acessing bootstrap props on view
  @Input() painelId!: string;
  @Input() addDarkMode!: boolean;

  validationErrors: boolean = false;
  painelToggle: boolean = false;
  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  //get unique id for tasks
  getTodoId() {
    var nextId = 1
    for (var a = 0; a < this.dataService.todo.length; a++) {
      if (this.dataService.todo[a].id = nextId) {
        nextId++
      } else {
        break
      }
    }
    return nextId
  }

  //Lógica de criação de uma nova todo
  OnFormsSubmit(form: NgForm) {


    
    if (form.invalid) {
      this.validationErrors = true

      return
    }
    this.dataService.addTodo(new Todo(this.getTodoId(), form.value.text, form.value.period,form.value.day, form.value.urgent))
    this.toggle(this.painelId)
    this.validationErrors = false
    form.reset()




  }
  //Função de toggle do painel vinda do bootstrap 
  toggle(id: string): void {
    this.accordionComponent.toggle(id);
  }

}
