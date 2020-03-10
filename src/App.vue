<template>
  <div id="app">
    <Hero msg="Lil Baby SPA" />

    <nav>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-link to="/api">Go to Fetched Data</router-link>
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
</style>
