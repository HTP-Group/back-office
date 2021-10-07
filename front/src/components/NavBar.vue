<template>
 <!-- A conditionner selon si l'utilisateur est un prof ou un parent -->
  <v-card
    class="mx-auto"
    height="180"
  >
    <v-app-bar
      dark
      class="bar"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>HTP</v-toolbar-title>
      <!-- Admin connexion -->
      <v-tabs v-if="currentUserBis.isAdmin" align-with-title>
                  <v-tab>
            <router-link class="route" to="/usersList-admin">
              {{sectionsAdmin[0]}}
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="route" to="/process-admin">
              {{sectionsAdmin[1]}}
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="route" to="/wiki-admin">
              {{sectionsAdmin[2]}}
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="route" to="/toolkit-admin">
              {{sectionsAdmin[3]}}
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="route" to="/pricing-admin">
              {{sectionsAdmin[4]}}
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="route" to="/values-admin">
              {{sectionsAdmin[5]}}
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="route" to="/procedural-admin">
              {{sectionsAdmin[6]}}
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="route" to="/trainings-admin">
              {{sectionsAdmin[7]}}
            </router-link>
          </v-tab>
          <v-tab @click="logout()">
            <router-link class="route" to="/logout">
              {{sectionsAdmin[8]}}
            </router-link>
          </v-tab>
        </v-tabs>
      <!-- collabs connexion -->
      <v-tabs v-else align-with-title>
          <v-tab>
            <router-link class="route" to="/process">
              {{sections[0]}}
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="route" to="/wiki">
              {{sections[1]}}
            </router-link>
          </v-tab>
          <!-- a conditionner si login / log out -->
          <v-tab>
            <router-link class="route" to="/toolkit">
              {{sections[2]}}
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="route" to="/pricing">
              {{sections[3]}}
            </router-link>
          </v-tab>
          <v-tab>
             <router-link class="route" to="/values">
              {{sections[4]}}
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="route" to="/procedural">
              {{sections[5]}}
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="route" to="/trainings">
              {{sections[6]}}
            </router-link>
          </v-tab>
          <v-tab @click="logout()">
            <router-link class="route" to="/logout">
              {{sections[7]}}
            </router-link>
          </v-tab>
        </v-tabs>
      </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="sections"
          active-class="deep-purple--text text--accent-4"
        >
        <v-list-item>
            <v-list-item-icon>
              <!-- <v-icon size="small">mdi-home</v-icon> -->
            </v-list-item-icon>
            <v-list-item-title>
              {{currentUserBis.isAdmin ? sectionsAdmin[0] : sections[0]}}
            </v-list-item-title>
          </v-list-item>
        <v-list-item>
            <v-list-item-icon>
              <v-icon size="small">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{currentUserBis.isAdmin ? sectionsAdmin[0] : sections[1]}}
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon size="small">fa-chart-line</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{currentUserBis.isAdmin ? sectionsAdmin[0] : sections[2]}}
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon size="small">fa-calendar</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{currentUserBis.isAdmin ? sectionsAdmin[0] : sections[3]}}
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon size="small">fa-power-off</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{currentUserBis.isAdmin ? sectionsAdmin[0] : sections[4]}}
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon size="small">fa-power-off</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{currentUserBis.isAdmin ? sectionsAdmin[0] : sections[5]}}
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon size="small">fa-power-off</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{currentUserBis.isAdmin ? sectionsAdmin[0] : sections[6]}}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import authApi from '../api/auth.api';
// import
import {
	IS_SIGNED,
	JWT_ACCESS,
} from '../constants';

@Component({
	components: {},
})
export default class NavBar extends Vue {
  public drawer = false;

  public sectionsAdmin = [
  	'users-admin',
  	'Process-admin',
  	'wiki-admin',
  	'toolkit-admin',
  	'pricing-admin',
  	'values-admin',
  	'procedural-admin',
  	'trainings-admin',
  	'logout',
  ]

  public sections = [
  	'Process',
  	'wiki',
  	'toolkit',
  	'pricing',
  	'values',
  	'procedural',
  	'trainings',
  	'logout',
  ]

  public currentUserBis = {
  	firstname: '',
  	lastname: '',
  	email: '',
  	password: '',
  	confirmPassword: '',
  	isAdmin: false,
  	city: '',
  	job: '',
  }

  public async mounted() {
  	// récupère le token
  	localStorage.getItem(`${JWT_ACCESS}`);
  	console.log('getItem local storage', localStorage.getItem(`${JWT_ACCESS}`));
  	const user = await authApi.user();
  	if (user.isAdmin) {
  		this.currentUserBis.isAdmin = true;
  	} else {
  		this.currentUserBis.isAdmin = false;
  	}
  	// call api get_me()
  	// const response = await profileApi.getMe();
  	// this.currentUserBis = { ...response };
  	// console.log(this.currentUserBis);
  	// console.log(response);
  }

  public async logout() {
  	try {
  		console.log('logout');
  		localStorage.delete(IS_SIGNED);
  		localStorage.delete(JWT_ACCESS);
  		this.$router.replace('/');

  		return window.location.replace('/');
  	} catch (err) {
  		console.error(err);
  	}
  	return window.location.replace('/');
  }
}
</script>

<style lang="scss">
@import './src/assets/_navBar.scss';
</style>
