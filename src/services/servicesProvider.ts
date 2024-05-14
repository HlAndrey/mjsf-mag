import TodoRepository from "../repositories/todoRepository";
import LocalStorageTodoRepository from "../repositories/todoRepository";

const servicesProvider: { [key: string]: TodoRepository } = {
  todoRepository: new LocalStorageTodoRepository('todos'),
};

export default servicesProvider;

