import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
 {
   path:'/',
   component:()=>import('../views/home/home.vue'),
   redirect:'/home/quan',
   children:[{
     path:'/home/quan',
     component:()=>import('../views/home/quan/quan.vue')
   },{
     path:'/home/mine',
     component:()=>import('../views/home/mine/mine.vue'),
     children:[{
       path:'/home/mine/my',
       component:()=>import('../views/home/mine/my/my.vue')
     },{
      path:'/home/mine/password',
      component:()=>import('../views/home/mine/password/password.vue')
    },{
      path:'/home/mine/sub',
      component:()=>import('../views/home/mine/sub/sub.vue')
    },{
      path:'/home/mine/talk',
      component:()=>import('../views/home/mine/talk/talk.vue')
    }]
  }]
 },{
   path:'/login',
   component:()=>import('../views/login/login.vue')
 },{
   path:'/reg',
   component:()=>import('../views/reg/reg.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
