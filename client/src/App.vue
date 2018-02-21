<template>
  <div id="app">
      <app-header></app-header>

    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
        <app-footer> </app-footer>

  </div>

</template>

<script>
import header from "./components/header.vue";
import footer from "./components/footer.vue";
export default {
  components: {
    "app-header": header,
    "app-footer": footer
  },
  name: "App"
};
</script>

<style>
      @import './assets/css/style.css',
      @import './assets/css/bootstrap.min.css',
      @import "./assets/css/isotope.css";


/* #app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
/* }  */
	</style>
