<template>
    <div class="todogrid-container">
        <ToDoItem 
            v-for="tdi in todoitems"
            v-bind:key="tdi.id"
            v-bind:ptitle="tdi.title"
            v-bind:pdate="tdi.date"
            v-bind:pid="tdi.id"
            v-bind:pcheckbox="tdi.selected"
            v-on:select-item="selectItem"
            v-on:edit-item="editItem"
            v-on:delete-items="deleteItems"
        ></ToDoItem>
        <ToDoAddItem 
          v-bind:pdelete="enableDelete"
          v-on:create-item="createItem"
          v-on:delete-items="deleteItems" />
    </div>
</template>

<script>
import ToDoItem from './ToDoItem'
import ToDoAddItem from './ToDoAddItem'

import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'todo-grid',
  components: { ToDoItem, ToDoAddItem },
  data: function () {
    return {
      enableDelete: false
    }
  },
  computed: {
    todoitems () {
      return this.$store.state.todoitems
    },
  },
  methods: {
    'createItem': function (ptitle) {
      const currdate = new Date()
      const uid = uuidv4()
      const newItem = {
        id: uid,
        title: ptitle,
        date: currdate
      }
      this.$store.commit('addtditem', newItem)
    },
    'deleteItems': function () {
      this.$store.commit('deleteitems')
      this.enableDelete = false
    },
    'editItem': function (data) {
      console.log(JSON.stringify(data))
      this.$store.commit('edittditem', data)
    },
    'selectItem': function (data) {
      this.$store.commit('selectitem', data)
      this.enableDelete = false
      for (let o of this.$store.state.todoitems) {
        if (o.selected) {
          this.enableDelete = true
          console.log('enabled delete')
          break
        }
      }
    }
  },
  mounted () {
    console.log(this.$store.state.todoitems)
  }
}
</script>

<style>
.todogrid-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 100%;
}

.page-header {
    font-size: 10vh;
    align-content: center;
}
</style>