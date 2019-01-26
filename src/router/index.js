import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
// import About from '@/components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      default: true,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '@/components/About.vue'),
    },
    {
      path: '/lazy',
      name: 'Lazy',
      component: () => import(/* webpackChunkName: "lazy" */ '@/components/Lazy.vue'),
    },
    {
      path: '*',
      redirect: { name: 'Hello' },
    },
  ],
});
