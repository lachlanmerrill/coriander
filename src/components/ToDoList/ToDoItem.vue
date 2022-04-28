<template>
  <div class="todoitem-container">
      <div class="todoitem todoitem-checkbox">
        <v-checkbox 
          v-model="checkbox"
          v-on:change="selectitem"
          color="warning"
          ></v-checkbox>
      </div>
      <div class="todoitem todoitem-title">
        <v-text-field
          density="compact"
          full-width
          single-line
          variant="outlined"
          color="accent"
          v-model="title"
          v-on:keyup.enter="edititem"
          ></v-text-field>
      </div>
      <div class="todoitem todoitem-created">
        <v-text-field
          v-model="date"
          disabled
          density="compact"
          full-width
          single-line
          variant="plain"
          color="info"
        ></v-text-field>
      </div>
  </div>
</template>

<script>
export default {
  name: 'todo-item',
  props: {
    ptitle: String,
    pdate: String,
    pid: String,
    pcheckbox: Boolean
  },
  data: function () {
    return {
      checkbox: this.pcheckbox,
      title: this.ptitle,
      id: this.pid
    }
  },
  computed: {
    date: function () {
      return this.pdate
    }
  },
  methods: {
    edititem: function () {
      this.$emit('edit-item', { title: this.title, id: this.id })
    },
    deleteitem: function () {
      this.$emit('delete-item', this.id)
    },
    selectitem: function () {
      this.$emit('select-item', { selected: this.checkbox, id: this.id })
    }
  }
}
</script>

<style scoped>
.todoitem-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5px 5px;
}

/* .todoitem {
    margin-right: 1vw;
} */

.todoitem-checkbox {
    flex-grow: 1;
    flex-shrink: 1;
    padding-right: 0;
}

.todoitem-title {
    flex-grow: 14;
    flex-shrink: 10;
    flex-basis: 50vw;
}

.todoitem-created {
    flex-grow: 20;
    flex-shrink: 1;
    flex-basis: 5vw;
    margin-left: 1vw;
}

.page-header {
    font-size: 10vh;
    align-content: center;
}
</style>