import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputboxComponent } from './inputbox/inputbox.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ToDoAppComponent } from './to-do-app/to-do-app.component';

@NgModule({
  declarations: [
    AppComponent,
    InputboxComponent,
    TodoListComponent,
    ToDoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
