import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/index/Index.vue'),
    children:[
      {
        path:'/',
        component: () => import('../views/index/Main.vue')
      },{
        path:'dateTools',
        component: () => import('../views/tools/DateTools.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/test',
    name: 'test',
    component: () => import('../views/test/Index.vue'),
    children:[
      {
        path: 'testLattice',
        component: ()=> import('../views/test/Test.vue')
      },{
        path: 'testClock',
        component: ()=> import('../views/test/TestClock.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
