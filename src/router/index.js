import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home'
import Enroll from '@/views/Home/Enroll'
import Professor from '@/views/Home/Professor'
import Tech_Art from '@/views/Home/Tech_Art'
import Contact from '@/views/Home/Contact'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
  

  
    {
      path: '/Enroll',
      name: 'Enroll',
      component: Enroll
    },

    {
      path: '/Professor',
      name: 'Professor',
      component: Professor
    },

    {
      path: '/Tech_Art',
      name: 'Tech_Art',
      component: Tech_Art
    },

    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
  ]
})