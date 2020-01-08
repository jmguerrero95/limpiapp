import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/recordar-password',
      name: 'recordar',
      component: () => import(/* webpackChunkName: "recordar" */ './views/RememberPass.vue')
    },
    {
      path: '/test-a',
      name: 'testa',
      component: () => import(/* webpackChunkName: "testa" */ './views/TestCodeA.vue')
    },
    {
      path: '/test-b',
      name: 'testb',
      component: () => import(/* webpackChunkName: "testb" */ './views/TestCodeB.vue')
    },
    {
      path: '/registro',
      name: 'tregistro',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue')
    },
    {
      path: '/panel-usuario',
      name: 'paneluser',
      component: () => import(/* webpackChunkName: "paneluser" */ './views/PanelUser.vue')
    },

    {
      path: '/panel-usuario/perfil',
      name: 'perfil',
      component: () => import(/* webpackChunkName: "profile" */ './views/Perfil.vue')
    },




  ]
})
