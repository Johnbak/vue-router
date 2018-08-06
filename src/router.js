import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },{
      path : '/contact',
      name : 'max',
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    },{
      path:'/user/:name',
      name: 'user',
      component : User,
      children :[
        {path:'profile',name:'profile', component: () => import('./views/Profile.vue')},
        {path:'setting',name:'setting', component: () => import('./views/Setting.vue')}
      ]
    }

  ]
})
