import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
// Auth Pages
// import Register from '../views/auth/Register.vue';
import Login from '../views/auth/Login.vue';

import Home from '../views/Home.vue';
// Admin Pages

// Pricing Admin Pages
import PricingAdmin from '../components/admin/Pricing/Pricing-admin.vue';
import SocialPricingAdmin from '../components/admin/Pricing/SocialPricingAdmin.vue';

// Procedural Admin Pages
import ProceduralAdmin from '../components/admin/Procedural/Procedural-admin.vue';
import ProcessAdmin from '../components/admin/Process/Process-admin.vue';
import ToolkitAdmin from '../components/admin/Toolkit/Toolkit-admin.vue';
import TrainingsAdmin from '../components/admin/Trainings/Trainings-admin.vue';
import ValuesAdmin from '../components/admin/Values/Values-admin.vue';
import WikiAdmin from '../components/admin/Wiki/Wiki-admin.vue';
import Profile from '../views/profile/Profile.vue';
import UsersAdmin from '../components/admin/Users-admin.vue';
import UsersListAdmin from '../components/admin/Users/UsersList-admin.vue';
// collab pages
import Values from '../components/collab/Values.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/home',
		name: 'Home',
		component: Home,
	},
	{
	  path: '/users-admin',
	  name: 'UsersAdmin',
	  component: UsersAdmin,
	},
	{
	  path: '/usersList-admin',
	  name: 'UsersListAdmin',
	  component: UsersListAdmin,
	},
	{
		path: '/',
		name: 'Login',
		component: Login,
	},
	{
		path: '/pricing-admin',
		name: 'PricingAdmin',
		component: PricingAdmin,
	},
	{
		path: '/procedural-admin',
		name: 'ProceduralAdmin',
		component: ProceduralAdmin,
	},
	{
		path: '/process-admin',
		name: 'ProcessAdmin',
		component: ProcessAdmin,
	},
	{
		path: '/toolkit-admin',
		name: 'ToolkitAdmin',
		component: ToolkitAdmin,
	},
	{
		path: '/trainings-admin',
		name: 'TrainingsAdmin',
		component: TrainingsAdmin,
	},
	{
		path: '/values-admin',
		name: 'ValuesAdmin',
		component: ValuesAdmin,
	},
	{
		path: '/wiki-admin',
		name: 'WikiAdmin',
		component: WikiAdmin,
	},
	{
		path: '/values',
		name: 'Values',
		component: Values,
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile,
	},
	{
		path: '/social-pricing-admin',
		name: 'SocialPricingAdmin',
		component: SocialPricingAdmin,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
