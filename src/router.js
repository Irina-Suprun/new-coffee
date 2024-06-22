import Vue from 'vue';
import VueRouter from 'vue-router';
import Catalogue from './Pages/Catalogue.vue';
import Delivery from './Pages/Delivery.vue';
import Gift from './Pages/Gift.vue';
import About from './Pages/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Catalogue,
  },
  {
    path: '/delivery',
    component: Delivery,
  },
  {
    path: '/gift',
    name: 'Gift-page',
    component: Gift,
  },
  {
    path: '/about',
    component: About,
  },
];
const router = new VueRouter({
  routes,
  linkExactActiveClass: 'app-navigation__current-page',
});

export default router;
