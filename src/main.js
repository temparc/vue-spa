import Vue from 'vue'
import App from './App.vue'
import Foo from './components/FooComponent.vue'
import Home from './components/HomeComponent.vue'
import Bar from './components/BarComponent.vue'
import VueRouter from 'vue-router'
import ApiComponent from './components/ApiComponent'
import PostComponent from './components/PostComponent'


// vue configs
Vue.config.productionTip = false
Vue.use(VueRouter)

// routes
const routes = [
  {
    path: '/',
    component: Home,
    meta : {
      title: 'Home Page'
    }
  },
  {
    path: '/foo',
    component: Foo,
    meta : {
      title: 'Foo Page'
    }
  },
  {
    path: '/bar',
    component: Bar,
    meta : {
      title: 'Bar Page'
    }
  },
  {
    path: '/api',
    component: ApiComponent,
    meta : {
      title: 'API Page'
    }
  },
  {
    path: '/post',
    component: PostComponent,
    meta : {
      title: 'API Page'
    }
  },
]

// router config
const router = new VueRouter({
  mode: 'history',
  routes: routes
})

// set route meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

// instantiate vue
new Vue({
  router,
  render: h => h (App)
}).$mount('#app')
