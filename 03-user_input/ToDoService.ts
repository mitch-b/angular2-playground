export class ToDoService {
  public todos: Array<string>;
  constructor() {
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  }
  public addTodo (todo: string) {
    this.todos.push(todo);
  }
}
