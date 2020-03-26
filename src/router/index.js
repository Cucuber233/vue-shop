import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import profileInfo from './profile/profile'

const profile = () => import('../views/profile')
const home = () => import('../views/home')
const cart = () => import('../views/cart')
const category = () => import('../views/category')
const search = () => import('../components/search/search')

const goodsItem = () => import('../components/tab_control/tabControl')

const new_ = () => import('../components/category/new')
const computer = () => import('../components/category/computer')
const sell = () => import('../components/category/sell')
const tv = () => import('../components/category/tv')
const sum = () => import('../components/category/sum')
const yes = () => import('../components/category/yes')


//重写push
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
      children: [
        {
          path: '',
          redirect: 'goodsItem'
        },
        {
          path: 'goodsItem',
          component: goodsItem
        }
      ]
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
            path: '', 
            redirect: 'new'
          },
          {
            path: 'new',
            component: new_
          },
          {
            path: 'computer',
            component: computer
          },
          {
            path: 'sell',
            component: sell
          },
          {
            path: 'tv',
            component: tv
          },
          {
            path: 'sum',
            component: sum
          },
          {
            path: 'yes',
            component: yes
          },
      ]
  },
  {
    path: '/profile',
    component: profile,
  },
  //我的
 ...profileInfo,
 //商品详情
  {
    name: '商品详情',
    path: '/detail',
    component: () => import('../views/detail/index')
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
