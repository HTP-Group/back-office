import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Register from '../views/Auth/Register.vue';
import Login from '../views/Auth/Login.vue';
import ParentProfile from '../views/parent/Profile/ParentProfile.vue';
import ChildrenProfile from '../components/ChildrenProfile.vue';
import TeacherProfile from '../views/teacher/TeacherProfile.vue';
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
    path: '/parent/:id',
    name: 'ParentProfile',
    component: ParentProfile,
  },
  {
    path: '/profile/:id/children/:id',
    name: 'ChildrenProfile',
    component: ChildrenProfile,
  },
  {
    path: '/teacher/:id',
    name: 'TeacherProfile',
    component: TeacherProfile,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
