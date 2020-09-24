import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/block',
    name: 'Block',
    component: () => import('../../src/views/showBlocks.vue'),
  },
  {
    path: '/transaction',
    name: 'Block',
    component: () => import('../../src/views/showTransaction.vue'),
  },
  {
    path: '/block/info',
    name: 'Info',
    component: () => import('../../src/components/infoTable.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
