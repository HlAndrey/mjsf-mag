<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-12 col-xl-10">
        <div class="card">
          <div class="card-header p-3">
            <task-list :tasks="tasks" @remove="removeTask"></task-list>
          </div>
          <div class="card-body" data-mdb-perfect-scrollbar="true" style="position: relative; height: 400px">
          </div>
          <div class="card-footer text-end p-3">
            <add-task-form @add="addTask"></add-task-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue';
import AddTaskForm from './components/AddTaskForm.vue';

export default {
  components: {
    TaskList,
    AddTaskForm
  },
  data() {
  return {
    tasks: [
      { member: 'Alice Mayer', description: 'Call Sam For payments', priority: 'High priority', avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp' },
      { member: 'Kate Moss', description: 'Make payment to Bluedart', priority: 'Low priority', avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp' },
      { member: 'Danny McChain', description: 'Office rent', priority: 'Middle priority', avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp' },
      { member: 'Alexa Chung', description: 'Office grocery shopping', priority: 'High priority', avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp' },
      { member: 'Ben Smith', description: 'Ask for Lunch to Clients', priority: 'Low priority', avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp' },
      { member: 'Annie Hall', description: 'Create weekly tasks plan', priority: 'Medium priority', avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp' }
    ]
  };
},

  methods: {
    addTask(newTask) {
      this.tasks.push({
        member: 'New Member', 
        description: newTask,
        priority: 'Low priority',  
        avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.jpg' 
      });
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
}
</script>
 

