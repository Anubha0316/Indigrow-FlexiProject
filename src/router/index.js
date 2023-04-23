import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import SignUpEnt from '../views/SignUpent.vue'
import SignupInv from '../views/SignUpinv.vue'
import Event from '../views/Event.vue'
import AboutUs from '../views/AboutUs.vue'
import Profile from '../views/Profile.vue'
import Chat from '../views/Chat.vue'
import SignUp from '../views/SignUp.vue'
import LoginEnt from '../views/LoginEnt.vue'
import LoginInv from '../views/LoginInv.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signupent',
    name: 'signupent',
    component: SignUpEnt
  },
  {
    path: '/signupinv',
    name: 'signupinv',
    component: SignupInv
  },
  {
    path: '/event',
    name: 'event',
    component: Event
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: AboutUs
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/loginent',
    name: 'loginent',
    component: LoginEnt
  },
  {
    path: '/logininv',
    name: 'logininv',
    component: LoginInv
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
