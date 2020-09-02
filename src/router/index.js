import { createRouter, createWebHashHistory } from 'vue-router';
import Cv from '../views/Cv.vue';

const routes = [
  {
    path: '/',
    name: 'Cv',
    component: Cv
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
