<template>
    <div class="main-container">
        <div class="main-navbar">
            <NavBar v-on:navigate="navigate"/>
        </div>
        <div class="main-router">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavBar from './NavBar/NavBar'

export default {
  name: 'coriander-container',
  components: { NavBar }
}
</script>

<style>
.main-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    background-color: var(--background-main);
    height: 90vh;
}
.main-navbar {
    flex-grow: 1;
    flex-basis: 10vw;
}
.main-router {
    flex-grow: 5;
    flex-basis: auto;
    padding-top: 5vh;
    padding-left: 5vw;
    width: 90vw;
}
</style>
