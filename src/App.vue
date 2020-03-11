<template>
  <div id="app">
    <Hero msg="Lil Baby SPA" />

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/foo">Foo</router-link>
      <router-link to="/bar">Bar</router-link>
      <router-link to="/api">Get</router-link>
      <router-link to="/post">Post</router-link>

    </nav>

    <br>
    <router-view></router-view>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'

export default {
  name: 'App',
  components: {
    Hero
  },
  computed: {
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 60px;
}
  nav a {
    padding: 1rem;
  }

  img {
    max-width: 250px;
  }
  .error {
    color: red;
  }
  
  input, textarea, button {
    display: block;
    width: 100%;
    max-width: 100%;
    border: 1px solid #777;
    margin: 1rem 0;
    font-size: 1.1rem;
    padding: 1rem;
    box-sizing: border-box;
  }
  
  button {
    color: #fff;
    background: #777;
  }
</style>
