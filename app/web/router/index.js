import Vue from 'vue';
import Router from 'vue-router';
import routes from './route'

Vue.use(Router);

const router = new Router({
  routes,
  mode: 'hash',
  linkActiveClass: 'active'
});


export default router;