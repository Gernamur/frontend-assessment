import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GnomeList from '../views/GnomeList.vue'
import GomeDetails from '../views/GnomeDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'GnomeList' }
  },
  {
    path: '/gnomes',
    name: 'GnomeList',
    component: GnomeList
  },
  {
    path: '/gnomes/:id',
    name: 'GnomeDetails',
    component: GomeDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
