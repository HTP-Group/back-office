<template>
  <div>
    <!-- A conditionner selon si l'utilisateur est logIn ou logOut -->
    <div v-if="isSigned">
      <h1>Log out</h1>
      <NavBar />
      <Register />
      <Login />
    </div>
    <div v-if="!isSigned">
      <NavBar />
      <router-view />
    </div>
    <!-- <Trombinoscope /> -->
    <!-- <Login /> -->
    <!-- <Register /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import NavBar from './components/NavBar.vue';
// import Trombinoscope from './components/Trombinoscope.vue';
// import Register from './components/Register.vue';
// import Login from './components/Login.vue';
import Profile from './views/profile/Profile.vue';

@Component({
  components: {
    Profile,
    NavBar,
    // Register,
    // Trombinoscope,
    // Login,
  },
})
export default class App extends Vue {
  public isSigned = false;

  // private async created() {
  // conditions
  //  this.isSigned = LocalStorageService.get(IS_SIGNED) === 'true'
  // }
}
</script>
<style scoped>
</style>
