import { createRouter, createWebHashHistory } from 'vue-router';
import Cv from '../views/Cv.vue';
// import Certificates from '../views/Certificates.vue';

const routes = [
  {
    path: '/',
    name: 'Cv',
    component: Cv,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: () => import('../views/Certificates.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
