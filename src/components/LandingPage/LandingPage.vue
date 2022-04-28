<template>
    <div class=".container">
        <span class="page-header">
            This is the Landing page.
        </span>
    </div>
</template>

<script>
export default {
  name: 'landing-page'
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