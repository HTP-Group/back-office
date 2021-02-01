import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Register from '../views/Auth/Register.vue';
import Login from '../views/Auth/Login.vue';
import ParentProfile from '../views/Profile/ParentProfile.vue';
import ChildrenProfile from '../views/Profile/ChildrenProfile.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/profile/:id',
    name: 'ParentProfile',
    component: ParentProfile,
  },
  {
    path: '/profile/:id/children/:id',
    name: 'ChildrenProfile',
    component: ChildrenProfile,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
