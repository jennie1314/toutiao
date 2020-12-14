import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../pages/Home'
import Login from '../pages/Login'


const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },{
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
