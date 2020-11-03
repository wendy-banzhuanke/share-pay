import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('@/pages/activity.vue'),
    meta: {
      title: '活动页',
    },
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('@/pages/pay.vue'),
    meta: {
      title: '充值页',
    },
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
