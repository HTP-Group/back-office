<template>
  <div class="register-page">
    <div class="register-bloc">
      <div class="register-title">
        <h2>Register</h2>
      </div>
      <div class="user-infos">
        <v-text-field
        label="first name"
        append-icon="fa-pen"
        ></v-text-field>
        <v-text-field
        label="last name"
        append-icon="fa-pen"
        ></v-text-field>
        <v-text-field
        type="email"
        label="email"
        append-icon="fa-pen"
        ></v-text-field>
        <v-text-field
        label="password"
        append-icon="fa-pen"
        ></v-text-field>
        <v-text-field
        type="password"
        label="confirmation password"
        append-icon="fa-pen"
        ></v-text-field>
        <v-select
        label="roles"
        v-model="roles"
        :items="roles"
        ></v-select>
      </div>
      <div class="buttons">
        <v-btn
        class="button-cancel"
        >Cancel</v-btn>
        <v-btn
        class="button-submit"
        >Submit</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class Register extends Vue {
  public roles = [
    {
      id: 1,
      role: 'Parent',
    },
    {
      id: 2,
      role: 'Teacher',
    },
  ];
  // get roles() {
  //   return roles;
  // }
}
</script>
<style>
@import '../assets/_register.scss';
</style>
