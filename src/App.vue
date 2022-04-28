<template>
  <v-app>
    <v-main>
      <div id="app">
        <Container/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Container from './components/Container'
export default {
  name: 'coriander-app',
  components: { Container }
}
</script>

<style>
  #app {
    background-color: var(--background-main);
    width: 100vw;
    height: 100vh;
    padding: 0 0;
    margin: 0 0;
    border: 0 0;
  }
</style>