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
          v-model="userBis.confirmPassword"
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
        <v-container fluid>
          <v-radio-group
            v-model="isParent"
            row
          >
            <v-radio
              :label="roles[0]"
              :value="roles[0]"
              active-class
            ></v-radio>
            <v-radio
              :label="roles[1]"
              :value="roles[1]"
            ></v-radio>
          </v-radio-group>
        </v-container>
      </div>
      <div class="buttons">
        <v-btn
          class="button-cancel"
          @click="cancel()"
        >Cancel</v-btn>
        <v-btn
          class="button-submit"
          :disabled="!inputHasChanged"
          @click="submit()"
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
    confirmPassword: '',
    isParent: false,
  }
  // public userBis = {
  //   firstname: 'Thib',
  //   lastname: 'Dec',
  //   email: 'thib@gmail.com',
  //   password: '123456789',
  //   confirmPassword: '123456789',
  //   isParent: 'parent',
  // }

  public hideNewPassword = false

  public hideNewConfirmPassword = false

  public ableSubmitBtn = true

  public roles = ['Parent', 'Teacher'];

  public isParent = true;

  get inputHasChanged(): boolean {
    let data = false;
    if (this.userBis.firstname !== ''
        && this.userBis.lastname !== ''
        && this.userBis.email !== ''
        && this.userBis.password !== ''
        && this.userBis.confirmPassword !== ''
        && this.userBis.isParent !== false
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
      confirmPassword: '',
      isParent: false,
    };
  }
}
</script>
<style lang="scss">
// @import '@/src/assets/_register.scss';
</style>
