import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.css']
})
export class ToDoAppComponent implements OnInit {
  todos: Todo[] = [];
  name: string ='John';
  
  constructor() { }

  ngOnInit() {
  }
  addTodo(label: string) {
    this.todos.push({
      label,
      completed:false
    });
  }
  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
