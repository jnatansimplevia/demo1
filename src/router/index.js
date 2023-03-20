import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Site1View from '../views/Site1View.vue'
import Site3View from '../views/Site3View.vue'
import Site4View from '../views/Site4View.vue'
import Site5View from '../views/Site5View.vue'
import Site6View from '../views/Site6View.vue'
import Site7View from '../views/Site7View.vue'
import Site8View from '../views/Site8View.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/site1',
      name: 'site1',
      component: Site1View
    },
    {
      path: '/site3',
      name: 'site3',
      component: Site3View
    },
    {
      path: '/site4',
      name: 'site4',
      component: Site4View
    },
    {
      path: '/site5',
      name: 'site5',
      component: Site5View
    },
    {
      path: '/site6',
      name: 'site6',
      component: Site6View
    },
    {
      path: '/site7',
      name: 'site7',
      component: Site7View
    },
    {
      path: '/site8',
      name: 'site8',
      component: Site8View
    },
    
  ]
})

export default router
