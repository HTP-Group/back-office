import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
// Auth Pages
import Login from '../views/auth/Login.vue';

import Home from '../views/Home.vue';
// Admin Pages
// Pricing admin
import PricingAdmin from '../components/admin/Pricing/Pricing-admin.vue';
import AccountabilityAdmin from '../components/admin/Pricing/Accountability.vue';
import SocialPricingAdmin from '../components/admin/Pricing/SocialPricingAdmin.vue';
import LegalPricingAdmin from '../components/admin/Pricing/Legal.vue';
import FiscalPricingAdmin from '../components/admin/Pricing/Fiscal.vue';
import ConsultingPricingAdmin from '../components/admin/Pricing/Consulting.vue';

import ProceduralAdmin from '../components/admin/Procedural-admin.vue';
import ProcessAdmin from '../components/admin/Process-admin.vue';
import ToolkitAdmin from '../components/admin/Toolkit-admin.vue';
import TrainingsAdmin from '../components/admin/Trainings-admin.vue';
import ValuesAdmin from '../components/admin/Values-admin.vue';
import WikiAdmin from '../components/admin/Wiki-admin.vue';
import UsersAdmin from '../components/admin/Users-admin.vue';

// USERS
import UsersListAdmin from '../components/admin/Users/UsersList-admin.vue';
import UsersList from '../components/admin/Users/UsersList.vue';

// Values pages
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
		path: '/usersList',
		name: 'UsersList',
		component: UsersList,
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
		path: '/comptabilite-pricing-admin',
		name: 'AccountabilityAdmin',
		component: AccountabilityAdmin,
	},
	{
		path: '/social-pricing-admin',
		name: 'SocialPricingAdmin',
		component: SocialPricingAdmin,
	},
	{
		path: '/fiscal-pricing-admin',
		name: 'FiscalPricingAdmin',
		component: FiscalPricingAdmin,
	},
	{
		path: '/legal-pricing-admin',
		name: 'LegalPricingAdmin',
		component: LegalPricingAdmin,
	},
	{
		path: '/consulting-pricing-admin',
		name: 'ConsultingPricingAdmin',
		component: ConsultingPricingAdmin,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
