<template>
    <div class="container">
        <span class="page-header">
            This is the Calendar page.
        </span>
    </div>
</template>

<script>
export default {
  name: 'coriander-calendar'
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