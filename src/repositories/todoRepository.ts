import { Todo } from "../models/tasks";
 
interface TodoRepository {
  create(todo: Todo): void;
  read(id: number): Todo | undefined;
  update(id: number, todo: Todo): void;
  delete(id: number): void;
}
 
class LocalStorageTodoRepository implements TodoRepository {
  private readonly storageKey: string;

  constructor(storageKey: string) {
    this.storageKey = storageKey;
  }
 
  create(todo: Todo): void {
    const todos = this.getAllTodos();
    todos.push(todo);
    this.saveTodos(todos);
  }
 
  read(id: number): Todo | undefined {
    const todos = this.getAllTodos();
    return todos.find(todo => todo.id === id);
  }
 
  update(id: number, updatedTodo: Todo): void {
    const todos = this.getAllTodos();
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      todos[index] = updatedTodo;
      this.saveTodos(todos);
    }
  }
 
  delete(id: number): void {
    const todos = this.getAllTodos();
    const filteredTodos = todos.filter(todo => todo.id !== id);
    this.saveTodos(filteredTodos);
  }
 
  private getAllTodos(): Todo[] {
    const todosJson = localStorage.getItem(this.storageKey);
    return todosJson ? JSON.parse(todosJson) : [];
  }
 
  private saveTodos(todos: Todo[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }
}
 
export default LocalStorageTodoRepository;


