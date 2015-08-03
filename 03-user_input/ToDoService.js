define(["require", "exports"], function (require, exports) {
    var ToDoService = (function () {
        function ToDoService() {
            this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
        }
        ToDoService.prototype.addTodo = function (todo) {
            this.todos.push(todo);
        };
        return ToDoService;
    })();
    exports.ToDoService = ToDoService;
});
//# sourceMappingURL=ToDoService.js.map