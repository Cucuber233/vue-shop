import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const profile = () => import('../views/profile')
const home = () => import('../views/home')
const cart = () => import('../views/cart')
const category = () => import('../views/category')
const search = () => import('../components/search/search')

const new_ = () => import('../components/category/new')
const computer = () => import('../components/category/computer')
const sell = () => import('../components/category/sell')
const tv = () => import('../components/category/tv')
const sum = () => import('../components/category/sum')
const yes = () => import('../components/category/yes')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/category',
    component: category,
    children: [
      {
        path: '/new',
        component: new_
      },
      {
        path: '/computer',
        component: computer
      },
      {
        path: '/sell',
        component: sell
      },
      {
        path: '/tv',
        component: tv
      },
      {
        path: '/sum',
        component: sum
      },
      {
        path: '/yes',
        component: yes
      },
    ]
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/home/search',
    component: search
  }
]

const router = new VueRouter({
  mode: 'history',
 // base: process.env.BASE_URL,
  routes
})

export default router
