<template>
  <div>
    <!-- A conditionner selon si l'utilisateur est un prof ou un parent -->
    <NavBar />
    <!-- <Trombinoscope /> -->
    <Profile />
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
    // Register,
    NavBar,
    // Trombinoscope,
    // Login,
  },
})
export default class App extends Vue {

}
</script>
<style scoped>
</style>
