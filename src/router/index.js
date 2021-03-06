import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

const routes = [
  {
    path: '',
    component: () => import('../views/index/Index.vue'),
    children:[
      {
        path:'',
        component: () => import('../views/index/DateTools.vue')
      },{
        path:'dateTools',
        component: () => import('../views/index/DateTools.vue'),
      },{
        path:'jsonTools',
        component: () => import('../views/index/JsonTools.vue'),
      },
      
      
      {
        path:'dateTool',
        component: () => import('../views/tools/DateTools.vue')
      },{
        path:'leapYear',
        component:() => import('../views/tools/LeapYear.vue')
      },{
        path:'jsonFormat',
        component: () => import('../views/tools/JsonFormat.vue')
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
    },{
      path: 'addDocument',
      component: () => import('../views/admin/addDocument.vue')
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
  },{
    path: '/version',
    name: 'version',
    component: () => import('../views/admin/VersionInfo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
