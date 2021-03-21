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
      <v-toolbar-title>O'school</v-toolbar-title>
      <!-- ParentCase connexion -->
      <v-tabs v-if="currentUser.isParent === true" align-with-title>
          <v-tab>
            <router-link class="route" to="/school-life">
              {{sections[0]}}
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="route" to="/parent-profile">
              {{sections[1]}}
            </router-link>
          </v-tab>
          <!-- a conditionner si login / log out -->
          <v-tab>
            <router-link class="route" to="/dashboard">
              {{sections[2]}}
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="route" to="/scheduled">
              {{sections[3]}}
            </router-link>
          </v-tab>
          <v-tab><router-link class="route" to="/logout">{{sections[4]}}</router-link></v-tab>
        </v-tabs>
      <!-- teacherCase connexion -->
      <v-tabs v-if="currentUser.isParent === false" align-with-title>
          <v-tab>
            <router-link class="route" to="/school-life">
              {{sections[0]}}
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="route" to="/teacher-profile">
              {{sections[1]}}
            </router-link>
          </v-tab>
          <!-- a conditionner si login / log out -->
          <v-tab>
            <router-link class="route" to="/dashboard">
              {{sections[2]}}
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="route" to="/scheduled">
              {{sections[3]}}
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="route" to="/logout">
              {{sections[4]}}
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
            <v-list-item-title>{{sections[0]}}</v-list-item-title>
          </v-list-item>
        <v-list-item>
            <v-list-item-icon>
              <v-icon size="small">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{sections[1]}}</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon size="small">fa-chart-line</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{sections[2]}}</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon size="small">fa-power-off</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{sections[3]}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import
@Component({
  components: {},
})
export default class NavBar extends Vue {
  // @Prop() public openParentProfil!: boolean;

  public drawer = false;

  public sections = [
    'School life',
    'Profile',
    'Dashboard',
    'Scheduled',
    'Logout',
  ]

  // parent Case; isParent = true
  // teacherCase
  public currentUser = {
    isParent: false,
  }
}
</script>

<style lang="scss">
@import './src/assets/_navBar.scss';
</style>
