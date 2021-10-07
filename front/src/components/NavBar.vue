<template>
 <!-- A conditionner selon si l'utilisateur est un prof ou un parent -->
  <v-card
    class="mx-auto"
    height="70"
  >
    <v-app-bar
      dark
      class="bar"
    >
      <v-toolbar-title>
        <img src="./../assets/images/logo-HTP.svg" alt="logo HTP" class="img"/>
      </v-toolbar-title>
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
  	if (user.isAdmin && localStorage.getItem(IS_SIGNED)) {
  		this.currentUserBis.isAdmin = true;
  	} else {
  		this.currentUserBis.isAdmin = false;
  	}
  }

  public async logout() {
  	try {
  		console.log('logout');
  		localStorage.delete(IS_SIGNED);
  		localStorage.delete(JWT_ACCESS);

  		return window.location.replace('/');
  	} catch (err) {
  		console.error(err);
  	}
  	this.currentUserBis.isAdmin = false;
  	return window.location.replace('/');
  }
}
</script>

<style lang="scss">
@import './src/assets/_navBar.scss';
</style>
