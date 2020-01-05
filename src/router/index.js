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
      },{
        path:'leapYear',
        component: () => import('../views/tools/LeapYear.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin/Index.vue'),
    children:[{
      path: 'code',
      component: () => import('../views/admin/AddCode.vue')
    }]
  },{
    path: '/test',
    name: 'test',
    component: () => import('../views/test/Index.vue'),
    children:[
      {
        path: 'testLattice',
        component: ()=> import('../views/test/Test.vue')
      },{
        path: 'testCode',
        component: ()=> import('../views/test/TestClock.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
