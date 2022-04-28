<template>
    <div class="todoitem-container">
        <div class="todoitem todoitem-checkbox">
            <v-checkbox
              disabled
              color="warning"
              v-model="checkbox"></v-checkbox>
        </div>
        <div class="todoitem todoitem-title">
            <v-text-field
              density="compact"
              variant="outlined"
              label="Edit me to add a new item"
              color="accent"
              v-model="title"
              min-height="10vh"
              v-on:keyup.enter="createitem"></v-text-field>
        </div>
        <div class="todoitem todoitem-created">
            <!-- <v-text-field
              disabled
              label="Date Created"
              density="compact"
              variant="plain"
              color="info"
              v-model="date"></v-text-field> -->
            <v-btn
                v-bind:disabled="!enableDelete"
                variant="outlined"
                color="warning"
                v-on:click="deleteSelected"
            >Delete Selected</v-btn>
        </div>
    </div>
</template>

<script>
export default {
  name: 'todo-additem',
  props: {
      pdelete: Boolean
  },
  data: function () {
    return {
      checkbox: false,
      title: '',
      enableDelete: this.pdelete
    }
  },
  methods: {
    createitem: function () {
      console.log('creating item: ' + this.title)
      this.$emit('create-item', this.title)
      this.title = ''
    },
    deleteSelected: function () {
        this.$emit('delete-items')
    }
  },
  watch: {
      pdelete: function (newVal) {
          console.log(newVal)
          this.enableDelete = newVal
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
    width: 80vw;
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
    align-items: center;
    margin-top: -4vh;
}

.page-header {
    font-size: 10vh;
    align-content: center;
}
</style>