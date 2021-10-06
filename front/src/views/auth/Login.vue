<template>
  <div class="login-page">
    <div class="login-bloc">
      <div class="login-title">
        <h3 class="login-title-h2">Login</h3>
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
      <div class="redirection-links">
        <div class="register-redirect">
          <router-link class="b-link" to="/register">I don't have an account</router-link>
        </div>
        <div class="reset-password">
          <router-link class="b-link" to="/reset-password">Reset password</router-link>
        </div>
      </div>
      <div class="buttons">
        <v-btn class="btn-cancel" @click="cancel()">Cancel</v-btn>
        <v-btn
          class="btn-submit"
          :disabled="!inputChanged"
          @click="submit()"
        >Login</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import authApi from '../../api/auth.api';
import {
	IS_SIGNED,
	JWT_ACCESS,
} from '../../constants';

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

  public async submit() {
  	console.log('test');
  	const response = await authApi.login({
  		email: this.email,
  		password: this.password,
  	});
  	// on stock le token dans le localStorage pour communiquer avec l'app.
  	localStorage.setItem(`${JWT_ACCESS}`, response);
  	// pour récupérer IS_SIGNED avec localStorage.getItem('IS_SIGNED')
  	localStorage.setItem(`${IS_SIGNED}`, 'true');

  	console.log(response, 'success');

  	this.$router.replace('/profile');
  }
  // public async loging(): void {
  // }
}
</script>

<style lang="scss">
@import '@/assets/_login.scss';
</style>
