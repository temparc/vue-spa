<template>
    <div class="post">
        <div class="col">
            <h2 v-if="!error" style="font-style:italic;">Create a post</h2>
            <div v-if="error" class="error">{{ error }}</div>
            <div v-if="successMsg" class="success">{{ successMsg }}</div>
            <div v-if="loading" class="loading">Loading...</div>
            
            <div v-if="!successMsg">
                <input type="text" name="title" placeholder="Title" v-model="title">
                <textarea placeholder="Content" name="content" v-model="content"></textarea>
                <input type="hidden" value="1" name="userId" v-model="userId">
                <button type="submit" v-on:click="postData()">Save</button>
            </div>
            
        </div>
        
        <div class="col">
            <h2>Preview</h2>
            <h1 v-if="title">{{ title }}</h1>
            <div v-if="content">{{ content }}</div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        post: null,
        error: false,
        successMsg : '',
        title : '',
        content : '',
        userId : null
      }
    },
    created () {
      // fetch the data when the view is created and the data is already being observed
    },
    watch: {
      // call the method if the route changes
      '$route': 'fetchData'
    },
    methods: {
      postData () {
        this.loading = true

        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: this.title,
            body: this.content,
            userId: this.userId
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then(function(response){
            //console.log(response)
            if( response.ok ) {
              return response.json()
            } else {
              this.error = 'There was a network error obtaining the data!'
            }
          })
          .then( json => {
            this.post = json
            this.successMsg = 'Post created!'
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
    .post {
        display: flex;
        flex-wrap: wrap;
    }
    
    .col {
        padding: 1rem;
        flex: 1 1 calc(50% - 2rem);
    }
</style>
