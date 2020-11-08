import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Ecommerce from '../views/Ecommerce/ListProduct'
import DetailProduct from '../views/Ecommerce/DetailProduct'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/ecommerce',
    name: 'ecommerce',
    component: Ecommerce,
  },
  {
    path: '/ecommerce/:id',
    name: 'DetailProduct',
    component: DetailProduct
  },
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})