<template>
  <div class="login-page">
    <div class="login-bloc">
      <div class="login-title">
        <h2 class="login-title-h2">Login</h2>
      </div>
      <div class="login-inputs">
        <v-text-field
          v-model="email"
          label="email"
          prepend-icon="fa-envelope"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="password"
          :append-icon="showPassword ? 'fa-eye-slash' : 'fa-eye'"
          prepend-icon="fa-key"
          :type="showPassword ? 'password' : 'type'"
          @click:append="showPassword = !showPassword"
          @keyup.enter="logIn"
        ></v-text-field>
      </div>
      <div>
        <router-link class="b-link reset-password" to="/reset-password">Reset password</router-link>
      </div>
      <div class="buttons">
        <v-btn class="btn-cancel" @click="cancel()">Cancel</v-btn>
        <v-btn
          class="btn-submit"
          :disabled="!inputChanged"
        >Login</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	components: {},
})
export default class Login extends Vue {
  public email = '';

  public password = '';

  public showPassword = false

  public cancel(): void {
  	this.email = '';
  	this.password = '';
  }

  get inputChanged(): boolean {
  	// const email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  	return (this.email.length >= 8 && this.password.length >= 8);
  }
  // public async loging(): void {
  // }
}
</script>

<style lang="scss">
@import '@/assets/_login.scss';
</style>
