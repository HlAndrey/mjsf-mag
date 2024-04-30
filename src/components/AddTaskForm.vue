 <template>
  <div>
    <input type="text" class="form-control mb-3" v-model="newTask" placeholder="Enter new task">
    <button class="btn btn-primary" @click="addTask">Add Task</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask() {
      this.$emit('add', this.newTask);
      this.newTask = '';
    }
  }
}
</script>
