import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    redirect: { name: 'Properties' },
  },
  {
    path: '/facts',
    name: 'API',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/properties',
    name: 'Properties',
    component: Home,
  },
  {
    path: '/property/:id',
    name: 'PropertyDetails',
    component: () => import('../views/PropertyDetails.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
