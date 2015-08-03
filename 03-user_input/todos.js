/// <reference path="../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2', 'ToDoService'], function (require, exports, angular2_1, ToDoService_1) {
    var ToDoList = (function () {
        function ToDoList(todoService) {
            this.todoService = todoService;
        }
        ToDoList.prototype.addTodo = function (todo) {
            this.todoService.addTodo(todo);
        };
        ToDoList.prototype.doneTyping = function ($event) {
            if ($event.which === 13) {
                this.addTodo($event.target.value);
                $event.target.value = null;
            }
        };
        ToDoList = __decorate([
            angular2_1.Component({
                selector: 'todo-list',
                hostInjector: [ToDoService_1.ToDoService]
            }),
            angular2_1.View({
                templateUrl: 'views/todos.html',
                directives: [angular2_1.NgFor]
            })
        ], ToDoList);
        return ToDoList;
    })();
    angular2_1.bootstrap(ToDoList);
});
//# sourceMappingURL=todos.js.map