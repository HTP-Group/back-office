<template>
  <v-card>
    <v-avatar class="avatar">
      <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
    </v-avatar>
    <v-card-title>
      first name last name
    </v-card-title>
    <v-card-subtitle>
      3rd grade A
    </v-card-subtitle>
    <v-card-text>
      <router-link to="/student-profile/:id" class="b-link">
      Profile
    </router-link>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class ProfileStudent extends Vue {

}
</script>

<style lang="scss" scoped>
.v-card {
  width: 100%;
  border-left: 4px solid rgb(111, 104, 237, 0.8);
}
.b-link {
  font-size: medium;
  color: rgb(111, 104, 237, 0.7);
}
</style>
