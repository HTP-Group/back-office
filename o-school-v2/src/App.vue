<template>
  <div>
    <!-- A conditionner selon si l'utilisateur est un prof ou un parent -->
    <NavBar />
    <TeacherProfile />
    <!-- <ChildrenProfile /> -->
    <!-- <ParentProfile /> -->
    <!-- <Login /> -->
    <!-- <Register /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import NavBar from './components/NavBar.vue';
import TeacherProfile from './components/TeacherProfile.vue';
// import ChildrenProfile from './components/ChildrenProfile.vue';
// import ParentProfile from './components/ParentProfile.vue';
// import Register from './components/Register.vue';
// import Login from './components/Login.vue';

@Component({
  components: {
    // Register,
    NavBar,
    TeacherProfile,
    // ChildrenProfile,
    // ParentProfile,
    // Login,
  },
})
export default class App extends Vue {

}
</script>
