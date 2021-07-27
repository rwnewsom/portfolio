import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutVue from '../views/AboutVue.vue'
import Book from '../views/Book.vue'
import AboutMe from '../views/AboutMe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aboutvue',
    name: 'AboutVue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutVue
  },
  {
    path: '/book/:id',
    name: 'book',
    component: Book
  },
  {
    path:'/aboutme',
    name: 'AboutMe',
    component: AboutMe
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
