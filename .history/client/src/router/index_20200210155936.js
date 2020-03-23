import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index') ,
    children: [
      {
        path: "",
        redirect:"/chats"
      },
      {
        path: '/chats',
        name: 'chats',
        component: () => import('../views/Chats'),
      },
      {
        path: '/contacts',
        name: 'contacts',
        component: () => import('../views/Contacts')
      },
      {
        path: '/discover',
        name: 'discover',
        component: () => import('../views/Discover')
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('../views/Me')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register')
  },
  {
    path: '/moments',
    name: 'moments',
    component: () => import('../views/Moments')
  },
  {
    path: '/publish',
    name: 'publish',
    component: () => import('../views/Publish')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path == "/login" || to.path == "/register") {
    next()
  } else {
    const isLogin = localStorage.wxpyqToken ? true : false;
    if (isLogin) {
      next()
    } else {
      next("/login")
    }
  }
})

export default router
