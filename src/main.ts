
import Vue from 'vue';
import App from './App.vue';
import LocalStorageTodoRepository from './repositories/todoRepository';
import './services/servicesPlugin';  
import { Todo } from './models/tasks';

Vue.config.productionTip = false;
 
const todoRepository = new LocalStorageTodoRepository('todos');

const newTodo: Todo = {
  id: 1,
  title: 'Прикладна задача',
  description: 'Це приклад опису задачі',
};

todoRepository.create(newTodo);

const readTodo = todoRepository.read(1);
console.log(readTodo);

if (readTodo) {
  readTodo.title = 'Нова назва задачі';
  todoRepository.update(1, readTodo);
}

todoRepository.delete(1);

new Vue({
  render: h => h(App),
}).$mount('#app');


