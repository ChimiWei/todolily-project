import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { ListTitleComponent } from './components/list-title/list-title.component';
import { HeaderComponent } from './components/header/header.component';
import { BtnAddComponent } from './components/btn-add/btn-add.component';
import { EditTodoDialogComponent } from './components/edit-todo-dialog/edit-todo-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbAccordionModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BtnDayComponent } from './components/btn-day/btn-day.component';
import { SortPipe } from './shared/sort.pipe';
import { CallbackPipe } from './shared/callback.pipe';
import { FeaturesDialogComponent } from './components/features-dialog/features-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    ListTitleComponent,
    HeaderComponent,
    BtnAddComponent,
    EditTodoDialogComponent,
    BtnDayComponent,
    CallbackPipe,
    SortPipe,
    FeaturesDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    NgbAccordionModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
