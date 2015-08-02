/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

import {ToDoService} from 'ToDoService';

@Component({
  selector: 'todo-list',
  hostInjector: [ToDoService]
})

@View({
  templateUrl: 'views/todos.html',
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
