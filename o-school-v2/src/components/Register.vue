<template>
  <div class="register-page">
    <div class="register-bloc">
      <div class="register-title">
        <h2 class="register-title-h2">Register</h2>
      </div>
      <div class="user-infos">
        <v-text-field
          v-model="userBis.firstname"
          label="first name"
          append-icon="fa-pen"
          class="user-input"
        ></v-text-field>
        <v-text-field
          v-model="userBis.lastname"
          label="last name"
          append-icon="fa-pen"
          class="user-input"
        ></v-text-field>
        <v-text-field
          v-model="userBis.email"
          type="email"
          label="email"
          append-icon="fa-pen"
          class="user-input"
        ></v-text-field>
        <v-text-field
          v-model="userBis.password"
          :type="hideNewPassword ? 'password' : 'type'"
          label="password"
          :append-icon="hideNewPassword ? 'fa-eye-slash' : 'fa-eye'"
          class="user-input"
          @click:append="hideNewPassword = !hideNewPassword"
        ></v-text-field>
        <v-text-field
          v-model="userBis.confirmPpassword"
          :type="hideNewConfirmPassword ? 'password' : 'type'"
          label="confirmation"
          :append-icon="hideNewConfirmPassword ? 'fa-eye-slash' : 'fa-eye'"
          class="user-input"
          @click:append="hideNewConfirmPassword = !hideNewConfirmPassword"
        ></v-text-field>
        <v-select
          label="roles"
          v-model="userBis.role"
          :items="items"
          :readonly="false"
        ></v-select>
      </div>
      <div class="buttons">
        <v-btn
          class="button-cancel"
          @click="cancel()"
        >Cancel</v-btn>
        <v-btn
          class="button-submit"
          :disabled="!inputHasChanged"
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
  public userBis = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPpassword: '',
    role: '',
  }
  // public userBis = {
  //   firstname: 'Thib',
  //   lastname: 'Dec',
  //   email: 'thib@gmail.com',
  //   password: '123456789',
  //   confirmPpassword: '123456789',
  //   role: 'parent',
  // }

  public hideNewPassword = false

  public hideNewConfirmPassword = false

  public ableSubmitBtn = true

  public items = ['Parent', 'Teacher'];

  get inputHasChanged(): boolean {
    let data = false;
    if (this.userBis.firstname !== ''
        && this.userBis.lastname !== ''
        && this.userBis.email !== ''
        && this.userBis.password !== ''
        && this.userBis.confirmPpassword !== ''
        // && this.userBis.role !== ''
    ) {
      data = true;
    }
    return data;
  }

  cancel() {
    this.userBis = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPpassword: '',
      role: '',
    };
  }
}
</script>
<style>
@import '../assets/_register.scss';
</style>
