<template>
    <div id="nav-container">
        <div class="navitem">
            <v-btn
                variant="outlined"
                :rounded=0
                color="accent"
                block
            >Test Button</v-btn>
        </div>
        <div class="navitem">
            <router-link to="/Calendar">
                <v-btn
                variant="outlined"
                :rounded=0
                color="accent"
                block
                >Calendar</v-btn>
            </router-link>
        </div>
        <div class="navitem">
            <router-link to="/ToDoList">
                <v-btn
                variant="outlined"
                :rounded=0
                color="accent"
                block
                >ToDo List</v-btn>
            </router-link>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style>
#nav-container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 10vh;
    background-color: var(--background-main);
    height: 100vh;
    outline: 1px solid var(--highlight);
    column-gap: 2vh;
}
.navitem {
    flex: 0 1 5vh;
    width: 100%;
    margin-top: 2vh;
}
a {
    text-decoration: none;
    color: black;
}
</style>