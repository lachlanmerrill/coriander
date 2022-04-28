<template>
    <div class="container">
        <ToDoGrid />
    </div>
</template>

<script>
import ToDoGrid from './ToDoGrid'
export default {
  name: 'todo-list',
  components: { ToDoGrid }
}
</script>

<style>
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
}

.page-header {
    font-size: 10vh;
    align-content: center;
}
</style>