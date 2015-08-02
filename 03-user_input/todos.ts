/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

// should be separate file
class ToDoService {
  public todos: Array<string>;
  constructor() {
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  }
  public addTodo (todo: string) {
    this.todos.push(todo);
  }
}
// should be separate file

@Component({
  selector: 'todo-list',
  hostInjector: [ToDoService]
})

@View({
  template: `
    <ul>
      <li *ng-for="#todo of todoService.todos">{{todo}}</li>
    </ul>
    <input #todotext (keyup)="doneTyping($event)">
    <button (click)="addTodo(todotext.value)">Add Todo</button>
  `,
  directives: [NgFor]
})

class ToDoList {
  todoService: ToDoService;
  constructor(todoService: ToDoService) {
    this.todoService = todoService;
  }
  addTodo (todo: string) {
    this.todoService.addTodo(todo);
  }
  doneTyping ($event) {
    if ($event.which === 13) {
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }
}

bootstrap(ToDoList);
