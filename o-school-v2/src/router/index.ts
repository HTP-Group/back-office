import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Register from '../views/auth/Register.vue';
import Login from '../views/auth/Login.vue';
import ParentProfile from '../components/profile/ParentProfile.vue';
import ChildrenProfile from '../components/profile/ChildrenProfile.vue';
import TeacherProfile from '../components/profile/TeacherProfile.vue';
import StudentProfile from '../components/profile/StudentProfile.vue';
import Trombinoscope from '../components/Trombinoscope.vue';
import Home from '../views/Home.vue';
import SchoolLife from '../components/SchoolLife.vue';
import TeacherDashboard from '../components/dashboard/TeacherDashboard.vue';
import ParentDashboard from '../components/dashboard/ParentDashboard.vue';
// import TeacherSchedule from '../components/scheduled/TeacherScheduled.vue';

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
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/parent-profile',
    name: 'ParentProfile',
    component: ParentProfile,
  },
  {
    path: '/student-profile',
    name: 'StudentProfile',
    component: StudentProfile,
  },
  // {
  //   path: '/parent-profile/:id/children/:id',
  //   name: 'ChildrenProfile',
  //   component: ChildrenProfile,
  // },
  {
    path: '/children-profile',
    name: 'ChildrenProfile',
    component: ChildrenProfile,
  },
  {
    path: '/teacher-profile',
    name: 'TeacherProfile',
    component: TeacherProfile,
  },
  {
    path: '/teacher-dashboard',
    name: 'Dashboard',
    component: TeacherDashboard,
  },
  {
    path: '/parent-dashboard',
    name: 'Dashboard',
    component: ParentDashboard,
  },
  {
    path: '/school-life',
    name: 'SchoolLife',
    component: SchoolLife,
  },
  {
    path: '/trombinoscope',
    name: 'Trombinoscope',
    component: Trombinoscope,
  },
  // {
  //   path: '/teacher-schedule',
  //   name: 'TeacherSchedule',
  //   component: TeacherSchedule,
  // },
  // {
  //   path: '/parent-schedule',
  //   name: 'ParentSchedule',
  //   component: ParentSchedule,
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
