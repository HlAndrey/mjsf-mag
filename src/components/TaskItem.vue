 <template>
  <tr>
    <th>
      <img :src="task.avatar" class="shadow-1-strong rounded-circle" :alt="'avatar-' + index"
           style="width: 55px; height: auto;">
      <span class="ms-2">{{ task.member }}</span>
    </th>
    <td class="align-middle">{{ task.description }}</td>
    <td class="align-middle">
      <h6 class="mb-0"><span class="badge" :class="priorityClass(task.priority)">{{ task.priority }}</span></h6>
    </td>
    <td class="align-middle">
      <a href="#!" @click="completeTask" data-mdb-toggle="tooltip" title="Done"><i
          class="fas fa-check text-success me-3"></i></a>
      <a href="#!" @click="removeTask" data-mdb-toggle="tooltip" title="Remove"><i
          class="fas fa-trash-alt text-danger"></i></a>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    task: Object,
    index: Number
  },
  methods: {
    completeTask() {
    },
    removeTask() {
      this.$emit('remove');
    },
    priorityClass(priority) {
      return {
        'bg-danger': priority === 'High priority',
        'bg-success': priority === 'Low priority',
        'bg-warning': priority === 'Middle priority'
      };
    }
  }
}
</script>
