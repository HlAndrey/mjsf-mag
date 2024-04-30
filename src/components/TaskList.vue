<!-- TaskList.vue -->
<template>
  <div>
    <h5 class="mb-0"><i class="fas fa-tasks me-2"></i>Task List</h5>
    <table class="table mb-0">
      <thead>
        <tr>
          <th scope="col">Team Member</th>
          <th scope="col">Task</th>
          <th scope="col">Priority</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <task-item v-for="(task, index) in tasks" :key="index" :task="task" @remove="removeTask(index)"></task-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  components: {
    TaskItem
  },
  props: {
    tasks: Array
  },
  methods: {
    removeTask(index) {
      this.$emit('remove', index);
    }
  }
}
</script>
