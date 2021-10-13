<template>
  <div>
    <!-- A conditionner selon si l'utilisateur est logIn ou logOut -->
    <div v-if="isSigned">
      <h1>Log out</h1>
      <NavBar />
      <router-view />
    </div>
    <div v-if="!isSigned">
      <NavBar />
      <Login />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import NavBar from './components/NavBar.vue';

@Component({
	components: {
		NavBar,
	},
})
export default class App extends Vue {
  public isSigned = false;
}
</script>
<style scoped>
</style>
