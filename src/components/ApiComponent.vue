<template>
  <div class="posts">
    <h2 v-if="!error" style="font-style:italic;">Reading "posts" from a fetch() call:</h2>
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="posts && !error" class="content">
      <li v-for="post in posts" v-bind:key="post.title">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        posts: null,
        error: false
      }
    },
    created () {
      // fetch the data when the view is created and the data is already being observed
      this.fetchData()
    },
    watch: {
      // call the method if the route changes
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        this.loading = true

        fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                  //console.log(response)
                  if( response.ok ) {
                    return response.json()
                  } else {
                    this.error = 'There was a network error obtaining the data!'
                  }
                })
                .then( json => {
                  this.posts = json
                } )
                .then(() => this.loading = false )
                .catch(error => {
                  this.error = 'There was an error getting the data!'
                  console.log(error)
                } )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .posts {
    text-align:left;
  }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
