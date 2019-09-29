import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',/* 首页 */
      name: 'home',
      component: Home
    },
    {
      path: '/SelectWacth',/* 选表 */
      name: 'SelectWacth',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/SelectWacth.vue')
    },
    {
      path: '/Cart',/* 购物车 */
      name: 'Cart',
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/User',/* 我的 */
      name : 'User',
      component: () => import('./views/User.vue')
    },
    {
      path: '/list-man',/* 男士商品列表 */
      name : 'list-man',
      component: () => import('./views/manGoodsList.vue')
    },
    {
      path: '/goods/01',/* 男士手表详情页 */
      name : 'goods',
      component: () => import('./views/manDetail.vue')
    },
    {
      path: '/Cart/01',/* 空购物车 */
      name : 'Cart01',
      component: () => import('./views/CartProduct.vue')
    },
    {
      path: '/calculate',/* 空购物车 */
      name : 'calculate',
      component: () => import('./views/calculate.vue')
    },
    // lhp添加
    {
      path: '/Login',
      name: 'Login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: () => import('./views/Setting.vue')
    },
    {
      path: '/Address',
      name: 'Address',
      component: () => import('./views/Address.vue')
    },
    {
      path: '/Add',
      name: 'Add',
      component: () => import('./views/Add.vue')
    },
    {
      path: '/EditAddress',
      name: 'EditAddress',
      component: () => import('./views/EditAddress.vue')
    },
	
  ]
})
